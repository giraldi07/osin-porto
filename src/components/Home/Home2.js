import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar3.png";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a communication graduate with a specialization in broadcasting from
              <i>
                <b className="purple">Telkom University. </b>
              </i>
              <br />
              <br />
              strong foundation in effective communication strategies. My proficiency in public speaking allows me to
              convey ideas with confidence and clarity.
              <br />
              <br />
              My passion for the arts fuels my creativity, and I find joy in activities
              such as editing and graphic design, where I can bring visual concepts to life.
              <br />
              <br />
              Through my academic journey
              and personal interests, I have developed a well-rounded skill set that merges communication expertise with
              artistic flair.
              <br />
              <br />
              Additionally, I am adept in utilizing tools such as Microsoft Excel, Google Sheets, and Microsoft
              word, which enhances my ability to organize, analyze data, and create visually appealing content.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{ width: '250px', height: '250px' }} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:sintasyfa5@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdOutlineMailOutline />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sinta-sipa-atul-puazah-b47b81247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lilypoopsz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
