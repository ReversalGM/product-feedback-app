import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/product-feedback-app/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1)
          let path = "."
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            path = "images"
          }
          return `assets/${path}/[name][extname]`
        },
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
  },
})
