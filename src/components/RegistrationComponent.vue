<template>
    <div class="container mt-3">
        <div class="row">
            <h2>Vue Form</h2>
            <div class="col md-6">
                
                <div class="card md-6">
                    <div class="card-header bg-success text-white">
                        <p>Register Here</p>
                    </div>
                    <div class="card-body bg-light ">
                        <form @submit.prevent="Register()" action="">

                            <div class="mb-2">
                                <input v-model="user.name" type="text" placeholder="Enter Your Name">
                            </div>

                            <div class="mb-2">
                                <input v-model="user.email" type="email" placeholder="Enter Your Email">
                            </div>

                            <div class="mb-2">
                                <input v-model="user.contact" type="text" placeholder="Enter Your contact">
                            </div>

                            <div class="mb-2">
                                <input v-model="user.password" type="password" placeholder="Enter Your Password">
                            </div>

                            <div class="mb-2">
                                <input class="btn btn-success" type="submit" value="Register">
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div class="col md-6">
                <div class="card">
                    <div class="card-body">
                        <pre>{{this.user}}</pre>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
</template>
<script>

export default {

    name: "RegistrationComponent",
    data:function(){
        return{
            user:{
                name:"",
                email:"",
                contact:"",
                password:"",
            
            }

        }
    },
    methods:{
        Register:function(){
            console.log(this.user)

        }
    }
}
</script>

<style></style>
