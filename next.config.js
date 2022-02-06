module.exports = {
  env: {
    PUSHER_CLIENT_KEY: process.env.PUSHER_CLIENT_KEY,
    API_URL: process.env.NX_SERVERLESS ? "my-api-url" : process.env.API_URL,
  },
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
