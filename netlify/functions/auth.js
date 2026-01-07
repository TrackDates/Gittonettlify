const { Handler } = require("@decapcms/netlify-cms-oauth-provider-node");

const handler = new Handler({
  // You’ll set these in Netlify environment variables
  // OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET
  // (GitHub OAuth app credentials)
});

exports.handler = handler.handle.bind(handler);
