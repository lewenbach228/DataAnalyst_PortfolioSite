import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Ablamvi AGBONAGBAN</span>,  
            a passionate <span className="purple">Data Analyst</span> who loves turning raw data into powerful insights.
            <br />
            <br />
            I specialize in digging deep into datasets to uncover patterns, trends, and opportunities. 
            My toolbox includes Python, SQL, Power BI, and a knack for storytelling through data.
            <br />
            <br />
            I believe in data-driven decision making, but I also know when to trust my intuition. 😉
            <br />
            <br />
            When I’m not slicing through spreadsheets or visualizing dashboards, you can find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech and AI tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about psychology and personal growth
            </li>
            <li className="about-activity">
              <ImPointRight /> Dreaming up business ideas and building them one step at a time
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Data tells stories. I help make sure people listen."
          </p>
          <footer className="blockquote-footer">Ablamvi AGBONAGBAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
