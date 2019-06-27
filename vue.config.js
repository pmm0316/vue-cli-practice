module.exports = {
  // baseUrl: ' https://www.easy-mock.com/mock/5d14911fc941975e43da66fd/vue',
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scc.scss` 这个文件
        data: `@import "@/assets/style/index.scss";`
      }
    }
  }
}