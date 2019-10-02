<template>
  <div class="w-100 view-wrapper">
    <div class="profile-header">
      <div class="py-3 col-12 border-bottom">
        <h2 class="text-capitalize text-center">
          My Account Setting
        </h2>
      </div>
      <div class="profile-tab-header p-3 col-12 border-bottom border-dark">
        <ul class="text-uppercase d-flex flex-row profile-tab">
          <li>
            <router-link tag="span" :to="{ name: 'member' }">
              <font-awesome-icon :icon="['fas', 'id-badge']" />
              <p>Profile Setting</p>
            </router-link>
          </li>
          <li>
            <router-link tag="span" :to="{ name: 'order' }">
              <font-awesome-icon :icon="['fas', 'clipboard']" />
              <p>Order History</p>
            </router-link>
          </li>
          <li>
            <router-link tag="span" :to="{ name: 'wishlist' }">
              <font-awesome-icon :icon="['far', 'heart']" />
              <p>Wishlist</p>
            </router-link>
          </li>
          <li>
            <router-link tag="span" :to="{ name: 'browsing_history' }">
              <font-awesome-icon :icon="['fas', 'history']" />
              <p>browsing history</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class=" w-100 d-flex flex-row ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.view-wrapper {
  margin: 130px 0 50px;
}
.profile-tab {
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0;
  padding: 8px 0;
  > li {
    > span {
      cursor: pointer;
      margin-right: 10px;
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      align-items: center;
    }
    &:hover {
      color: #ca6f6f;
    }
    svg {
      font-size: 18px;
    }
    p {
      margin: 0;
      margin-left: 5px;
    }
  }
  @media screen and (max-width: 468px) {
    p {
      display: none;
    }
  }
}
</style>
