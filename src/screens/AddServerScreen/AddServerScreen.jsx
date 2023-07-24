import React, { useRef } from "react";
import styles from "./AddServerScreen.module.scss";
import HeaderComponent from "../../components/headerComponent/HeaderComponent.js";
import { useNavigate } from "react-router-dom";
import { createServer } from "../../utilities/serverRequest.js";
const AddServerScreen = () => {
  const navigate = useNavigate();
  const srvName = useRef();
  const nbSlot = useRef();
  const wipeType = useRef();
  const wipeDay = useRef();
  const wipeTime = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name: srvName.current.value,
      maxPlayer: nbSlot.current.value,
      wipeType: wipeType.current.value,
      wipeDay: wipeDay.current.value,
      wipeTime: wipeTime.current.value,
    };
    console.log(
      "🚀 ~ file: AddServerScreen.jsx:19 ~ createServer ~ values:",
      values
    );
    try {
      await createServer(values);
      navigate("/servers");
    } catch (error) {
      console.log("🚀 ~ file: AddTransaction.js:27 ~ insertTx ~ error", error);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className={styles.main}>
        <main className={styles.container}>
          <h1>Nouveau Serveur</h1>
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Nom du serveur"
                ref={srvName}
                className={styles.inputText}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="number"
                placeholder="nombre de slots"
                ref={nbSlot}
                className={styles.inputText}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Type de wipe (weekly / biweekly / monthly...)"
                ref={wipeType}
                className={styles.inputText}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Jour de wipe"
                ref={wipeDay}
                className={styles.inputText}
              />
            </div>
            <div className={styles.inputContainer}>
              <input type="time" ref={wipeTime} className={styles.inputText} />
            </div>
            <button className={styles.btn} type="submit">
              Créer
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default AddServerScreen;
