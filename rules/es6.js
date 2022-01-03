module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  rules: {
    // 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // 箭头函数只有一个参数的时候，必须加括号
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],

    // 箭头函数的箭头前后必须有空格
    'arrow-spacing': ['error', { before: true, after: true }],

    // 派生 class constructor 中必须有 super
    'constructor-super': 'error',

    // generator 的 * 前面禁止有空格，后面必须有空格
    'generator-star-spacing': ['error', { before: false, after: true }],


    // 禁止对定义过的 class 重新赋值
    'no-class-assign': 'error',

    // 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',

    // 禁止重复定义类
    'no-dupe-class-members': 'error',

    // 禁止重复 import 模块
    'no-duplicate-imports': 'off',

    // 禁止使用 new 来生成 Symbol
    'no-new-symbol': 'error',

    // 禁止 import 指定的模块
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],

    // 禁止在 super 被调用之前使用 this 或 super
    'no-this-before-super': 'error',

    // 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
    'no-useless-computed-key': 'error',

    // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
    'no-useless-constructor': 'error',

    // 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // 不允许使用 var
    'no-var': 'error',

    // 对象简介表达
    // methods
    // var foo = {
    //     a() {},
    //     b() {}
    // };
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // 使用箭头函数作为回调
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // 不改变的变量使用 const
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true
    }],

    // 某些情况使用解构
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // 必须使用 0b11111011 而不是 parseInt('111110111', 2)
    'prefer-numeric-literals': 'error',

    // 使用 ...args 而不是 arguments
    'prefer-rest-params': 'error',

    // @fixable 必须使用 ... 而不是 apply，比如 foo(...args)
    'prefer-spread': 'error',

    // 必须使用模版字符串而不是字符串连接
    'prefer-template': 'error',

    // generator 函数内必须有 yield
    'require-yield': 'error',

    // ... 的后面禁止有空格
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // 创建 Symbol 时必须传入参数
    'symbol-description': 'error',

    // ${name} 内的首尾禁止有空格
    'template-curly-spacing': 'error',

    // yield* 后面必须要有空格
    'yield-star-spacing': ['error', 'after'],
  },
};
