import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(0deg);
  }
`;

const Container = styled.div`
  margin-top: 180px;
  margin-left: 1100px;
`;

const Cube = styled.div`
  position: absolute;
  width: 100px;
  height: 40px;
  transform-style: preserve-3d;
  animation: ${rotate} 10s infinite linear;

  & div {
    position: absolute;
    width: 100px;
    height: 40px;
    background: linear-gradient(105deg, rgba(139, 200, 255, 1), rgba(24, 42, 60, 1));
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    transform-style: preserve-3d; /* Ensure the back face is not flipped */
  }

  & .front { width: 200px; transform: translateZ(20px); }
  & .back { width: 200px; transform:  rotateX(180deg) translateZ(20px); } /* Adjusted transform to keep it on the same plane */
  & .left { width: 100px; transform: rotateY(-90deg) translateZ(20px); }
  & .right { width: 100px; transform: rotateY(90deg) translateZ(70px); }
  & .top { width: 200px; transform: rotateX(90deg) translateZ(20px); }
  & .bottom { width: 200px; transform: rotateX(-90deg) translateZ(20px); }
`;

const CubePage = () => (
  <Container>
    <Cube>
      <div className="front">Name: Anshita Jaiswal</div>
      <div className="back">Name: Anshita Jaiswal</div>
      <div className="left">Left</div>
      <div className="right">Right</div>
      <div className="top">Age: 21</div>
      <div className="bottom">Age: 21</div>
    </Cube>
  </Container>
);

export default CubePage;
