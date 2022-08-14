import logo from "./assets/img/rust-logo.jpg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/servers">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
    </div>
  );
}

export default App;
