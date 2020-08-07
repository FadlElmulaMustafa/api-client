<template>
  <div class="table-wrapper">
      <table class="data-table">
          <thead class="data-table-header">
              <tr class="data-table-header">
                  <td  v-for="field in fields" :key="field">{{ field }}</td>
              </tr>
          </thead>
          <tr class="data-table-row" v-for="item in items" :key="item.id">
              <td class="data-table-col"><base-input type="checkbox" /></td>
              <td class="data-table-col">{{item.name}}</td>
              <td class="data-table-col">{{item.phone}}</td>
              <td class="data-table-col">{{item.address}}</td>
              <td class="data-table-col">
                   <!-- <button v-on:click="handleClick(item)">Edit</button> -->
                   <base-button type="button" value="Edit" @click="handleClick(item)"/>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>

import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
    name:"data-table",
    components:{
        BaseButton,
        BaseInput
    },  
    props:['fields','items'],
    methods: {
        handleClick(item) {
            this.$emit('update-customer',item);
        }
    }
}
</script>

<style scoped>
 .data-table {
    border: 1px solid #d8d1d1;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    text-align: left;
 }
 .data-table-header {
    color: #b5b1b1;
 }
 .data-table-col {
     padding-left: 10px;
     padding-right: 10px;
 }

.data-table-row:nth-child(even) {
    background-color: #ffffff;
 }

 .data-table-row:nth-child(odd) {
    background-color: #efebeb;
 }
 

</style>