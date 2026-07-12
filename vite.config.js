import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio_2/", // <-- Isso avisa ao Vite para criar os caminhos apontando para o seu repositório
})