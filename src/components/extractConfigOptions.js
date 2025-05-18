
export function extractConfigOptions(configArray) {
  if (!Array.isArray(configArray) || configArray.length === 0) return {};

  const config = configArray[0];
  const options = {};

  for (const field in config) {
    options[field] = Object.entries(config[field]).map(([label, value]) => ({
      label,
      value,
    }));
  }

  return options;
}
