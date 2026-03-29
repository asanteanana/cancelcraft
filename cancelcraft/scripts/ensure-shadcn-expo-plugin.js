/**
 * Expo runs `expo install` after npm and probes each new package for a config plugin.
 * The `shadcn` npm package has no app.plugin.js, so Expo falls back to `main`, which
 * is the CLI entry — requiring it executes Commander with Expo's argv and errors with
 * `unknown command 'install'`.
 *
 * The package also uses "exports" without `./app.plugin.js`, so Node resolution never
 * finds a plugin file. We add a no-op plugin file and expose it in exports.
 */
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
