<template>
  <div class="home">
    <data-table :items="items" :fields="fields" />
  </div>
</template>

<script>
import axios from 'axios';
import DataTable from "../components/DataTable.vue";
import BASE_URL from '../apis';

export default {
  name: 'Home',
  components: {
    DataTable,
  },
  data() {
    return {
      fields:['Name', 'Phone', 'Address'],
      items:[]
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
    }
}
</script>

<style scoped>
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>