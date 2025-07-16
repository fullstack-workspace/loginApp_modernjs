import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import { bffPlugin } from '@modern-js/plugin-bff';

// const isLocal = process.env.IS_LOCAL === 'true';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  source: {
    alias: {
      '@types': './src/types',
      '@api': './api',
      '@services': './src/services',
      '@routes': './src/routes',
    }
  },
  // server: {
  //   port: 3051,
  // },
  dev: {
    port: 3051,
  },
  runtime: {
    router: true,
  },
  // output: {
  //   // Now this configuration is only used in the local when you run modern serve command.
  //   // If you want to deploy the application to the platform, use your own domain name.
  //   // Module federation will automatically write it to mf-manifest.json, which influences consumer to fetch remoteEntry.js.
  //   assetPrefix: isLocal ? 'http://127.0.0.1:3051' : '/',
  // },
  // server: {
  //   ssr: true,
  // },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(),
    bffPlugin(),
  ],
});
