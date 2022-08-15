import logo from "../../assets/img/rust-logo.jpg";
import styles from "./HomeScreen.module.scss";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <header className={styles.screen}>
      <div className={styles.center}>
        <Link to="/servers">
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <p className={styles.clignote}>👆 click here 👆</p>
      </div>
    </header>
  );
}

export default HomeScreen;
