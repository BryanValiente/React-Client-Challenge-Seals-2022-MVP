import styled from "styled-components";
import React from "react";
import { useState } from "react";
import Img from "../../assets/Logo.png";

const Logo = styled.img`
  display: block;
`;


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
  gap: 100px;
`;
const Box = styled.div`
  transition: all 0.7s;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 14px 12px;
  color: white;
`;

function leadingZeros(n) {
  if (n > 0 && n < 10) {
    return `00${n}`;
  } else if (n > 9 && n < 100) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}
export default function Boxes() {
  // object destructuring
  const [allPokemons, setAllPokemons] = useState([]);

  return (
    <fragment>
      <Logo src={Img} alt="Logo"/>
      <button
        onClick={() => {
          setAllPokemons([
            ...allPokemons,
            leadingZeros(allPokemons.length + 1),
          ]);
          console.log(allPokemons);
        }}
      >
        PRESS ME
      </button>
      <Header>Blazedex</Header>
      <Container>
        {allPokemons.map((allPokemons, i) => (
          <Box key={i}>
            {`#${allPokemons}`}
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${allPokemons}.png`} alt="Pokemon"></img>
          </Box>
        ))}
      </Container>
    </fragment>
  );
}
