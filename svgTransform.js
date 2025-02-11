// ! This is a custom transformer for SVG files to avoid errors on tests

export default {
  process() {
    return { code: "module.exports = {};" };
  },
  getCacheKey() {
    return "svgTransform";
  },
};
