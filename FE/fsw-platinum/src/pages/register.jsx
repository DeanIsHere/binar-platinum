import { authFirebase } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../assets/pages/register/styles.css";

import logo from "../assets/images/echamp-white.png";
import Navbar from "../components/layout/nav/Navbar";
import Footer from "../components/layout/footer/Footer";
import { handleRegister, registerUser } from "../action/fb_database";

class Register extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    username: "",
  };

  handleRegister = () => {
    createUserWithEmailAndPassword(
      authFirebase,
      this.state.email,
      this.state.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        registerUser(
          user.uid,
          this.state.name,
          this.state.username,
          this.state.email
        );
        localStorage.setItem("jwt-token", user.accessToken);
        localStorage.setItem("UID", user.uid);
        window.location.href = "/";
        window.close();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#1E1E1E", height: "100%" }}>
        <Navbar bgColor="#4A4A5C" />
        <Container>
          <div className="register">
            <div style={{ backgroundColor: "#B02C25" }}>
              <a className="img_a">
                <img src={logo} className="img_logo" />
              </a>
            </div>
            <div style={{ backgroundColor: "#FFFFFF" }}>
              <h3 className="h3">REGISTER NEW ACCOUNT</h3>
              <Form style={{ padding: "25px 100px" }}>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="username"
                    placeholder="USERNAME"
                    id="username"
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="PASSWORD"
                    id="password"
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="nama"
                    placeholder="NAMA"
                    id="name"
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="E-MAIL"
                    id="email"
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <div className="d-grid gap-2 pb-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={this.handleRegister}
                  >
                    REGISTER
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Register;
