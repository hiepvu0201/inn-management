import axios from "axios";
import axiosClient from "./axiosClient";
const usersApi = {
  getAll() {
    const url = "/api/v1/users/";
    return axiosClient.get(url);
  },
  createusers(users) {
    const url = "/api/v1/users/";
    return axiosClient.post(url, users);
  },
  updateusers(users) {
    const url = `/api/v1/users/${users.id}`;
    return axiosClient.put(url, users.data);
  },
  deleteusers(users) {
    const url = `/api/v1/users/${users}/delete/`;
    return axiosClient.delete(url);
  },
};
export default usersApi;
