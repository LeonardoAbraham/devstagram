import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
    server:{
        hmr: {
            host:'localhost',
        },
    },
    plugins: [
        FullReload(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
