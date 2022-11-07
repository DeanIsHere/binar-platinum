import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { checkDataLogin } from '../../action/autentication';

const GameCard = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        checkDataLogin(setIsLogin)
    }, []);

    // console.log(props.key)
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
                            {
                                (props.url) ?
                                    (isLogin) ?
                                        <div>
                                            <a style={{ position: "relative", bottom: 0 }} href={props.url} className="btn btn-success mx-2">PLAY GAME</a>
                                            <a style={{ position: "relative", bottom: 0 }} href={`/detail/-NG-Fxccy-8f1RZoup6D`} className="btn btn-success">DETAIL</a>
                                        </div>
                                        :
                                        <div>
                                            <a style={{ position: "relative", bottom: 0 }} className="btn btn-secondary mx-2" disabled>LOGIN BEFORE PLAY</a>
                                            <a style={{ position: "relative", bottom: 0 }} href={`/detail/-NG-Fxccy-8f1RZoup6D`} className="btn btn-success">DETAIL</a>
                                        </div>

                                    :
                                    <Button style={{ position: "relative", bottom: 0 }} className="btn btn-secondary" disabled>COMING SOON</Button>
                            }
                        </div>
                    </Card.Body>
                </Row>
            </Card>
        </Col>
    )
}

export default GameCard