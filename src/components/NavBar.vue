<template>
<nav class="navvbar navbar-dark bg-success navbar-expand-sm">
<div class="container">

    <router-link class="navbar-brand" to="/"></router-link>

   <div class="collapse navbar-collapse">
    <ul class="navbar-nav">

        <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/contacts">Contact Manager</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/counter">Counter</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/users">User List</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/form">Vue Form</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/cond">Conditional Rendring</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/auth">Authentication</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/emp">Employee</router-link>
        </li>
        <!-- <li class="nav-item">
            <router-link class="nav-link px-4 fw-bold fst-italic" to="/cust">Customer</router-link>
        </li> -->
      
    </ul>

   </div>
</div>
</nav>
</template>
<script>

export default{
    name:"NavBar"
}

</script>

<style>

</style>