// src/components/House.js

import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";

const HouseContainer = styled.div`
  width: ${(props) => props.width}px; /* Adjust width as needed */
  height: ${(props) => props.height}px; /* Adjust height as needed */
  position: relative;
`;

const Roof = styled.div`
  width: 100%;
  height: 100%; /* Adjust roof height as needed */
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: skewY(-15deg); /* Skew the roof */
`;

const Window = styled.div`
  width: 10px; /* Adjust window size as needed */
  height: 10px; /* Adjust window size as needed */
  background-color: #fce7aa; /* Window color */
  position: absolute;
`;

const House = ({ width, height,theme, toggleTheme }) => {

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#fce7aa" : "#6EBDE7");
    setBackgroundColor2(theme === "dark" ? "#000" : "#EBEEEE");
  }, [theme]);
  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#fce7aa" : "#fff");
  const [backgroundColor2, setBackgroundColor2] = useState(theme === "dark" ? "#000" : "#EBEEEE");

  // Calculate number of windows based on house dimensions
  const numWindowsWidth = Math.floor(width / 30); // Calculate based on window width
  const numWindowsHeight = Math.floor(height / 30); // Calculate based on window height

  // Calculate space between windows
  const spaceX = width / (numWindowsWidth + 1);
  const spaceY = height / (numWindowsHeight + 1);

  // Generate window positions dynamically
  const windows = [];
  for (let i = 1; i <= numWindowsWidth; i++) {
    for (let j = 1; j <= numWindowsHeight; j++) {
      windows.push(
        <Window
          key={`${i}-${j}`}
          style={{ top: j * spaceY - 10, left: i * spaceX - 7, backgroundColor: backgroundColor }}
        />
      );
    }
  }

  return (
    <HouseContainer width={width} height={height} style={{backgroundColor: backgroundColor2}}>
      <Roof style={{backgroundColor: backgroundColor2}} />
      {windows}
    </HouseContainer>
  );
};

export default House;
