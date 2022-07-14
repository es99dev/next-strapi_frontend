"use strict";

const BACKEND_ENV = process.env.NEXT_PUBLIC_BACKEND_ENV;

module.exports = (path) => {
  if (BACKEND_ENV == "production") {
    return "https://STRAPI_PRODUCTION_URL/api/" + path;
  }
  else if(BACKEND_ENV == "staging") {
    return "https://STRAPI_STAGING_URL/api/" + path;
  }
  else {
    return `http://localhost:1337/api/` + path;
  }
};
