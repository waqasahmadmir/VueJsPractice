
<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-sucess">
                    Add Contacts
                </p>

               
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                

                <form action="">
                    <div class="mb-2">
                    <input  class="form-control" name="name" type="text" placeholder="Enter Name">
                </div>
                <div class="mb-2">
                    <input  class="form-control" name="url" type="text" placeholder="Enter Image link">
                </div>
                <div class="mb-2">
                    <input  class="form-control" name="email" type="email" placeholder="Enter Email">
                </div>
                <div class="mb-2">
                    <input  class="form-control" name="contact" type="text" placeholder="Enter Contact">
                </div>
                <div class="mb-2">
                    <input  class="form-control" name="comapny" type="text" placeholder="Company Name">
                </div>
                <div class="mb-2">
                    <input  class="form-control" name="title" type="text" placeholder="Title">
                </div>
                <div class="mb-2">
                    
                    
            <select class="form-control"  name="group" id="">
                <option value="">Select group</option>
            </select>
                </div>

                <div class="mb-2">
                    <input  class="btn btn-success" type="submit" value="Create">
                </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddContact'
}
</script>

<style>

</style>