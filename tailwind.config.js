module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                head: '0.8fr 1.4rf 0.8fr',
            },
            boxShadow: {
                'sub-ul': '0 1px 12px 1px rgb(0 0 0 / 0.2)',
            },
        },
    },
    plugins: [require('daisyui')],
};
