import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
	  strictPort: true,
	  hmr: {
		  clientPort: 5173
	  }
  }
})
