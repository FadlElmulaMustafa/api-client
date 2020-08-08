
import axios from 'axios';

export const API_URL = `http://localhost:3000/api/v1/`;
export function fetchData({ path, method, payload, query }) {
    return new Promise( (resolve, reject) => {
        axios.request({
            method,
            url:`${API_URL+path}${query ? query:'' }`,
            data: payload
        })
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}
