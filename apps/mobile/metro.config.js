const path = require("path");
const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// watchFolders 추가: 공통 컴포넌트 경로를 Metro 번들러가 감지하도록 설정
config.watchFolders = [path.resolve(__dirname, "../../packages")];

// resolver 설정: React와 React Native가 루트 의존성을 사용하도록 설정
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    "react": path.resolve(__dirname, "../../node_modules/react"),
    "react-native": path.resolve(__dirname, "../../node_modules/react-native"),
  },
};

module.exports = config;
