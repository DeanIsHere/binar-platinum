import { Component, useState, useEffect, useCallback, Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Form, Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
// https://react-unity-webgl.dev/
// https://github.com/jeffreylanters/react-unity-webgl/discussions/264

function GameSpaceWar() {
    const [isGameOver, setIsGameOver] = useState(false);
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({
        loaderUrl: "/game/space_war/BinarSpaceWar.loader.js",
        dataUrl: "/game/space_war/BinarSpaceWar.data.unityweb",
        frameworkUrl: "/game/space_war/BinarSpaceWar.framework.js.unityweb",
        codeUrl: "/game/space_war/BinarSpaceWar.wasm.unityweb",
    });

    sendMessage("JavascriptHook", "ChangeData", "HarlanSR");


    const handleGameOver = useCallback((userName, score) => {
        setIsGameOver(true);
        setUserName(userName);
        setScore(score);
    }, []);

    useEffect(() => {
        addEventListener("GameOver", handleGameOver);
        return () => {
            removeEventListener("GameOver", handleGameOver);
        };
    }, [addEventListener, removeEventListener, handleGameOver]);

    return (
        <Container>

            <div className="p-5">
                <Unity
                    style={{
                        width: "100%",
                        justifySelf: "center",
                        alignSelf: "center",
                    }}
                    unityProvider={unityProvider} />
            </div>
            {(score) ?
                <div>
                    <h3>Username: {userName}</h3>
                    <h3>Score: {score}</h3>
                </div>
                :
                null
            }
        </Container>
    )
}


export default GameSpaceWar