import React from "react";
import { Card, InputGroup, Form, Row, Col, Container } from "react-bootstrap";
import "./EditProfileBox.css";

const EditProfileBox = () => {
  return (
    <section class="section-detail__game--history">
      <Card
        style={{
          backgroundColor: "#3B3838",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          height: "50vh",
        }}
      >
        {/* Game Leader Board Top */}
        <div style={{ backgroundColor: "#464343" }}>
          <Card.Header className="detail-game__history--header">
            HARLAN'S PROFILE

          </Card.Header>
        </div>

        {/* Game Leader Board Bottom */}
        
        <Card.Body>
        <Container>
          <Row>
            <Col xs='4'>
              <Card.Img
              className="edit-header__left--img"
              src='https://pbs.twimg.com/media/EYNdenzVAAAuZKe.jpg'/>
            </Col>
            <Col>
              <div className="input-title inputBox">
                <Form.Label>Username</Form.Label>
                <InputGroup className="mb-3 ">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                </InputGroup>
              </div>
              <div className="input-title inputBox">
                <Form.Label>Full Name</Form.Label>
                <InputGroup className="mb-3 ">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                </InputGroup>
              </div>
              <div className="input-title inputBox">
                <Form.Label>Email</Form.Label>
                <InputGroup className="mb-3 ">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                </InputGroup>
              </div>
              <div>
              <Form.Group controlId="formFile" className="mb-3 input-title img-input">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              </div>
            </Col>
          </Row>
        </Container>
        </Card.Body>
        
      </Card>
    </section>
  );
};


export default EditProfileBox;
