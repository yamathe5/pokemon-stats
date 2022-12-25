import React from "react";
import PokemonEvolveCard from "./PokemonEvolveCard";

export default function PokemonEvolves({ pokemonInfo }) {
  const [pokemonEvolution, setPokemonEvlution] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      fetch(pokemonInfo.species.url)
        .then((response) => response.json())
        .then((jsondata) => {
          fetch(jsondata.evolution_chain.url)
            .then((response) => response.json())
            .then((jsondata) => setPokemonEvlution(jsondata));
        });
    }
    fetchData();
  }, [pokemonInfo]);

  return pokemonEvolution ? (
    <div className="pokemon-info-card__evolves">
      <h1>Evoluciones</h1>
      <div>
        {pokemonEvolution.chain.species.name ? (
          <PokemonEvolveCard
            name={pokemonEvolution.chain.species.name}
          ></PokemonEvolveCard>
        ) : null}
        {pokemonEvolution.chain.evolves_to[0]?.species.name ? (
          <PokemonEvolveCard
            name={pokemonEvolution.chain.evolves_to[0]?.species.name}
          ></PokemonEvolveCard>
        ) : null}
        {pokemonEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.name ? (
          <PokemonEvolveCard
            name={
              pokemonEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.name
            }
          ></PokemonEvolveCard>
        ) : null}
      </div>
    </div>
  ) : null;
}
