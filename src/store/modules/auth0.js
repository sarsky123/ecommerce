import auth0 from "auth0-js";
import createAuth0Client from "@auth0/auth0-spa-js";
import router from "../../router.js";

export const state = {
  userIsAuthorized: false,
  auth0: new auth0.WebAuth({
    domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
    redirectUri: process.env.VUE_APP_DOMAINURL + "/callback",
    responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
    scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
  })
};

export const mutations = {
  SET_USER_IS_AUTHENTICATED(state, replacement) {
    state.userIsAuthorized = replacement;
  }
};
export const actions = {
  setUserIsAuthenticated(context, replacement) {
    context.commit("SET_USER_IS_AUTHENTICATED", replacement);
  },
  auth0Login(context) {
    console.log("in a store action named auth0Login");
    context.state.auth0.authorize();
  },
  auth0HandleAuthentication(context) {
    context.state.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        // save the tokens locally
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);

        router.replace("/member");
        window.location.reload();
      } else if (err) {
        alert("login failed. Error #KJN838");
        router.replace("/login");
        console.log(err);
      }
    });
  },
  auth0Logout() {
    // No need to update the bearer in global axiosConfig to null because we are redirecting out of the application
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");

    // redirect to auth0 logout to completely log the user out
    window.location.href =
      process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL +
      "/v2/logout?returnTo=" +
      process.env.VUE_APP_DOMAINURL +
      "/login&client_id=" +
      process.env.VUE_APP_AUTH0_CONFIG_CLIENTID;
  },
  // auth0 SPA
  async loginPopup(context) {
    context.dispatch("auth0SPA").then(auth => {
      auth.loginWithPopup();
    });
  },
  async auth0SPA() {
    const auth = await createAuth0Client({
      domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
      clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
      redirectUri: process.env.VUE_APP_DOMAINURL + "/callback",
      responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
      scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
    });
    return auth;
  },
  async auth0HandleRedirectCallback(context) {
    context.dispatch("auth0SPA").then(auth => {
      auth.hadleRedirectCallback();
    });
  }
};

export const namespaced = true;
