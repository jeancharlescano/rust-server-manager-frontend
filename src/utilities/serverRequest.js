import axios from "axios";

export const createServer = async (values) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/server/`, values);
  } catch (error) {
    console.log("🚀 ~ file: serverRequest.js:8 ~ createServer ~ error:", error);
  }
};

export const getAllServer = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export const deleteServerById = async (id) => {
  return await axios
    .delete(`${process.env.REACT_APP_API_URL}/server/delete/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
};
