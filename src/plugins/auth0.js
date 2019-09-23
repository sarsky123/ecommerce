import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
  domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
  clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
  redirectUri: process.env.VUE_APP_DOMAINURL_CALLBACK,
  responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
  scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
});
export default webAuth;
