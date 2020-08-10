import axios from 'axios';
import { API_URL } from  '../../services';

export default {
    namespaced: true,
    state: {
        customer:null,
        customers:[]
    },
    mutations: {
        setCustomers(state, payload) {
            state.customers = payload;
        },
        setCustomer(state, payload) {
            state.customer = payload;
        }
    },
    actions: {
        storeCustomers({commit}, payload) {
           commit('setCustomers',payload);
        },
        storeCustomer({commit}, payload) {
            return axios.request({
                method:'POST',
                url:`${API_URL}customers`,
                data:payload
            })
            .then(res => {
                commit('setCustomer', res.data[0]);
            })
        },
        updateCustomer({commit}, payload) {
            return axios.request({
                method:'put',
                url:`${API_URL}customers`,
                data:payload
            })
            .then(res => {
                commit('setCustomer', res.data[0]);
            })
        },
        fetchCustomer({commit}, payload) {
            return axios.request({
                method:'GET',
                url:`${API_URL}customers/${payload}`,
            })
            .then(res => {
                commit('setCustomer', res.data[0]);
            })
        
        },
        fetchCustomers() {
            return new Promise( (resolve, reject) => {
                 axios.request({
                     method: 'GET',
                     url: `${API_URL}customers`,
                 })
                .then(response => resolve(response))
                .catch(error => reject(error));
                
            });
        }
    }
}