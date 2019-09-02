import axios from "axios";
import { log } from "util";

const contentful = require("contentful");

const apiClient = contentful.createClient({
  space: "d1c4u2kmipnr",
  accessToken: "7TjtAOZ-I8BkPvGsU-UvvB6QusdRMcjV4LjF1o3vre0"
});

export default {
  async getProducts() {
    try {
      let contentful = await apiClient.getEntries({
        content_type: "ecommerce"
      });

      let products = contentful.items;

      products = products.map(item => {
        const { title, price, name } = item.fields;
        const { id } = item.sys;
        const image = "https:" + item.fields.image.fields.file.url;
        return { title, price, id, image, name };
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }
};
