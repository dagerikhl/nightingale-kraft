import { IMaterialNonRaw } from "./features/recipes/recipes";
import { run } from "./runner";

const main = () => {
  const recipeNames: IMaterialNonRaw[] = [
    // Gear:

    "SentinelsBoots",
    "SentinelsBreeches",
    "SentinelsCoat",
    "SentinelsGloves",
    "MagickianTophat",
    "ExplorersPack",
    "HermeticsFormalShirt",

    // Tools:

    "MysticLantern",
    "MysticUmbrellaGlider",

    // Weapons:

    "PorterPistol",
  ];

  run(recipeNames);
};

main();
