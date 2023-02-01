import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@myTypes": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@icons": path.resolve(__dirname, "src/icons"),
    },
  },
})
