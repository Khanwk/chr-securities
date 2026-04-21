import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0D2D5E",   // Navy Blue
                accent: "#F59E0B",    // Amber
                sky: "#EBF4FF",       // Sky Blue
                textMain: "#000000",
            },
        },
    },
    plugins: [],
};

export default config;