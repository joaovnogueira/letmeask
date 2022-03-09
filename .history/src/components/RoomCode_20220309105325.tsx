import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}


export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className="room-code" on>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span> Sala #13156168616</span>
        </button>
    )
}