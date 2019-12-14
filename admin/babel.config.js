// 这是项目发布阶段要用到的Babel插件  development
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: ['transform-remove-strict-mode', '@babel/plugin-syntax-dynamic-import']
}
