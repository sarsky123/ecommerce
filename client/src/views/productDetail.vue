<template>
  <div>
    <section class="product-detail border-bottom border-light">
      <div class="py-5">
        <productModal :products="product"></productModal>
      </div>
      <div class=" py-2 detail-info pb-3 mb-3 col">
        <b-tabs
          content-class="mt-3 col py-3 text-light"
          nav-link-class="text-light"
          active-nav-item-class="font-weight-bold text-dark bg-transparent"
          justified
        >
          <b-tab title-item-class="text-light" title="PRODUCT DETAILS"
            ><p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              amet temporibus in enim minima nobis.
            </p></b-tab
          >
          <b-tab title="FABRIC & CARE" title-link-class="text-light"
            ><p>
              FABRIC & CARE Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Recusandae odit laboriosam doloribus esse illum perferendis
              accusantium maiores nobis quas quibusdam, error magni atque,
              nostrum hic iste? Quibusdam laboriosam doloribus vero!
            </p></b-tab
          >
          <b-tab title="BRAND BIO" title-link-class="text-light"
            ><p>
              BRAND BIO Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod ex reiciendis aut quaerat molestias quia.
            </p></b-tab
          >
          <b-tab title="DELIVERY" title-link-class="text-light"
            ><p>
              DELIVERY Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime soluta quo aliquid quas minus vero.
            </p></b-tab
          >
        </b-tabs>
      </div>
    </section>
  </div>
</template>

<script>
import productModal from "@/components/productModal.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    productModal
  },
  props: {
    ProductID: {
      type: String
    }
  },
  data() {
    return {
      product: {}
    };
  },
  async mounted() {
    this.product = this.getProductById(this.ProductID);
  },

  computed: {
    ...mapGetters("product", ["getProductById"]),

    ...mapGetters("authentication", ["loggedIn"])
  }
};
</script>
<style lang="scss">
@media screen and (max-width: 960px) {
  section {
    margin-top: 3rem !important;
  }
}

section {
  margin-top: 150px;
}
.nav-link {
  color: black !important;
}
.nav-link {
  &:hover {
    border-bottom: 1px solid white !important;
    color: #333 !important;
  }
  &.active {
    border-bottom: 2px solid black !important;
  }
}
.detail-info {
  background: #e3aaaa;
  color: white;
}
</style>
