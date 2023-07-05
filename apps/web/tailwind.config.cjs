const preset = require("@stackfitch/tailwind-config");
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [...preset.content, "../../packages/ui/components/**/*.{ts,tsx}"],
  presets: [preset],
};