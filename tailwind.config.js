/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                swat: {
                    black: '#0a0a0a',
                    gray: '#1a1a1a',
                    light: '#2a2a2a',
                },
                fire: {
                    DEFAULT: '#ff4500', // Orange Red
                    500: '#ff4500',
                    600: '#cc3700',
                    glow: '#ff5e00',
                },
                gold: {
                    DEFAULT: '#ffd700',
                    metallic: '#d4af37',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                tactical: ['Orbitron', 'sans-serif'],
            },
            backgroundImage: {
                'fire-gradient': 'linear-gradient(to right, #ff4500, #ff8c00)',
                'dark-gradient': 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
            }
        },
    },
    plugins: [],
}
