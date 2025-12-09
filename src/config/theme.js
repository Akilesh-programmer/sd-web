/**
 * Theme Configuration for Shri Dhanalakshmi Mill
 *
 * Color Scheme Philosophy:
 * - Primary (Deep Blue): Represents trust, professionalism, and industrial strength
 * - Secondary (Gold/Amber): Symbolizes prosperity, quality, and traditional values
 * - Accent (Teal): Represents innovation, growth, and the textile industry
 *
 * This color scheme reflects the company's heritage in textile manufacturing
 * while projecting a modern, professional image.
 */

export const theme = {
  colors: {
    primary: {
      light: "#4d9cff",
      main: "#0066e6",
      dark: "#003d80",
      darker: "#001a33",
    },
    secondary: {
      light: "#fcd34d",
      main: "#f59e0b",
      dark: "#b45309",
      darker: "#78350f",
    },
    accent: {
      light: "#5eead4",
      main: "#14b8a6",
      dark: "#0f766e",
      darker: "#134e4a",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
  fonts: {
    display: "Poppins, sans-serif",
    body: "Inter, system-ui, sans-serif",
    serif: "Merriweather, Georgia, serif",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export default theme;
