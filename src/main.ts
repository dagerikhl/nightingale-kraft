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
    // "ExplorersPack", // BETTER ALTERNATIVE AVAILABLE
    "WranglerBackpack",
    // "HermeticsFormalShirt", // BETTER ALTERNATIVE AVAILABLE
    "WranglerShirt",

    // Weapons:

    "MysticExplosiveGrenadeSatchel",
    "MysticMaul",
    "MysticSword",
    "MysticThrowingKnifeSheath",
    "PorterPistol",

    // Tools:

    "MysticClimbingPicks",
    "MysticLantern",
    "MysticSpyglass",
    "MysticUmbrellaGlider",
  ];

  run(recipeNames);
};

main();
