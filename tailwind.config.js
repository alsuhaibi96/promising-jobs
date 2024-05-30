/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                girdTemplateColumns: {
                    '70/30': '70% 28%',
                }
            }
        },
    },
    plugins: [],
}