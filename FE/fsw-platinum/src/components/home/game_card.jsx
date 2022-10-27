import { Form, Container, Card, CardGroup, Row, Col, Button } from 'react-bootstrap';

const GameCard = (props) => {
    return (
        <Col className='mt-2'>
            <Card style={{ backgroundColor: '#00000050' }}>
                <Row xs={1} md={2}>
                    <Card.Img variant="top" style={{ maxWidth: 300, maxHeight: 150 }} src={props.image} />
                    <Card.Body className='text-start'>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <div className='text-end mx-3' style={{ position: "relative", bottom: 0 }}>
                            <Button style={{ position: "relative", bottom: 0 }}>Play Game</Button>
                        </div>
                    </Card.Body>
                </Row>
            </Card>
        </Col>
    )
}

export default GameCard