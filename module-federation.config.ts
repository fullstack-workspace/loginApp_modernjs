import { createModuleFederationConfig } from '@module-federation/modern-js'

export default createModuleFederationConfig({
    name: 'loginRemote',
    manifest: {
        filePath: 'static',
    },
    filename: 'static/remoteEntry.js',
    exposes: {
        // './Button': './src/components/Button.tsx',
        './app': './src/export-App.tsx',
    },
    shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
    },
});
