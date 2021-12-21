/* eslint-disable react-hooks/rules-of-hooks */
// gatsby-node.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { useGatsbyNode } = require('gatsby-plugin-ts-config');

// All of the same usage patterns for `useGatsbyConfig` are valid for `useGatsbyNode`
// as well
module.exports = useGatsbyNode(() => require('./config/gatsby-node'));
