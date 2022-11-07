import { Component } from "react";
import { Container } from "react-bootstrap";
import { getUserById, CreateUser, updateProfile,getGameInfoById, historyByUser, retrieveAllUser } from "../action/fb_database";
import GameDetailHeader from "../components/GameDetail/GameDetailHeader";
import GameDetailLB from "../components/GameDetail/GameDetailLB";
import Navbar from "../components/layout/nav/Navbar";


class GameDetail extends Component{
state ={

}
async componentDidMount(){
}
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