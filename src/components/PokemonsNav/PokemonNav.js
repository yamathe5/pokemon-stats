import React from "react";
import textFormater from "../../utilis/textFormater";
import "./PokemonsNav.scss";

export default function PokemonNav({
  pokemons,
  setPokemon,
  classes,
  setPokemon2,
}) {
  function handleSetPokemon(pokemon) {
    console.log(classes);
    if (classes === "grid4-5") {
      setPokemon2(pokemon);
    } else {
      setPokemon(pokemon);
    }
  }

  return (
    <div className={`pokemons-nav ${classes}`}>
      {pokemons.map((poke, index) => {
        return (
          <div className="pokemons-nav__item" key={index}>
            <input
              className="ml-16"
              type="radio"
              id={`${poke.name} ${classes}`}
              value={poke.name}
              onClick={() => handleSetPokemon(poke)}
            />
            <label
              className="headline-xs ml-16"
              htmlFor={`${poke.name} ${classes}`}
            >
              {textFormater(poke.name)}
            </label>
          </div>
        );
      })}
    </div>
  );
}
