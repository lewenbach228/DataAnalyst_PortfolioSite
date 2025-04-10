import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCertificate } from "react-icons/fa";

function CertificationCards({
  title,
  issuer,
  description,
  date,
  certLink,
  imgPath
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{issuer}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Card.Footer>
          <small className="text-muted">Certified in {date}</small>
        </Card.Footer>

        <Button variant="primary" href={certLink} target="_blank">
          <FaCertificate /> &nbsp; View Certification
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificationCards;
