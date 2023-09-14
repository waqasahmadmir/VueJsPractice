
<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-sucess">
                    Edit Contact
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis provident consequuntur laudantium
                    perferendis</p>
                <p>quas rerum aut at modi enim officia quos id accusantium placeat delectus magnam eaque qui natus
                    assumenda.</p>

            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center ">
            <div class="col-md-6">


                <form action="">
                    <div class="mb-2">
                        <input class="form-control" name="name" type="text" placeholder="Enter Name">
                    </div>
                    <div class="mb-2">
                        <input class="form-control" name="url" type="text" placeholder="Enter Image link">
                    </div>
                    <div class="mb-2">
                        <input class="form-control" name="email" type="email" placeholder="Enter Email">
                    </div>
                    <div class="mb-2">
                        <input class="form-control" name="contact" type="text" placeholder="Enter Contact">
                    </div>
                    <div class="mb-2">
                        <input class="form-control" name="comapny" type="text" placeholder="Company Name">
                    </div>
                    <div class="mb-2">


                        <select class="form-control" name="group" id="">
                            <option value="">Select group</option>
                        </select>
                    </div>

                    
                        <div class="mb-2">
                        <input class="btn btn-success" type="submit" value="Edit">
                    </div>      

                </form>


            </div>
            <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&usqp=CAU"
                    alt="" class="contact-img">
            </div>
        </div>
    </div>
   
</template>
<script>
export default {
    name: 'EditContact'
}
</script>

<style>
.contact-img {
    width: 150px;
    border-radius: 50%;
}</style>