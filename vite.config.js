import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';//svgr플러그인 추가 
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    svgr(),//여기도 추가함
  ],
})
