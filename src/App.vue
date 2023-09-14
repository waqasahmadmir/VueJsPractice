<template>

<!-- <UserDetails/> -->
<NavBar/>
<router-view/>
  <!-- <div class="container mt-2">

    <div class="container">

      <div class="grid">

        <div class="row">
          <div class="col">

            <h1>Main Component</h1>
            <p class="fst-italic fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eligendi
              illum voluptatum consequatur amet aperiam ut quo saepe dolorem ratione, voluptatem tempore temporibus magni
              reprehenderit rem! Nobis possimus quibusdam recusandae?</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <CustomerComponent name="Waqas ahmad" age="24" des="Software Design Engineer" />
    </div>

    <div>
      <EmployeeComponent />
    </div>

    <div>
      <CounterComponent/>
    </div>
    <div>
      <GreetingComponent />
    </div>

    <div>
      <RegistrationComponent/>
    </div>

    <div>
      <AuthUser/>

    </div>
  <div>
    <UserList/>
  </div>

  </div> -->
</template>

<script>

import NavBar from './components/NavBar.vue';
// import UserDetails from './components/UserDetails.vue';
// import CustomerComponent from "./components/CustomerComponent.vue";
// import EmployeeComponent from "./components/EmployeeComponent.vue"
// import GreetingComponent from "./components/GreetingComponent.vue";
// import RegistrationComponent from "./components/RegistrationComponent.vue";
// import CounterComponent from "./components/CounterComponent.vue";
// import AuthUser from "./components/AuthUser.vue";
// import UserList from "./components/UserList.vue";



export default {
  components: {
  
    NavBar
    // CustomerComponent, EmployeeComponent,
    // GreetingComponent, RegistrationComponent, CounterComponent, AuthUser,
    // UserList
    // ,
    // UserDetails
}
}
</script>

<style></style>
