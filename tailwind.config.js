/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'amazon-yellow': '#FFD814',
                'amazon-blue': '#0066c0',
<<<<<<< HEAD
                'amazon-orange': '#FF9900',
                'amazon-light': '#232F3E',
=======
>>>>>>> 143190588a48409e2f39e9acc80eb2ea76e7ee53
            },
            fontFamily: {
                'plex': ['"IBM Plex Sans Condensed"', 'sans-serif'],
                'inika': ['Inika', 'serif'],
            }
        },
    },
    plugins: [],
}