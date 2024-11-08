import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:'#f1f2f3',
        foreground:'#ffffff',
         color:'#5869da',
         hover:'#e3363e',
         light:'#687385',
         },
         backgroundImage: {
          'custom-gradient': 'linear-gradient(135deg, #5869da, #8a6fe2)',
        },
    },
  },
  plugins: [],
};
export default config;
