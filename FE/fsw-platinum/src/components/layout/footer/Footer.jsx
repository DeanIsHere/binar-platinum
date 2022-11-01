import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-section bg-dark py-5 text-center" id="footer">
      <Container>
        <span className="span-footer">Terms of Service</span>
      </Container>
    </footer>
  );
};

export default Footer;
