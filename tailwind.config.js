/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                notosans: ["Noto Sans", "sans-serif"],
            },
            boxShadow: {
                "shadow-number": "0px 1px 6px rgba(0, 0, 0, 0.25);",
            },
        },
    },
    plugins: [],
};
