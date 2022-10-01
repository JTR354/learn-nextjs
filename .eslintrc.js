module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true, // 为了支持对 commonjs 全局变量的识别
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-uses-react": "off", // 必须增加对import React from 'react';的引入，在 React 17 之后，jsx 的页面已经不再需要引入 React了，所以我们去掉这条 lint 规则
    "react/react-in-jsx-scope": "off", // 同上
    "@typescript-eslint/no-var-requires": "off", // 禁用使用 require 来定义，node 很多相关的依赖没有对 es module 的定义，所以我们也去掉这条 lint 规则
  },
};
