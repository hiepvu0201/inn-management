import axiosClient from './axiosClient'
const contractsApi = {
  getAll() {
    const url = "/api/v1/contracts/";
    return axiosClient.get(url);
  },
  createcontracts(contracts) {
    const url = "/api/v1/contracts/";
    return axiosClient.post(url, contracts);
  },
  deletecontracts(contracts) {
    const url = `/api/v1/contracts/${contracts}/delete/`;
    return axiosClient.delete(url);
  },
  updatecontracts(contracts) {
    const url = `/api/v1/contracts/${contracts.id}/`;
    return axiosClient.put(url, contracts.data);
  },
};
export default contractsApi;