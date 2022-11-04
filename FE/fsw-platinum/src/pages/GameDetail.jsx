import { Component } from "react";
import { Container } from "react-bootstrap";
import GameDetailHeader from "../components/GameDetail/GameDetailHeader";
import GameDetailLB from "../components/GameDetail/GameDetailLB";
import Navbar from "../components/layout/nav/Navbar";


class GameDetail extends Component{
state ={
}

render(){
    return(
        <div>
            {/* <Navbar bgColor="#4A4A5C" /> */}
            <Container>
                <Navbar/>
                <GameDetailHeader/>
                <GameDetailLB/>
            </Container>
        </div>
    )
}
}

export default GameDetail;