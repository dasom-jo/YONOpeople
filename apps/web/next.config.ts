const nextConfig = {
  webpack: (config: { resolve: { alias: unknown; }; }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web", // react-native를 react-native-web으로 매핑
    };
    return config;
  },
};

module.exports = nextConfig;
