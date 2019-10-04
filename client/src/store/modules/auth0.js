import router from "../../router.js";
import webAuth from "../../plugins/auth0";

export const state = {
  userIsAuthorized: false
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
  auth0Login() {
    console.log("in a store action named auth0Login");
    webAuth.authorize();
  },
  auth0HandleAuthentication() {
    webAuth.parseHash((err, authResult) => {
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
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    // redirect to auth0 logout to completely log the user out
    window.location.href =
      process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL +
      "/v2/logout?returnTo=" +
      process.env.VUE_APP_DOMAINURL +
      "/login&client_id=" +
      process.env.VUE_APP_AUTH0_CONFIG_CLIENTID;
  }
};

export const namespaced = true;
