import React from "react";

import "./pokemon-evolve-card.scss";

export default function PokemonEvolveCard({ name }) {
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((jsondata) => setPokemon(jsondata));
    }
    fetchData();
  }, [name]);

  return pokemon ? (
    <div className="pokemon-evolve-card">
      <p className="headline-xs">{pokemon.name}</p>
      <img alt={pokemon.name} src={pokemon.sprites.other.home.front_default} />
    </div>
  ) : null;
}
