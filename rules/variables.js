module.exports = {
  rules: {
    // 变量必须在定义的时候赋值
    'init-declarations': 'off',

    // 禁止 catch 的参数名与定义过的变量重复
    'no-catch-shadow': 'off',

    // 不允许删除变量
    'no-delete-var': 'error',

    // 禁止 label 名称与定义过的变量重复
    'no-label-var': 'error',

    // 禁止变量名与上层作用域内的定义过的变量重复
    'no-shadow': 'error',

    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 'error',

    // 禁止使用未定义的变量
    'no-undef': 'error',

    // 禁止将 undefined 赋值给变量
    'no-undef-init': 'error',

    // 禁止对 undefined 重新赋值
    'no-undefined': 'error',

    // 定义过的变量必须使用
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],
  },
};