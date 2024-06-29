import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss"; // Importe o Tailwind CSS se estiver usando

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss("./tailwind.config.js"), // Configure o Tailwind CSS conforme necessário
  ],
});
