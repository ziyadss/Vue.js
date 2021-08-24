module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "12. Sending Http Requests";
                return args;
            })
    }
}