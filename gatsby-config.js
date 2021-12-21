// gatsby-config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { useGatsbyConfig } = require('gatsby-plugin-ts-config');

// For static analysis purposes, you can use a callback with a require() statement
// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = useGatsbyConfig(() => require('./config/gatsby-config'));
