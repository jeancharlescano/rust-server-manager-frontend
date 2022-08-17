import axios from "axios";

export const getAllServers = async () => {
  return await axios
    .get("http://localhost:3001/api/server/")
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
};
