require('babel-core/register');
['.css', '.less', '.scss', '.ttf', '.woff', '.woff2', '.png', '.jpg'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('./server.js');
require('./Render/AppBuilder');
require('./Render/indexPageGenerator');