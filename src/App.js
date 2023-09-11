import logo from './logo.svg';
import './App.scss';
import Board from './Board';
import Game from './Game';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr />
        <Game />

      </header>
    </div>
  );
}

export default App;
