import React from "react";
import textFormater from "../../utilis/textFormater";
import "./PokemonsNav.scss";

import { Link } from "react-router-dom";

export default function PokemonNav({
  pokemons,
  setPokemon,
  classes,
  setPokemon2,
}) {
  function handleSetPokemon(pokemon) {
    if (classes === "grid5-6") {
      setPokemon2(pokemon);
    } else {
      setPokemon(pokemon);
    }
  }

  return (
    <div className={`pokemons-nav ${classes}`}>
      <Link className="pokemons-nav__link headline-xxs" to="/pokemon-battle">
        Fight
      </Link>
      <Link
        className="pokemons-nav__link pokemons-nav__link--green headline-xxs"
        to="/"
      >
        Info
      </Link>

      <div className="pokemons-nav-content">
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
                className="headline-xxs ml-16"
                htmlFor={`${poke.name} ${classes}`}
              >
                {textFormater(poke.name)}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
