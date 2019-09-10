<template>
  <div>
    <footer class="site-footer-wrapper" role="contentinfo">
      <div class="wrapper site-footer">
        <div class="grid-uniform">
          <div class="grid__item large--one-third">
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

              <li><a href="/pages/store-location">Store Location</a></li>

              <li><a href="/pages/terms-of-use">Terms of Use</a></li>

              <li><a href="/pages/shipping">Shipping</a></li>

              <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="grid__item large--one-third">
            <h5>About</h5>
            <hr class="hr--underline" />
            <div class="rte clearfix">
              <meta charset="utf-8" /><span
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda quibusdam eveniet saepe deserunt odit, recusandae unde
                minus doloremque numquam dolorum.</span
              >
            </div>
          </div>

          <div class="grid__item large--one-third">
            <h5>Newsletter</h5>
            <hr class="hr--underline" />
            <p>Join our mailing list</p>
            <!-- /snippets/newsletter-form.liquid -->

            <form
              action="//facebook.us7.list-manage.com/subscribe/post?u=fbd2d8017a014a3da9922cceb&amp;id=d16f830cf1"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              class="input-group newsletter-form"
            >
              <input
                type="email"
                value=""
                placeholder="your@email.com"
                name="EMAIL"
                id="mail"
                class="input-group-field"
                aria-label="your-email@example.com"
                autocorrect="off"
                autocapitalize="off"
              />
              <span class="input-group-btn">
                <input
                  type="submit"
                  class="btn uppercase"
                  name="subscribe"
                  id="subscribe"
                  value="Subscribe"
                />
              </span>
            </form>
          </div>
        </div>

        <div class="grid footer-secondary-wrapper clearfix">
          <ul class="footer-payment payment-icons grid__item inline-list">
            <li>
              <span class="icon-fallback-text">
                <span
                  class="icon icon-american_express"
                  aria-hidden="true"
                ></span>
                <span class="fallback-text">american express</span>
              </span>
            </li>

            <li>
              <span class="icon-fallback-text">
                <span class="icon icon-apple_pay" aria-hidden="true"></span>
                <span class="fallback-text">apple pay</span>
              </span>
            </li>

            <li>
              <span class="icon-fallback-text">
                <span class="icon icon-master" aria-hidden="true"></span>
                <span class="fallback-text">master</span>
              </span>
            </li>

            <li>
              <span class="icon-fallback-text">
                <span class="icon icon-paypal" aria-hidden="true"></span>
                <span class="fallback-text">paypal</span>
              </span>
            </li>

            <li>
              <span class="icon-fallback-text">
                <span class="icon icon-shopify_pay" aria-hidden="true"></span>
                <span class="fallback-text">shopify pay</span>
              </span>
            </li>

            <li>
              <span class="icon-fallback-text">
                <span class="icon icon-visa" aria-hidden="true"></span>
                <span class="fallback-text">visa</span>
              </span>
            </li>
          </ul>

          <ul class="footer-social social-icons grid__item inline-list">
            <li>
              <a
                class="icon-fallback-text"
                href="https://www.facebook.com/Hebe-Designer-Boutique-263499693785401/?ref=ts&amp;fref=ts"
                title="Hebe Designer Boutique on Facebook"
                target="_blank"
              >
                <span class="icon icon-facebook" aria-hidden="true"></span>
                <span class="fallback-text">Facebook</span>
              </a>
            </li>

            <li>
              <a
                class="icon-fallback-text"
                href="https://www.instagram.com/hebeboutique"
                title="Hebe Designer Boutique on Instagram"
                target="_blank"
              >
                <span class="icon icon-instagram" aria-hidden="true"></span>
                <span class="fallback-text">Instagram</span>
              </a>
            </li>
          </ul>

          <ul class="footer-secondary grid__item inline-list">
            <li><a href="/">© Copyright Hebe Designer Boutique 2019</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="mobile-footer mt-4 ">
      <div class="col bg-white d-flex justify-content-center sign-up-425">
        <b-button
          squared
          variant="outline-info"
          class=" text-capitalize  px-4 py-2 mb-4 w-100 mx-5"
          >sign up for the event</b-button
        >
      </div>
      <div class="homepage-event bg-secondary">
        <div class="row col py-4">
          <div class="col pr-0">
            <b-button
              squared
              variant="outline-info"
              class="float-left text-capitalize px-4 py-2 sign-up"
              >sign up for the event</b-button
            >
            <div class="float-right item-parent">
              <ul
                class="float-left d-flex flex-row text-white event-item
                m-0
                "
              >
                <li>stores</li>
                <li>event</li>
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
              class="rounded-0 px-3 py-3 text-left border-light float-left"
              variant="outline-dark text-uppercase"
              >CONTACT US <span class="float-right when-closed">+</span
              ><span class="float-right when-opened">-</span></b-button
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
              class="rounded-0 px-3 py-3 text-left border-light float-left"
              variant="outline-dark text-uppercase"
              >About us <span class="float-right when-closed">+</span
              ><span class="float-right when-opened">-</span></b-button
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
              class="rounded-0 px-3 py-3 text-left border-light float-left"
              variant="outline-dark text-uppercase"
              >Delivery & return <span class="float-right when-closed">+</span
              ><span class="float-right when-opened">-</span></b-button
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
      <div class="copyright w-100 bg-white ">
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
export default {};
</script>

<style lang="scss" scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
.link-fa {
  color: #000 !important;
  font-size: 24px !important;
  margin-right: 20px;
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
