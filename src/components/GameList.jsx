import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import '../App.css';
import Game from './Game';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const GameList = () => {
    const [games, setGames] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const games = await _fetchData();
            setGames(games);
        })();
    }, [setGames])

    const _fetchData = async () => {
        const url='http://127.0.0.1:3000'
        const res = await fetch(url).then(res => res.json());
        console.log('response from API is: ', res);
        return res
    }

    return (
        
        <>
            {!!games.length ? (
                <>
                    <div className='games'>
                        <Route exact path='/'>
                            <ListGroup>
                                {games.map((game, index) => (
                                    <ListGroup.Item key={index}>
                                        <Link to={`/${game.slug}`}>
                                            <img alt='{game.name} cover' src={game.cover_art} width='150px'></img><br></br>{game.name}
                                        </Link>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Route>
                        <Route path='/:game_slug'>
                            <Game />
                            <Button onClick={() => history.goBack()}>Back</Button>
                        </Route>
                    </div>
                </>
            ) : (
                <p>Loading game list...</p>
            )}
        </>
    )
}

export default GameList;