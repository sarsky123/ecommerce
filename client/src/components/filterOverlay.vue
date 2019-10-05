<template>
  <div class="d-flex">
    <div class="filter-overlay" @click.self="close()">
      <div class="filterWindows bg-white col-xs-12 col-sm-6 h-100">
        <div class="row">
          <div
            class="filter_header w-100 d-flex flex-row clearfix justify-content-between"
          >
            <div
              class="prev-arrow flex-fill mr-auto d-flex align-items-center"
            ></div>
            <div class="refine_title flex-fill d-inline-block text-center">
              <h3 class="text-uppercase ">Refine</h3>
            </div>
            <div class="closing_button flex-fill d-flex align-items-center">
              <span class="mr-auto"></span>
              <span
                ><font-awesome-icon
                  @click="close()"
                  :icon="['fas', 'times-circle']"
                  class="filter_header_icon"
                ></font-awesome-icon
              ></span>
            </div>
          </div>
          <div
            class="filter_button w-100 d-flex flex-row justify-content-center"
          >
            <div class="clear_button flex-fill">
              <button
                type="button"
                class="btn btn-light border-dark text-uppercase"
                @click="cleaAllFilter()"
              >
                CLEAR ALL
              </button>
            </div>
            <div class="apply_button flex-fill">
              <button
                type="button"
                @click.prevent="close()"
                class="btn btn-dark text-uppercase"
              >
                APPLY
              </button>
            </div>
          </div>
          <div class="filter_body w-100">
            <div role="tablist">
              <b-card no-gutter no-body class="rounded-0">
                <b-card-header
                  header-tag="header"
                  class="p-0 rounded-0"
                  role="tab"
                >
                  <b-button
                    :pressed="false"
                    block
                    href="#"
                    v-b-toggle.accordion-1
                    class="rounded-0 px-3 py-3 text-left border-light float-left align-items-center d-flex"
                    variant="text-dark bg-white text-uppercase"
                    >Categories <span class="ml-auto when-closed">+</span
                    ><span class="ml-auto when-opened">-</span></b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visble
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body class="bg-secondary text-capitalize">
                    <span v-if="!category.length">None to filter</span>
                    <b-card-text
                      v-for="(cat, index) in category"
                      :key="index"
                      @click="filterWithPayload(cat)"
                      >{{ cat
                      }}<span class="filterCount"
                        >( {{ filteredCount(cat, "Category") }} )
                      </span></b-card-text
                    >
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-gutter no-body class="rounded-0">
                <b-card-header
                  header-tag="header"
                  class="p-0 rounded-0 "
                  role="tab"
                >
                  <b-button
                    :pressed="false"
                    block
                    href="#"
                    v-b-toggle.accordion-2
                    class="rounded-0 px-3 py-3 text-left border-light d-flex align-items-center"
                    variant="text-dark bg-white text-uppercase"
                    >accessories<span class="float-right ml-auto when-closed"
                      >+</span
                    ><span class="when-opened ml-auto">-</span></b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  visble
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body class="bg-secondary text-capitalize">
                    <span v-if="!accessories.length">None to filter</span>
                    <b-card-text
                      v-for="(accessorie, index) in accessories"
                      :key="index"
                      @click="filterWithPayload(accessorie)"
                    >
                      {{ accessorie
                      }}<span class="filterCount"
                        >( {{ filteredCount(accessorie, "Category") }} )
                      </span></b-card-text
                    >
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-gutter no-body class="rounded-0">
                <b-card-header
                  header-tag="header"
                  class="p-0 rounded-0 "
                  role="tab"
                >
                  <b-button
                    :pressed="false"
                    block
                    href="#"
                    v-b-toggle.accordion-3
                    class="rounded-0 px-3 py-3 text-left border-light d-flex align-items-center"
                    variant="text-dark bg-white text-uppercase"
                    >brand<span class="float-right ml-auto when-closed">+</span
                    ><span class="float-right when-opened ml-auto"
                      >-</span
                    ></b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  visble
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body class="bg-secondary text-capitalize">
                    <b-card-text
                      v-for="(br, index) in groupByBrand"
                      :key="index"
                      @click="filterWithBrand(br)"
                    >
                      {{ br
                      }}<span class="filterCount"
                        >( {{ filteredCount(br, "Title") }} )
                      </span></b-card-text
                    >
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    accessories: {
      type: Array
    },
    category: {
      type: Array
    },
    gender: {
      type: Array
    },
    totalProduct: {
      type: Array
    }
  },
  methods: {
    close() {
      this.$emit("closeFilter");
    },
    filteredCount(condition, prop) {
      var item = this.totalProduct;
      return item.filter(items => items[prop] == condition).length;
    },
    filterWithPayload(payload) {
      this.$emit("filterAdded", payload);
    },
    filterWithBrand(payload) {
      this.$emit("addFilterBrand", payload);
    },
    cleaAllFilter() {
      this.$emit("clearAll");
    }
  },
  computed: {
    groupByBrand() {
      var myArray = [];
      for (let i = 0; i < this.totalProduct.length; i++) {
        myArray.push(this.totalProduct[i].Title);
      }
      myArray = [...new Set(myArray)];
      return myArray;
    }
  }
};
</script>

<style lang="scss">
.filter-overlay {
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(210, 210, 210, 0.8);
  z-index: 15;
  cursor: pointer;
  width: 100%;
}
.filter_header {
  padding: 18px 15px;
  border-bottom: 1px solid black;
}
.filter_header_icon {
  font-size: 26px;
}
.filter_button {
  padding: 18px 0;
  border-bottom: 3px solid black;
  button {
    display: block;
    padding: 13px 40px;
    margin: 0 auto;
    border-radius: 0;
  }
}
.filterCount {
  color: #aaa;
  display: inline-block;
  margin-left: 5px;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
.when-opened,
.when-closed {
  font-size: 20px;
  line-height: 1px;
}
p.card-text:hover {
  color: #ccc !important;
}
.card-body {
  padding: 35px !important;
  > .card-text {
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 20px;
  }
}
.btn:focus {
  box-shadow: none !important;
}
</style>
