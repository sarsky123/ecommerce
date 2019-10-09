<template>
  <div class="col profile-container">
    <h3>Welcome Back! UserName</h3>
    <div class="col row d-flex flex-row align-items-center">
      <div class="col-7"></div>
      <div class="col-5 user-default">
        <div>
          <h5>Default Address</h5>

          <b-button class="w-100 m-3" variant="outline-secondary"
            >Add Address Info +</b-button
          >
        </div>
        <div>
          <h5>Default Payment</h5>

          <b-button class="w-100 m-3" variant="outline-secondary"
            >Add Payment Info +</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-default {
  display: flex;
  flex-direction: column;
}
.profile-container {
  padding-top: 35px;
  > h3 {
    display: block;
    border-bottom: 1px solid #ccc;
    margin: 15px 15px 25px 15px;
    padding: 5px 0;
    color: #e3aaaa;
  }
}
</style>
