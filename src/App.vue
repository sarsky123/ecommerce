<template>
  <div id="app">
    <main class="main-content">
      <Nav></Nav>
      <div class="homepage-hero" id="homepageHero">
        <div class="Hero-Image"></div>
        <div class="homepage-hero-content wrapper clearfix">
          <div class="text-left">
            <h1 class="homepage-hero-content_title">New Season</h1>
            <p class="homepage-hero-content_block">Saben</p>
            <a href="#" class="btn btn-large btn-splash uppercase">Shop Now</a>
          </div>
        </div>
        <div class="scroll-icon-wrap">
          <a
            href="javascript:void(0)"
            class="scroll_icon icon icon-arrow-down icon-fallback-text"
          >
            <span class="icon icon-arrow-down"></span>
            <span class="fallback-text">Down</span>
          </a>
        </div>
        <div id="scroll"></div>
        <div class="hero-image-overlay"></div>
      </div>
      <productInfo></productInfo>
      <div class="homepage-custom">
        <div class="homepage-custom_parallax clearfix">
          <div class="text-center">
            <div class="mega-button">
              <div class="mega-button-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="site-footer-wrapper" role="contentinfo">
        <div class="wrapper site-footer">
          <div id="instafeed">
            <a href="https://www.instagram.com/p/B04sd3kJaCl/"
              ><img
                src="//scontent.cdninstagram.com/vp/bda87c9a6c041f3cef3409fde1e38295/5DEDF7AA/t51.2885-15/sh0.08/e35/s640x640/66109136_350827199172319_843804642294756938_n.jpg?_nc_ht=scontent.cdninstagram.com"/></a
            ><a href="https://www.instagram.com/p/B01qk3FJLWP/"
              ><img
                src="//scontent.cdninstagram.com/vp/fba44c64a8ca27920e975590c4229e73/5DE7A836/t51.2885-15/sh0.08/e35/s640x640/66817921_627356497753805_7464552853654524716_n.jpg?_nc_ht=scontent.cdninstagram.com"/></a
            ><a href="https://www.instagram.com/p/B0zlV1hJFHy/"
              ><img
                src="//scontent.cdninstagram.com/vp/2f0f1561121747fae096173c882cc683/5DDFAB9A/t51.2885-15/sh0.08/e35/s640x640/67097161_153576035826628_4730412649226417192_n.jpg?_nc_ht=scontent.cdninstagram.com"/></a
            ><a href="https://www.instagram.com/p/B0zEFSPpjnG/"
              ><img
                src="//scontent.cdninstagram.com/vp/108239a14a7a27fbf2d3ab330fe51b7d/5DE9B586/t51.2885-15/sh0.08/e35/s640x640/66130874_177751573250761_5546930353979721715_n.jpg?_nc_ht=scontent.cdninstagram.com"/></a
            ><a href="https://www.instagram.com/p/B0wVAv_JQwJ/"
              ><img
                src="//scontent.cdninstagram.com/vp/d0190fea7585c620360e5846fdf47964/5DD4FCDB/t51.2885-15/sh0.08/e35/s640x640/66708476_368924150437286_2538849928653473572_n.jpg?_nc_ht=scontent.cdninstagram.com"/></a
            ><a href="https://www.instagram.com/p/B0pBY0SppK-/"
              ><img
                src="//scontent.cdninstagram.com/vp/688139a146e6c278811359c743df7e71/5DE4A9AA/t51.2885-15/sh0.08/e35/s640x640/65885236_648963498846847_8331349160918562698_n.jpg?_nc_ht=scontent.cdninstagram.com"
            /></a>
          </div>
          <div class="grid-uniform">
            <div class="grid__item large--one-third">
              <h5>Customer Care</h5>
              <hr class="hr--underline" />
              <ul class="footer-quicklinks">
                <li><a href="/pages/contact-us">Contact Us</a></li>

                <li><a href="/pages/faq">FAQs</a></li>

                <li><a href="/pages/faqs">The Story</a></li>

                <li><a href="/pages/store-location">Store Location</a></li>

                <li><a href="/blogs/blog">Blog</a></li>

                <li><a href="/pages/careers">Careers</a></li>

                <li><a href="/pages/terms-of-use">Terms of Use</a></li>

                <li><a href="/pages/shipping">Shipping</a></li>

                <li><a href="/pages/returns">Returns</a></li>

                <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>

            <div class="grid__item large--one-third">
              <h5>About</h5>
              <hr class="hr--underline" />
              <div class="rte clearfix">
                <meta charset="utf-8" /><span
                  >Hebe is a destination for local style seekers and shoppers
                  from abroad. Located in Masterton's boutique Kuripuni Village,
                  Hebe is lovingly and carefully curated by Owner and Buyer Dani
                  Burkhart. For all women, all sizes, Hebe is the go-to boutique
                  in the Wairarapa with a balanced mix of iconic fashion labels,
                  luxe&nbsp;casual wear and lifestyle accessories. Once a small
                  store in Kuripuni, Hebe has&nbsp;grown and expanded in to a
                  new,&nbsp;refined space in Kuripuni with
                  Dani&nbsp;designing&nbsp;in-house label My Boyfriends Back in
                  addition.</span
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
      <!--cart & overlay-->
      <cartCheckout></cartCheckout>
    </main>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import productInfo from "./views/productInfo.vue";
import cartCheckout from "./views/cartCheckout.vue";

export default {
  components: {
    cartCheckout,
    Nav,
    productInfo
  }
};
</script>

<style></style>
