/* eslint-disable no-unused-vars */
// import axios from 'axios';
import {fetchData}  from '../../services';

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
       storCustomer({rooteState, dispatch}, payload) {
           // Firing http request & commit the response
        //    fetchData({method:'GET', path:'customers',payload})
        //    .then(response => )
       }
    }
}