module.exports = {
    stories: ['../src/**/*.stories.@(mdx|tsx)'],
    addons: [
      '@storybook/addon-essentials', // Includes docs + controls
      '@storybook/addon-interactions',
      '@storybook/addon-a11y',
      '@storybook/addon-coverage', // For test coverage
    ],
    features: {
      interactionsDebugger: true, // For testing
      storyStoreV7: true,
    },
    framework: {
      name: '@storybook/react-vite',
      options: {},
    },
    docs: {
      autodocs: 'tag', // Auto-generate docs
      defaultName: 'Documentation', // Default docs tab name
    },
  };