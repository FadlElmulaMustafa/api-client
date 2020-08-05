<template>
      <input 
        class="btn"
       :type="type"
       :value="value" 
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
    }

}
</script>

<style scoped>
    .btn {
        width: 20px;
        height: 20px;
    }
</style>