import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const dirUrl = new URL("..", import.meta.url);

  const url = dirUrl.pathname
    .substring(1)
    .slice(0, -1)
    .replaceAll("/", String.fromCharCode(92));

  process.env = { ...process.env, ...loadEnv(mode, url.replace(/%20/g, " ")) };

  return {
    plugins: [react()],
    server: {
      port: process.env.VITE_PORT,
    },
  };
});
