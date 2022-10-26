import '../assets/home/styles.css';
import '../assets/home/slideshow.css';
import '../assets/home/scripts.js';

import logo from '../assets/images/echamp-white.png'
import btnSlide from '../assets/images/scroll_down.svg'

import { Form, Container, Card, CardGroup, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#2B2D33', color: '#fff' }}>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#page-top"><img src={logo} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-5 py-4 py-lg-0">
              <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
              <li class="nav-item"><a class="nav-link" href="#game">GAME</a></li>
              <li class="nav-item"><a class="nav-link" href="#leaderboard">LEADERBOARD</a></li>
            </ul>
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item"><a class="nav-link" href="#">LOGIN</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="" style={style['header']}>
        <div class="container">
          <div class="masthead-subheading" style={{ fontSize: 25 }}><b>FIND YOUR FAVORITE GAME</b></div>
          <div class="masthead-heading text-uppercase" style={{ fontSize: 60 }}><b>PLAY ONLINE</b></div>
        </div>
      </header >

      <center>
        <div style={style['header_card']}>
          <h2>ABOUT</h2>
          <span>ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website ini adalah tempat tulisan detail tentang website </span>
        </div>
      </center>

      <section class="page-section " id="game">
        <center>
          <div class="col-lg-8 col-sm-12">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <span data-target="#carouselExampleIndicators" class="dot active" data-slide-to="0"></span>
                <span data-target="#carouselExampleIndicators" class="dot" data-slide-to="1"></span>
                <span data-target="#carouselExampleIndicators" class="dot" data-slide-to="2"></span>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305" alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305" alt="Second slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <img src={btnSlide} style={{ transform: "rotate(90deg)" }} />
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <img src={btnSlide} alt="" style={{ transform: "rotate(-90deg)" }} />
              </a>
            </div>

            <Row xs={1} md={3} className="g-4 text-dark" >
              <Col></Col>
              <Col></Col>
              <Col>
                <Form>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Search Game" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row xs={1} md={1} className="g-4" >
              <Col>
                <Card style={{ backgroundColor: '#00000050' }}>
                  <Row xs={1} md={2}>
                    <Card.Img variant="top" style={{ maxWidth: 300 }} src="https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=2000" />
                    <Card.Body className='text-start'>
                      <Card.Title>Rock Paper Scissors Online</Card.Title>
                      <Card.Text>
                        Rock Paper Scissors is a traditional game from japane
                      </Card.Text>
                    </Card.Body>
                  </Row>
                </Card>
              </Col>
            </Row>

          </div>
        </center>

      </section>

    </div >
  )
}


var style = {
  header: {
    backgroundImage: "url(https://echamp.id/assets/img/header-bg.jpg)",
    paddingTop: 250,
    paddingBottom: 200,
    textAlign: 'center',
    color: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },
  header_card: {
    backgroundColor: '#3E4552',
    maxWidth: 800,
    padding: 50,
    borderRadius: 20,
    top: -80,
    position: 'relative'
  }
};


export default Home