/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        success: "#10b981",
        failed: "#ef4444",
        pending: "#f59e0b",
      },
    },
  },
  plugins: [],
};
