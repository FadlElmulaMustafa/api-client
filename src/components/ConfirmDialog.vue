<template>
  <div
    class="dialog" 
    v-bind:class="[show ? 'open-dialog' : 'close-dialog']" >
    <div class="dialog-content" 
          :class="[status.success ? 'dialog-success' : 'dialog-error' ]">
        <div class="dialog-content-text">
            {{status.msg}}
        </div>
        <div class="dialog-content-btn">
            <base-button type="button" value="Confirm" @click="submit"/>
            <base-button type="button" value="Close" @click="close"/>
        </div>
   </div>
  </div>
</template>

<script>
import BaseButton from  './BaseButton.vue';
export default {
    name:"confirm-dialog",
    components: {
        BaseButton,
    },
    data() {
        return {
            show:false,
            status : {
                msg: null,
                success: null
            }
        }
    },
    methods: {
        open(params) {
            this.status = params;
            this.show = true;
        },
        close() {
            this.show = false;
        },
        submit() {
            this.$emit('submit');
        }
    }
}
</script>

<style scoped>
.dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
}
.dialog-content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 24rem;
    border-radius: 0.5rem;
    color: #ffffff;
}
.open-dialog {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}
close-dialog {

}
.dialog-content-text {
    margin:10px;
    padding:4px;
}
.dialog-content-btn {
    float:left;
}
.dialog-success {
    background-color:#d1e8b8;
}
.dialog-error {
    background-color:#f7a2a2;
}
</style>