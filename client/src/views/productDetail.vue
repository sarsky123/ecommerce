<template>
  <div>
    <section class="product-detail border-bottom border-light">
      <div class="py-5">
        <productModal :products="product"></productModal>
      </div>
      <div class="py-2 detail-info pb-3 mb-3">
        <b-tabs
          content-class="mt-3 col py-3 text-light mx-auto text-center"
          nav-link-class="text-light"
          active-nav-item-class="font-weight-bold  bg-transparent"
          justified
        >
          <b-tab title="PRODUCT DETAILS" title-item-class="text-light"
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
import HistoryService from "../services/BrowsingHistoryService";
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
  created() {
    this.product = this.getProductById(this.ProductID);
  },
  async mounted() {
    if (!this.loggedIn || !this.product) {
      console.log("rejected");
      return;
    }
    try {
      const postHistory = await HistoryService.post(this.product.ProductID);
    } catch (err) {
      console.log(err);
    }
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

.detail-info {
  width: 100%;
  background: #e3aaaa;
  color: white;
  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-link {
    color: white;
    border: none !important;
    &:hover {
      border-bottom: 2px solid #ccc !important;
      color: #000 !important;
    }

    &.active {
      border-bottom: 2px solid white !important;
      color: #ccc !important;
    }
  }
}
</style>
