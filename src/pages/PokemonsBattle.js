import React from "react";
import PokemonNav from "../components/PokemonsNav/PokemonNav";

import PokemonCardBattle from "../components/PokemonCardBattle/PokemonCardBattle";
import "./pokemon-battle.scss";

export default function PokemonBattle() {
  const [pokemons, setPokemons] = React.useState([]);
  const [pokemon, setPokemon] = React.useState(null);
  const [pokemon2, setPokemon2] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1154")
        .then((response) => response.json())
        .then((jsondata) => setPokemons(jsondata.results));
    }
    fetchData();
  }, []);

  return (
    <div className="pokemon-battle-page">
      <PokemonNav
        pokemons={pokemons}
        classes={"grid1-2"}
        setPokemon={setPokemon}
      ></PokemonNav>
      {pokemon ? (
        <PokemonCardBattle
          classes={"grid2-3"}
          pokemon={pokemon}
          pokemon2={pokemon2}
        ></PokemonCardBattle>
      ) : null}

      <PokemonNav
        pokemons={pokemons}
        classes={"grid4-5"}
        setPokemon2={setPokemon2}
      ></PokemonNav>
    </div>
  );
}
