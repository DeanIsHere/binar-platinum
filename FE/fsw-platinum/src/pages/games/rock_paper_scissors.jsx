import { Component, useState, useEffect } from "react";
import Navbar from "../../components/layout/nav/Navbar";
import img_hand_batu from "../../assets/images/games/rock-paper-scissors/hand_batu.png"
import img_hand_kertas from "../../assets/images/games/rock-paper-scissors/hand_kertas.png"
import img_hand_gunting from "../../assets/images/games/rock-paper-scissors/hand_gunting.png"
import img_icon_refresh from "../../assets/images/games/rock-paper-scissors/icon_refresh.png"
import "../../assets/pages/games/rock_paper_scissors/style.css"
import { insertGameScore } from "../../action/games";
import { checkDataLogin } from "../../action/autentication";

const GameRPS = () => {
    const game_id = "-NG-Fxccy-8f1RZoup6D"
    const uuid = localStorage.getItem('UID');

    let color_chose = '#C4C4C4';
    let color_unchose = '#00000000';
    let have_result = false;

    let text_vs = null;
    let winner = null;
    let winner_text = null;

    let result_text = ["DRAW", "PLAYER 1<br>WIN", "COM<br>WIN"];
    let hand_p = [];
    let hand_com = [];

    let hand = null

    function reset() {
        have_result = false;
        card_hand(0, "com");
        card_hand(0, "player");
        winner.style.display = "none";
        text_vs.style.display = "block";
    }

    function card_hand(handChose, who) {
        for (let i = 1; i <= 3; i++) {
            hand[who][i].style.backgroundColor = color_unchose;
        }

        if (handChose > 0) {
            hand[who][handChose].style.backgroundColor = color_chose;
        }
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function press(you_chose) {
        console.log('Button has been pressed');
        if (have_result) { return; }

        have_result = true;
        let com_chose = getRandomInt(1, 3);
        let who_won = 0;
        let res = you_chose - com_chose;

        card_hand(com_chose, "com");
        card_hand(you_chose, "player");

        if (res != 0) {
            if (res < 2 && res > -2) {
                if (you_chose > com_chose) {
                    who_won = 1;
                } else {
                    who_won = 2;
                }
            } else {
                if (you_chose > com_chose) {
                    who_won = 2;
                } else {
                    who_won = 1;
                }
            }
        }

        winner_text.innerHTML = result_text[who_won];
        winner.style.display = "block";
        text_vs.style.display = "none";

        if (who_won === 1) {
            insertGameScore(game_id, uuid, 2);
        } else if (who_won === 2) {
            insertGameScore(game_id, uuid, -1);
        } else {
            insertGameScore(game_id, uuid, 0);
        }
    }


    useEffect(() => {
        let hand_com_1 = document.getElementById('hand_com_1');
        let hand_com_2 = document.getElementById('hand_com_2');
        let hand_com_3 = document.getElementById('hand_com_3');

        let hand_p_1 = document.getElementById('hand_p_1');
        let hand_p_2 = document.getElementById('hand_p_2');
        let hand_p_3 = document.getElementById('hand_p_3');

        text_vs = document.getElementById('text_vs');
        winner = document.getElementById('winner');
        winner_text = document.getElementById('winner_text');

        hand_p = [null, hand_p_1, hand_p_2, hand_p_3];
        hand_com = [null, hand_com_1, hand_com_2, hand_com_3];

        hand = {
            'player': hand_p,
            'com': hand_com
        }
        reset();
    }, []);



    return (
        <div style={{ backgroundColor: "#9C835F" }}>
            <Navbar bgColor="#4A4A5C" />

            <div className="container">
                <div className="row text-center align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-3 ">
                        <div className="row ">
                            <div className="col-12">
                                <h4 className=""><strong>PLAYER 1</strong></h4>
                            </div>
                            <div className="col-12 container-hand-items">
                                <a href="#" onClick={() => { press(1) }} className="">
                                    <div className="card-hand d-flex ">
                                        <div id="hand_p_1" className="card-hand">
                                            <img src={img_hand_batu} className="img-hand " />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-12  container-hand-items ">
                                <a href="#" onClick={() => { press(2) }}>
                                    <div className="card-hand d-flex ">
                                        <div id="hand_p_2" className="card-hand">
                                            <img src={img_hand_kertas} className="img-hand" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 container-hand-items ">
                                <a href="#" onClick={() => { press(3) }}>
                                    <div className="card-hand d-flex ">
                                        <div id="hand_p_3" className="card-hand d-flex">
                                            <img src={img_hand_gunting} className="img-hand" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-3 container-hand-items justify-content">
                        <h1 id='text_vs' className="text-vs"><strong>VS</strong></h1>
                        <div id='winner'>
                            <div className="card-result d-flex">
                                <div className="d-flex  justify-content-center">
                                    <h4 id='winner_text' className="align-middle ">WHO WIN?</h4>
                                </div>
                            </div>
                        </div>

                        <div className="position-absolute bottom-0 start-5 translate-middle-y">
                            <a href="#" onClick={() => { reset() }} className="">
                                <div className="card-reset d-flex">
                                    <img src={img_icon_refresh} className="img-reset" />
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">
                                <h4><strong>COM</strong></h4>
                            </div>
                            <div className="col-12 container-hand-items ">
                                <div id="hand_com_1" className="card-hand">
                                    <img src={img_hand_batu} className="img-hand" />
                                </div>
                            </div>
                            <div className="col-12 container-hand-items ">
                                <div id="hand_com_2" className="card-hand">
                                    <img src={img_hand_kertas} className="img-hand" />
                                </div>
                            </div>
                            <div className="col-12 container-hand-items ">
                                <div id="hand_com_3" className="card-hand">
                                    <img src={img_hand_gunting} className="img-hand" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}


export default GameRPS