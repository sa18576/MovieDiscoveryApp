module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // react-native-dotenv plugin
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',    // your env variable prefix
        moduleName: '@env',    // import from '@env'
        path: '.env',          // path to .env file
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    // react-native-reanimated worklets plugin must be last
    'react-native-reanimated/plugin',
  ],
};
