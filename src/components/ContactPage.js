import * as React from "react"
import Contact from "../components/Contact/Contact"
import styled from "styled-components"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaGithub as Github,
} from "react-icons/fa";



const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top:100px;
  margin-bottom: 90px;
`;

const Container = styled.div`
  margin-left:45px;
  color: #888;
  margin-bottom: 50px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap:20px;
  margin-top:40px;
  margin-bottom: 60px;
  justify-content: center;
`;

const contactPage = ({ theme, toggleTheme }) => {
  return(
    <>
    <h1 style={{ marginLeft: "45px", fontSize: "40px", marginTop: "90px", color:"#6EBDE7" }}>Lets's Connect</h1>
    <Container>
    <p> </p>
   
    </Container>
    <CenteredContainer>
        <Contact theme={theme} toggleTheme={toggleTheme}/>
        
        </CenteredContainer>
        <a style={{color:"#6EBDE7", marginLeft:"490px", marginTop:"50px", fontWeight:3, textDecorationThickness:"2px"}} href="https://github.com/anshitajaiswal/Gatsby-Portfolio-Starter-Template">Source code for this websites's template</a>
        <LinkContainer>
  
                  <a
                    href={`https://x.com/anshitaj03`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Twitter color="#6EBDE7"/>
                  </a>
                
            
                  <a
                    href={`https://www.linkedin.com/in/anshita-jaiswal-243756238/`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Linkedin color="#6EBDE7"/>
                  </a>
                
                  <a
                    href={`https://github.com/anshitajaiswal`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Github color="#6EBDE7"/>
                  </a>
                  </LinkContainer>
        
    </>
  );
};



export default contactPage;
