import {styled, keyframes} from "styled-components";
import React from "react";
import { useState, useEffect } from "react";


const bounce = keyframes`
0%,
100% {
  transform: translateX(0);
}
50% {
  transform: translateX(100px);
}
`;
const bounce2 = keyframes`
0%,
100% {
  transform: translateX(0px);
}
50% {
  transform: translateX(-100px);
}
`;

const Cloud3 = styled.div`
  height: 220px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  
`;

const Cloud1 = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
 
`;

const Cloud2 = styled.div`
  height: 140px;
  width: 180px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  
`;

const Container = styled.div`
  margin-top:-180px;
  animation: ${bounce} 4s infinite;
  `;

  const Container2 = styled.div`
     margin-top: 180px;
    margin-left: 900px;
    animation: ${bounce2} 3s infinite;
`;
 



  const CloudComponent = ({theme, toggleTheme}) => {

    useEffect(() => {
        setColor(theme === "dark" ? "transparent" : "#ddd");
        
      }, [theme]);
      const [Color, setColor] = useState(theme === "dark" ? "transparent" : "#ddd");
      
    
    return (
      <Container>
        <Cloud1 style={{ top: "120px", left: "30px" , backgroundColor: Color}} />
        <Cloud2 style={{ top: "80px", left: "90px" , backgroundColor: Color}} />
        <Cloud3 style={{ top: "10px", left: "160px" , backgroundColor: Color}} />
        <Cloud1 style={{ top: "120px", left: "230px" , backgroundColor: Color}} />
      </Container>
    );
  };
  
  const CloudsComponent = ({theme, toggleTheme}) => {

    useEffect(() => {
        setColor(theme === "dark" ? "transparent" : "#ddd");
        
      }, [theme]);
      const [Color, setColor] = useState(theme === "dark" ? "transparent" : "#ddd");
      

    return (
      <Container2>
        <Cloud2 style={{ top: "80px", left: "30px" , backgroundColor: Color}} />
        <Cloud3 style={{ top: "10px", left: "110px" , backgroundColor: Color}} />
        <Cloud2 style={{ top: "80px", left: "180px" , backgroundColor: Color}} />
        <Cloud1 style={{ top: "120px", left: "220px" , backgroundColor: Color}} />
      </Container2>
    );
  };
  
  export { CloudComponent as Cloud2, CloudsComponent as Clouds2 };
