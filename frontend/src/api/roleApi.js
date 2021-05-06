import axiosClient from './axiosClient'
const roleApi={
    getAll(){
        const url = "/api/v1/roles/";
        return axiosClient.get(url);
    },
    createRole(){
        const url="/api/v1/roles/";
        return axiosClient.post(url); 
    }
}
export default roleApi;