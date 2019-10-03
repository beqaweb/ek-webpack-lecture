module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['ie 11', 'safari > 9'],
        },
      },
    ],
    '@babel/react',
  ],
};
