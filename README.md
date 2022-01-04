# ✨TypeScript + Eslint 规则

## ⚡Eslint适用于以下技术站项目
- [x] Vue3 + TypeScript
- [ ] Vue2 + TypeScript
- [ ] React + TypeScript
- [ ] Node + TypeScript

## 💡使用方法
`npm` / `yarn` / `pnpm` 安装
```bash
# npm install
npm install @2030/eslint-config-typescript -D

# yarn install
yarn add @2030/eslint-config-typescript -D

# pnm install
pnpm install @2030/eslint-config-typescript -D
```

### 👉‍标准规则
- `eslint:recommended`
- `@typescript-eslint/recommended`
- 集成常用规则

项目根目录下新建 `.eslintrc.js` 文件，复制以下内容：

```js
module.exports = {
  extends: ['@2030/eslint-config-typescript'],
  globals: {
    // 项目中需要的全局变量, e.g.
    // $: true
    },
  rules: {
    // 额外规则
    },
};
```

### 👉‍Vue3
- 以上标准规则
- `vue/vue3-recommended`
- 集成Vue3常用规则

项目根目录下新建 `.eslintrc.js` 文件，复制以下内容：

```js
module.exports = {
  extends: ['@2030/eslint-config-typescript/vue3'],
  globals: {
    // 项目中需要的全局变量, e.g.
    // $: true
  },
  rules: {
    // 额外规则
  },
};
```

## 🌟规范
前端代码规范及规范插件推荐、安装、教程, 可参考：[前端代码规范](https://zijun2030.gitee.io/simple-flow/#/)
