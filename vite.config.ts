import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuration Vite minimale : le plugin React prend en charge le JSX et le rafraîchissement à chaud.
export default defineConfig({
  plugins: [react()],
})
