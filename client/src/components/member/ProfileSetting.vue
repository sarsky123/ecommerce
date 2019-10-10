<template>
  <div class="col profile-container">
    <h3>Welcome Back! {{ getUserName.FirstName }}</h3>
    <div class="col row d-flex flex-column flex-md-row align-items-start">
      <div class="col col-md-7 account-setting-container">
        <div>
          <h3>Your Account Setting</h3>
          <div class="col">
            <div class="row flex-row">
              <form
                class="d-flex flex-row flex-wrap form-container "
                @submit.prevent="userUpdate(Information)"
              >
                <div class="w-50">
                  <label class="custom-label" for="firstName">
                    First Name:
                  </label>
                  <input
                    class="w-100"
                    v-model="Information.FirstName"
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    value
                  />
                </div>
                <div class="w-50">
                  <label class="custom-label" for="lastName">
                    Last Name:
                  </label>
                  <input
                    class="w-100"
                    v-model="Information.LastName"
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    value
                  />
                </div>
                <div class="w-50">
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
                </div>
                <div class="w-50">
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
                </div>
                <div class="w-50">
                  <label class="custom-label" for="cellphone">
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
                </div>
                <button
                  class="w-100 bg-secondary text-white py-2 border-nonemt-5"
                  type="submit"
                  name="button"
                >
                  update profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-md-5 user-default">
        <div class="default-column">
          <h5>Default Shipping</h5>

          <b-button
            class="w-100 my-3"
            variant="outline-secondary"
            v-if="!addDefaultAddress"
            @click="toggleAddress"
            >Add Address Info +</b-button
          >
          <div class="w-100 py-3" v-else>
            <div class="w-100">
              <label class="custom-label" for="Address">
                Address:
              </label>
              <input
                class="w-100 "
                v-model="ShippingInfo.Address"
                type="text"
                name="Address"
                placeholder="Your Address"
                value
              />
            </div>
            <div class="w-100">
              <label class="custom-label" for="City">
                City:
              </label>
              <input
                class="w-100 "
                v-model="ShippingInfo.City"
                type="text"
                name="City"
                placeholder="Gotham"
                value
              />
            </div>
            <div class="w-100">
              <label class="custom-label" for="Country">
                Country:
              </label>
              <input
                class="w-100 "
                v-model="ShippingInfo.Country"
                type="text"
                name="Country"
                placeholder="Country"
                value
              />
            </div>
            <div class="w-100">
              <label class="custom-label" for="PostCode">
                PostCode:
              </label>
              <input
                class="w-100 "
                v-model="ShippingInfo.PostCode"
                type="text"
                name="PostCode"
                placeholder="PostCode"
                value
              />
            </div>
            <div class="w-100 d-flex flex-row mt-3">
              <button class="ml-auto btn" @click="updateProfile(ShippingInfo)">
                Edit</button
              ><button class="ml-3 btn" @click="toggleAddress">Close</button>
            </div>
          </div>
        </div>
        <div class="default-column">
          <h5>Default Payment</h5>

          <b-button
            class="w-100 my-3"
            variant="outline-secondary"
            v-if="!addDefaultPayment"
            @click="togglePayment"
            >Add Payment Info +</b-button
          >
          <div class="w-100 py-3" v-else>
            <div class="w-50">
              <label class="custom-label" for="NameOnCard">
                NameOnCard:
              </label>
              <input
                class="w-100"
                v-model="Billing.NameOnCard"
                type="text"
                name="NameOnCard"
                placeholder="Your NameOnCard"
                value
              />
            </div>
            <div class="w-100">
              <label class="custom-label" for="CreditCardNumber">
                CreditCardNumber:
              </label>
              <input
                class="w-100"
                v-model="Billing.CreditCardNumber"
                type="text"
                name="CreditCardNumber"
                placeholder="Your CreditCardNumber"
                value
              />
            </div>

            <div class="w-100 d-flex flex-row">
              <div class="w-50">
                <label class="custom-label" for="ExpiredDate">
                  ExpiredDate:
                </label>
                <input
                  class="w-100"
                  v-model="Billing.ExpiredDated"
                  type="text"
                  name="ExpiredDate"
                  placeholder="Card ExpiredDate"
                  value
                />
              </div>
              <div class="w-50 ml-3">
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
              </div>
            </div>
            <div class="w-100 d-flex flex-row mt-3">
              <button class="ml-auto btn" @click="updateProfile(Billing)">
                Edit</button
              ><button class="ml-3 btn" @click="togglePayment">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileService from "../../services/ProfileService";
import AuthenticationService from "../../services/AuthenticationService";

export default {
  data() {
    return {
      Information: {
        FirstName: "",
        LastName: "",
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
      },
      addDefaultAddress: false,
      addDefaultPayment: false
    };
  },
  computed: {
    ...mapGetters("authentication", ["getUserName"])
  },
  mounted() {
    this.getYourProfile();
  },
  methods: {
    toggleAddress() {
      this.addDefaultAddress = !this.addDefaultAddress;
    },
    togglePayment() {
      this.addDefaultPayment = !this.addDefaultPayment;
    },
    async updateProfile(object) {
      try {
        const updateInfo = Object.assign(object, object[0]);
        const response = await ProfileService.post(updateInfo);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async userUpdate(object) {
      try {
        const updateInfo = Object.assign(object, object[0]);
        const response = await AuthenticationService.update(updateInfo);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async getYourProfile() {
      try {
        const response = await ProfileService.get();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-container {
  label {
    color: #666;
  }
  input {
    border: 1px solid #ccc;
  }
}
.form-container {
  padding: 30px 0;
  > div {
    padding-right: 15px;
    margin-bottom: 30px;
  }
}

.user-default {
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 35px;
  }
  .default-column {
    button {
      border: 1px solid #e3aaaa;
      color: #e3aaaa;
      &:hover {
        background-color: #eee;
      }
    }
    input {
      margin-bottom: 15px;
    }
  }
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
