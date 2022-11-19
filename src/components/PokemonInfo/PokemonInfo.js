import { useEffect, useState } from "react";
import React from "react";

export default function PokemonInfo(props) {
  const [types, setTypes] = useState([]);

  function getPokemonType() {
    const info = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${props.number}`;

    info.push(fetch(url).then((res) => res.json()));
    Promise.all(info).then((res) => {
      const information = res.map((results) => ({
        type: results.types.map((type) => type.type.name).join(", "),
      }));

      console.log(information);
      setTypes(information[0].type.split(","));
      // displayInfo(information);
    });
  }
  const displayInfo = (pokemon) => {
    console.log(pokemon);
    // const pokemonHTMLString = pokemon.map(
    //   (pokeman) => `
    //   <p>Type: ${pokeman.type}</p>
    //   `
    // );

    // document.getElementById("info").innerHTML = pokemonHTMLString;
  };
  useEffect(() => {
    getPokemonType();
  }, []);
  return (
    <>
      {types.map((t) => (
        <div id="info">Type: {t}</div>
      ))}
    </>
  );
}
