import React from "react";
import PokemonNav from "../components/PokemonsNav/PokemonNav";
import PokemonInfo from "../components/PokemonInfo/PokemonInfo";

import Logo from "../images/Logo.png";
import "./pokemon-info.scss";

export default function PokemonInfoPage() {
  const [pokemons, setPokemons] = React.useState([]);
  const [pokemon, setPokemon] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1154")
        .then((response) => response.json())
        .then((jsondata) => setPokemons(jsondata.results));
    }
    fetchData();
  }, []);

  return (
    <div className="pokemon-ingo-page">
      <div className="logo-container">
        <img className="logo-container__img" src={Logo} alt="pokemon logo" />
      </div>
      <PokemonNav pokemons={pokemons} setPokemon={setPokemon}></PokemonNav>
      {pokemon ? (
        <PokemonInfo setPokemon={setPokemon} pokemon={pokemon}></PokemonInfo>
      ) : null}
    </div>
  );
}
