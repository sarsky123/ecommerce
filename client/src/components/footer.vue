<template>
  <div>
    <footer class="site-footer-wrapper" role="contentinfo">
      <div class="col bg-white d-flex justify-content-center">
        <b-button
          squared
          class="text-capitalize  px-4 py-2 mb-4 w-100 mx-5 sign-up-425"
          ><router-link
            :to="{
              name: 'userLogin'
            }"
            tag="span"
            >sign up for the event</router-link
          ></b-button
        >
      </div>
      <div class="homepage-event bg-secondary">
        <div class="row py-4 col">
          <div class="col pr-0">
            <b-button
              squared
              class="float-left text-capitalize px-4 py-2 sign-up"
              @click.prevent="auth0Login()"
              ><router-link
                :to="{
                  name: 'userLogin'
                }"
                tag="span"
                >sign up for the event</router-link
              ></b-button
            >
            <div class="float-right item-parent">
              <ul
                class="float-left d-flex flex-row text-white event-item
                m-0
                "
              >
                <li>
                  <router-link
                    :to="{
                      name: 'store'
                    }"
                    class="col"
                    >stores</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col site-footer mx-auto">
        <div class=" d-flex flex-row align-items-start justify-content-between">
          <div class="col mb-5">
            <h5>Customer Care</h5>
            <hr class="hr--underline" />
            <ul class="footer-quicklinks">
              <li>
                <router-link
                  :to="{
                    name: 'customer-service'
                  }"
                  >Contact Us</router-link
                >
              </li>

              <li><a href="/pages/faq">FAQs</a></li>

              <li>
                <router-link
                  :to="{
                    name: 'term-of-use'
                  }"
                  >Term Of Use</router-link
                >
              </li>
            </ul>
          </div>

          <div class="col mb-5">
            <h5>About</h5>
            <hr class="hr--underline" />
            <div class="rte clearfix">
              <span
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda quibusdam eveniet saepe deserunt odit, recusandae unde
                minus doloremque numquam dolorum.</span
              >
            </div>
          </div>

          <div class="col mb-5">
            <h5>Products</h5>
            <hr class="hr--underline" />
            <ul class="footer-quicklinks">
              <li>
                <router-link
                  :to="{
                    name: 'ourstore'
                  }"
                  >Our Store</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'term-of-use'
                  }"
                  >Shipping</router-link
                >
              </li>

              <li>
                <router-link
                  :to="{
                    name: 'privacy'
                  }"
                  >Privacy</router-link
                >
              </li>
            </ul>
            <!-- /snippets/newsletter-form.liquid -->
          </div>
        </div>

        <div class="d-flex flex-column pt-1 w-100 mx-auto">
          <ul
            class="footer-payment payment-icons inline-list d-flex flex-row w-100 jusify-content-between mx-auto"
          >
            <li class="flex-fill text-center">
              <font-awesome-icon :icon="['fab', 'cc-amex']" />
            </li>
            <li class="flex-fill text-center">
              <font-awesome-icon :icon="['fab', 'cc-paypal']" />
            </li>
            <li class="flex-fill text-center">
              <font-awesome-icon :icon="['fab', 'cc-mastercard']" />
            </li>
            <li class="flex-fill text-center">
              <font-awesome-icon :icon="['fab', 'cc-visa']" />
            </li>
            <li class="flex-fill text-center">
              <font-awesome-icon :icon="['fab', 'cc-apple-pay']" />
            </li>
          </ul>

          <p class="text-center mt-3">
            © Lorem ipsum Ducimus sit tempore minus praesentium vitae! Animi?
          </p>
        </div>
      </div>
    </footer>
    <div class="mobile-footer ">
      <div class="col bg-white d-flex justify-content-center">
        <b-button
          squared
          class="sign-up-425 bg-white text-capitalize  px-4 py-2 mb-4 w-100 mx-5"
          ><router-link
            :to="{
              name: 'userLogin'
            }"
            tag="span"
            >sign up for the event</router-link
          ></b-button
        >
      </div>
      <div class="homepage-event bg-secondary">
        <div class="row col py-4">
          <div class="col px-0">
            <b-button
              squared
              class="float-left text-capitalize px-4 py-2 sign-up"
            >
              <router-link
                :to="{
                  name: 'userLogin'
                }"
                tag="span"
                >sign up for the event</router-link
              ></b-button
            >
            <div class="item-parent w-100">
              <ul
                class="d-flex flex-row text-white event-item
                m-0
                "
              >
                <li class="ml-auto">store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div role="tablist">
        <b-card no-gutter no-body class="rounded-0">
          <b-card-header header-tag="header" class="p-0 rounded-0" role="tab">
            <b-button
              :pressed="false"
              block
              href="#"
              v-b-toggle.accordion-1
              class="rounded-0 px-3 py-3 text-left border-light d-flex flex-row align-items-center"
              variant="outline-dark text-uppercase"
              >CONTACT US <span class="ml-auto when-closed">+</span
              ><span class="ml-auto when-opened">-</span></b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visble
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="bg-secondary text-capitalize py-4">
              <b-card-text variant="secondary">Customer Services</b-card-text>
              <b-card-text>Policy </b-card-text>
              <b-card-text>Term Of Use </b-card-text>
              <b-card-text>Our Store </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-gutter no-body class="rounded-0">
          <b-card-header header-tag="header" class="p-0 rounded-0 " role="tab">
            <b-button
              :pressed="false"
              block
              href="#"
              v-b-toggle.accordion-2
              class="rounded-0 px-3 py-3 text-left border-light d-flex flex-row align-items-center"
              variant="outline-dark text-uppercase"
              >About us <span class="ml-auto when-closed">+</span
              ><span class="ml-auto when-opened">-</span></b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-2"
            visble
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="bg-secondary text-capitalize">
              <b-card-text>the company</b-card-text>
              <b-card-text>careers</b-card-text>
              <b-card-text>our client</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-gutter no-body class="rounded-0">
          <b-card-header header-tag="header" class="p-0 rounded-0 " role="tab">
            <b-button
              :pressed="false"
              block
              href="#"
              v-b-toggle.accordion-3
              class="rounded-0 px-3 py-3 text-left border-light d-flex flex-row align-items-center"
              variant="outline-dark text-uppercase"
              >Delivery & return <span class="ml-auto when-closed">+</span
              ><span class="ml-auto when-opened">-</span></b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-3"
            visble
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="bg-secondary text-capitalize">
              <b-card-text>delivery</b-card-text>
              <b-card-text>returns</b-card-text>
              <b-card-text>FAQS</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <div class="social-media-mobile w-100">
        <div class="row m-0">
          <div class="col  bg-white p-4 m-0">
            <a href="#" class="link-fa">
              <font-awesome-icon :icon="['fab', 'facebook-square']"
            /></a>
            <a href="#" class="link-fa"
              ><font-awesome-icon :icon="['fab', 'twitter-square']" />
            </a>
            <a href="#" class="link-fa"
              ><font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" class="link-fa"
              ><font-awesome-icon :icon="['fab', 'pinterest-square']" />
            </a>
            <a href="#" class="link-fa"
              ><font-awesome-icon :icon="['fab', 'line']" />
            </a>
            <a href="#" class="link-fa"
              ><font-awesome-icon :icon="['fab', 'whatsapp-square']" />
            </a>
          </div>
        </div>
      </div>
      <div class="copyright w-100 bg-white">
        <div class="row m-0">
          <div class="col bg-white pb-5 mx-0">
            <p class="copyright">
              <font-awesome-icon :icon="['far', 'copyright']" />

              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    auth0Login() {
      this.$store.dispatch("auth0/auth0Login");
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-up {
  color: #e3aaaa !important;
  border-color: #e3aaaa !important;
  &:hover {
    background-color: #cccc !important;
  }
}
.sign-up-425 {
  color: #e3aaaa !important;
  border-color: #e3aaaa !important;
  &:hover {
    background-color: #cccc !important;
  }
}
.homepage-event > div:first-child {
  max-width: 1440px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 1px #000;
  }
}

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
.link-fa {
  color: #000 !important;
  font-size: 24px !important;
  margin-right: 20px;
}
.footer-payment {
  max-width: 1440px;
  > li {
    font-size: 40px;
  }
}
.site-footer > div:first-child {
  max-width: 1440px;
  margin: 0 auto;
}

@media screen and (max-width: 576px) {
  footer {
    display: none;
  }
}
@media screen and (min-width: 576px) {
  .mobile-footer {
    display: none;
  }
}

.event-item {
  margin-right: -50px;
  text-shadow: 0 0 0.5px #000;
  -webkit-text-stroke: 0.2px black;
  :last-child {
    margin-right: 0;
  }
  > li {
    font-size: 18px;
    line-height: 35px;
    margin-right: 1rem;
    text-transform: uppercase;
  }
}
@media screen and (max-width: 425px) {
  .sign-up {
    display: none;
  }
  .item-parent {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
@media screen and (min-width: 424px) {
  .sign-up-425 {
    display: none !important;
  }
}
</style>
