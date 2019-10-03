<template>
  <div>
    <section class="product-detail border-bottom border-light">
      <div class="py-5">
        <productModal :products="product"></productModal>
      </div>
      <div class=" py-2 detail-info pb-3 mb-3 col">
        <b-tabs
          content-class="mt-3 col py-3"
          nav-link-class="text-dark"
          active-nav-item-class="font-weight-bold text-dark bg-transparent"
          justified
        >
          <b-tab title-item-class="text-dark" title="PRODUCT DETAILS" active
            ><p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              amet temporibus in enim minima nobis.
            </p></b-tab
          >
          <b-tab title="FABRIC & CARE"
            ><p>
              FABRIC & CARE Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Recusandae odit laboriosam doloribus esse illum perferendis
              accusantium maiores nobis quas quibusdam, error magni atque,
              nostrum hic iste? Quibusdam laboriosam doloribus vero!
            </p></b-tab
          >
          <b-tab title="BRAND BIO"
            ><p>
              BRAND BIO Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod ex reiciendis aut quaerat molestias quia.
            </p></b-tab
          >
          <b-tab title="DELIVERY"
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
    ...mapGetters("product", ["getProductById"])
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
    border: none !important;
    border-bottom: 1px solid black !important;
    color: #777 !important;
  }
  &.active {
    border: none !important;
    border-bottom: 2px solid black !important;
  }
}
.detail-info {
  background: #f0f0f0;
}
</style>
