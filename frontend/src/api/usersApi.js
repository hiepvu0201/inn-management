import axios from "axios";
import axiosClient from "./axiosClient";
const usersApi = {
  getAll() {
    const url = "/api/v1/users/";
    return axiosClient.get(url);
  },
  // createuserwithimg(){
  //   const url= "/api/v1/users/";
  //   return axiosClient(url,users)
  // }
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
  checkin(params){
    const url = `/api/v1/users/checkin/?roomNo=${params.roomNo}&userName=${params.userName}`;
    return axiosClient.get(url);
  },
   checkout(params){
    const url = `/api/v1/users/checkout/?userName=${params.userName}`;
    return axiosClient.get(url);
  },
  getimage(file){
    const url=`/downloadFile/${file}`;
    return axiosClient.get(url);
  },
  getuserid(){
    const url=`/api/v1/users/${26}`;
    return axiosClient.get(url);
  },
  
};
export default usersApi;
