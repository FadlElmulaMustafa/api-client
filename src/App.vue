<template>
  <div id="app">
    <div class="header">
      <div id="nav">
        <div class="nav-right">
            <router-link to="/">Customers</router-link> |
            <router-link to="/payments">Payments</router-link> | 
            <router-link to="/invoices">Invoices</router-link>
        </div>
      </div>
    </div>
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
html,body {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 35px;
  border: 1px solid #d8d1d1;
  border-radius: 3px;
  background-color: #ffffff;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-right {
  float:left;
}
</style>
