<template>
  <div>
    <section class="product-detail">
      <div>
        <productModal :id="id" :product="product"></productModal>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import productModal from "@/components/productModal.vue";

export default {
  components: {
    productModal
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    var vm = this;
    vm.product = vm.getProductById(vm.id);
  },

  methods: {
    ...mapActions("product", ["fetchProducts"])
  },

  computed: {
    ...mapGetters("product", ["getProductById", "getProducts"])
  }
};
</script>
<style>
.product-detail {
  margin-top: 120px;
  display: block;
  background-color: #555;
}
</style>
