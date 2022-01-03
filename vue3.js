module.exports = {
  extends: [
    './index.js',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
  },
  plugins: ['vue'],
  rules: {
    // 'off'    -> 0 关闭规则;
    // 'warn'   -> 1 开启警告规则;
    // 'error'  -> 2 开启错误规则;

    /* **************************** */
    /* Vue(Eslint-plugin-vue)规则   */
    /* **************************** */
    'vue/one-component-per-file': 0,
    'vue/no-multiple-template-root': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-indent': [2, 2],
    'vue/attribute-hyphenation': 0,
    'vue/require-default-prop': 0,
    'vue/no-v-model-argument': 0,
    'vue/multi-word-component-names': 0,
  },
};
