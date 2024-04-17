import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Sinta Sipa'atul Puazah</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} OSIN</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:sintasyfa5@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MdOutlineMailOutline />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sinta-sipa-atul-puazah-b47b81247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/lilypoopsz/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
