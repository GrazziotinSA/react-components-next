import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/index.ts"],
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
