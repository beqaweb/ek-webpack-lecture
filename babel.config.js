module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'ie 11',
            'safari > 9'
          ]
        }
      }
    ],
    '@babel/react'
  ]
};
