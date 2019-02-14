const { assert } = require('chai');
const { CLIEngine } = require('eslint');

const config = require('../');


describe('config', function() {
  it('has parserOptions property that is an object', function() {
    assert.isObject(config.parserOptions);
    assert.isNotNull(config.parserOptions);
  });

  it('has env property that is an object', function() {
    assert.isObject(config.env);
    assert.isNotNull(config.env);
  });

  it('has globals property that is an object', function() {
    assert.isObject(config.globals);
    assert.isNotNull(config.globals);
  });

  it('has rules property that is an object', function() {
    assert.isObject(config.rules);
    assert.isNotNull(config.rules);
  });

  it('has overrides property that is an array', function() {
    assert.isArray(config.overrides);
  });

  it('is a valid ESLint configuration', function() {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json',
    });

    const code = 'const foo = 1;\nconst bar = function () {};\n\nbar(foo);\n';
    const report = cli.executeOnText(code);

    assert.strictEqual(report.errorCount, 0);
  });
});
