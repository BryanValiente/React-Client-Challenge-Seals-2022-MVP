import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";

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
  gap: 175px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  text-align: center;
  text-color: white;
  color: white;
  width: 170px;
  height: 70px;
  margin-bottom: 50px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;
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

export default function Boxes() {
  // object destructuring
  const [allPokemons, setAllPokemons] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  return (
    <fragment>
      <button
        onClick={() => {
          setAllPokemons([...allPokemons, allPokemons.length]);
          console.log(allPokemons);
        }}
      >
        PRESS ME
      </button>
      <Header>Blazedex</Header>
      <Container>
        {allPokemons.map((allPokemons, i) => (
          <Box key={i}> {`id: ${allPokemons + 1}`} </Box>
        ))}
      </Container>
    </fragment>
  );
}
