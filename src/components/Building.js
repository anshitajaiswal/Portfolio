import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";

const BuildingContainer = styled.div`
  width: ${(props) => props.width}px; 
  height: ${(props) => props.height}px;
  position: relative;
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const Window = styled.div`
  width: 10px; 
  height: 10px; 

  position: absolute;
`;



const Building = ({ width, height,theme, toggleTheme }) => {
  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#fce7aa" : "#6EBDE7");
    setBackgroundColor2(theme === "dark" ? "#000" : "#EBEEEE");
  }, [theme]);
  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#fce7aa" : "#6EBDE7");
  const [backgroundColor2, setBackgroundColor2] = useState(theme === "dark" ? "#000" : "#EBEEEE");

 
  const numWindowsWidth = Math.floor(width / 30); 
  const numWindowsHeight = Math.floor(height / 30); 

  
  const spaceX = width / (numWindowsWidth + 1);
  const spaceY = height / (numWindowsHeight + 1);

 
  const windows = [];
  for (let i = 1; i <= numWindowsWidth; i++) {
    for (let j = 1; j <= numWindowsHeight; j++) {
      windows.push(
        <Window
          key={`${i}-${j}`}
          style={{ top: j * spaceY - 10, left: i * spaceX - 7 , backgroundColor: backgroundColor}}
        />
      );
    }
  }

  return (
    <BuildingContainer width={width} height={height} style={{backgroundColor: backgroundColor2}} >
      {windows}
    </BuildingContainer>
  );
};

export default Building;
