module.exports = {
  extends: [
    './rules/node',
    './rules/react'
  ].map(require.resolve),
  root: true,
  globals: {
    City: true,
    Status: true,
    MyCity: true,
    modelService: true,
    myCityService: true,
  }
};
