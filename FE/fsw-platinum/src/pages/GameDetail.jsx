import { Component } from "react";
import { Container } from "react-bootstrap";
import { getUserById, CreateUser, updateProfile,getGameInfoById } from "../action/fb_database";
import GameDetailHeader from "../components/GameDetail/GameDetailHeader";
import GameDetailLB from "../components/GameDetail/GameDetailLB";
import Navbar from "../components/layout/nav/Navbar";


class GameDetail extends Component{
state ={
    game_detail : {}
}
handleInsertUser = async() =>{
    console.log("hello")
    // const player = await getUserById('-NGBnpKKUgmugzRfloii')
    const game_detail = await getGameInfoById('-NG-Fxccy-8f1RZoup6D')
    this.setState({
        game_detail : game_detail
    })
    console.log(game_detail)
}
componentDidMount(){
    this.handleInsertUser()
}
render(){
    return(
        <div>
           
            <Container>
                <Navbar/>
                <GameDetailHeader game_detail={this.state.game_detail}/>
                <GameDetailLB/>
            </Container>
            
        </div>
    )
}
}

export default GameDetail;