module.exports = {
  rules: {
    // 禁止 for 循环出现方向错误的循环
    // 比如 for(let i = 0; i < 3; i--)
    'for-direction': 'error',

    // getter 必须有返回值
    'getter-return': ['error', { allowImplicit: true }],

    // 不允许使用 async 作为 promise 的执行器
    'no-async-promise-executor': 'off',

    // 禁止将 await 写在循环里，因为这样就无法同时发送异步请求
    'no-await-in-loop': 'off',

    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',

    // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来
    'no-cond-assign': ['error', 'always'],

    // 禁止使用控制台
    'no-console': 'off',

    // 警告将常量作为分支条件判断中的测试表达式
    // 但是允许座位循环条件判断中的测试表达式
    'no-constant-condition': 'off',

    // 不允许正则表达式中的控制字符。
    'no-control-regex': 'error',

    // 不允许使用 debugger
    'no-debugger': 'error',

    // 禁止在函数中出现重复名字的参数
    'no-dupe-args': 'error',

    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',

    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'error',

    // 禁止出现空代码块，允许 catch 为空代码块
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],

    // 禁止在正则表达式中使用空的字符集 []
    'no-empty-character-class': 'error',

    // 禁止将 catch 的第一个参数 error 重新赋值
    'no-ex-assign': 'error',

    // 禁止不必要的布尔类型转换，比如 !! 或 Boolean
    'no-extra-boolean-cast': 'error',

    // 禁止函数表达式中出现多余的括号
    // 比如 const fn = (function() { return 1;})
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // 禁止出现多余的分号
    'no-extra-semi': 'error',

    // 禁止将一个函数声明重新赋值
    'no-func-assign': 'error',

    // 禁止在 if 代码块内出现函数声明
    'no-inner-declarations': 'error',

    // 禁止在 RegExp 构造函数中出现非法的正则表达式
    'no-invalid-regexp': 'error',

    // 禁止使用特殊空白符号（比如全角空格）
    'no-irregular-whitespace': 'error',

    // 禁止字符类语法中由多个代码点组成的字符
    'no-misleading-character-class': 'off',

    // 禁止将 Math, JSON 或者 Reflect 直接作为函数使用
    'no-obj-calls': 'error',

    // 禁止直接从普通对象调用hasOwnProperty, isPrototypeOf 或 propertyIsEnumrable
    'no-prototype-builtins': 'error',

    // 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
    'no-regex-spaces': 'error',

    // 禁止在数组中出现连续的逗号
    'no-sparse-arrays': 'error',

    // 禁止在普通字符串中出现模版字符串的变量形式，如 'hello ${name}'
    'no-template-curly-in-string': 'error',

    // 禁止出现难以理解多行表达式
    'no-unexpected-multiline': 'error',

    // 禁止在 return, throw, break 或 contiue 之后还有代码
    'no-unreachable': 'error',

    // 禁止在 finally 中出现 return, throw, break 或 continue
    'no-unsafe-finally': 'error',

    // 禁止在 in 或 instanceof 操作符的左侧使用感叹号
    'no-unsafe-negation': 'error',

    // 原子更新
    'require-atomic-updates': 'off',

    // 必须使用 isNaN(foo) 而不是 foo === NaN
    'use-isnan': 'error',

    // 注释必须符合 jsdoc 的规范
    // @off jsdoc 要求太严格
    'valid-jsdoc': 'off',

    // typeof 表达式比较对象必须是
    // 'undefined', 'object', 'boolean', 'number', 'string', 'function'
    // 或 'symbol'
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
