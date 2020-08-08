<template>
      <input 
        class="btn"
       :type="type"
       :value="value"
       @click="onClicked"
       >
</template>

<script>
export default {
    name:"base-button",
    props: {
        type: {
            type:String,
            required:true
        },
        value: {
            type:String,
            default:"submit"
        }
    },
    methods: {
        onClicked: function(e) {
            this.$emit('click',e);
        }
    }

}
</script>

<style scoped>
    .btn {
        width: auto;
        /* height: 20px; */
        background-color: #42b983;
        border: transparent;
        border-radius: 3px;
        color: #ffffff;
        font-style: italic;
        font-size: 15px;
        font-weight: bold;
        margin-left: 8px;
        padding:15px;
    }
    input:focus {
        border:transparent;
    }
</style>