import { Card, Row, Col} from "react-bootstrap"
import "./LBCardGame.css";

const LBCardGame = (props) => {
    return (
        <div className="card-lb">
            <Card style={{ backgroundColor: '#00000050' }} className="mt-2 p-3">
            <Row >
                <Col xs="auto">
                    <img src='https://firebasestorage.googleapis.com/v0/b/fb-platinum-echamp.appspot.com/o/profile_img%2FVision.png?alt=media&token=cf172755-240c-4a25-8b4f-476b002d1019' style={{ width: 60, borderRadius: '50%' }} />
                </Col>
                <Col>
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center' }}>
                        <h2 className='text-white'>{props.username}</h2>
                        <span className='text-white'>SCORE: {props.score}</span>
                    </div>
                </Col>
                <Col className="d-flex flex-column align-items-end">
                <h5 className='text-white'>RANK</h5>
                <h1 className='text-white'>{props.index}</h1>
                </Col>
            </Row>
        </Card>
        </div>
        
    )
}

export default LBCardGame