/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsReg: ["poppins-regular"],
        poppinsSemibold: ["poppins-SemiBold"],
        Trebuchet: ["Trebuchet Ms"],
        poppinsEbold: ["Poppins-ExtraBold"],
      },
      screens: {
        esm: "400px",
        // => @media (min-width: 400px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
