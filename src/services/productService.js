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
        const { title, name, category, onsale, gender } = item.fields;
        const { id } = item.sys;
        const image = "https:" + item.fields.image.fields.file.url + "?w=500";
        const price = item.fields.price.toFixed(2);
        return { title, price, id, image, name, category, onsale, gender };
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }
};
