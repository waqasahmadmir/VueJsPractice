<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">

        <h1>Customer component</h1>


        <ul class="list-group">
          <li class="list-group-item">
            Name: {{ name }}
          </li>
          <li class="list-group-item">
            Age: {{ age }}
          </li>
          <li class="list-group-item">
            Desination: {{ des }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {

  name: 'CustomerComponent',
  props: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    des: { type: String, required: true }
  }
}
</script>

<style></style>