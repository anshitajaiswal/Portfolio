import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";


const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const bounceAnim2 = (startX2, startY2) => keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translateY(-${50}px) translateX(calc(1320px - ${startX2}px));
  }
  50% {
    transform: translateY(calc(560px - ${startY2}px)) translateX(${50}px);
  }
  75% {
    transform: translateY(${50}px) translateX(calc(-${startX2}px));
  }
`;

  
  const bounceAnim4 = (startX2, startY2) => keyframes`
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translateY(${50}px) translateX(calc(-${startX2}px));
    }
    50% {
      transform: translateY(calc(560px - ${startY2}px)) translateX(${50}px);
    }
    75% {
      transform: translateY(-${50}px) translateX(calc(1320px - ${startX2}px));
    }
  `;

const bounceAnim1 = (startX, startY) => keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(${50}px, ${560 - startY}px);
  }
  50% {
    transform: translate(${1320 - startX}px, ${-50}px);
  }
  75% {
    transform: translate(${-50}px, ${- startY}px);
  }
`;

const bounceAnim3 = (startX, startY) => keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
  transform: translate(${-50}px, ${- startY}px);
    
  }
  50% {
    transform: translate(${1320 - startX}px, ${-50}px);
  }
  75% {
    transform: translate(${50}px, ${560 - startY}px);
  }
`;

const bounceAnim5 = (startX, startY) => keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
  transform: translate(${-50}px, ${- startY}px);
    
  }
  50% {
    transform: translate(${- startX}px, ${50}px);
  }
  75% {
    transform: translate(${50}px, ${560 - startY}px);
  }
`;


const Star = styled.div`
  position: fixed;
  width: 2px;
  height: 2px;
  z-index:30;
  margin-top: ${props => props.startY}px;
  left: ${props => props.startX}px;
  border-radius: 50%;
  animation: ${props => bounceAnim1(props.startX, props.startY)} 7s infinite linear;
`;

const Star2 = styled.div`
  position: fixed;
  width: 2px;
  height: 2px;
  z-index:30;
  margin-top: ${props => props.startY2}px;
  left: ${props => props.startX2}px;
  border-radius: 50%;
  animation: ${props => bounceAnim2(props.startX2, props.startY2)} 7s infinite linear;
`;

const Star3 = styled.div`
  position: fixed;
  width: 2px;
  height: 2px;
  z-index:30;
  margin-top: ${props => props.startY3}px;
  left: ${props => props.startX3}px;
  
  border-radius: 50%;
  animation: ${props => bounceAnim3(props.startX3, props.startY3)} 9s infinite linear;
`;

const Star4 = styled.div`
  position: fixed;
  width: 2px;
  height: 2px;
  z-index:30;
  margin-top: ${props => props.startY4}px;
  left: ${props => props.startX4}px;

  border-radius: 50%;
  animation: ${props => bounceAnim4(props.startX4, props.startY4)} 9s infinite linear;
`;

const Star5 = styled.div`
  position: fixed;
  width: 2px;
  z-index:30;
  height: 2px;
  margin-top: ${props => props.startY5}px;
  left: ${props => props.startX5}px;
 
  border-radius: 50%;
  animation: ${props => bounceAnim5(props.startX5, props.startY5)} 6s infinite linear;
`;

const Stars = ({ theme, toggleTheme }) => {

  useEffect(() => {
    setColor(theme === "dark" ? "#f8f8f2" : "#98BAE3");
    
  }, [theme]);
  const [Color, setColor] = useState(theme === "dark" ? "#f8f8f2" : "#98BAE3");
  

  const stars = [];
  for (let i = 0; i < 5; i++) {
    const startX = randomInRange(0, 1320);
    const startY = randomInRange(80, 500);
    const startX2 = randomInRange(0, 1320);
    const startY2 = randomInRange(80, 500);
    const startX3 = randomInRange(0, 1320);
    const startY3 = randomInRange(80, 500);
    const startX4 = randomInRange(0, 1320);
    const startY4 = randomInRange(80, 500);
    const startX5 = randomInRange(0, 1320);
    const startY5 = randomInRange(80, 500);

    stars.push(<Star style={{backgroundColor: Color}} key={`star-${i}`} startX={startX} startY={startY} />);
    stars.push(<Star3 style={{backgroundColor: Color}} key={`star3-${i}`} startX3={startX3} startY3={startY3} />);
    stars.push(<Star2 style={{backgroundColor: Color}} key={`star2-${i}`} startX2={startX2} startY2={startY2} />);
    stars.push(<Star4 style={{backgroundColor: Color}} key={`star4-${i}`} startX4={startX4} startY4={startY4} />);
    stars.push(<Star5 style={{backgroundColor: Color}} key={`star5-${i}`} startX5={startX5} startY5={startY5} />);
  }
  return <>{stars}</>;
};

export default Stars;
