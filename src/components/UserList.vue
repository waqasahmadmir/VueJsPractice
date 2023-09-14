<template>
    <div class="container mt-3">
        <h1>User List</h1>
      <div class="row">
        <div class="col">
          <table class="table table-hover text-center table-striped">
  
            <thead class="bg-success">
  
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Websit</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" user in users" :key="user.id">


                <td>
                  {{ user?.id }}
                </td>
                <router-link :to="'/users/'+user.id" >{{user.name}}</router-link>
                <td>
                  {{ user?.name }}
                </td>
                <td>
                  {{ user?.email }}
                </td>
                <td>
                  {{ user?.company?.name }}
                </td>
                <td>
                  {{ user?.website }}
                </td>
                <td>
                  {{ user?.address?.city }}
                </td>
              </tr>
            </tbody>
  
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {UserService} from '@/services/UserService.js'
  export default {
    name: 'HelloWorld',
  
    data: function () {
      return {
        loading: false,
        users:[],
        message:null
        
      }
    },
    created:async function (){
      try{
  
        this.loading=true;
        let response =await UserService.getAllUsers();
        this.loading=false;
        console.log(response.data)
        this.users=response.data;
  
      }
      catch(err){
        console.log(err);
        this.loading=false;
        this.message=err;
        
    }
  
  }}
  </script>
  
  <style></style>
  