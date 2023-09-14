<template>
    <div class="conatiner">
        <div class="row">
            <div class="col">
                <h1 class="mt-3">Greetings</h1>
                <div class="card shadow-lg mt-3">
                    <div class="card-body">
                        <h4>Hello {{ this.msg }}</h4>
                        <button class="btn btn-success m-1" @click="this.greet('Good Morning')">Good Morning</button>
                        <button class="btn btn-warning m-1" @click="this.greet('Good Afternoon')">Good Afternoon</button>
                        <button class="btn btn-danger m-1" @click="this.greet('Good Evening')">Good Evening</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "GreetingComponent",
    data: function () {
        return {
            msg: null
        }
    },
    methods: {
        greet: function (value) {
            this.msg = value;

        }
    }

}
</script>

<style></style>