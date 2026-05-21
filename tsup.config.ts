import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "ui/index": "src/components/ui/index.ts",
    "functions/index": "src/functions/index.ts",
  },
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  clean: true,
  external: ["react", "react-dom"],
  sourcemap: true,
  minify: false,
  treeshake: true,
  outDir: "dist",
});
