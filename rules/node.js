module.exports = {
  env: {
    node: true,
  },
  rules: {
    // callback 之后必须立即 return
    'node/callback-return': 'off',

    // require 必须在全局作用域下
    'node/global-require': 'error',

    // 在回调中强制执行错误处理（节点环境）
    'node/handle-callback-err': 'off',

    // 禁止混合常规变量并要求声明
    'node/no-mixed-requires': ['off', false],

    // 禁止直接 new require('foo');
    'node/no-new-require': 'error',

    // 禁止对 __dirname 或 __filename 使用字符串连接
    'node/no-path-concat': 'error',

    // 禁止使用 process.env
    'node/no-process-env': 'off',

    // 禁止 process.exit()
    'node/no-process-exit': 'off',

    // 禁止使用同步方法（默认关闭）
    'node/no-sync': 'off',

    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=8.0.0',
        ignores: ['modules'],
      },
    ],

    'node/no-unpublished-import': [
      'off',
      {
        allowModules: [],
        convertPath: null,
        tryExtensions: ['.js', '.json', '.node'],
      },
    ],
  },
};