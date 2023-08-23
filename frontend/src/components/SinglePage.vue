<template>
  <div>
    <div class="row" style="margin-top: 3rem">
      <div
        class="car col-12 col-sm-6 col-md-4 p-2"
      >
        <img
          :src="$route.query.img"
          :alt="$route.query.img"
          style="width: 9rem; height: 9rem"
          loading="lazy"
        />
        <div class="card-body">
          <br />
          <h5 class="card-title">{{ $route.query.prodName }}</h5>
          <h5 class="card-title">{{ $route.query.Category }}</h5>
          <br />
          <p class="card-text">R {{ $route.query.amount }}</p>
          <p class="card-text">Qty: {{ $route.query.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
