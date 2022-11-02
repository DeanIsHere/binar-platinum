import { Component } from "react";
import { Container } from "react-bootstrap";
import GameDetailHeader from "../components/GameDetail/GameDetailHeader";
import Navbar from "../components/layout/nav/Navbar";
class GameDetail extends Component{
state ={
    user:{
        
    }
}

render(){
    return(
        <div>
            {/* <Navbar bgColor="#4A4A5C" /> */}
            <Container>
                <GameDetailHeader/>
            </Container>
        </div>
    )
}
}

export default GameDetail;