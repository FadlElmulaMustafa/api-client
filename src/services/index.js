
import axios from 'axios';

export const API_URL = `http://localhost:3000/api/v1/`;
export function api({ path, method, payload }) {
    let options = {};
     if(method === "GET" || method === "get") options = { method,url:`${API_URL+path}/${payload}`}
     else {
         options.method = method;
         options.url = `${API_URL+path}`;
         options.data = payload;
     }

    return new Promise( (resolve, reject) => {
        axios.request(options)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}
