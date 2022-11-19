import styled from "styled-components";
import React from "react";
import { useState, Fragment } from "react";
import "../PokemonCards/PokemonCards.css";
import Grooves from "../../assets/music/MW.mp3";
import { keyframes } from "styled-components";

// animation
const moveAnimation = keyframes`
0%{ bottom: 0px;}

50% { bottom: 20px;}

100%{ bottom: 0px;}
`;
// header
const Header = styled.h1`
  color: #0a285f;
  font-size: 48px;
  font-weight: 600;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
// all pokemon container
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 130px;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
// image animation
const AnimatedImage = styled.img`
  position: relative;
  animation-name: ${moveAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  align-items: center;
  justify-content: center;
`;
// singular pokemon box
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  background-color: black;
  border-radius: 4px;
  text-align: center;
  background-color: #ffcc00;
  width: 300px;
  align-items: center;
  p {
    margin: 0;
  }
  p:nth-child(1) {
    margin-bottom: 5px;
    color: #0a285f;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
// search style
const Search = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`;
// 6 pokemon
const Team = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 76.9%;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: #d5a100;
  justify-content: center;
  margin: auto;
  border-radius: 4px;
  margin-bottom: 1px;
  height: 650px;
`;

export default function PokemonCards() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  // grabbing all of the pokemons from generation 1
  async function GetAllPokemans() {
    const url = `https://pokeapi.co/api/v2/generation/1/`;
    const res = await fetch(url);
    const data = await res.json();
    setAllPokemons(data.pokemon_species);
  }

  GetAllPokemans();

  const onAddPokemon = (newPokemon) => {
    if (selectedPokemon.length < 6) {
      setSelectedPokemon([...selectedPokemon, newPokemon]);
    }
  };

  return (
    <Fragment>
      {/* music */}
      <iframe
        title="Нет!"
        src={Grooves}
        height="0"
        width="0"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {/* header */}
      <Header>Blazedex</Header>
      {/* team box */}
      <Team id="parent">
        {selectedPokemon.length === 0
          ? "empty for now"
          : selectedPokemon
              .sort((a, b) => {
                // grab the number of the pokemon
                const x = parseInt(a.url.split("/")[6]);
                const y = parseInt(b.url.split("/")[6]);
                return x - y;
              })
              .map((Currentval, i) => (
                <PokemonBox key={i} Currentval={Currentval} />
              ))}
      </Team>
      <Header> Pokemans </Header>
      <Search>
        {" "}
        To Search for a specific Pokemon do "CMD + F" or "CTRL + F"{" "}
      </Search>
      <Container id="child">
        {allPokemons
          .sort((a, b) => {
            const x = parseInt(a.url.split("/")[6]);
            const y = parseInt(b.url.split("/")[6]);
            return x - y;
          })
          .map((Currentval, i) => (
            <PokemonBox
              key={i}
              Currentval={Currentval}
              onAddPokemon={onAddPokemon}
            />
          ))}
      </Container>
    </Fragment>
  );
}
//test

const PokemonBox = ({ Currentval, onAddPokemon }) => {
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

  return (
    <Box>
      <p>{`Pokemon #${append0s(Currentval.url.split("/")[6])}`}</p>
      <AnimatedImage
        className="pokemonImg"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${append0s(
          Currentval.url.split("/")[6]
        )}.png`}
        alt=""
      ></AnimatedImage>
      <div>
        <p>{Currentval.name[0].toUpperCase() + Currentval.name.slice(1)}</p>
      </div>
      <button
        id="btn"
        onClick={() => {
          onAddPokemon(Currentval);
        }}
      >
        {" "}
        Add Pokeman
      </button>
      <button
        id="btn"
        onClick={() => {
          onAddPokemon(Currentval);
        }}
      >
        {" "}
        Add Pokeman
      </button>
    </Box>
  );
};
