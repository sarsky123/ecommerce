module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  plugins: [
    "vue",
  ],
  
  extends: ["plugin:vue/essential", "@vue/prettier", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    
    },
  
  parserOptions: {
    parser: "babel-eslint"
  }
};
