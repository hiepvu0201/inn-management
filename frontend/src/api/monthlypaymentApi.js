import axios from "axios";
import axiosClient from "./axiosClient";
const monthlypaymentsApi = {
  getAll() {
    const url = "/api/v1/monthly-payments/";
    return axiosClient.get(url);
  },
  createmonthlypayments(monthlypayments) {
    const url = "/api/v1/monthly-payments/";
    return axiosClient.post(url, monthlypayments);
  },
  updatemonthlypayments(monthlypayments) {
    const url = `/api/v1/monthly-payments/${monthlypayments.id}`;
    return axiosClient.put(url, monthlypayments.data);
  },
  deletemonthlypayments(monthlypayments) {
    const url = `/api/v1/monthly-payments/${monthlypayments}/delete/`;
    return axiosClient.delete(url);
  },
};
export default monthlypaymentsApi;
