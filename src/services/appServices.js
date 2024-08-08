import axios from "axios";
const getAllUsers = async () => {
  return axios.get("https://randomuser.me/api/?results=100");
};

export { getAllUsers };
