import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getLeaderBoard } from "../../action/games"
import LeaderboardCard from './leaderboard_card';

const Leaderboard = (props) => {
    const [dataList, setDataList] = useState([]);

    const getData = async () => {
        const data_new = await getLeaderBoard(10)
        setDataList(data_new)
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center', maxWidth: 600 }} className='text-center'>
            <h3 className='text-center mb-4'>LEADER BOARD</h3>
            <span>This is a list of players with the highest score from a combination of all the games they played</span>
            <div style={{ alignItems: 'center', justifyContent: 'center', alignItems: 'center' }} className='w-100 text-start mt-4'>
                {
                    dataList.map((data) => (
                        <LeaderboardCard key={data.id_player} data={data} />
                    ))
                }
            </div>
        </Container >
    )
}

export default Leaderboard