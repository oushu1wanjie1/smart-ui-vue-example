const LEVEL_ERROR = 2

const TYPE_ENUMS = [
  'feat',
  'fix',
  'hotfix',
  'chore',
  'test',
  'refactor',
  'style',
  'cosm',
  'docs',
  'build',
]

module.exports = {
  // 基于 conventional 规范
  'extends': ['@commitlint/config-conventional'],
  'rules': {
    'type-enum': [LEVEL_ERROR, 'always', TYPE_ENUMS]
  }
}