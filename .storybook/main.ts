import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../apps/bytebank/src/**/*.mdx", "../apps/bytebank/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../apps/bytebank/public"],
};
export default config;