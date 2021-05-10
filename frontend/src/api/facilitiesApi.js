import axiosClient from './axiosClient'
const facilitiesApi={
    getAll(){
        const url = "/api/v1/facilities/";
        return axiosClient.get(url);
    }
}
export default facilitiesApi;