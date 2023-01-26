module.exports = api => {
    api.cache.never();
    return {
        presets: [
            [
            "@babel/env",
                {
                    debug: true,
                    spec: true, // specification make code more slow but more stable
                    loose: true, // make code faster but less stabledd
                    modules: 'cjs', // webpack work nice only with es2015 modules
                }
            ]
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel"
        ]
    };
}
