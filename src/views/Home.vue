<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-right menu">
        <dropdown-menu>
          <a href="#"  @click="onCustomerDropdownClicked({item:customer,mode:'NEW'})">New</a>
        </dropdown-menu>
      </div>
    </div>
    <div class="home_table">
       <data-table :items="customers" :fields="fields" @click="onCustomerDropdownClicked"/>
    </div>

      <customer-dialog  title="Create Customer" ref="customerDialog"/>
      <customer-display-dialog ref="customerDisplayDialog"/>
      <alert-dialog ref="alertDialog"/>
      <confrim-dialog ref="confirmDialog"/>

  </div>
</template>

<script>

import DataTable  from "../components/DataTable.vue";
import CustomerDialog from '../components/CustomerDialog';
import AlertDialog from '../components/AlertDialog.vue';
import dropdownMenu from '../components/DropdownMenu.vue';
import CustomerDisplayDialog from '../components/CustomerDisplayDialog';
import ConfrimDialog from '../components/ConfirmDialog.vue';
import { mapState, mapActions } from 'vuex'

let titles = {'NEW':'New Customer','EDIT':'EDIT Customer','DELETE':'Delete Customer'};

export default {
  name: 'Home',
  components: {
    DataTable,
    CustomerDialog,
    AlertDialog,
    dropdownMenu,
    CustomerDisplayDialog,
    ConfrimDialog
  },
  data() {
    return {
      fields:['#', 'Name', 'Phone', 'Address'],
    }
  },
   mounted() {
      this.fetchCustomers().then(res => this.$store.dispatch('customer/storeCustomers',res.data));
      this.fetchCustomer(1)
    },
    computed:{
      ...mapState('customer',['customers','customer'])
    },
    methods: {
      ...mapActions('customer',['storeCustomers','fetchCustomers','fetchCustomer']),
      onCustomerDropdownClicked(params) {
        let mode = params.mode;
        let title = titles[mode];

        if( mode != 'NEW') this.$refs.customerDisplayDialog.open({...params, title});
        else this.$refs.customerDialog.open({ ...params,title});
      },
      openCustomerDialog(){
        this.$refs.customerDialog.open({title:"Create new customer"});
      },
      openAlertDialog() {
        this.$refs.alertDialog.open({ msg:"Recored created successfully", success:false });
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