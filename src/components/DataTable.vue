<template>
  <div class="table-wrapper">
      <table>
          <thead>
              <tr>
                  <td  v-for="field in fields" :key="field">{{ field }}</td>
              </tr>
          </thead>
          <tr v-for="item in items" :key="item.id">
              <td>{{item.name}}</td>
              <td>{{item.phone}}</td>
              <td>{{item.address}}</td>
              <td>
                   <button v-on:click="handleClick(item.id)">Edit</button>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>


export default {
    name:"data-table",
    props:['fields','items'],
    methods: {
        handleClick(itemId) {
            console.log('OK',itemId);
        }
    }
}
</script>

<style>

</style>