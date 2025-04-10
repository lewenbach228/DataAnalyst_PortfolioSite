import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import projectsData from "../../Assets/projects.json";
import "./Projects.css"; // <-- Pour les styles personnalisés

const FILTERS = [
  "All",
  "Power BI",
  "Tableau",
  "Excel",
  "Python",
  "SQL",
  "Storytelling",
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (tag) => {
    setFilter(tag);
  };

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase())
        );

  return (
    <Container fluid className="project-section">
      <Container style={{ padding: "30px 0" }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've built — data-driven, code-polished, and a
          touch of AI.
        </p>

        <div className="filter-buttons" style={{ marginBottom: "20px" }}>
          {FILTERS.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "primary" : "outline-primary"}
              onClick={() => {
                // console.log("Clicked:", tag);
                handleFilterChange(tag);
              }}
              style={{
                color: "white",
                margin: "5px",
              }}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Display filtered projects */}
        <Row className="justify-content-center pb-4">
          {filteredProjects.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <ProjectCards
                imgPath={require(`../../Assets/Projects/${project.imgPath}`)}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                isBlog={project.isBlog}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}

export default Projects;
