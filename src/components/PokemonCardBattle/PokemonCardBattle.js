import React from "react";
import "./pokemon-card-battle.scss";
import styled from "styled-components";

import textFormater from "../../utilis/textFormater";
import colorFormatter from "../../utilis/colorFormatter";
import BattleLogo from "../../images/BattleLogo.webp";
import VersusLogo from "../../images/Vs.png";

const Barra = styled.div`
  width: ${(props) => props.size / 1.2}px;
  background: ${(props) => {
    return colorFormatter(props.type);
  }};
  display: block;
  height: 1rem;
  border-radius: 100rem;
`;

export default function PokemonCardBattle({ pokemon, classes, pokemon2 }) {
  const [pokemonInfo, setPokemonInfo] = React.useState(null);
  const [pokemonInfo2, setPokemonInfo2] = React.useState(null);
  React.useEffect(() => {
    async function fetchData(pokemonProp) {
      fetch(pokemonProp.url)
        .then((response) => response.json())
        .then((jsondata) => setPokemonInfo(jsondata));
    }
    async function fetchData2(pokemonProp) {
      fetch(pokemonProp.url)
        .then((response) => response.json())
        .then((jsondata) => setPokemonInfo2(jsondata));
    }
    if (pokemon) {
      fetchData(pokemon);
    }
    if (pokemon2) {
      fetchData2(pokemon2);
    }
    // pokemon != null ? fetchData(pokemon) : fetchData(pokemon2);
  }, [pokemon, pokemon2]);

  return (
    <div className={`grid3-5`}>
      <div className="pokemon-card-info">
        <img src={BattleLogo} alt="Logo Batalla pokemon" />
        <div className="pokemon-card">
          {pokemonInfo ? (
            <div className="pokemon-card__pokemon">
              <h3 className="pokemon-card__name headline-sm">
                {textFormater(pokemonInfo.name)}
              </h3>
              <img
                className="pokemon-card__img"
                alt={pokemonInfo.name}
                src={pokemonInfo.sprites.other.home.front_default}
              />
              <div className="pokemon-card__stats-container">
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
            </div>
          ) : null}
          <img src={VersusLogo} alt="versus logo" />
          {pokemonInfo2 ? (
            <div className="pokemon-card__pokemon">
              <h3 className="pokemon-card__name headline-sm">
                {textFormater(pokemonInfo2.name)}
              </h3>
              <img
                className="pokemon-card__img"
                alt={pokemonInfo2.name}
                src={pokemonInfo2.sprites.other.home.front_default}
              />
              <div className="pokemon-card__stats-container">
                {pokemonInfo2.stats.map((poke, index) => {
                  return (
                    <div className={`grid-position-${index}`} key={index}>
                      <p className="text-lg">{textFormater(poke.stat.name)}</p>
                      <div className="stats-bar-container">
                        <p className="text-lg">{poke.base_stat}</p>
                        <Barra
                          size={poke.base_stat}
                          type={pokemonInfo2.types[0].type.name}
                        ></Barra>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
