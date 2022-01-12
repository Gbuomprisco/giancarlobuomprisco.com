module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  mode: "jit",
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      monospace: ['ui-monospace', 'Monaco', 'monospace'],
      serif: ["Bitter", 'serif'],
      sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      screens: {
        xl: "1280px",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [customContainerPlugin],
};

function customContainerPlugin({ addComponents }) {
  addComponents({
    ".container": {
      "@screen lg": {
        maxWidth: "1024px",
      },
      "@screen xl": {
        maxWidth: "1166px",
      },
    },
  });
}
