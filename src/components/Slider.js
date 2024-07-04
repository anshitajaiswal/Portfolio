import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: inline-block;
  width: 120px;
  height: 64px;
  margin-left: 170px;
  margin-bottom: 50px;
`;

const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #bbb;
  }

  &:checked + span:before {
    transform: translateX(136px);
  }
`;

const SliderSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #15273C;
  transition: 0.4s;
  border-radius: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  font-size: 18px;
 
   z-index: 6;

  &:before {
    position: absolute;
    content: "";
    height: 96px;
    width: 96px;
    left: 4px;
    bottom: 4px;
    background-color: #666;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const SliderLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 240px;
  height: 104px;
`;

const Emoji = styled.div`
  position: relative;
  z-index: 7;
  margin-left: 30px;
  margin-right: 30px;
`;

const SliderButton = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    
    // Call the toggleTheme function passed as a prop
    if (onChange) {
      onChange(); // This line is updated
    }
  };

  return (
    <SliderContainer>
      <SliderLabel>
        <SliderInput type="checkbox" checked={checked} onChange={handleChange} />
        <SliderSpan >
          <Emoji>🌙</Emoji>
          <span></span>
          <Emoji>☀️</Emoji>
        </SliderSpan>
      </SliderLabel>
    </SliderContainer>
  );
};

export default SliderButton;
