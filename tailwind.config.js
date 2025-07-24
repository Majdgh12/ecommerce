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
            },
            fontFamily: {
                'plex': ['"IBM Plex Sans Condensed"', 'sans-serif'],
                'inika': ['Inika', 'serif'],
            }
        },
    },
    plugins: [],
}