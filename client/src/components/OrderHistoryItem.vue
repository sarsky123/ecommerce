<template>
  <div class="col ">
    <div class="cart__row my-3 border border-dark  ">
      <div class="orderHistoryItem-header col py-2 ">
        <div class="d-flex flex-row align-items-center flex-fill mr-3">
          <h5>Order Number #{{ orderItem.ProductID }}</h5>
          <div class="ml-auto">
            <span>Order Total ${{ orderItem.Price * Amount }}</span>
          </div>
        </div>
        <b-dropdown
          id="dropdown-1"
          text="Manage Order"
          class="manageButton"
          toggle-class="text-dark rounded-0 w-100 btn-light"
          menu-class="w-100"
        >
          <b-dropdown-item>Order Detail</b-dropdown-item>
          <b-dropdown-item>Delievery</b-dropdown-item>
          <b-dropdown-item>Contact</b-dropdown-item>
        </b-dropdown>
      </div>
      <div
        class="grid--full flex-row d-flex cart-content align-items-center  flex-wrap"
      >
        <div class="col-12 col-md-8 p-0">
          <div class="grid--full">
            <div class="col p-0 d-flex flex-row align-items-center">
              <div class="cart__image px-sm-3 py-2">
                <img :src="orderItem.Image" :alt="orderItem.Name" />
              </div>
              <div class="col cart__item__title text-capitalize">
                <h5 class="item-Name">
                  {{ orderItem.Name }}
                </h5>

                <p>${{ orderItem.Price }}</p>

                <p>{{ orderItem.Title }}</p>
                <p
                  class="mb-2 order-qty"
                  min="0"
                  aria-label="quantity"
                  pattern="[0-9]*"
                >
                  <span>Qty: {{ Amount }}</span>
                </p>
              </div>
              <div class="col-6 shippingInfo">
                <h5 class="text-capitalize text-left">Shipping info</h5>
                <p>9982 Park Lane</p>
                <p>SOUTHALL</p>
                <p>UB86 2ZW</p>
                <span>
                  <p>United Kingdom</p>
                  <p>Contact Info: 202-555-****</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 OrderStatus">
          <h3>Order Status</h3>
          <div class="progress-indicator">
            <div class="progress-indicator-stat">
              <span>Confirmed</span><span>Shipped</span><span>Delivered</span>
            </div>
            <div class="progress-indicator-bar">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>Estimated Arrival: Fri, OCT 18</div>
          </div>
          <button class="btn btn-track">Track package</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Amount: Number
    };
  },
  props: {
    orderItem: Object
  },
  mounted() {
    var randomNum = Math.floor(Math.random() * 9) + 1;
    this.Amount = randomNum;
  }
};
</script>

<style lang="scss" scoped>
.cart__row {
  border-bottom: 1px solid #aaaaaa;
}
.cart__image {
  height: 200px;
  > img {
    max-width: 200px;
    padding: 10px 15px;
    height: 100%;
    display: block;
    object-fit: cover;
    overflow: hidden;
    width: 100%;
  }
}

p {
  margin: 0;
  line-height: 1.7;
}
h5 {
  font-size: 15px;
}
.item-Name {
  color: #2e2e2d;
  font-weight: 300;
}
.order-qty {
  span {
    font-size: 10px;
  }
  font-size: 12px;
  color: #666;
  font-style: italic;
}

// Order-item
.orderHistoryItem-header {
  display: flex;
  flex-direction: row;
  border: 1px solid #e3aaaa;
  align-items: center;
  color: white;
  background-color: #e3aaaa;

  h5 {
    margin: 0;
  }
  .manageButton {
    background-color: transparent;
  }
}
.cart__item__title {
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shippingInfo {
  padding: 15px 15px 15px 35px;
  text-align: left;
  width: 80%;
  h5 {
    font-weight: 800;
    font-size: 20px;
  }
  p {
    font-size: 12px;
    color: #666;
  }
  span {
    > p {
      margin-top: 10px;
      font-weight: 600;
      font-size: 14px;
    }
  }
}
.OrderStatus {
  display: flex;
  color: #ca6f6f;
  flex-direction: column;
  padding: 15px 20px 25px 20px;
  align-items: center;
  justify-content: space-between;
  min-height: 250px;
  button {
    width: 100%;
  }

  .btn-track {
    background-color: black;
    color: white;
  }
  .progress-indicator {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100px;
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .progress-indicator-stat {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      span {
        margin-left: -5px;
        color: #ccc;
        &:first-child {
          color: #e3aaaa;
        }
      }
    }
    .progress-indicator-bar {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      > div {
        box-shadow: 1px 0 0.5px #333;
        width: 33%;
        height: 7px;
        background-color: #ccc;
        margin: 0 2px;
        &:first-child {
          background-color: #e3aaaa;
        }
      }
    }
  }
}
</style>
