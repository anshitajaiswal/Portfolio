import {styled, keyframes} from "styled-components";
import React from "react";

const bounce = keyframes`
0%,
100% {
  transform: translateX(0);
}
50% {
  transform: translateX(-25px);
}
`;
const bounce2 = keyframes`
0%,
100% {
  transform: translateX(0px);
}
50% {
  transform: translateX(20px);
}
`;

const Cloud3 = styled.div`
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  
`;

const Cloud1 = styled.div`
  height: 8px;
  width: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
 
`;

const Cloud2 = styled.div`
  height: 12px;
  width: 18px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  
`;

const Container = styled.div`
    position: relative;
  align-items: top; 
  margin-top: -80px;
  margin-left: -20px;
  animation: ${bounce} 2s infinite;
  `;

  const Container2 = styled.div`
  position: relative;
align-items: top; 
margin-left: -20px;
animation: ${bounce2} 2s infinite;
`;
 



  const CloudComponent = () => {
    return (
      <Container>
        <Cloud1 style={{ top: "12px", left: "3px" }} />
        <Cloud2 style={{ top: "8px", left: "9px" }} />
        <Cloud3 style={{ top: "0px", left: "16px" }} />
        <Cloud1 style={{ top: "12px", left: "23px" }} />
      </Container>
    );
  };
  
  const CloudsComponent = () => {
    return (
      <Container2>
        <Cloud2 style={{ top: "8px", left: "3px" }} />
        <Cloud3 style={{ top: "0px", left: "11px" }} />
        <Cloud2 style={{ top: "8px", left: "18px" }} />
        <Cloud1 style={{ top: "12px", left: "22px" }} />
      </Container2>
    );
  };
  
  export { CloudComponent as Cloud, CloudsComponent as Clouds };
