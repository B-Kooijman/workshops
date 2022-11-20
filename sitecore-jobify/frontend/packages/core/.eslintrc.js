module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-jobify`
  extends: ["jobify"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
