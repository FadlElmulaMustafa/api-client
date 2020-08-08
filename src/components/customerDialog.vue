<template>
    <base-dialog title="Create Cutomer" ref="baseDialog">
            <base-input type="text" label="Name"    placeholder="Name" name="name" v-model="customer.name"/>
            <base-input type="text" label="Phone"   placeholder="+249--------" name="phone" v-model="customer.phone"/>
            <base-input type="text" label="Address" placeholder="address" name="address" v-model="customer.address"/>
            <div class="btn">
              <base-button type="submit" value="Save" />
              <base-button type="submit" value="Cancel"/>
            </div>
    </base-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

export default {
    name:"customer-dialog",
    components:{
        BaseDialog,
        BaseInput,
        BaseButton,
    },
    data() {
        return {
            customer:{
                name:'',
                phone:'',
                address:''
            }
        }
    },
    methods:{
        open(params) {
            console.log('Customer model :', params);
            this.customer = params;
            this.$refs.baseDialog.open();
        }
    }
}
</script>