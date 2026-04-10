import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function getBasePath(): string {
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) {
    return "/";
  }

  const [owner, name] = repo.split("/");
  if (!owner || !name) {
    return "/";
  }

  // User/org pages repos deploy at root: https://<owner>.github.io/
  if (name.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    return "/";
  }

  // Project pages deploy under repo path: https://<owner>.github.io/<repo>/
  return `/${name}/`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: getBasePath(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
