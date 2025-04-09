/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$",
    "^@/contexts/(.*)$",
    "^@/utils/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
