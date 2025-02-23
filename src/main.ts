import {
  getMatsFromMatTree,
  getMatTree,
  IMats,
  sortMats,
} from "./features/crafting/crafting";
import {
  formatMaterial,
  formatMats,
  formatMatTree,
} from "./features/formatting/formatting";
import { IMaterial, IMaterialNonRaw } from "./features/recipes/recipes";

const main = () => {
  const recipeNames: IMaterialNonRaw[] = [
    // Gear:

    "SentinelsBoots",
    "SentinelsBreeches",
    "SentinelsCoat",
    // "SentinelsGloves", // DONE
    "MagickianTophat",
    "ExplorersPack",
    "HermeticsFormalShirt",

    // Tools:

    "MysticLantern",
    "MysticUmbrellaGlider",

    // Weapons:

    "PorterPistol",
  ];

  const allMats: IMats = {};

  for (const recipeName of recipeNames) {
    console.log(formatMaterial(recipeName));

    const matTree = getMatTree(recipeName);
    console.log(formatMatTree(matTree));

    const mats = sortMats(getMatsFromMatTree(matTree));
    console.log(` All materials:\n${formatMats(mats)}`);

    for (const [mat, amount] of Object.entries(mats) as [IMaterial, number][]) {
      allMats[mat] = (allMats[mat] ?? 0) + amount;
    }
  }

  const allMatsSorted = sortMats(allMats);
  console.log(
    `\n All materials for all recipes:\n${formatMats(allMatsSorted)}`,
  );
};

main();
