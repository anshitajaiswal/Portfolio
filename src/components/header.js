import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const color = {
  blue4: "#15273C",
  black: "#020408",
  white: "#f8f8f2",
  blue1: "#6EBDE7",
  orange: "#ffb86c",
  pink: "#ff79c6",
  purple: "#bd93f9",
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: inline-flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.bgColor};
  transition: background 0.3s ease;
  z-index: 40;

  * {
    text-decoration: none;
  }
  a {
    font-style: normal;
  }
  a:before {
    display: none;
  }

  @media (max-width: 768px) {
   
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.color.white};
  text-transform: uppercase;
  display: inline-flex;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;



const Navigation = styled.nav`
  padding-right: 750px;
  flex-direction: row;
  justify-content: space-around;
  

  @media (max-width: 768px) {
    display:flex;
    flex-direction:row;
    padding-right: 70px;
  }
`;

const NavItem = styled.p`
  font-size: 1rem;
  color: ${(props) => props.color};
  margin: 0 40px 0px;
  display: inline-flex;
  box-shadow: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0 25px 0px;
  
  }
`;

export default ({ aboutRef, projectRef, contactRef, theme, toggleTheme }) => {
  
  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "21, 39, 60" : "109, 152, 181");
  const [backgroundColor2, setBackgroundColor2] = useState(theme === "dark" ? "7, 13, 13" : "76, 115, 137");
  const [Color, setColor] = useState(theme === "dark" ? "#6EBDE7" : "#fff");

  const [bgColor, setBgColor] = useState(color.blue4);

  useEffect(() => {
    const setBackgroundColors = () => {
      setBackgroundColor(theme === "light" ? "21, 39, 60" : "109, 152, 181");
      setBackgroundColor2(theme === "light" ? "7, 13, 13" : "76, 115, 137");
      setColor(theme === "dark" ? "#6EBDE7" : "#fff");
    };

    setBackgroundColors();

    const handleScroll = () => {
    
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / docHeight;
      const startColor = backgroundColor; // RGB for blue4
      const endColor = backgroundColor2; // RGB for a lighter cyan
      const startColorArray = startColor.split(",").map(Number);
      const endColorArray = endColor.split(",").map(Number);

      const newColor = startColorArray.map((start, index) => {
        const end = endColorArray[index];
        const value = start + (end - start) * scrollPercentage;
        return Math.round(value);
      });

      setBgColor(`rgb(${newColor.join(",")})`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  const handleScrollToAbout2 = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToHome = () => {
    
    window.scrollBy({ top: -window.scrollY, left: 0, behavior: "smooth" });
  };

  return (
    <Container bgColor={bgColor}>
      <Header color={color}>{/* Your header content */}</Header>
      <Navigation>
        <NavItem onClick={handleScrollToHome} color={Color}>
          HOME
        </NavItem>
        <NavItem onClick={handleScrollToAbout2} color={Color}>
          ABOUT
        </NavItem>
        <NavItem onClick={handleScrollToProject} color={Color}>
          PROJECTS
        </NavItem>
        <NavItem onClick={handleScrollToContact} color={Color}>
          CONTACT
        </NavItem>
      </Navigation>
    </Container>
  );
};
