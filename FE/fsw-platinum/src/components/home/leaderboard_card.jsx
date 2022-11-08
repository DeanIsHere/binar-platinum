import { Card, Row, Col } from "react-bootstrap"

const LeaderboardCard = (props) => {
    return (
        <Card style={{ backgroundColor: '#00000050' }} className="mt-2 p-3">
            <Row >
                <Col xs="auto">
                    <img src={props.data.image} style={{ width: 60, borderRadius: '50%' }} />
                </Col>
                <Col>
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center' }}>
                        <h5 className='text-start'>{props.data.name}</h5>
                        <span className='text-start'>SCORE: {props.data.score}</span>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default LeaderboardCard