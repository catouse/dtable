import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default defineConfig(({mode}) => {
    return {
        base: './',
        plugins: [vue()],
        esbuild: {
            jsxInject: `import React from 'react'`,
        },
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    react: resolve(__dirname, 'example/react/index.html'),
                    jquery: resolve(__dirname, 'example/jquery/index.html'),
                    vue: resolve(__dirname, 'example/vue/index.html'),
                    vanilla: resolve(__dirname, 'example/vanilla/index.html'),
                    webcomponents: resolve(__dirname, 'example/webcomponents/index.html'),
                },
            },
        },
    }
});
