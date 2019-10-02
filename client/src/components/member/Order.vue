<template>
  <div class="col p-3 board">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">title</th>
          <th scope="col">price</th>
        </tr>
      </thead>
      <tbody v-for="(whishProduct, index) in this.bookmark" :key="index">
        <tr>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ whishProduct.Name }}</td>
          <td>{{ whishProduct.Title }}</td>
          <td>$ {{ whishProduct.Price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
