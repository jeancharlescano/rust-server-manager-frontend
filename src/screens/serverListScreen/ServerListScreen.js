import React, { useEffect, useState } from "react";
import styles from "./ServerListScreen.module.scss";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import { getAllServers } from "../../utilities/serverRequest";

const ServerListScreen = () => {
  const [servers, setServers] = useState([]);

  const getServers = async () => {
    const data = await getAllServers();
    setServers(data.data);
    console.log(
      "🚀 ~ file: ServerListScreen.js ~ line 8 ~ ServerListScreen ~ servers",
      servers
    );
  };

  const loadServers = () => {
    return servers.map((server) => (
      <tr>
        <th>{server.id}</th>
        <th>{server.name}</th>
        <th>{server.max_player}</th>
        <th>{server.wipe_type}</th>
        <th>{server.wipe_day}</th>
      </tr>
    ));
  };

  useEffect(() => {
    getServers();
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className={styles.screen}>
        <div className={styles.container}>
          <table>
            <thead className={styles.color}>
              <tr className={styles.title}>
                <th>Id</th>
                <th>Name</th>
                <th>Max Player</th>
                <th>Wipe Type</th>
                <th>Wipe Day</th>
              </tr>
            </thead>
            <tbody className={styles.bgcolor}>{loadServers()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServerListScreen;
