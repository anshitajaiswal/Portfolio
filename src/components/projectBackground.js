import styled from "styled-components";
import React from "react";
import { useState,useEffect } from "react";

const BuildingContainer = styled.div`
  left: ${(props) => props.left}px; 
  top: ${(props) => props.top}px;
  position: relative; 
`;

const Window = styled.div`
  width: 1.3px; 
  height: 1.3px; 
  position: absolute;
  border-radius: 50%;
  z-index:10;
`;

const Background = ({ left = 0, top = 0 , theme, toggleTheme }) => {

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#000000" : "#444");
    setBackgroundColor2(theme === "dark" ? "rgba(255,255,255,0.18)" : "#888");
    console.log(theme);
  }, [theme]);
  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#000000" : "#444");
  const [backgroundColor2, setBackgroundColor2] = useState(theme === "dark" ? "rgba(255,255,255,0.18)" : "#888");

  const windows = [];
  const windowSize = 1;
  const spacing = 26;

  for (let i = 0; i < 14; i++) {
    for (let j = 0; j < 15; j++) {
      windows.push(
        <Window
          key={`${i}-${j}`}
          style={{ top: i * (windowSize + spacing), left: j * (windowSize + spacing) , backgroundColor: backgroundColor2}}
        />
      );
    }
  }

  

  return (
    <BuildingContainer left={left} top={top} style={{backgroundColor: backgroundColor}}>
      {windows}
    </BuildingContainer>
  );
};

export default Background;
