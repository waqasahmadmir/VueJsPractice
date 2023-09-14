
<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-sucess">
                    View Contact
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis provident consequuntur laudantium
                    perferendis </p>
                    <p>quas rerum aut at modi enim officia
                    quos id accusantium placeat delectus magnam eaque qui natus assumenda.</p>


            </div>
        </div>
    </div>

    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-2">

                <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" class="contact-img">
            </div>
            <div class="col-md-7">
                <ul class="list-group">
                    <li class="list-group-item"> Name: <span class="fw-bold">Name</span></li>
                    <li class="list-group-item"> Email: <span class="fw-bold">Email</span></li>
                    <li class="list-group-item"> Mobile: <span class="fw-bold">Mobile</span></li>
                    <li class="list-group-item"> Company: <span class="fw-bold">Company</span></li>
                    <li class="list-group-item"> Title: <span class="fw-bold">Title</span></li>
                    <li class="list-group-item"> Group: <span class="fw-bold">Group</span></li>
                  

                </ul>

            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="mb-2">
                        <router-link to="/contacts" class="btn btn-success"> Back</router-link>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ViewContact'
}
</script>

<style>
.contact-img {
    width: 150px;
    border-radius: 50%;
}
</style>