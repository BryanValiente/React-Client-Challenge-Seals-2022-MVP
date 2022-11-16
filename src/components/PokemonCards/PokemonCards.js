import styled from "styled-components";
import React from "react";
import { useState, Fragment } from "react";

import Grooves from "../../assets/music/MW.mp3";
const Header = styled.h1`
  color: black;
  font-size 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 170px;
`;

const Grass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  background-color: black;
  border-radius: 4px;
  text-align: center;
  background-color: rgb(222, 253, 224);
  width: 170px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  p {
    margin: 0;
  }
  p:nth-child(1) {
    margin-bottom: 15px;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export default function PokemonCards() {

  //Place Holder Array so that React won't have to rerender with Usestate
  let Array = [{ name: "bulbasaur", id: "001", type: "grass"}];


  //This function is used to add 0s at the beginning of the nubmer if need be.
  // when n, it becomes 00n
  //when n1n2, it becomes 0n1n2
  //when n1n2n3, it is left alone.

  const append0s = (n) => {
    if (n >= 152) {
      return null;
    } else if (n < 10) {
      return `00${n}`;
    } else if (n > 9 && n < 100) {
      return `0${n}`;
    } else if (n > 99) {
      return `${n}`;
    }
  };

  // Automatically makes the list of pokemon shown the Original 151
    // Fetches Data from each pokemon until the limit is reached
  const fetchPokemonData = async () => {
    for (let i = 1; i <= 150; i++) {
      await getPokemonData(i+1);
    }
  };

  //Sends a request from pokeapi to get data from a specific Pokemon
  const getPokemonData = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    Array.splice(id, 0, { name: data.name, id: append0s(id), type: data.types[0].type.name });

    // console.log(data.name);
  };
  //Setting up a useState so that thee map function can show 151 Pokemons by default.
  const [allPokemons, setAllPokemons] = useState(Array);


  //This is so that it runs once and doesn't run again from the useState change

  async function Hold() {
    await fetchPokemonData();
    if (Array.length === 151) {
      console.log("NOSHOT");
      setAllPokemons(Array);
      console.log("NOSHOT");
      console.log(Array[0]);
    }
  }
  Hold();
  return (
    <Fragment>
      <iframe
        title="Нет!"
        src={Grooves}
        height="0"
        width="0"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {/* Adds a Button so that when clicked appends a number into the useState
      array. That number will be n+1 */}
      <button
        onClick={() => {
          setAllPokemons([...allPokemons, append0s(allPokemons.length + 1)]);
          console.log(allPokemons);
        }}
      >
        PRESS ME
      </button>
      <Header>Blazedex</Header>
      <Container>
        {Array.map((Array, i) => (
          <Grass key={i}>
            <p>{`Pokemon #${Array.id}`}</p>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${Array.id}.png`}
              alt=""
            ></img>
            <div>
              { Array[i].name[0] === "bulbasaur" ? <p>NO</p> : <p>{Array.name[0].toUpperCase()+Array.name.slice(1)}</p>}
              
            </div>
            <div>
              <p> {Array.type[0].toUpperCase()+Array.type.slice(1)}</p>
            </div>
          </Grass>
        ))}
      </Container>
    </Fragment>
  );
}
