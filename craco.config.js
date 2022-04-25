const path = require('path');

module.exports = {
  webpack: {
    alias: { 
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utilities': path.resolve(__dirname, './src/utilities'),
      '@views': path.resolve(__dirname, './src/views'),
   },
  },
};