import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [entityName, setEntityName] = useState(null);

  function handleClick() {
    setEntityName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { entityName ?? "unknown entity"}</h2>
      <p>
        <input 
          ref={playerName}
          type="text" 
          />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
