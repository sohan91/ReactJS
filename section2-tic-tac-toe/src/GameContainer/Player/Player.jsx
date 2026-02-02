
import {useState} from'react';
export default function Player({player,symbol,isActive}) {

    let [btnAction,setBtnAction] = useState(false);
    let [playerName,setPlayerName] = useState(player);
    let span =  <span>{playerName}</span>;
    function nameHandler()
    {
          setBtnAction(prev=>!prev);
    }
    function editPlayerName(event)
    {
        let name = event.target.value;
        setPlayerName(name !== " " ? name :player);
    }
    if(btnAction)
    {
        span = <input type="text" value={playerName} onChange={editPlayerName} />
    }
  return (
    <li className="player-container" id={isActive ? "active" :undefined}>
     {span}
      <span className='symbol'>{symbol}</span>
      <button class="span-btn"  onClick={nameHandler}>{btnAction?"Save":"Edit"}</button>
    </li>
  );
}
