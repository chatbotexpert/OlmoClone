/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                // Massive headings, sharp and bold
                heading: ['Boldonse', '"Arial Black"', 'Impact', 'sans-serif'],
                // Clean, highly legible body text
                body: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                primary: {
                    bg: '#f9f8f6',
                    text: '#0a0a0a'
                },
                // Monochromatic high contrast
                brutal: {
                    black: '#0a0a0a',
                    white: '#f9f8f6',
                    gray: '#888888',
                    orange: '#f25b2a',
                },
            },
            animation: {
                // Seamless, infinite horizontal marquee
                marquee: 'marquee 15s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};
