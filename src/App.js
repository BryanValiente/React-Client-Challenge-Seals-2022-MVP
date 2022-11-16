import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  background-color: #36393f;
`;

function App() {
  return (
    <BackgroundStyle>
      <HomePage></HomePage>;
    </BackgroundStyle>
  );
}

export default App;
