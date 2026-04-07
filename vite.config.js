import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/online-shopping-app/",
  plugins: [react()],
})
