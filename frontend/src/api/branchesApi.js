import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import axiosClient from "./axiosClient";
const branchesApi = {
  getAll() {
    const url = "/api/v1/branches/";
    return axiosClient.get(url);
  },
  createbranch(branch) {
    const url = "/api/v1/branches/";
    return axiosClient.post(url,branch);
  },
  deletebranch(branch) {
      const url=`/api/v1/branches/${branch}/delete/`;
      return axiosClient.delete(url);
  },
  updatebranch(branch){
      const url=`/api/v1/branches/${branch.id}/`;
      return axiosClient.put(url,branch.data);
  },
  getallbranchesbyusername(branch){
    const url = `/api/v1/branches/userName/?userName=${branch}`;
    return axiosClient.get(url);
  }
};
export default branchesApi;
