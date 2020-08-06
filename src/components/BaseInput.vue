 cvzbxncm0
 .02<template>
  <div class="field">
    <label class="field_label">{{label}}</label>
    <input 
        class="field_input"
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
    name:"base-input",
    props: {
        id: {
            type:String
        },
        type: {
            type:String,
            default: "text"    
        },
        label: {
            type:String,
        },
        value: {
            type:String
        },
        placeholder: {
            type:String
        },
        required: {
            type:Boolean,
            default: false
        }
    },
    methods: {
        updateValue: function(value){
            this.$emit('input',value);
        }
    }
   
}
</script>

<style scoped>
/*
    BEM 
    field
    field__input 
    field__input--color 
    field__input--bg

*/
.field {
    height: 30px;
    border: 1px solid #e2e2e2;
    border-radius: 2px;
    margin-bottom: 20px;
    margin-top:20px;
     border: 1px solid transparent;
}
.field_input {
    width: 100%;
    height: 100%;
    padding-top:10px;
   
}
.field_label {
    position: absolute;
    padding: 0.3%;
    color:#b5b1b1;
    font-size: 13px;
}
</style>