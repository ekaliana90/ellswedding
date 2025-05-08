import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Mengimpor konfigurasi bawaan Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Menambahkan aturan kustom
  {
    rules: {
      "react/no-unescaped-entities": "off", // Nonaktifkan rule
    },
  },
];

export default eslintConfig;
