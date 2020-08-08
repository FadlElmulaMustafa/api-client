<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-right menu">
        <dropdown-menu>
          <a href="#"  @click="openCustomerDialog">Create</a>
        </dropdown-menu>
      </div>
    </div>
    <div class="home_table">
       <data-table :items="items" :fields="fields" @click="updateCustomer">
       </data-table>
    </div>

       <customer-dialog 
        title="Create Customer"
        ref="customerDialog" >
       </customer-dialog>
       <alert-dialog 
       ref="alertDialog"></alert-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import DataTable  from "../components/DataTable.vue";
import CustomerDialog from '../components/customerDialog.vue';
import AlertDialog from '../components/AlertDialog.vue';
import dropdownMenu from '../components/DropdownMenu.vue';

import BASE_URL from '../apis';

export default {
  name: 'Home',
  components: {
    DataTable,
    CustomerDialog,
    AlertDialog,
    dropdownMenu
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
      showForm:false,
        kebab : '&#07;'
    }
  },
   created() {
        axios.get(`${BASE_URL}customers`)
            .then(res => {
            // JSON responses are automatically parsed.
            this.items = res.data;
            console.log(res);
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
        this.clearCustomer();
          this.$refs.customerDialog.open();
      },
      openAlertDialog() {
        this.$refs.alertDialog.open({ msg:"Recored created successfully", success:false });
      },
      openDropdownMenu() {
        this.$refs.dropdowmMenu.open();
      },
      clearCustomer() {
        let customer = {name:"",phone:"",address:""};
        this.customer = customer;
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
   padding: 8px;
 }
 .header-header-right {
   float: left;
   margin-right: 20px;
 }
 .home_table {
    float: left;
    width: 100%;
 }
 .menu {
  float: left;;
 }
</style>