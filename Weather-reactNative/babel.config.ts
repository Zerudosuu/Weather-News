import { ConfigAPI } from "@babel/core";

interface BabelConfig {
  presets: string[];
  plugins: string[];
}

module.exports = function (api: ConfigAPI): BabelConfig {
  api.cache.forever();
  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/preset-expo",
    ],
    plugins: ["react-native-reanimated/plugin"],
  };
};
