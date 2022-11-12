import styled from "styled-components";
import React from "react";
const DeleteButton = styled.button`
  color: #fff;
  background-color: red;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: red;
  border-style: solid;
  &:hover {
    cursor: pointer;
  }
`;
const EditButton = styled.button`
  color: black;
  background-color: gold;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: gold;
  border-style: solid;
  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.div`
  background-color: white;
  padding: 1rem; 1rem;
  position: relative;


`;
const CloseButton = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  p {
    margin-bottom: 0 !important;
    color: black;
  }
`;
const SaveButton = styled.button`
  background-color: green;
  position: relative;
  flex: 1;
  border-color: transparent;
`;

export default function ScoreCard() {
  return <ScoreWrapper></ScoreWrapper>;
}
