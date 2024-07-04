import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pic2 from "../images/pic2.jpeg"; 
import pic1 from "../images/pic1.jpeg";
import pic3 from "../images/pic3.jpeg";
import pic4 from "../images/pic4.jpeg";
import pic5 from "../images/pic5.jpeg";
import pic6 from "../images/pic6.jpeg";
import pic7 from "../images/pic7.jpeg";
import anshita from "../images/anshita2.jpg";
import {Cloud, Clouds} from "./Cloud";
import HorizontalCarousel from "./carousel";


const Container = styled.div`
  display: flex;
  align-items: center; /* Center align the items vertically */
  margin-top: 30px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 20px;
    
`;


const CloudContainer = styled.div`
  display: flex;
  align-items: center; /* Center align the items vertically */
  margin-top: 30px;
  margin-left: 5px;

  @media (max-width: 768px) {
    margin-left: 0px;
`;
const ContentContainer = styled.div`
  padding:10px;
  color: #909090;
  @media (max-width: 768px) {
    padding: 5px;
    >p{
      margin-right:700px;
    }
  }
`;

const Heading = styled.div`
  font-size: 30px;
  h1 {
    margin: 0; /* Remove the default margin */
    margin-left: 25px;
     @media (max-width: 768px) {
      font-size: 24px;
      margin-left: 10px;
    }
  }
`;

const Timeline= styled.div`
  margin-left:240px;
  margin-top: 150px;
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;

const ProfileImage = styled.img`
  width: 250px; /* Adjust the size as needed */
  height: 250px; /* Adjust the size as needed */
  border-radius: 50%; /* Make the image circular */
  margin-left: 140px; /* Space between image and text */
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    margin-left: 0px;
  }
`;

const Line = styled.div`
  height: 0.5px; /* Full viewport height */
  width: 700px;
  background: #888;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 400px;
  }
`;

const Line2 = styled.div`
  height: 80px; /* Full viewport height */
  width: 0.5px;
  background: #888;
  @media (max-width: 768px) {
    height:40px;
  }
`;


const Circle2 = styled.div`
  border-radius: 50%;
  height: 12px;
  width: 12px;
  background-color: #888;
  @media (max-width: 768px) {
    
  }
`;

const Circle1 = styled.div`
  border-radius: 50%;
  height: 8px;
  width: 8px;
  background-color: #fff;
  margin-top:-4px;
  border: 0.8px solid #333;
  @media (max-width: 768px) {
    
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 2rem;
  background-color: transparent;
  margin-top: 100px;
  margin-right: 80px;
  margin-bottom:-80px;
  margin-left: 20px;
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 50px;
    margin-right: 20px;
    margin-bottom: 0px;
    margin-left: 10px;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #6EBDE7;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const SkillListContainer =styled.div`
  display: flex;
  margin-left: 120px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-left: 0px;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const SkillItem = styled.li`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  
  color: #888;
  font-family: 'Open Sans', sans-serif;
  padding: 0.5rem 1rem;
  border: 0.5px solid #444;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    color: #007acc;
    border-color: #007acc;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }
`;

const AboutPage = ({ theme, toggleTheme }) => {
  useEffect(() => {
    setTextColor(theme === "dark" ? "#888" : "#000");
   
  }, [theme]);
  const [textColor,setTextColor] = useState(theme === "dark" ? "#888" : "#000"); // Set color based on theme

    const images = [
        pic1, // Adjust paths based on your actual image locations
        pic2,
        pic3,pic4,pic5, pic6, pic7
        // Add more images as needed
      ];

  const gradientStyle = {
    background: 'linear-gradient(90deg, #0077b6, #00FFFF)',
    WebkitBackgroundClip: 'text', /* For Safari and Chrome */
    MozBackgroundClip: 'text', /* For Firefox (older versions) */
    backgroundClip: 'text', /* Standard property */
    WebkitTextFillColor: 'transparent', /* For Safari and Chrome */
    MozTextFillColor: 'transparent', /* For Firefox (older versions) */
    textFillColor: 'transparent',
    display: 'inline-block' // Ensure the text is properly displayed
  };

  return (
    <>
    <div>
      <Container>
        <ContentContainer>
        <CloudContainer>
        <Clouds/> 
        <Heading style={{ zIndex: 4 }}>
          <h1>Hey there, I'm</h1>
          <h1 style={gradientStyle}>
            Anshita Jaiswal
          </h1>
        </Heading>
        <Cloud/>
        </CloudContainer>
        <p style={{ color: textColor }}>I'm passionate about creating innovative web products with a focus on good design. I enjoy learning new technologies and contributing to open source projects.</p>
        </ContentContainer>
       
        <ProfileImage src={anshita} alt="Profile" />
      </Container>
      </div>
      <div>
      <HorizontalCarousel images={images} />
      </div>
      <Container>
      <ContentContainer>
      <div>
        <h1 style={{fontSize:"40px", color:"#6EBDE7"}}>Education</h1>
        <p>I am currently pursuing a BTech degree in Information Technology.</p>
        </div>
        <Timeline>
        <Line/>
        <Circle2 style={{marginTop:"-6px"}}/>

        <Circle1 style={{marginLeft:"175px",marginTop:"-10px"}}/>
        <Line2 style={{marginLeft:"179px"}}/>
        <h1 style={{marginLeft:"152px", color:"#0077b6"}}>2019</h1>
        <p style={{textAlign: 'center', marginTop:"-232px", marginLeft:"-158px"}}>10th | 97.4% <br/>
        Delhi Public School | CBSE </p>

        <Circle1 style={{marginLeft:"350px", marginTop:"-2px"}}/>
        <Line2 style={{marginLeft:"354px", marginTop:"-88px"}}/>
        <h1 style={{marginLeft:"330px", marginTop:"-110px", color:"#0077b6"}}>2021</h1>
        <p style={{textAlign: 'center', marginTop:"110px", marginLeft:"20px"}}>12th | 87.7% <br/>
        Delhi Public School | CBSE </p>

        <Circle1 style={{marginLeft:"525px", marginTop:"-99px"}}/>
        <Line2 style={{marginLeft:"529px"}}/>
        <h1 style={{marginLeft:"503px", marginTop:"0px", color:"#0077b6"}}>2025</h1>
        <p style={{textAlign: 'center', marginTop:"-230px", marginLeft:"369px"}}>BTech in IT | 7.94 <br/>
        Manipal Institute of Technology | 2025 </p>

        <Circle2 style={{marginLeft:"688px", marginTop:"-6px"}}  />
        </Timeline>
        </ContentContainer>
        </Container>

        <SkillsContainer>
    <SkillsTitle>My Skills</SkillsTitle>
    <SkillListContainer>
    <SkillsList>
        <SkillItem >C/C++</SkillItem>
        <SkillItem >HTML</SkillItem>
        <SkillItem >JavaScript</SkillItem>
        </SkillsList>
        <SkillsList> 
        <SkillItem >SQL</SkillItem>
        <SkillItem >Java</SkillItem>
        <SkillItem >Visual Studio 22</SkillItem>
        
    </SkillsList>
    <SkillsList>
    <SkillItem >CSS</SkillItem>
        <SkillItem >React</SkillItem>
        <SkillItem >Node.js</SkillItem>
        
        
    </SkillsList>
    <SkillsList>
    <SkillItem >Android Studio</SkillItem>
        <SkillItem >Rapid Miner</SkillItem>
        <SkillItem >Talend</SkillItem>

        </SkillsList>
    <SkillsList>
        <SkillItem >Firebase</SkillItem>
        <SkillItem >Assembly Language</SkillItem>
    </SkillsList>
    </SkillListContainer>
  </SkillsContainer>
    </>
  );
};

export default AboutPage;
