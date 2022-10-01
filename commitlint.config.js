module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // 修defect
        "revert" /*一次回滚，书写异常代码后的撤销*/,
      ],
    ],
    "subject-max-length": [1, "always", 30], // commit 长度
  },
};
