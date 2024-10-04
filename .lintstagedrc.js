const path = require('path');

// for nextjs
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{ts,tsx,json,scss}': 'prettier --write --log-level silent',
  '*.{ts,tsx}': [buildEslintCommand],
};
