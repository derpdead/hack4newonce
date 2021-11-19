const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, ".", "styles")],
    prependData: `
      @import "reset.scss"; 
    `,
  },
  images: {
    domains: ["ocdn.eu"],
  },
};