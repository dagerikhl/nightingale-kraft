import c from "chalk";
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
  if (recipeNames.length === 0) {
    console.log(c.red("No recipe names provided, exiting."));

    return;
  }

  const allMats: IMats = {};

  for (const recipeName of recipeNames) {
    console.log(formatMaterial(recipeName));

    const matTree = getMatTree(recipeName);
    console.log(formatMatTree(matTree));

    const mats = sortMats(getMatsFromMatTree(matTree));
    console.log(
      [c.bold(` All materials:`), `${formatMats(mats, [recipeName])}`].join(
        "\n",
      ),
    );

    for (const [mat, item] of getObjectEntries<IMaterial, IMatsItem>(mats)) {
      allMats[mat] = {
        parents: [...(allMats[mat]?.parents ?? []), ...item.parents],
        levels: [...(allMats[mat]?.levels ?? []), ...item.levels],
        amount: (allMats[mat]?.amount ?? 0) + item.amount,
      };
    }
  }

  if (recipeNames.length === 1) {
    return;
  }

  const allMatsSorted = sortMats(allMats);
  console.log(
    [
      "",
      c.bold(
        ` All materials for all recipes ${c.yellow(`[${recipeNames.join(",")}]`)}:`,
      ),
      formatMats(allMatsSorted, recipeNames),
    ].join("\n"),
  );
};
