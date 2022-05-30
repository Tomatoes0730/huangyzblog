module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                head: '0.8fr 1.4rf 0.8fr',
            },
        },
    },
    plugins: [require('daisyui')],
};
