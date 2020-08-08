<template>
  <div class="content">
      <base-dialog  :title="title" ref="baseDialog">
        <ul class="list">
            <li class="list-item">
              <span class="item-label">Name      :</span> {{  customer.name }}
            </li>
             <li class="list-item">
                <span class="item-label">Phone   :</span>{{ customer.phone }}
            </li>
             <li class="item-list">
                 <span class="item-label">Address:</span>{{ customer.address }}
            </li>
        </ul>
        <divider/>
        <div class="contacts"><span>Customer contacts</span></div>
        <div class="content">
             <data-table :items="items" :fields="fields" />
        </div>
      </base-dialog>
  </div>
</template>

<script>
import BaseDialog from './BaseDialog.vue';
import Divider from './Divider.vue';
import DataTable from './DataTable.vue';

export default {
    name:"customer-display-dialog",
    components: {
        BaseDialog,
        Divider,
        DataTable,
    },
    data() {
        return {
            fields:['#', 'Name', 'Phone', 'Address'],
            items:[],
            customer:{name:'', phone:'', address:''},
            title: 'View Customer',
        }
    },
    methods: {
        open({title, item}) {
            this.title = title;
            this.customer = item;
            this.$refs.baseDialog.open();
        },
        close() {
            this.$refs.BaseDialog.close();
        }
    }
}
</script>

<style>
    .list {
        margin-top: 40px;
        list-style-type: none;
        text-align: start;
    }
    .list-item {
        padding-bottom: 7px
    }
    .item-label {
        margin-right: 1.1rem;
        font-size: 16px;
       
    }
    .contacts > span {
        float: left;
        margin-bottom: 20px;
    }
    .content {
        margin-left: 20px;
    }
</style>