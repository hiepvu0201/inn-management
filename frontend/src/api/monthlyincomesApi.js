import axiosClient from "./axiosClient";
const monthlyincomesApi = {
  getAll() {
    const url = "/api/v1/monthlyincomes/";
    return axiosClient.get(url);
  },
  createMonthlyincomes(monthlyincomes) {
    const url = "/api/v1/monthlyincomes/";
    return axiosClient.post(url, monthlyincomes);
  },
};
export default monthlyincomesApi;
