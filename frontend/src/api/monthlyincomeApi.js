import axios from "axios";
import axiosClient from "./axiosClient";
const monthlyincomesApi = {
  getAll() {
    const url = "/api/v1/monthly-incomes/";
    return axiosClient.get(url);
  },
  createmonthlyincome(rules) {
    const url = "/api/v1/monthly-incomes/";
    return axiosClient.post(url,rules);
  },
  updatemonthlyincome(rules) {
    const url = `/api/v1/monthly-incomes/${rules.id}`;
    return axiosClient.put(url, rules.data);
  },
  deletemonthlyincome(rules) {
    const url = `/api/v1/monthly-incomes/${rules}/delete/`;
    return axiosClient.delete(url);
  },
};
export default monthlyincomesApi;
