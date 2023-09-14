<template>
  <div class="container mt-3">

    <div class="row">
      <div class="col">
        <h1>Counter</h1>
        <div class="card shadow-lg">
          <div style="align-items: center ; justify-content:center; margin:20px;" class="card-body">

            <h2 style="align-items: center ;display: flex; justify-content:center; margin:20px;">{{ this.count }}</h2>
            <div style="align-items: center ;display: flex; justify-content:center; margin:20px;">

            </div>
            <button class="btn btn-success m-2" @click="this.inc">Increment</button>
            <button class="btn btn-warning m-2" @click="this.dec">Decrement</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CounterComponent",
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    inc: function () {
      this.count = this.count + 1;
    },

    dec: function () {
      if (this.count > 0) {
        this.count = this.count - 1;
      }

    }
  }
}
</script>

<style scoped></style>