/* eslint-disable no-unused-vars */
import axios from 'axios';
import {API_URL}  from '../../services';

export default {
    namespaced: true,
    state: {
        customer:null,
        customers:null
    },
    mutations: {
        setCustomer(state, payload) {
            state.customer = payload;
        },
        setCustomers(state, payload) {
            state.customers = payload;
        }
    },
    actions: {
       storCustomer({commit}) {
           // Firing http request & commit the response
           axios.get(`${API_URL}customers`)
           .then(res => {
              commit('setCustomers',res.data)
           })
           .catch(e => { });
       }
    }
}