import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import GameList from './components/GameList';

function App() {
  return (
    <div className="App">
      <h1>My RPG Review Site</h1>
      <Router>
        <GameList />
      </Router>
    </div>
  );
}

export default App;
