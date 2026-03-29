const fs = require('fs');
const path = require('path');

const shadcnDir = path.join(__dirname, '..', 'node_modules', 'shadcn');
const pluginPath = path.join(shadcnDir, 'app.plugin.js');
const pkgPath = path.join(shadcnDir, 'package.json');

if (!fs.existsSync(shadcnDir) || !fs.existsSync(pkgPath)) {
  process.exit(0);
}

const pluginSource =
  `/** @param {import('@expo/config-types').ExpoConfig} config */\n` +
  `module.exports = function withShadcnDependencyNoop(config) {\n` +
  `  return config;\n` +
  `};\n`;

fs.writeFileSync(pluginPath, pluginSource);

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (!pkg.exports) {
  pkg.exports = {};
}
if (!pkg.exports['./app.plugin.js']) {
  pkg.exports['./app.plugin.js'] = './app.plugin.js';
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}
