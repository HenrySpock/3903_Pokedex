import React from 'react';

function Pokecard(props) {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  
  return (
    <div className="Pokecard">
      <h2>{props.name}</h2>
      <img src={imgSrc} alt={props.name} />
      <div>Type: {props.type}</div>
      <div>EXP: {props.base_experience}</div>
    </div>
  );
}

export default Pokecard;
