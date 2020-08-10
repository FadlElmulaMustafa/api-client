<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-right menu">
        <dropdown-menu>
          <a href="#"  @click="onCustomerDropdownClicked({item:customer,mode:'NEW'})">Create</a>
        </dropdown-menu>
      </div>
    </div>
    <div class="home_table">
       <data-table :items="customers" :fields="fields" @click="onCustomerDropdownClicked"/>
    </div>

       <customer-dialog 
        title="Create Customer"
        ref="customerDialog" >
       </customer-dialog>
        <customer-display-dialog ref="customerDisplayDialog"/>
       <alert-dialog 
       ref="alertDialog"></alert-dialog>
  </div>
</template>

<script>
import DataTable  from "../components/DataTable.vue";
import CustomerDialog from '../components/customerDialog.vue';
import AlertDialog from '../components/AlertDialog.vue';
import dropdownMenu from '../components/DropdownMenu.vue';
import CustomerDisplayDialog from '../components/CustomerDisplayDialog';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    DataTable,
    CustomerDialog,
    AlertDialog,
    dropdownMenu,
    CustomerDisplayDialog,
  },
  data() {
    return {
      fields:['#', 'Name', 'Phone', 'Address'],
      showForm:false,
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
      onCustomerDropdownClicked({item, mode}) {
        if (mode === 'VIEW') {
              this.$refs.customerDisplayDialog.open({item:item, title:"View Customer"});
        }else if(mode === 'EDIT'){
              this.$refs.customerDialog.open({item:item, title:"Edit Customer"});
        }else if (mode === 'REMOVE') {
              this.$refs.customerDialog.open({item:item, title:"Remove Customer"});
        }else if (mode == "NEW") {
              this.$refs.customerDialog.open({mode:"NEW", item:null, title:"New Customer"});
        }

        console.log(item)

      },
      handleSubmit: function(e) {
         e.preventDefault();
         console.log(this.customer);
      },
      updateCustomer: function(item) {
        this.$refs.customerDialog.open({item:item, title:"Edit Mode"});
      },
      openCustomerDialog(){
        this.clearCustomer();
          this.$refs.customerDialog.open({title:"Create new customer"});
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