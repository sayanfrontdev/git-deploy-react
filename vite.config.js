import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/git-deploy-react/",
  plugins: [react()],
});
