module.exports = {
  rules: {
    "type-case": [2, "always", "lower-case"],
    "type-enum": [
      2,
      "always",
      [
        "init",
        "feat",
        "update",
        "docs",
        "style",
        "design",
        "fix",
        "refactor",
        "chore",
        "test",
      ],
    ],
    "type-empty": [2, "never"],
  },
};
