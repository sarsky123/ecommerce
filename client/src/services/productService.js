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
        const { Title, Name, Category, Onsale, Gender } = item.fields;
        const ProductID = item.sys.id;
        const Image = "https:" + item.fields.Image.fields.file.url + "?w=500";
        const Price = item.fields.Price.toFixed(2);
        return {
          Title,
          Price,
          ProductID,
          Image,
          Name,
          Category,
          Onsale,
          Gender
        };
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }
};
