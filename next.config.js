const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, ".", "styles")],
    prependData: `
      @import "_fonts.scss"; 
      @import "_colors.scss"; 
      @import "_borders.scss"; 
      @import "reset.scss"; 
    `,
  },
  images: {
    domains: ["ocdn.eu", 'cdn.newonce.me'],
  },
};
