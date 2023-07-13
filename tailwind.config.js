/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                '8p': '8px',
                '12p': '12px',
                '16p': '16px',
                '22p': '22px',
                '32p': '32px',
            },
            fontSize: (theme) => ({
                xs: '0.75rem',
                sm: '0.875rem',
                base: ['1rem', '1.25em'],
                md: ['1.125rem', '1.25em'],
                lg: '1.5rem',
                xl: ['1.625rem', '1.25em'],
                '2xl': '2rem',
                ...theme('spacing'),
            }),
        },
        fontFamily: {
            serif: ['Quicksand'],
        },
        fontWeight: {
            meidum: '500',
            bold: '700',
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            yellow: {
                100: '#fff0de',
                700: '#f9a109',
            },
            purple: {
                100: '#FAFAFE',
            },
            pink: {
                700: '#80485B',
            },
            blue: {
                400: '#56CCF2',
            },
            red: {
                500: '#EB5757',
            },
            gray: {
                200: '#C1C1C4',
                300: '#BDBDBD',
                400: '#828282',
                700: '#454545',
                800: '#34333A',
            },
        },
    },
    plugins: [],
};
