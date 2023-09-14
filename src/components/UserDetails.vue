<template>
    
   <div class="container">
    <div class="row">
        <div class="col">
            <pre>{{user}}</pre>
        </div>
    </div>
   </div>
  </template>
  
  <script>
 import {UserService} from '@/services/UserService.js'
  export default {
    name: "UserDetails",
    data: function(){
        return{
            user:{}
        }
    },
    created: async function(){

        let userid=this.$route.params.userid;
        try{
            let response= await UserService.getUser(userid)
            this.user=response.data;
            console.log(response.data)
        console.log(userid);
    }
    catch(err){
        console.log(err)
    }
    
  }}
  </script>
  
  <style scoped></style>