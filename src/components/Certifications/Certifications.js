import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CertificationCards from "./CertificationCards";
import Particle from "../Particle";
import certificationsData from "../../Assets/certifications.json";

const FILTERS = ["All", "Certificate", "Badge"];

function Certifications() {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredCertifications =
    filter === "All"
      ? certificationsData
      : certificationsData.filter(
          (item) => item.type.toLowerCase() === filter.toLowerCase()
        );

  return (
    <Container fluid className="project-section">
      <Container style={{ padding: "30px 0" }}>
        <h1 className="project-heading">
          My <strong className="purple">Certifications & Badges</strong>
        </h1>
        <p style={{ color: "white" }}>
          Explore my official recognitions — both certificates and badges.
        </p>

        {/* Filter buttons */}
        <div className="filter-buttons" style={{ marginBottom: "20px" }}>
          {FILTERS.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "primary" : "outline-primary"}
              onClick={() => {
                // console.log("Clicked:", tag);
                handleFilterChange(tag);
              }}
              style={{ margin: "5px", color: "white" }}
            >
              {tag}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredCertifications.map((cert, index) => (
            <Col md={4} className="certification-card" key={index}>
              <CertificationCards
                title={cert.title}
                issuer={cert.issuer}
                description={cert.description}
                date={cert.date}
                certLink={cert.certLink}
                imgPath={require(`../../Assets/Certificates/${cert.imgPath}`)}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}

export default Certifications;
