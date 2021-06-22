import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth, firebase } from '../services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextProps {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps){
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscibe = auth.onAuthStateChanged(user => {
      if(user){
        const { displayName, photoURL, uid } = user;

        if(!displayName || !photoURL){
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    })

    return () => {
      unsubscibe();
    }
  },[]);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if(result.user){
      const { displayName, photoURL, uid } = result.user;

      if(!displayName || !photoURL){
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle}}>
      {children}
    </AuthContext.Provider>
  );
}