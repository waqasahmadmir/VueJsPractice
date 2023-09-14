<template>
    <div class="container mt-3">

        <div class="col-md-6">
            <div class="row">

                <h2>Conditional Rendring</h2>
                <div class="card">

                    <div class="card-body">

                        <div v-if="isloggedin">
                            <p class="h3 fw-bold bg-success" >Wellcome User</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos qui accusantium molestias
                                obcaecati quas cumque! In reiciendis voluptatum ab voluptatem cupiditate, aliquam, hic
                                recusandae deleniti iusto quidem harum fuga.</p>


                        </div>

                        <div v-if="!isloggedin">

                            <p class="h3 fw-bold bg-danger" >Thank You</p>
                            <p>Dolor sit amet consectetur adipisicing elit. Dolor quos qui accusantium molestias
                                obcaecati quas cumque! In reiciendis voluptatum ab voluptatem cupiditate, aliquam, hic
                                recusandae deleniti iusto quidem harum fuga.</p>

                        </div>

                        <div>

                        <button class="btn btn-success m-2" @click="this.login()" v-if="!isloggedin">Login</button>
                        <button class="btn btn-danger m-2" @click="this.logout()" v-if="isloggedin">Logout</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "AuthUser",
    data:function(){
        return{
            isloggedin: false
        }
        
    },
    methods:{
        login:function(){
            this.isloggedin=true;
        }

        ,
        logout:function(){
            this.isloggedin=false;
        }
    }
}
</script>

<style></style>