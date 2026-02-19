module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // react-native-dotenv plugin
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',    // import from '@env'
        path: '.env',          // path to .env file
      },
    ],
    // react-native-reanimated worklets plugin must be last
    'react-native-reanimated/plugin',
  ],
};
