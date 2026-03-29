const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// On Vercel, NativeWind's CSS pipeline + Metro can stall the web bundle at 0% for a long time or hit the
// platform build timeout — leaving no `dist/` and a 404 DEPLOYMENT_NOT_FOUND for preview URLs.
// className still works via nativewind/babel; global.css is bundled as a standard CSS import on web.
if (process.env.VERCEL === '1' || process.env.CI === 'true') {
  module.exports = config;
} else {
  module.exports = withNativeWind(config, { input: './global.css' });
}
