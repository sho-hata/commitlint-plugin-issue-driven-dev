# commitlint-plugin-issue-driven-dev
commitlint-plugin-issue-driven-dev checks if the commit message meets the commit format for issue driven development.
## Getting started.

### Install dependencies
#### npm
```bash
npm install --save-dev @commitlint/{cli,config-conventional} husky@4 commitlint-plugin-issue-driven-dev
```

### yarn
```bash
yarn add --dev @commitlint/{cli,config-conventional} husky@4 commitlint-plugin-issue-driven-dev
```

### Configure commitlint to use issue driven development commits messages style config

```diff
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
+ plugins: ['issue-driven-dev'],
+ rules: {
+   'subject-issue-number-empty-rule': [2, 'always'],
+ },
}
```

### To lint commits before they are created you can use Husky's 'commit-msg' hook

```json
// package.json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## Rules

`subject-issue-number-empty-rule` - This rule checks if the commit message matches the specified pattern.

### `{type}: #{issue number} {subject}`

```bash
// The commit message should be in the following format: "{type}: #{issue number} {subject}"
// ❌ Bad commit messages
git commit -m "add: My commit message body"
git commit -m "add: #foo My commit message body"
git commit -m "update: #2My commit message body"
// ✅ Good commit messages
git commit -m "add: #1 My commit message body"
git commit -m "update: #25 My commit message body"
```

## Contributing

1. Create an issue🙏
2. Please fork it.
3. Create your feature branch: `git checkout -b feat/{issue number}`
4. Commit your changes: `git commit -m '{type}: #{issue number} some feature'`
5. Push to the branch: `git push origin feat/{issue number}`
6. Submit a pull request

## Author

[Shoki Hata(sho-hata)](https://github.com/hatahata7757)Released under the MIT License.
