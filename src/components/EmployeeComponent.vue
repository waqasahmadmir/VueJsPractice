<template>
    <div class="container mt-3">

        <div class="row">
            <div class="col">
                <h1>Employee Component</h1>
                <ul class="list-group">
                    <li class="list-group-item">Name:{{ employee.name }}</li>
                    <li class="list-group-item">Age:{{ employee.age }}</li>
                    <li class="list-group-item">Desination:{{ employee.des }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EmployeeComponent",
    data: function () {
        return {
            employee: {
                name: "Ali Raza",
                age: "25",
                des: "Civil Engineer"
            }
        }
    }
}

</script>
<style></style>