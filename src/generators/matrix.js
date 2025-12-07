/**
 * @typedef {Object} ProfileInfo
 * @property {string} class
 * @property {string} spec
 * @property {string} race
 * @property {string} file
 */

/**
 * Generates a Markdown Matrix for Profile Navigation.
 * @param {ProfileInfo[]} profiles
 * @returns {string} Markdown content
 */
function GenerateMatrix(profiles) {
  let md = `# Profile Navigation Matrix

Use strict navigation to find your exact profile below.

| Class | Spec | Race | Download Link |
|-------|------|------|---------------|
`;

  // Sort by Class -> Spec -> Race
  const sorted = [...profiles].sort((a, b) => {
    if (a.class !== b.class) return a.class.localeCompare(b.class);
    if (a.spec !== b.spec) return a.spec.localeCompare(b.spec);
    return a.race.localeCompare(b.race);
  });

  sorted.forEach(p => {
    md += `| ${p.class} | ${p.spec} | ${p.race} | [Download](${p.file}) |\n`;
  });

  return md;
}

module.exports = GenerateMatrix;
