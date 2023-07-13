/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            yellow: {
                100: '#fff0de',
                200: '#fee3bb',
                300: '#fdd697',
                400: '#fcc974',
                600: '#fbbb50',
                500: '#faae2d',
                700: '#f9a109',
            },
            purple: {
                100: '##FAFAFE',
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
