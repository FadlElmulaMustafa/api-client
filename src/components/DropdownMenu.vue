<template>
    <div class="dropdown">
        <!-- <button class="dropbtn">Dropdown</button> --> 
        <div class="menu">
            <img  src="@/assets/7949899381595452708-128.png" alt="" srcset="" @click="open">
        </div>
        <div class="dropdown-content" :class="[show ? 'show': '']">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dropdown-menu',
    data() {
        return {
            show: false
        }
    },
    methods: {
        open() {
            this.show = true
        },
        close() {
            this.show = false;
        }
    }
}
</script>

<style scoped>
/* Dropdown Button */
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 0.5rem;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
/* .show {display:block;} */

.dropdown:hover .dropdown-content {
  display: block;
}

 .menu img {
     width: 20px;
   float:right;
   margin-bottom:4px;
   cursor: pointer;
}

</style>