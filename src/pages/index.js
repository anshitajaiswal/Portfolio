import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import keyframes from "styled-components"
import Stars from "../components/stars"
import {useRef, useState, useEffect } from "react"
import CubePage from "../components/cube"
import AboutPage from "../components/About"
import ProjectPage from "../components/projects"
import ContactPage from "../components/ContactPage"
import Footer from "../components/footer"
import { Cloud2, Clouds2 } from "../components/Cloud2";
import Title from "../images/Title.png"


const MainContainer = styled.div`
  width: 1340px;
  height: 600px;
  position: fixed;
  z-index: 1;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  width: 1340px;
  height: 4480px;
  position: absolute;
  top: 600px;
  left: 0;
  transition: top 0.5s ease-in;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const FooterContainer = styled.div`
  width: 1318px;
  position: absolute;
  z-index: 20;
  padding-top: 60px;
  bottom: 0px;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0px;
`;

const Section = styled.section`
  padding: 30px 15px;
  min-height: 70vh;
`;


const bounce = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const Arrow = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 0;
  height: 0;
  z-index:40;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid #999;
  animation: ${bounce} 4s infinite;
  cursor: pointer;
`;

const IndexPage = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [theme, setTheme] = useState("dark"); // Initial theme state

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("Theme updated to:", theme);
  };

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#19191C" : "rgb(252,252,252)");
    setBackgroundColorMain(theme === "dark" ? "#020408" : "#EBEEEE");
  }, [theme]);

  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#19191C" : "rgb(252,252,252)");
  const [backgroundColorMain, setBackgroundColorMain] = useState(theme === "dark" ? "#020408" : "#EBEEEE");
  
  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
  <Layout aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} theme={theme} toggleTheme={toggleTheme}>
    <MainContainer  style={{ backgroundColor: backgroundColorMain }}>
        <Stars theme={theme} toggleTheme={toggleTheme} />
        <CubePage/>
          <p    style={{ marginRight: "40px", marginLeft: "900px", textAlign: "right", color: "#999", marginTop: "240px" }}>
            Write a small introductory paragraph about yourself or you can add a quote here. You can also make this be at center instead.
          </p>
          <Cloud2 theme={theme} toggleTheme={toggleTheme} />
          <Clouds2 theme={theme} toggleTheme={toggleTheme} />

          <img src={Title} alt="Profile" style={{ width: "900px", height: "auto", marginTop:"120px", marginLeft:"200px" }}/>
          
          <Arrow onClick={handleScrollToAbout} />
        
      </MainContainer>
  
        <AboutContainer id="about-section" ref={aboutRef} style={{ backgroundColor: backgroundColor }}>
          <ContentContainer>
            <Section >
              <AboutPage theme={theme} toggleTheme={toggleTheme} />
            </Section>

            <Section  ref={projectRef} >
              <ProjectPage theme={theme} toggleTheme={toggleTheme} />
              
            </Section>

            <Section  ref={contactRef}>
              <ContactPage theme={theme} toggleTheme={toggleTheme} />
            </Section>
            <FooterContainer>
              <Footer theme={theme} toggleTheme={toggleTheme} />
            </FooterContainer>
          </ContentContainer>
        </AboutContainer>
      </Layout>
      
  </>
  );
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
