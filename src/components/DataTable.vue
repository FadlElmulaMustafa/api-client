<template>
  <div class="table-wrapper">
      <table class="data-table">
          <thead class="data-table-header">
              <tr class="data-table-header">
                  <td  v-for="field in fields" :key="field">{{ field }}</td>
              </tr>
          </thead>
          <tr class="data-table-row" v-for="(item, index) in items" :key="item.id" >
              <td class="data-table-col">{{++index}}</td>
              <td class="data-table-col">{{item.name}}</td>
              <td class="data-table-col">{{item.phone}}</td>
              <td class="data-table-col">{{item.address}}</td>
              <td class="data-table-col">
                  <dropdown-menu>
                        <a href="#"  @click="handleClick({item, mode:'VIEW'})">View</a>
                        <a href="#"  @click="handleClick({item, mode:'EDIT'})">Edit</a>
                        <a href="#"  @click="handleClick({item, mode:'REMOVE'})">Remove</a>
                  </dropdown-menu>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
import DropdownMenu from '../components/DropdownMenu.vue';

export default {
    name:"data-table",
    components:{
        DropdownMenu,
    },  
    props:['fields','items'],
    methods: {
        handleClick(item) {
            this.$emit('click',item);
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