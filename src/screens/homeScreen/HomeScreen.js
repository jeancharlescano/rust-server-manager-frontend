import logo from "../../assets/img/rust-logo.jpg";
import "./HomeScreen.css";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <header className="screen">
      <div className="center">
        <Link to="/servers">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <p className="clignote">👆 click here 👆</p>
      </div>
    </header>
  );
}

export default HomeScreen;
