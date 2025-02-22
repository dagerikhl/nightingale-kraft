/** @type {import("lint-staged").Configuration} */
const CONFIG = {
  "*.{js,md,ts}": "prettier --write",
};
export default CONFIG;
