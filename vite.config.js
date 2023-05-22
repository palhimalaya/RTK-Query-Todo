import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  //config custom port
  server: {
    port: 3005,
  },
  plugins: [react()],
});
