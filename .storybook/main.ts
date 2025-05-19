const config = {
  stories: [
    '../libs/shared/src/**/*.mdx',
    '../libs/shared/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    '@storybook/blocks',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../apps/bytebank/public'],
};
export default config;
