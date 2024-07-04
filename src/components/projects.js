import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "./projectBackground";
import customCursor from "../images/custom-cursor.svg";
import sms from "../images/sms.png";
import myr from "../images/myr.png";
import msw from "../images/msw.png";
import dwdm from "../images/dwdm.png";
import guy from "../images/guy.png";

const Line = styled.div`
  height: 1638px; /* Full viewport height */
  width: 0.5px;
  background: #888;
  margin-top: 10px;
`;

const Scroller = styled.div`
  transform: translateY(${props => props.scrollPosition-2010}px);
  transition: transform 0.3s ease-out;
`;

const Scroller2 = styled.div`
  transform: translateY(${props => props.scrollPosition2-2820}px);
  transition: transform 0.3s ease-out;
`;

const Scroller3 = styled.div`
  transform: translateY(${props => props.scrollPosition3-3220}px);
  transition: transform 0.3s ease-out;
`;

const Circle1 = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
 
  margin-left: -20px;
`;

const Circle2 = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;

 
  
`;

const Circle3 = styled.div`
  border-radius: 50%;
  height: 5px;
  width: 5px;
  background-color: #fff;
  border: 0.8px solid #333;
  
`;

const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  padding: 0px;
  margin-left: 140px;
  color: #909090;
`;

const Project = styled.div`
  height: 380px;
  width: 400px;

  border-radius: 10px;
  margin-right: 40px;
  margin-bottom: 40px;
  
  box-shadow: 0px 0px 30px 0px #000;

  &:hover {
    cursor: url(${customCursor}), auto;
    box-shadow: 0px 0px 20px 0px rgba(0, 119, 182, 0.5);
  }
`;

const ProjectContent = styled.div`
  margin-left: 20px;
  margin-top: -400px;
  width: 360px;
`;

const ArrowContainer = styled.div`
  height: 380px;
  width: 400px;
  
  border-radius: 10px;
  margin-right: 40px;
  margin-bottom: 40px;

  &:hover {
    cursor: url(${customCursor}), auto;
    box-shadow: 0px 0px 40px 0px rgba(0, 119, 182, 0.5);
  }
`;

const LinkContainer = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Text = styled.div`
  color: "#888";
`;

const ProjectContainer = styled.div`
  padding: 0px;
  z-index:12;
  
`;

const ProjectPage = ({ theme, toggleTheme }) => {
  const [scrollPosition, setScrollPosition] = useState("1000px");
  const [scrollPosition2, setScrollPosition2] = useState("1000px");
  const [scrollPosition3, setScrollPosition3] = useState("1000px");

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#19191c" : "rgb(252,252,252)");
    setBackgroundColor2(theme === "dark" ? "rgba(255,255,255,0.18)" : "#888");
    setBorder(theme === "dark" ? "#333" : "rgb(240,240,240)");
    console.log(theme);
  }, [theme]);
  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#19191c" : "rgb(252,252,252)");
  const [backgroundColor2, setBackgroundColor2] = useState(theme === "dark" ? "rgba(255,255,255,0.18)" : "#888");
  const [Border, setBorder] = useState(theme === "dark" ? "#333" : "rgb(240,240,240)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollTop2 = window.scrollY;
      const scrollTop3 = window.scrollY;
      // Calculate top and bottom boundaries based on Line and Scroller dimensions
      const maxScrollTop = 2010; // Adjust this based on top offset
      const maxScrollBottom = 2820; // Adjust this based on Line height minus Scroller height
      const maxScrollTop2 = 2840;
      const maxScrollBottom2 = 3220;
      const maxScrollTop3 = 3230;
      const maxScrollBottom3 = 3580;

      // Limit scrollPosition within boundaries
      if (scrollTop >= maxScrollTop && scrollTop <= maxScrollBottom) {
        setScrollPosition(scrollTop);
      } else if (scrollTop < maxScrollTop) {
        setScrollPosition(maxScrollTop);
      } else {
        setScrollPosition(maxScrollBottom);
      }

      if (scrollTop2 >= maxScrollTop2 && scrollTop2 <= maxScrollBottom2) {
        setScrollPosition2(scrollTop2);
      } else if (scrollTop2 < maxScrollTop2) {
        setScrollPosition2(maxScrollTop2);
      } else {
        setScrollPosition2(maxScrollBottom2);
      }

      if (scrollTop3 >= maxScrollTop3 && scrollTop3 <= maxScrollBottom3) {
        setScrollPosition3(scrollTop3);
      } else if (scrollTop3 < maxScrollTop3) {
        setScrollPosition3(maxScrollTop3);
      } else {
        setScrollPosition3(maxScrollBottom3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <>

      <h1 style={{ marginLeft: "45px", fontSize: "40px", marginTop: "90px", color:"#6EBDE7" }}>Projects</h1>
      <p style={{ marginLeft: "45px",color:"#888"}}>Add your or your company's projects here.</p>
      <Container style={{ marginTop: "90px", marginLeft: "120px" }}>
        <Line />
        <Container>
        <Scroller scrollPosition={scrollPosition}>
          <Circle1 style={{backgroundColor: backgroundColor}}/> 
          <Circle2 style={{marginLeft: "-10px", marginTop:"-30px", border:`2px solid ${backgroundColor2}`}} />
          <Circle3 style={{marginTop: "-13px",marginLeft: "-2.4px"}} />
          <h1 style={{marginLeft:"24px", marginTop:"-16px", color:"#6EBDE7"}} >2024</h1>
        </Scroller>

        <Scroller2 style={{marginLeft: "-78px"}} scrollPosition2={scrollPosition2}>
          <Circle1 style={{marginTop:"820px", backgroundColor: backgroundColor}} /> 
          <Circle2 style={{marginLeft: "-10px", marginTop:"-30px", border:`2px solid ${backgroundColor2}`}} />
          <Circle3 style={{marginTop: "-13px",marginLeft: "-2.4px"}}/>
          <h1 style={{marginLeft:"24px", marginTop:"-16px", color:"#6EBDE7"}} >2023</h1>
        </Scroller2>


        <Scroller3 style={{marginLeft: "-78px"}} scrollPosition3={scrollPosition3}>
          <Circle1 style={{marginTop:"1250px", backgroundColor: backgroundColor}} /> 
          <Circle2 style={{marginLeft: "-10px", marginTop:"-30px", border:`2px solid ${backgroundColor2}`}} />
          <Circle3 style={{marginTop: "-13px",marginLeft: "-2.4px"}}/>
          <h1 style={{marginLeft:"24px", marginTop:"-16px", color:"#6EBDE7"}} >2022</h1>
        </Scroller3>
        
        </Container>
        <ContentContainer>
          <div id="2024">
            <Container>
              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>Gatsby Porfolio Template</h1>
                  <p>As an intern at Kavach, I developed a gatsby starter portoflio template.</p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://github.com/anshitajaiswal/Gatsby-Portfolio-Starter-Template">Link</a>
                  </Text>
                  <img src={guy} alt="gatsby" style={{ width: "150px", height: "auto", marginTop:"-43px", marginLeft:"190px" }} />
                  <ArrowContainer style={{marginTop:"-452px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>
              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>OCT Classifier</h1>
                  <p>This project delves into the classification of Optical Coherence Tomography (OCT) images across four distinct 
                  categories: CME, DNE, DRUSEN, and NORMAL. </p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://github.com/anshitajaiswal/DWDM-project-Classification-of-OCT-images">Link</a>
                  </Text>
                  <img src={dwdm} alt="dwdm" style={{ width: "600px", height: "auto", marginTop:"62px", marginLeft:"0px" }} />
                  <ArrowContainer style={{marginTop:"-407px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>
            </Container>
            <Container>
              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`,  marginTop:"10px"}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>Movie Search Website</h1>
                  <p>A React movie search website that fetches movie details and ratings,
                  allowing users to browse movies . </p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://github.com/anshitajaiswal/Movie-Search-Website">Link</a>
                  </Text>
                  <img src={msw} alt="msw" style={{ width: "150px", height: "auto", marginTop:"-5px", marginLeft:"200px" }} />
                  <ArrowContainer style={{marginTop:"-386px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>
              
            </Container>
          </div>
          <div id="2023">
            <Container>
              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>Sports Management System</h1>
                  <p>This project is designed to help sports organizations to manage everything from scheduling and team 
                  rosters to finances and marketing. </p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://github.com/anshitajaiswal/Sports-Management-System">Link</a>
                  </Text>
                  <img src={sms} alt="sms" style={{ width: "200px", height: "auto", marginTop:"-5px", marginLeft:"180px" }} />
                  <ArrowContainer style={{marginTop:"-409px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>
              

              <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>Art Blog</h1>
                  <p>Curated and managed a personal art blog, featuring my art projects to engage a community of art enthusiasts.</p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://github.com/anshitajaiswal/Art-Website/tree/main">Link</a>
                  </Text>
                  <img src={myr} alt="art blog by myr" style={{ width: "200px", height: "auto", marginTop:"-30px", marginLeft:"175px" }} />
                  <ArrowContainer style={{marginTop:"-381px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>

            </Container>
            <Container>
            <ProjectContainer>
                <Project style={{border:`1px solid ${Border}`}}/>
                <Background left={10} top={-410} theme={theme} toggleTheme={toggleTheme}/>
                <ProjectContent>
                  <h1>Tic-Tac-Toe</h1>
                  <p>TDeveloped a Tic Tac Toe game in C++ featuring player vs player mode. </p>
                  
                  <LinkContainer />
                  <Text style={{ marginTop: "-35px", marginLeft: "35px" }}>
                    <a href="https://github.com/anshitajaiswal/tic-tac-toe/blob/main/tictactoe.cpp">Link</a>
                  </Text>
                  <ArrowContainer style={{marginTop:"-195px", marginLeft:"-20px", zIndex:13}}/>
                </ProjectContent>
              </ProjectContainer>
            </Container>
          </div>
        </ContentContainer>
      </Container>
    </>
  );
};

export default ProjectPage;
