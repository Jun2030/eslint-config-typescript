module.exports = {
  rules: {
    // setter 必须有对应 getter, getter 可以没有对应的 setter
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
      },
    ],

    // 数组的方法除了 forEach 之外，回调函数必须有返回值，可以返回 undefined
    'array-callback-return': ['error', { allowImplicit: true }],

    // 将 var 定义的变量视为块作用域，禁止在块外使用
    'block-scoped-var': 'error',

    // 禁止函数的循环复杂度超过 20
    complexity: [
      'error',
      {
        max: 20,
      },
    ],

    // 在类的非静态方法中，必须存在对 this 的引用
    'class-methods-use-this': 'off',

    // 禁止函数在不同分支返回不同类型的值
    'consistent-return': 'off',

    // if 多行后面必须要有 {
    curly: ['error', 'multi-line'],

    // switch 语句必须要有 default
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 禁止出现 foo['bar']，必须写成 foo.bar
    'dot-notation': ['error', { allowKeywords: true }],

    // 链式调用的时候，点号必须放在第二行的开头，禁止放在第一行结尾
    'dot-location': ['error', 'property'],

    // 必须使用 === 或者 !==，禁止使用 == 或 !=，与 null 比较除外
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // 使用 for in 需要有 hasOwnProperty
    'guard-for-in': 'error',

    // 一个文件中最多可以存在的 class 数量
    'max-classes-per-file': ['off', 1],

    // 是否禁止使用 alert
    'no-alert': 'warn',

    // 禁止使用 caller 或 callee
    'no-caller': 'error',

    // switch 的 case 内有变量定义的时候
    // 必须使用大括号将 case 内变成一个代码块
    'no-case-declarations': 'error',

    // 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
    'no-div-regex': 'off',

    // 禁止在 else 内使用 return, 必须改为提前结束
    'no-else-return': ['error', { allowElseIf: false }],

    // 禁止有空函数
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // 禁止解构中出现 {} 或 []
    'no-empty-pattern': 'error',

    // 禁止使用 foo == null 或 foo !== null
    // @off foo == null 用于判断 foo 不是 null 且不是 undefined 比较有用
    'no-eq-null': 'off',

    // 禁止使用 eval
    'no-eval': 'error',

    // 禁止修改原生对象
    'no-extend-native': 'error',

    // 禁止出现没有必要的 bind
    'no-extra-bind': 'error',

    // 禁止出现没有必要的 label
    'no-extra-label': 'error',

    // switch 的 case 内必须有 break, return 或 throw
    'no-fallthrough': 'error',

    // 表示小数时，禁止省略 0，如 .1
    'no-floating-decimal': 'error',

    // 禁止对全局变量赋值
    'no-global-assign': ['error', { exceptions: [] }],

    // 是否禁止奇奇怪怪的类型转换
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // 不允许在顶级脚本作用域中声明var并命名 function
    'no-implicit-globals': 'off',

    // 不允许使用 eval
    'no-implied-eval': 'error',

    // 禁止类之前使用this
    'no-invalid-this': 'off',

    // 禁止使用 __iterator__
    'no-iterator': 'error',

    // 禁止使用 label
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 禁止使用没有必要的 {} 作为代码块
    'no-lone-blocks': 'error',

    // 禁止在循环内的函数中出现循环体条件语句中定义的变量
    'no-loop-func': 'error',

    // 禁止使用 magic numbers
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // 禁止出现连续的多个空格
    // 除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // 禁止使用 \ 来换行字符串
    'no-multi-str': 'error',

    // 禁止直接 new 一个类而不赋值
    'no-new': 'error',

    // 禁止使用 new Function
    'no-new-func': 'error',

    // 禁止使用 new 生成 String, Number 或 Boolean
    'no-new-wrappers': 'error',

    // 禁止使用 0 开头的数字表示八进制
    'no-octal': 'error',

    // 禁止使用八进制的转义符
    'no-octal-escape': 'error',

    // 禁止使用 __proto__
    'no-proto': 'error',

    // 禁止重复定义变量
    'no-redeclare': 'error',

    // 禁止在 return 语句里赋值
    'no-return-assign': ['error', 'always'],

    // 禁止在 return 语句里使用 await
    'no-return-await': 'error',

    // 禁止出现 location.href="javascritp:void(0)";
    'no-script-url': 'error',

    // 禁止将自己赋值给自己
    'no-self-assign': 'error',

    // 禁止将自己与自己比较'
    'no-self-compare': 'error',

    // 禁止使用逗号作操作符
    'no-sequences': 'error',

    // 禁止 throw 字面量，必须 throw 一个 error 对象
    'no-throw-literal': 'error',

    // 循环内必须对循环条件的变量有修改
    'no-unmodified-loop-condition': 'off',

    // 禁止无用表达式
    // a && b()
    // a ? b : c()
    // tag`some tagged template string`;
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // 禁止出现没用的 label
    'no-unused-labels': 'error',

    // 禁止出现没必要的 call 或 apply
    'no-useless-call': 'error',

    // 禁止出现没必要的 catch
    'no-useless-catch': 'off',

    // 禁止出现没有必要的字符串连接
    'no-useless-concat': 'error',

    // 禁止使用不必要的转译字符
    'no-useless-escape': 'error',

    // 禁止没必要的 return
    'no-useless-return': 'error',

    // 禁止使用 void
    'no-void': 'error',

    // 禁止有未完成或需要审核的代码添加注释
    'no-warning-comments': [
      'off',
      { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
    ],

    // 禁止使用 with
    'no-with': 'error',

    // Promise 的 reject 中必须传入 Error 对象，而不是字面量
    // 'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-promise-reject-errors': 'off',

    // 建议在正则表达式中使用命名捕获组
    'prefer-named-capture-group': 'off',

    // parseInt 必须传入第二个参数
    radix: 'off',

    // async 函数中必须存在 await 语句
    'require-await': 'off',

    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // var 必须在作用域的最前面
    'vars-on-top': 'error',

    // 立即执行函数，必须符合如下格式：
    //  (function () { return { y: 1 };}())
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // 必须使用 if (foo === 5) 而不是 if (5 === foo)
    yoda: 'error',
  },
};
