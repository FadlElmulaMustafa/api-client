export default {
    namespaced:true,
    state:{
        customer:null,
        customers:[]
    },
    mutations:{
        setCustomer(payload){
            this.state.customer = payload
        },
        setCustomers(payload){
            this.state.customers = payload
        }
    },
    actions:{
    
    }
}