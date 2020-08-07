<template>
  <div class="home">
    <div class="home_table">
      <div class="home-header">
        <base-button type="button" @click="openCustomerDialog" value="New Customer"/>
      </div>
       <data-table :items="items" :fields="fields" @update-customer="updateCustomer"/>
    </div>
       <customer-dialog 
        title="Create Customer"
        ref="customerDialog" >

       </customer-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import DataTable  from "../components/DataTable.vue";
import BaseButton from "../components/BaseButton.vue";
import CustomerDialog from '../components/customerDialog.vue';

import BASE_URL from '../apis';

export default {
  name: 'Home',
  components: {
    DataTable,
    BaseButton,
    CustomerDialog,
  },
  data() {
    return {
      fields:['#', 'Name', 'Phone', 'Address'],
      items:[],
      customer:{
        name:"",
        phone:"",
        address:""
      },
      showForm:false
    }
  },
   created() {
        axios.get(`${BASE_URL}GetCustomers`)
            .then(res => {
            // JSON responses are automatically parsed.
            this.items = res.data.data;
            console.log(res.data.data);
            })
            .catch(e => {
            //   this.errors.push(e)
            console.log('Get data error ', e);
            
            });
    },
    methods: {
      handleSubmit: function(e) {
         e.preventDefault();
         console.log(this.customer);
      },
      updateCustomer: function(item) {
        this.$refs.customerDialog.open(item);
      },
      openCustomerDialog(){

      }
    }
}
</script>

<style scoped>
 .home {
   width: 100%;
   height: 100%;
   margin-top: 30px;

 }
 .home-header{
   margin: 5px;
   float: left;
 }
 .home_table {
    float: left;
    width: 100%;
 }
</style>