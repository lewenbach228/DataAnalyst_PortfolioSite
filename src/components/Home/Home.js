import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import { ANALYST_SKILLS } from "../../constants"; // Nouveau fichier constants.js

const HomeHeader = () => (
  <>
    <h1 className="heading">
      Turning <span className="purple">Data</span> Into{" "}
      <span className="purple">Insights</span> That Drive Action 💡
    </h1>
    <h2 className="heading-name">
      I'm <strong className="main-name">Ablamvi AGBONAGBAN</strong>,
      <br />a passionate <span className="purple">Data Analyst</span> turning
      business questions into answers through{" "}
      <span className="purple">Power BI</span>,{" "}
      <span className="purple">SQL</span>, and{" "}
      <span className="purple">Python</span>.
    </h2>
  </>
);

const HomeImage = () => (
  <img
    src={homeLogo}
    alt="Data Analyst at work"
    className="img-fluid"
    style={{ maxHeight: "450px" }}
  />
);

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <HomeHeader />
              <div style={{ paddingTop: 30, textAlign: "left" }}>
                <Type strings={ANALYST_SKILLS} />
              </div>
              <Button
                variant="primary"
                className="cta-btn mt-4"
                href="#projects"
                size="lg"
              >
                See My Work
              </Button>
            </Col>
            <Col md={5}>
              <HomeImage />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
