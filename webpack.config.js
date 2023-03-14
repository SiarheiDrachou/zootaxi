module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['cache-loader', 'babel-loader'],
        },
      ],
    },
  };