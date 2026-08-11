import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "ui/index": "src/components/ui/index.ts",
    "accessibility/index": "src/components/accessibility/index.ts",
    "functions/index": "src/functions/index.ts",
    "providers/index": "src/providers/index.ts",
    "hooks/index": "src/hooks/index.ts",
  },
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  clean: true,
  external: [
    "react",
    "react-dom",
    "use-immer",
    "@tanstack/react-query",
    "@base-ui/react",
  ],
  sourcemap: true,
  minify: false,
  treeshake: true,
  injectStyle: true,
  outDir: "dist",
});
