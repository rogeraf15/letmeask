import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode({ code }: RoomCodeProps){
  function copyRoomCodeToClipoard(){
    navigator.clipboard.writeText(code)
  }

  return(
    <button id="room-code" onClick={copyRoomCodeToClipoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  )
}