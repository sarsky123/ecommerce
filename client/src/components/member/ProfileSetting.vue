<template>
  <div class="col profile-container">
    <h3>Welcome Back! {{ getUserName.FirstName }}</h3>
    <div class="w-100 d-flex flex-column flex-md-row align-items-start">
      <div class="col col-md-7 account-setting-container">
        <div>
          <h3>Your Account Setting</h3>
          <div class="col" v-if="updateUserInfo">
            <div class="row flex-row">
              <form
                class="d-flex flex-row flex-wrap form-container "
                @submit.prevent="userUpdate(DataForForm.Information)"
              >
                <div class="d-flex flex-row w-100 m-0 justify-content-end">
                  <span
                    ><font-awesome-icon
                      @click="toggleUserInfo()"
                      :icon="['fas', 'times']"
                  /></span>
                </div>
                <div class="w-50">
                  <label class="custom-label" for="firstName">
                    First Name:
                  </label>
                  <input
                    class="w-100"
                    v-model.lazy="DataForForm.Information.FirstName"
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
                    v-model.lazy="DataForForm.Information.LastName"
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
                    v-model.lazy="DataForForm.Information.Email"
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
                    v-model.lazy="DataForForm.Information.Phone"
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
                    v-model.lazy="DataForForm.Information.CellPhone"
                    type="text"
                    name="cellphone"
                    placeholder="Cell Phone"
                    value
                  />
                </div>

                <button
                  class="col-12 bg-secondary text-white py-2 border-nonemt-5 text-uppercase"
                  type="submit"
                  name="button"
                >
                  update profile
                </button>
              </form>
            </div>
          </div>
          <div class="w-100 default-column" v-else>
            <div v-for="(userInfo, name) in AcutalData.Information" :key="name">
              <span v-if="userInfo"> {{ name }} : {{ userInfo }} </span>
            </div>
            <b-button
              class="w-100 my-3 algin-self-end"
              @click="toggleUserInfo"
              variant="outline-secondary"
              >Edit User Information +</b-button
            >
          </div>
        </div>
      </div>
      <div class="col col-md-5 user-default">
        <div class="default-column">
          <h5>Default Shipping</h5>
          <div v-if="!addDefaultAddress">
            <div
              v-for="(shipInfo, name) in AcutalData.ShippingInfo"
              :key="name"
            >
              <span v-if="shipInfo"> {{ name }} : {{ shipInfo }} </span>
            </div>
            <b-button
              class="w-100 my-3"
              variant="outline-secondary"
              @click="toggleAddress"
              >Add Address Info +</b-button
            >
          </div>

          <div class="w-100 py-3" v-else>
            <div class="w-100">
              <label class="custom-label" for="Address">
                Address:
              </label>
              <input
                class="w-100 "
                v-model.lazy="DataForForm.ShippingInfo.Address"
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
                v-model.lazy="DataForForm.ShippingInfo.City"
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
                v-model.lazy="DataForForm.ShippingInfo.Country"
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
                v-model.lazy="DataForForm.ShippingInfo.PostCode"
                type="text"
                name="PostCode"
                placeholder="PostCode"
                value
              />
            </div>
            <div class="w-100 d-flex flex-row mt-3">
              <button
                class="ml-auto btn"
                @click="
                  updateProfile(DataForForm.ShippingInfo).then(toggleAddress())
                "
              >
                Edit</button
              ><button class="ml-3 btn" @click="toggleAddress()">
                Close
              </button>
            </div>
          </div>
        </div>
        <div class="default-column">
          <h5>Default Payment</h5>
          <div v-if="!addDefaultPayment">
            <div v-for="(billingInfo, name) in AcutalData.Billing" :key="name">
              <span v-if="billingInfo"> {{ name }} : {{ billingInfo }} </span>
            </div>
            <b-button
              class="w-100 my-3"
              variant="outline-secondary"
              v-if="!addDefaultPayment"
              @click="togglePayment"
              >Add Payment Info +</b-button
            >
          </div>

          <div class="w-100 py-3" v-else>
            <div class="w-50">
              <label class="custom-label" for="NameOnCard">
                NameOnCard:
              </label>
              <input
                class="w-100"
                v-model.lazy="DataForForm.Billing.NameOnCard"
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
                v-model.lazy="DataForForm.Billing.CreditCardNumber"
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
                  v-model.lazy="DataForForm.Billing.ExpiredDated"
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
                  v-model.lazy="DataForForm.Billing.CVC"
                  type="text"
                  name="CVC"
                  placeholder="CVC"
                  value
                />
              </div>
            </div>
            <div class="w-100 d-flex flex-row mt-3">
              <button
                class="ml-auto btn"
                @click="
                  updateProfile(DataForForm.Billing).then(togglePayment())
                "
              >
                Edit</button
              ><button class="ml-3 btn" @click="togglePayment()">
                Close
              </button>
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
      AcutalData: {
        Information: {
          FirstName: "",
          LastName: "",
          Email: "",
          Phone: "",
          CellPhone: ""
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
      },
      DataForForm: {},
      addDefaultAddress: false,
      addDefaultPayment: false,
      updateUserInfo: false
    };
  },
  computed: {
    ...mapGetters("authentication", ["getUserName"]),
    ...mapGetters("userInfo", ["getProfileSetting"])
  },
  mounted() {
    this.getYourProfile();
  },
  watch: {},
  methods: {
    toggleAddress() {
      this.addDefaultAddress = !this.addDefaultAddress;
      this.defaultForm();
    },
    togglePayment() {
      this.addDefaultPayment = !this.addDefaultPayment;
      this.defaultForm();
    },
    toggleUserInfo() {
      this.updateUserInfo = !this.updateUserInfo;
      this.defaultForm();
    },
    defaultForm() {
      this.DataForForm = JSON.parse(JSON.stringify(this.AcutalData));
    },
    async updateProfile(object) {
      try {
        const updateInfo = Object.assign(object, object[0]);
        const response = await ProfileService.post(updateInfo);
        if (response.status == 200) {
          this.getYourProfile();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async userUpdate(object) {
      try {
        const updateInfo = Object.assign(object, object[0]);
        const { CellPhone, Phone } = updateInfo;
        const response = await AuthenticationService.update(updateInfo).then(
          ProfileService.post({ CellPhone, Phone })
        );
        if (response.status == 200) {
          this.getYourProfile();
          this.toggleUserInfo();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getYourProfile() {
      var vm = this;
      try {
        const response = await ProfileService.get();
        if (response.status == 200) {
          response.data = { ...response.data, ...response.data.User };
          await this.$store
            .dispatch("userInfo/setProfile", response.data)
            .then(() => {
              var shallowCopy = {};
              for (var prop in vm.AcutalData.Information) {
                if (vm.getProfileSetting.hasOwnProperty(prop)) {
                  shallowCopy[prop] = vm.getProfileSetting[prop];
                }
              }
              vm.AcutalData.Information = JSON.parse(
                JSON.stringify(shallowCopy)
              );
            })
            .then(() => {
              var shallowCopy = {};
              for (var prop in vm.AcutalData.ShippingInfo) {
                if (vm.getProfileSetting.hasOwnProperty(prop)) {
                  shallowCopy[prop] = vm.getProfileSetting[prop];
                }
              }
              vm.AcutalData.ShippingInfo = JSON.parse(
                JSON.stringify(shallowCopy)
              );
            })
            .then(() => {
              var shallowCopy = {};
              for (var prop in vm.AcutalData.Billing) {
                if (vm.getProfileSetting.hasOwnProperty(prop)) {
                  shallowCopy[prop] = vm.getProfileSetting[prop];
                }
              }
              vm.AcutalData.Billing = JSON.parse(JSON.stringify(shallowCopy));
            })
            .then(() => {
              this.defaultForm();
            });
        }
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
  .account-setting-container {
    h3 {
      margin-bottom: 20px;
    }
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
}
.default-column {
  display: flex;
  flex-direction: column;
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
  h5 {
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 5px;
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
h3,
h5 {
  color: #aaa;
}
</style>
