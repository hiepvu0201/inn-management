import axiosClient from "./axiosClient";
const customerApi = {
  getAll() {
    const url = "/api/v1/users/";
    return axiosClient.get(url);
  },
  createCustomer(customer) {
    const url = "/api/v1/users/";
    return axiosClient.post(url,customer);
  },
};
export default customerApi;
