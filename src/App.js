import Router from "./routes/main.js";
import React from "react";
import styles from "./app.module.scss"

function App() {
  return (
    <div className={styles.background}>
      <Router />
    </div>
  );
}

export default App;
