import axiosClient from './axiosClient'
const electricityWaterApi = {
  getAll() {
    const url = "/api/v1/electricity-water/";
    return axiosClient.get(url);
  },
};
export default electricityWaterApi;