import { getObjectEntries } from "./common/utils/objects";
import {
  getMatsFromMatTree,
  getMatTree,
  IMats,
  IMatsItem,
  sortMats,
} from "./features/crafting/crafting";
import {
  formatMaterial,
  formatMats,
  formatMatTree,
} from "./features/formatting/formatting";
import { IMaterial, IMaterialNonRaw } from "./features/recipes/recipes";

export const run = (recipeNames: IMaterialNonRaw[]) => {
  const allMats: IMats = {};

  for (const recipeName of recipeNames) {
    console.log(formatMaterial(recipeName));

    const matTree = getMatTree(recipeName);
    console.log(formatMatTree(matTree));

    const mats = sortMats(getMatsFromMatTree(matTree));
    console.log(` All materials:\n${formatMats(mats, [recipeName])}`);

    for (const [mat, items] of getObjectEntries<IMaterial, IMatsItem>(mats)) {
      allMats[mat] = {
        levels: new Set([...(allMats[mat]?.levels ?? []), ...items.levels]),
        amount: (allMats[mat]?.amount ?? 0) + items.amount,
      };
    }
  }

  const allMatsSorted = sortMats(allMats);
  console.log(
    `\n All materials for all recipes:\n${formatMats(allMatsSorted, recipeNames)}`,
  );
};
