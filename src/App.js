import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default App;
