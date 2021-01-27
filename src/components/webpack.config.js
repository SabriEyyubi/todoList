module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "./src/main.scss";
                `,
            },
        },
    },
}