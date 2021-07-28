import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Game = () => {
    const { game_slug } = useParams();
    const [game, setGame] = useState([]);

    useEffect(() => {
        (async () => {
            const url = `http://localhost:3000/${game_slug}`;
            const game = await fetch(url).then(res => res.json());
            setGame(game);
            console.log('the response is: ', game)
        }
        )();
    } , [setGame, game_slug]);

    return (
        <p>
            <ul>
                <li><img alt='{game.name} cover' src={game.cover_art} width='150px'></img></li>
                <li>{game.name}</li>
                <li>{game.genre}</li>
                <li>{game.release_date}</li>
                <li>{game.game_description}</li>
                <li>{game.number_review}</li>
                <li>{game.text_review}</li>
            </ul>
        </p>
    );
}

export default Game;