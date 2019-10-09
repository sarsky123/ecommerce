<template>
  <section class="checkoutPage wrapper w-100">
    <div class="checkoutBody w-100 ">
      <h3 class="mb-md-5 col text-uppercase text-secondary text-center">
        Checkout
      </h3>
      <div
        class="checkoutContent w-100 d-flex flex-md-row row flex-column-reverse"
      >
        <div class="col-12 col-md-7">
          <div
            class="step-indicator d-flex flex-row w-100 justify-content-between"
          >
            <div
              :class="
                this.step == 1
                  ? 'step-indicator-box active'
                  : 'step-indicator-box inactive'
              "
            >
              <div class="d-flex border rounded-circle text-center">
                <span>1</span>
              </div>
              <p class="text-uppercase">information</p>
            </div>
            <div
              :class="
                this.step == 2
                  ? 'step-indicator-box active'
                  : 'step-indicator-box inactive'
              "
            >
              <div class="d-flex border rounded-circle text-center">
                <span>2</span>
              </div>
              <p class="text-uppercase">shipping</p>
            </div>
            <div
              :class="
                this.step == 3
                  ? 'step-indicator-box active'
                  : 'step-indicator-box inactive'
              "
            >
              <div class="d-flex border rounded-circle text-center">
                <span>3</span>
              </div>
              <p class="text-uppercase">payment</p>
            </div>
            <div
              :class="
                this.step == 4
                  ? 'step-indicator-box active'
                  : 'step-indicator-box inactive'
              "
            >
              <div class="d-flex border rounded-circle text-center">
                <span>4</span>
              </div>
              <p class="text-uppercase">Finished</p>
            </div>
          </div>
          <div class="checkoutForm wrapper">
            <!--End of Step Indicator-->
            <div class="checkoutForm-content">
              <div class="stepInformation">
                <h5 class="stepInformation-title">
                  Customer Info
                </h5>
                <!--Step 1-->
                <ValidationObserver
                  ref="observer"
                  tag="form"
                  v-if="this.step == '1'"
                  @submit.prevent="
                    sumbmitUserInfo('Information', { Information }, '2')
                  "
                  v-slot="{ invalid }"
                >
                  <div class="row flex-column">
                    <div class="d-flex flex-row flex-wrap form-container">
                      <validation-provider
                        name="firstName"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors }"
                        class="col-6"
                      >
                        <label class="custom-label" for="firstName">
                          First Name:
                        </label>
                        <input
                          class="w-100"
                          v-model="Information.Name.FirstName"
                          type="text"
                          name="firstName"
                          placeholder="Your First Name"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="lastName"
                        rules="required"
                        :bails="false"
                        class="col-6"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="lastName">
                          Last Name:
                        </label>
                        <input
                          class="w-100"
                          v-model="Information.Name.LastName"
                          type="text"
                          name="lastName"
                          placeholder="Your Last Name"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="email"
                        rules="required|email"
                        :bails="false"
                        class="col-12"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="email">
                          Email
                        </label>
                        <input
                          class="w-100"
                          v-model="Information.Email"
                          type="email"
                          name="email"
                          placeholder="mymail@lorem.com"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="phone"
                        rules="required"
                        class="col-6"
                        :bails="false"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="phone">
                          Your Phone:
                        </label>
                        <input
                          class="w-100"
                          v-model="Information.Phone.Phone"
                          type="text"
                          name="phone"
                          placeholder="Your Phone Numbers"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="cellphone"
                        rules="required"
                        class="col-6"
                        :bails="false"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="phone">
                          Cell Phone:
                        </label>
                        <input
                          class="w-100"
                          v-model="Information.Phone.CellPhone"
                          type="text"
                          name="cellphone"
                          placeholder="Cell Phone"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <div class="col">
                        <button
                          class="col text-white py-2 border-none mt-5 button-next"
                          type="submit"
                          name="button"
                          :class="invalid ? 'bg-secondary' : 'bg-dark'"
                          :disabled="invalid"
                        >
                          To Shipping
                        </button>
                      </div>
                    </div>
                  </div>
                </ValidationObserver>
                <!--Step 2-->
                <ValidationObserver
                  ref="observer"
                  tag="form"
                  v-if="this.step == '2'"
                  @submit.prevent="
                    sumbmitUserInfo('ShippingInfo', { ShippingInfo }, '3')
                  "
                  v-slot="{ invalid }"
                >
                  <div class="row flex-column">
                    <div class="d-flex flex-row flex-wrap form-container">
                      <validation-provider
                        name="address"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors }"
                        class="col-6"
                      >
                        <label class="custom-label" for="address">
                          Address:
                        </label>
                        <input
                          class="w-100"
                          v-model="ShippingInfo.Address"
                          type="text"
                          name="address"
                          placeholder="Your address"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="city"
                        rules="required"
                        :bails="false"
                        class="col-6"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="city">
                          City:
                        </label>
                        <input
                          class="w-100"
                          v-model="ShippingInfo.City"
                          type="text"
                          name="city"
                          placeholder="City"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="country"
                        rules="required"
                        :bails="false"
                        class="col-12"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="country">
                          Country:
                        </label>
                        <input
                          class="w-100"
                          v-model="ShippingInfo.Country"
                          type="text"
                          name="country"
                          placeholder="Taiwan"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="postcode"
                        rules="required|min:3|max:6"
                        class="col-6"
                        :bails="false"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="postcode">
                          Postcode:
                        </label>
                        <input
                          class="w-100"
                          v-model="ShippingInfo.PostCode"
                          type="text"
                          name="postcode"
                          placeholder="ex:23411"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>

                      <div class="col-12 d-flex flex-row-center">
                        <button
                          class="col-5 mx-auto btn rounded-0 no-gutter bg-dark text-white py-2 border-none mt-5 button-next"
                          @click.prevent="DecreStep()"
                          name="button"
                        >
                          Back To Information
                        </button>
                        <button
                          class="col-5 mx-auto  btn rounded-0 bg-secondary text-white py-2 border-none mt-5"
                          type="submit"
                          name="button"
                          :class="invalid ? 'bg-secondary' : 'bg-dark'"
                          :disabled="invalid"
                        >
                          To Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </ValidationObserver>
                <!--Step 3-->
                <ValidationObserver
                  ref="observer"
                  tag="form"
                  v-if="this.step == '3'"
                  @submit.prevent="sumbmitUserInfo('Billing', { Billing })"
                  v-slot="{ invalid }"
                >
                  <div class="row flex-column">
                    <div class="d-flex flex-row flex-wrap form-container">
                      <validation-provider
                        name="nameOnCard"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors }"
                        class="col-6"
                      >
                        <label class="custom-label" for="nameOnCard">
                          Name on card:
                        </label>
                        <input
                          class="w-100"
                          v-model="Billing.NameOnCard"
                          type="text"
                          name="nameOnCard"
                          placeholder="Your Name On The Card"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="creditCardNumber"
                        rules="required"
                        :bails="false"
                        class="col-6"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="creditCardNumber">
                          Credit Card Number:
                        </label>
                        <input
                          class="w-100"
                          v-model="Billing.CreditCardNumber"
                          type="text"
                          name="creditCardNumber"
                          placeholder="Your Credit Card Number"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="expiredDate"
                        rules="required"
                        :bails="false"
                        class="col-12"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="expiredDate">
                          ExpiredDate:
                        </label>
                        <input
                          class="w-100"
                          v-model="Billing.ExpiredDate"
                          type="text"
                          name="expiredDate"
                          placeholder="MM/YY"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                      <validation-provider
                        name="CVC"
                        rules="required|min:3|max:6"
                        class="col-6"
                        :bails="false"
                        v-slot="{ errors }"
                      >
                        <label class="custom-label" for="CVC">
                          CVC:
                        </label>
                        <input
                          class="w-100"
                          v-model="Billing.CVC"
                          type="text"
                          name="CVC"
                          placeholder="CVC"
                          value
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>

                      <div class="col-12 d-flex flex-row-center">
                        <button
                          class="col-5 mx-auto btn rounded-0 no-gutter bg-dark text-white py-2 border-none mt-5 button-next"
                          @click.prevent="DecreStep()"
                          name="button"
                        >
                          Back To Shipping
                        </button>
                        <button
                          class="col-5 mx-auto  btn rounded-0 bg-secondary text-white py-2 border-none mt-5"
                          type="submit"
                          name="button"
                          :class="invalid ? 'bg-secondary' : 'bg-dark'"
                          :disabled="invalid"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </ValidationObserver>
                <!--Check out sucess-->
                <div
                  v-if="this.step == 4"
                  class="border border-top-0 border-dark pb-3"
                >
                  <div class="col d-flex flex-column">
                    <h5 class="my-3">Your order is completed, Enjoy!</h5>
                    <div class="d-flex flex-row align-self-center">
                      <button
                        class="btn btn-dark w-20 px-3 py-2 text-capitalize  mt-3"
                      >
                        <router-link
                          tag="span"
                          :to="{
                            name: 'home'
                          }"
                        >
                          Back to home
                        </router-link>
                      </button>
                      <button
                        class="btn btn-dark w-20 px-3 py-2 ml-3 text-capitalize align-self-center mt-3"
                      >
                        <router-link
                          tag="span"
                          :to="{
                            name: 'order'
                          }"
                        >
                          Check you order
                        </router-link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Order Summary-->
        <div class="col-12 col-md-5">
          <div class="ml-2 checkoutTotal pb-4 mb-5 align-self-center col-12">
            <h5 class="text-uppercase py-4">order summary</h5>
            <div>
              <div class="orderContent" id="style-2">
                <div class="cartObject">
                  <cartObject></cartObject>
                </div>
              </div>
              <div class="orderTotal w-100">
                <div class="d-flex flex-column ">
                  <p><span>Subtotal:</span> $ {{ totalPrice }}</p>
                  <p><span>Shipping:</span> $ {{ shippingFee }}</p>
                  <p><span>Tax:</span> ${{ taxPrice }} ({{ this.tax }}%)</p>
                  <p><span>Grand Total:</span> ${{ grandTotal }}</p>
                </div>
              </div>
              <div class="orderFooter"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckoutService from "@/services/CheckoutService.js";
import cartObject from "../components/CheckoutCartObject";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      shippingFee: "20",
      tax: "10",
      step: "1",
      Information: {
        Name: { FirstName: "", LastName: "" },
        Email: "",
        Phone: {
          Phone: "",
          CellPhone: ""
        }
      },
      ShippingInfo: {
        Address: "",
        City: "",
        Country: "",
        PostCode: ""
      },
      Billing: {
        NameOnCard: "",
        CreditCardNumber: "",
        ExpiredDate: "",
        CVC: ""
      }
    };
  },
  components: {
    cartObject
  },
  computed: {
    ...mapGetters("cart", ["getProductsInCart"]),
    ...mapGetters("checkout", ["getCheckoutInfo"]),
    taxPrice() {
      var total = this.totalPrice;
      return ((total * this.tax) / 100).toFixed();
    },
    totalPrice() {
      return this.getProductsInCart
        .reduce(function(current, next) {
          var total = next.Price * next.amount;
          return current + total;
        }, 0)
        .toFixed();
    },
    grandTotal() {
      const grandT =
        Number(this.totalPrice) +
        Number(this.taxPrice) +
        Number(this.shippingFee);
      return grandT;
    }
  },
  mounted() {
    if (this.getProductsInCart.length == 0) {
      this.$router.push("/");
    }
    var { Information, ShippingInfo, Billing } = this.getCheckoutInfo;
    this.Information = Information;
    this.ShippingInfo = ShippingInfo;
    this.Billing = Billing;
  },
  methods: {
    async sumbmitUserInfo(CheckoutInfoCategory, payload, nextStep) {
      try {
        await this.$store.dispatch(
          "checkout/add" + CheckoutInfoCategory,
          payload
        );
        this.step = nextStep;
        if (CheckoutInfoCategory == "Billing") {
          this.checkoutPay();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async checkoutPay() {
      try {
        const request = this.getCheckoutInfo;
        const response = await CheckoutService.post(request);

        if (response.status == 200) {
          this.step = "4";

          const notification = {
            type: "success",
            message: "Your order is completed!"
          };
          this.$store.dispatch("notification/add", notification);
        } else {
          throw Error("500");
        }
      } catch (err) {
        const notification = {
          type: "error",
          message: `
            There's problem happened during checkout , please do it again!
            
            ${err}`
        };
        this.$store.dispatch("notification/add", notification);
        this.step = "1";
      }
    },
    DecreStep() {
      this.step = "1";
    }
  }
};
</script>

<style lang="scss" scoped>
.checkoutPage {
  padding-top: 120px;
  .checkoutForm {
    padding: 0 15px 15px 15px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
}
//checkout info
.checkoutContent > div:first-child {
  border-right: 1px solid #ccc;
  @media screen and (max-width: 976px) {
    border-right: none;
  }
}
.step-indicator {
  position: relative;
  padding-right: 15px;
  .inactive {
    color: #ccc;
  }

  .step-indicator-box {
    position: relative;
    display: flex;
    background-color: #fff;
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    > div:first-child {
      width: 2rem;
      height: 2rem;

      span {
        line-height: 1;
      }
    }
    p {
      margin: 0 0 0 5px;
    }
  }
  &:before {
    content: "";
    width: 80%;
    position: absolute;
    background-color: #000;
    height: 1px;
    top: 50%;
  }
  @media screen and (max-width: 576px) {
    p {
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    .rounded-circle {
      font-size: 8px;
      width: 1rem;
      height: 1rem;
    }
    p {
      font-size: 8px;
    }
  }
}
.checkoutForm-content {
  .stepInformation {
    margin: 45px 0 0 0;
    .stepInformation-title {
      margin-bottom: 0;
      background: #ca6f6f;
      color: white;
      padding: 15px;
      text-transform: uppercase;
    }
  }
}
.form-container {
  padding: 55px 0;
  > span {
    margin-bottom: 15px;
  }
  input {
    border-width: 1px;
    box-shadow: inset 0 1px 1px #e5e5e5;
    margin-bottom: 5px;
  }
}
.active {
  color: black;
  background-color: #e3aaaa;
  font-weight: 800;
  .rounded-circle {
    background-color: #e3aaaa;
    color: #fff;
  }
}
.rounded-circle {
  justify-content: center;
  border-color: #ca6f6f;
  align-items: center;
}
//order summary
.checkoutTotal {
  background-color: rgba(227, 170, 170, 0.5);
  padding-right: 5px;
  h5 {
    color: #ca6f6f;
    font-weight: 600;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 25px;
  }
}
.orderContent {
  height: 50vh;
  overflow: scroll;
  .cartObject {
    padding: 10px 0 20px;
    padding-right: 10px;
  }
}
#style-2::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

#style-2::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 3px rgba(188, 188, 188, 0.6);
  background-color: white;
}

.orderTotal {
  text-align: end;
  > div {
    padding-right: 25px;
  }
  span {
    align-self: start;
    margin-right: auto;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0.1px 0 0 #ca6f6f;
  }
  p {
    display: flex;
    flex-direction: row;
    color: #aaa;
  }
}
//misc
.custom-label {
  color: #e3aaaa;
  font-weight: 600;
  text-shadow: 0.5px 0px #ccc;
}
</style>
