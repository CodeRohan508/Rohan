/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sf: "SF Pro Display"
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',  // Small shadow
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',  // Medium shadow
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',  // Large shadow
        xl: '4px 4px 8px rgba(0, 0, 0, 0.5)',  // Extra large shadow
        none: 'none',  // No shadow
      },
    },
  },
  plugins: [],
}

