import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyNavbar from "./components/navbar/navbar.component";
import MyCarousel from "./components/carousel/carousel.component";
import MyAbout from "./pages/about/about.component";
import MySkills from "./pages/skills/skills.component";
import MyExperience from "./pages/experience/experience.component";
import MyProjects from "./pages/projects/projects.component";
import MyContact from "./pages/contact/contact.component";
import MyFooter from "./components/footer/footer.component";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />

      <div id="container-holder-about">
        <Container className="container-section">
          <Fade duration={700}>
            <MyAbout />
          </Fade>
        </Container>
      </div>


      <Container className="container-section">
        <Fade duration={700}>
          <MySkills />
        </Fade>
      </Container>

      <div id="container-holder-experience">
        <Container className="container-section">
          <Fade duration={700}>
            <MyExperience />
          </Fade>
        </Container>
      </div>

      <div id="container-holder-projects">
        <Container className="container-section">
          <Fade duration={700}>
            <MyProjects />
          </Fade>
        </Container>
      </div>

      <div id="container-holder-contact">
        <Container className="container-section">
          <Fade duration={700}>
            <MyContact />
          </Fade>
        </Container>
      </div>

      <div >
        <Fade duration={700}>
          <MyFooter />
        </Fade>
      </div>


    </div>

  );
};

export default App;
