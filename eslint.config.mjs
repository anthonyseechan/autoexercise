import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
];