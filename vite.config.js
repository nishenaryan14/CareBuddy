import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5500,
  },
  proxy: {
    "/api": {
      target: "http://aspark-care-buddy.ap-south-1.elasticbeanstalk.com",
      changeOrigin: true,
    },
  },
  plugins: [react()],
});
