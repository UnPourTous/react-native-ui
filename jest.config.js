module.exports = {
  notify: true,
  verbose: true,
  preset: "react-native",
  bail: true, // stop @ the first fail
  collectCoverage: true,
  coverageDirectory: './__tests__/coverage/',
  coverageReporters: ["lcov", "text"],
  testRegex: "./__tests__/.*\\-test\\.js$",
  transformIgnorePatterns: [
    "node_modules/(?!react-native|tcomb-form-native|react-native-localization|@exponent/react-native-action-sheet|@exponent/ex-navigation|@exponent/react-native-touchable-native-feedback-safe|rnrf-relay-renderer|react-clone-referenced-element|react-native-looped-carousel|rn-splash-screen)"
  ],
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/webpack-babel-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  }
}
