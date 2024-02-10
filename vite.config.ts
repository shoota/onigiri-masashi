import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import fs from "fs"

// https://vitejs.dev/config/

const server =
  process.env.DEPLOY_PLATFORM === "vercel"
    ? undefined
    : {
        https: {
          key: fs.readFileSync("./localhost-key.pem"),
          cert: fs.readFileSync("./localhost.pem"),
        },
      }

export default defineConfig({
  plugins: [react()],
  server,
})
