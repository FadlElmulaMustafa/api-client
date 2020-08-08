/* eslint-disable no-unused-vars */
import axios from 'axios';

export default {
    namespaced:true,
    state: {
        customer:null,
        customers:null
    },
    mutations: {
        setCustomer(state) {
            this.state.customer = state;
        },
        setCustomers(state) {
            this.state.customers = state; 
        }
    },
    actions: {
        storeCustomer({ commit, state }, payload) {
            
        },
        updateCustomer({ commit, state }, payload) {

        },
        storeCustomers({ commit, state }, payload) {

        },
        updateCustomers({ commit, state }) {

        }
    }
}