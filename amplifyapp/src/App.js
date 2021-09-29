import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dejate llevar para que sientas la energia
        </p>
        <a
          className="App-link"
          href="https://facebook.com/castillolacone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sigue la energia
        </a>
      </header>
    </div>
  );
}

export default App;
