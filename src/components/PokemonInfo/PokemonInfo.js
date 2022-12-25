import React from "react";
import "./pokemon-info.scss";
import styled from "styled-components";
import PokemonEvolves from "./PokemonEvolves/PokemonEvolves";

import textFormater from "../../utilis/textFormater";
import colorFormatter from "../../utilis/colorFormatter";

const Barra = styled.div`
  width: ${(props) => props.size}px;
  background: ${(props) => {
    return colorFormatter(props.type);
  }};
  display: block;
  height: 1rem;
  border-radius: 100rem;
`;

const Type = styled.div`
  padding: 0.4rem 0.8rem;
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 2.4rem;
  margin-right: 0.8rem;
  color: white;
  background: ${(props) => {
    return colorFormatter(props.children);
  }};
`;

export default function PokemonInfo({ pokemon, classes }) {
  const [pokemonInfo, setPokemonInfo] = React.useState(null);
  React.useEffect(() => {
    async function fetchData(pokemonProp) {
      fetch(pokemonProp.url)
        .then((response) => response.json())
        .then((jsondata) => setPokemonInfo(jsondata));
    }

    // pokemon != null ? fetchData(pokemon) : fetchData(pokemon2);
    fetchData(pokemon);
  }, [pokemon]);

  return (
    <div className={`pokemon-info-container ${classes}`}>
      <div className="pokemon-info">
        <div className="pokemon-info-card">
          {pokemonInfo ? (
            <>
              <h3 className="pokemon-info-card__name headline-md">
                {textFormater(pokemonInfo.name)}
              </h3>
              <div className="pokemon-info-card__data text-md">
                <div className="pokemon-info-card__data__types">
                  {pokemonInfo.types.map((type) => {
                    return (
                      <Type
                        className="text-lg"
                        key={type.type.name}
                        type={type}
                      >
                        {type.type.name}
                      </Type>
                    );
                  })}
                </div>
                <div className="pokemon-info-card__data__others">
                  <div>
                    <p className="text-xl">Number</p>
                    <p className="text-xl">{pokemonInfo.id}</p>
                  </div>
                  <div>
                    <p className="text-xl">Weight</p>
                    <p className="text-xl">{pokemonInfo.weight}</p>
                  </div>
                  <div>
                    <p className="text-xl">Height</p>
                    <p className="text-xl">{pokemonInfo.height}</p>
                  </div>
                </div>
              </div>
              <img
                className="pokemon-info-card__img"
                alt={pokemonInfo.name}
                src={pokemonInfo.sprites.other.home.front_default}
              />
            </>
          ) : null}
        </div>
        {pokemonInfo ? (
          <div className="pokemon-info-card__stats-container">
            <h1>Stats</h1>
            {pokemonInfo.stats.map((poke, index) => {
              return (
                <div className={`grid-position-${index}`} key={index}>
                  <p className="text-lg">{textFormater(poke.stat.name)}</p>
                  <div className="stats-bar-container">
                    <p className="text-lg">{poke.base_stat}</p>
                    <Barra
                      size={poke.base_stat}
                      type={pokemonInfo.types[0].type.name}
                    ></Barra>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
        {pokemonInfo ? (
          <PokemonEvolves pokemonInfo={pokemonInfo}></PokemonEvolves>
        ) : null}
      </div>
    </div>
  );
}
