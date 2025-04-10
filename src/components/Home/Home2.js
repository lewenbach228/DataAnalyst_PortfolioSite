import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import myImg from "../../Assets/avatar.svg";
import Type from "./Type";
import Particle from "../Particle";
import "./Home.css";
import { SOCIAL_LINKS } from "../../constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi, I'm <span className="highlight">Ablamvi AGBONAGBAN</span>
              </h1>
              <h2 className="subheading">
                Data Analyst | Business Intelligence Expert
              </h2>

              <div className="typewriter-wrapper">
                <p className="typewriter-label">
                  Specialized in <Type />
                </p>
              </div>

              <div className="cta-buttons">
                <Button
                  as={Link}
                  to="/project"
                  variant="success"
                  className="cta-btn"
                >
                  View My Work
                </Button>
              </div>
            </Col>

            <Col md={5} className="home-image">
              <Tilt
                tiltEnable={false}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
              >
                <img
                  src={myImg}
                  alt="Data Analytics Visualization"
                  className="img-fluid illustration"
                />
              </Tilt>
              <div className="social-icons">
                <a
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-button"
                >
                  <AiFillLinkedin className="social-icon" />
                </a>
                <a
                  href={SOCIAL_LINKS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-button"
                  style={{ marginLeft: "10px" }}
                >
                  <AiFillGithub className="social-icon" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <Particle /> */}
      </Container>
    
  );
};

export default Home;
