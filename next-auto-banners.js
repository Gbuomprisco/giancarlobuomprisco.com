const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  console.log(phase);
  if (phase === PHASE_PRODUCTION_BUILD) {
    return defaultConfig;
  }

  return defaultConfig;
}
