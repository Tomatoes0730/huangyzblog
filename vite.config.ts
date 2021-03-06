import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // AutoImport({
        //   ignore: [/\.[tj]sx$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        //   imports: ["vue"],
        //   dts: "src/auto-import.d.ts",
        // }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // 别名
        },
    },
});
