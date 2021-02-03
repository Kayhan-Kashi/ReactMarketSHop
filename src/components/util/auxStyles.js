export function getFinalStyles(internalStyles, externalStyles) {
  const styles = { ...internalStyles };
  if (externalStyles !== undefined) {
    Object.keys(externalStyles).forEach((key) => {
      styles[key] = externalStyles[key];
    });
  }
  return styles;
}
