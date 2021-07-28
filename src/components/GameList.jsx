import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import Game from './Game';

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
                    <Route exact path='/'>
                        <ul>
                            {games.map((game, index) => (
                                <li key={index}>
                                    <Link to={`/${game.slug}`}>
                                        <img alt='{game.name} cover' src={game.cover_art} width='150px'></img><br></br>{game.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Route>
                    <Route path='/:game_slug'>
                        <Game />
                        <button type='button' onClick={() => history.goBack()}>Back</button>
                    </Route>
                </>
            ) : (
                <p>Loading game list...</p>
            )}
        </>
    )
}

export default GameList;