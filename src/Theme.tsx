import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
      brand: {
        50: "#f7fafc",
        100: "#edf2f7",
        200: "#e2e8f0",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#718096",
        600: "#4a5568",
        700: "#2d3748",
        800: "#1a202c",
        900: "#171923",
      },
    },
    fonts: {
      heading: "Montserrat",
      body: "Open Sans",
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
    },
  })
  
  export default  theme;