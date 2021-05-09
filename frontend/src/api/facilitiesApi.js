import axios from "axios";
import axiosClient from "./axiosClient";
const facilitiesApi = {
  getAll() {
    const url = "/api/v1/facilities/";
    return axiosClient.get(url);
  },
  createfacilities(facility) {
    const url = "/api/v1/facility/";
    return axiosClient.post(url, facility);
  },
  deletefacilities(facility) {
    const url = "/api/v1/facilities/${facility.id}/delete/";
    return axiosClient.delete(url,facility.data);
  },
  updatefacilities(facility) {
    const url = "/api/v1/facilities/${facility.id}/";
    return axiosClient.put(url);
  },
};
export default facilitiesApi;
