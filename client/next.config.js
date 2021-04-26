const path = require('path');

module.exports = {
  sassOptions: 
  {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

//const withTM = require('next-transpile-modules')(['@babylonjs']);
const withTM = require('next-transpile-modules')(['@babylonjs/core', '@babylonjs/materials']); // As per comment.
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    target: 'serverless',
    webpack: function (config) {
        /// below is not required for the problem described. Just for reference.(es6)
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        return config
    }
}

module.exports = withPlugins([withTM], nextConfig);