// src/components/BuildingRow.js

import React from "react";
import styled from "styled-components";
import Building from "./Building";
import House from "./House";
import SliderButton from "./Slider";



const RowContainer = styled.div`
   display: flex;
  flex-direction: row; /* Stack buildings horizontally */
  justify-content: flex-start; /* Align buildings at the left */
  align-items: flex-end; /* Maintain bottom alignment (optional) */
`;

const Footer = ({ theme, toggleTheme }) => {
  return (
    <RowContainer>
      <Building width={50} height={110}  theme={theme} toggleTheme={toggleTheme} />
      <Building width={60} height={130}  theme={theme} toggleTheme={toggleTheme} />
      <Building width={40} height={80} theme={theme} toggleTheme={toggleTheme} />
      <House width={70} height={110}  theme={theme} toggleTheme={toggleTheme}/>
      <Building width={60} height={120} theme={theme} toggleTheme={toggleTheme}/>
      <Building width={40} height={100} theme={theme} toggleTheme={toggleTheme}/> 
      <House width={80} height={30} theme={theme} toggleTheme={toggleTheme}/>
      <Building width={50} height={110} theme={theme} toggleTheme={toggleTheme} />
      <Building width={60} height={130} theme={theme} toggleTheme={toggleTheme}/>
      <Building width={40} height={80} theme={theme} toggleTheme={toggleTheme}/>
      <House width={70} height={110} theme={theme} toggleTheme={toggleTheme}/>
      <Building width={60} height={120} theme={theme} toggleTheme={toggleTheme}/>
      <Building width={40} height={100} theme={theme} toggleTheme={toggleTheme}/>
      <House width={80} height={30} theme={theme} toggleTheme={toggleTheme}/>
      <SliderButton onChange={() => {
  console.log("toggleTheme called!");
  toggleTheme();
}} />
    </RowContainer>
  );
};

export default Footer;
