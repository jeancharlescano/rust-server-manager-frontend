import React from "react";
import useSWR from "swr";
import { getAllServer } from "../../utilities/serverRequest.js";
import styles from "./ServerListScreen.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "../../components/headerComponent/HeaderComponent.js";
import { deleteServerById } from "../../utilities/serverRequest.js";

const ServerListScreen = () => {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/server/`,
    getAllServer
  );

  if (error) return <>Erreur de chargement</>;
  if (!data) return null;

  const deleteServer = (id) => {
    try {
      deleteServerById(id);
      window.location.reload();
    } catch (error) {
      console.log(
        "🚀 ~ file: ServerListScreen.js:18 ~ deleteServer ~ error:",
        error
      );
    }
  };

  const displayServer = () => {
    return data.map((data) => (
      <tr key={data.id}>
        <th
          className={styles.tableContent}
          onClick={() => {
            deleteServer(data.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} className={styles.deleteBtn} />
        </th>
        <th className={styles.tableContent}>{data.name}</th>
        <th className={styles.tableContent}>{data.max_player}</th>
        <th className={styles.tableContent}>{data.wipe_type}</th>
        <th className={styles.tableContent}>{data.wipe_day}</th>
        <th className={styles.tableContent}>{data.wipe_time}</th>
      </tr>
    ));
  };

  return (
    <div>
      <HeaderComponent />
      <div className={styles.screen}>
        <div className={styles.container}>
          <table>
            <thead className={styles.color}>
              <tr className={styles.title}>
                <th></th>
                <th>Nom</th>
                <th>Nombre de slot</th>
                <th>Type de wipe</th>
                <th>Date de wipe</th>
                <th>Heure du wipe</th>
              </tr>
            </thead>
            <tbody className={styles.bgcolor}>{displayServer()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServerListScreen;
