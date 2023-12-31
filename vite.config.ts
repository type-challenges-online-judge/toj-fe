import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  envPrefix: 'REACT_APP_',
  server: {
    port: 3000,
    proxy: {
      // 프록시 설정
      '/api': {
        target:
          process.env.NODE_ENV === 'development'
            ? `https://port-0-toj-be-147bpb2mlma5e3oj.sel5.cloudtype.app`
            : `https://port-0-toj-be-12fhqa2blnfvxkti.sel5.cloudtype.app`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  // build: {
  //   sourcemap: true,
  // },
});
