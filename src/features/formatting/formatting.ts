import { getMeta } from "../meta/meta";
import { IMaterial } from "../recipes/recipes";

export const formatMaterial = (mat: IMaterial): string => {
  const meta = getMeta(mat);

  // TODO Improve
  return `\
=== ${mat} ===
META: ${JSON.stringify(meta, null, 2)}\
`;
};
