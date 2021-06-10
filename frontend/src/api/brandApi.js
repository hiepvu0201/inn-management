import axiosClient from './axiosClient'
const brandApi={
    getAll(){
        const url = "/api/v1/branches/";
        return axiosClient.get(url);
    }
}
export default brandApi;