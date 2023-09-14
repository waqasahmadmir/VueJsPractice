
<template>
    <div class="container mt-3">
        <div class="row">

            <div class="col">
                <p class="h3 text-success fw-bold">Contact Manager <router-link to="/contacts/add"
                        class="btn btn-success btn-sm"> <i class="fa fa-plus"></i>Add</router-link></p>

                <form action="">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                                    <input type="text" name="form-control" placeholder="Search Name">
                                </div>

                                <div class="col">
                                    <input type="submit" name="btn btn-outline-dark">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <div class="container mt-2">
        <div class="row">

            <div class="col-md-6">
                <div class="card my-2 list-group-item-success">
                    <div class="card-body ">

                        <div class="row align-item-center">
                            <div class="col-sm-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU" alt="" class="contact-image"> 
                            </div>
                            <div class="col-sm-8">
                                <ul class="list-group">
                                    <li class="list-group-item"> Name: <span class="fw-bold">Name</span></li>
                                    <li class="list-group-item"> Email: <span class="fw-bold">Email</span></li>
                                    <li class="list-group-item"> Mobile: <span class="fw-bold">Mobile</span></li>
                
                                </ul>

                            </div>
                            <div class="col-sm-2">
                                <router-link class="btn btn-warning my-1" to="/contacts/view/:contactId"> <i class="fa fa-eye" ></i></router-link>

                                <router-link class="btn btn-primary my-1" to="/contacts/edit/:contactId"> <i class="fa fa-pen"></i></router-link>

                                <button class="btn btn-danger my-1" > <i class="fa fa-trash"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactManager'
}
</script>

<style>
.contact-image{
    width: 50px;
    border-radius: 50%;
}
</style>