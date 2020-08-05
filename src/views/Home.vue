<template>
  <div class="home">
    <div class="home_table">
      <div class="home-header">
      <!-- <button @click="open">New Customer</button> -->
      <base-button type="button" @click="open" value="New Customer"/>
    </div>
       <data-table :items="items" :fields="fields" @update-customer="updateCustomer"/>
    </div>
    <div class="home_form" v-if="showForm">
     <form action="" @submit="handleSubmit">
        <base-input type="text" label="Name" placeholder="Name" name="name" v-model="customer.name"/>
        <base-input type="text" label="Phone" placeholder="+249--------" name="phone" v-model="customer.phone"/>
        <base-input type="text" label="Address" placeholder="address" name="address" v-model="customer.address"/>
        <!-- <base-input type="submit" value="Submit"/> -->
         <div class="btn">
            <base-button type="submit" value="Save"/>
            <base-button type="submit" value="Cancel" @click="close"/>
         </div>
     </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DataTable from "../components/DataTable.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";
import BASE_URL from '../apis';

export default {
  name: 'Home',
  components: {
    DataTable,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      fields:['Name', 'Phone', 'Address'],
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
        this.customer = item;
        this.showForm = true

      },
      open: function() {
          this.customer = { name:'', phone:'', address:''};
          this.showForm = true
      },
      close: function() {
        this.customer = { name:'', phone:'', address:''};
        this.showForm = false
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
    width: 60%;
 }
 .home_form {
    float: right;
    width: 30%;
    margin-top: 30px;
    margin-right: 2%;
    border: 1px solid #d8d1d1;
    border-radius: 5px;
    padding: 30px;
    /* margin: 30px 26%; */

 }
</style>