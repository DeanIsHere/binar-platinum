import { Component } from "react";
import { Container } from "react-bootstrap";
import { leaderBoardByGame, playerRank, totalPointByUser, updateProfile } from "../action/fb_database";
import GameDetailHeader from "../components/GameDetail/GameDetailHeader";
import GameDetailLB from "../components/GameDetail/GameDetailLB";
import Navbar from "../components/layout/nav/Navbar";

class GameDetail extends Component{
state = {

}

// async componentDidMount() {


// // console.log('test', await leaderBoardByGame('-NG-Fxccy-8f1RZoup6D'))
// console.log('test 2', await updateProfile('-NGGRw7SImP_UUIPJ2dZ','dean','deanqq','garut','IG'))
// }

render(){
    return(
        <div>
           
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