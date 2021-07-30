import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';

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
        <>
        <div className='game'>
            <ListGroup>
                <ListGroup.Item>{game.name}</ListGroup.Item>
                <ListGroup.Item><img alt='{game.name} cover' src={game.cover_art} width='150px'></img></ListGroup.Item>
                <ListGroup.Item>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={game.screenshot_1}
                            alt="first screenshot"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={game.screenshot_2}
                            alt="second screenshot"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={game.screenshot_3}
                            alt="third screenshot"
                            />
                        </Carousel.Item>
                    </Carousel>
                </ListGroup.Item>
                <ListGroup.Item>{game.genre}</ListGroup.Item>
                <ListGroup.Item>{game.release_date}</ListGroup.Item>
                <ListGroup.Item>{game.game_description}</ListGroup.Item>
                <ListGroup.Item>{game.number_review}</ListGroup.Item>
                <ListGroup.Item>{game.text_review}</ListGroup.Item>
            </ListGroup>
            
        </div>
        </>
    );
}

export default Game;