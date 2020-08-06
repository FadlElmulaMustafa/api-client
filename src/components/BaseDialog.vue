add<template>
  <div>
    <div 
        class="dialog"
        v-bind:class="[show ? 'open-dialog' : 'close-dialog']">
        <div class="dialog-content">
            <span class="close" @click="close">&times;</span>
             <div class="dialog-title">{{title}}</div><br/>
                <slot></slot>
             <div class="dialog-actions">
                <slot></slot>
             </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"base-dialog",
    props:['title'],
    data() {
        return {
            show: false
        }
    },
    methods:{
        open() {
            this.show = true;
        },
        close() {
            this.show = false;
        }
    }

}
</script>

<style>

.open-dialog {
 display: block; /* Hidden by default */
}
.close-dialog {
    display: none;
}
/* The Modal (background) */
.dialog {
  /* display: none;Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.dialog-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  border-radius: 5px;
}

.dialog-title {
    float:left;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>