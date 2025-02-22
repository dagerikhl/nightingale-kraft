import { formatMaterial } from "./features/formatting/formatting";
import { getMeta } from "./features/meta/meta";
import { IMaterialNonRaw, RECIPES } from "./features/recipes/recipes";

type INonRawMatKey = string & {};
type IRawMatKey = `${string}`;
type IMatKey = INonRawMatKey | IRawMatKey;

type IRawMatMap = Record<IRawMatKey, number>;

type IBenchMap = Record<INonRawMatKey, IMatKey[]>;

const benchMap: IBenchMap = {
  Tanning: ["Fibre", "Leather", "ReinforcedLeather", "Straps"],
  Textile: ["Cloth", "DurableCloth", "Lining", "Thread"],
  Smelter: [
    "Action",
    "Barrel",
    "Buckles",
    "Buttons",
    "Fasteners",
    "Filigree",
    "ForgedHandle",
    "Glass",
    "MechanicalGears",
    "MetalPlate",
    "MouldedGlass",
    "Ornament",
    "RefinedAction",
    "Shaft",
    "Wire",
  ],
  Stone: ["CutGem", "StonePowder"],
  Saw: ["GildedLumber", "Handle", "Lumber", "Pole"],
  Sewing: [
    "SentinelsBoots",
    "SentinelsBreeches",
    "SentinelsCoat",
    "SentinelsGloves",
    "MagickianTophat",
    "ExplorersPack",
    "HermeticsFormalShirt",
  ],
  Workbench: ["PorterPistol"],
  Enchanting: ["Infusions", "Charms"],
};

// const materialNameMap: Record<IRawMatKey, string> = {
//   Gem: "Raw Gem (Star Ruby)",
//   Hide: "Fabled Hide (Fabled Yex)",
//   Ingot: "Ingot (Fabled Bound Sentinel)",
//   Meat: "Fabled Meat (Fabled Yex)",
//   Stoneblock: "Stone Block (Granite)",
// };

const checkIsRaw = (key: string): boolean =>
  !Object.keys(RECIPES).includes(key);

const getMats = (
  key: string,
  multiplier = 1,
  res: IRawMatMap = {},
): IRawMatMap => {
  const value = RECIPES[key];

  res[key] = (res[key] ?? 0) + multiplier;

  if (!checkIsRaw(key)) {
    for (const [innerKey, innerValue] of Object.entries(value)) {
      getMats(innerKey, multiplier * innerValue, res);
    }
  }

  return res;
};

const main_OLD = () => {
  const total: IRawMatMap = {};

  const gear: INonRawMatKey[] = [
    // Gear:

    // "SentinelsBoots",
    // "SentinelsBreeches",
    // "SentinelsCoat",
    // "SentinelsGloves", // DONE
    // "MagickianTophat",
    // "ExplorersPack",
    // "HermeticsFormalShirt",

    // Tools:

    "MysticLantern",
    "MysticUmbrellaGlider",

    // Weapons:

    // "PorterPistol",

    // Spells:

    "Infusions",
    "Charms",
  ];
  for (const gearPiece of gear) {
    const gearMats = getMats(gearPiece);

    console.log(`${gearPiece}:`, gearMats);

    for (const [rawKey, rawValue] of Object.entries(gearMats)) {
      total[rawKey] = (total[rawKey] ?? 0) + rawValue;
    }
  }

  console.log("Total:", total);

  const totalByBench = Object.fromEntries(
    Object.entries(benchMap).map(([bench, keys]) => [
      bench,
      Object.fromEntries(keys.map((key) => [key, total[key]])),
    ]),
  );

  console.log("Total by bench:", totalByBench);

  const totalRaw = Object.fromEntries(
    Object.entries(total).filter(([key]) => key.startsWith("")),
  );

  console.log("Total raw:", totalRaw);

  // console.log("Material names:", materialNameMap);
};

const main = () => {
  const recipeNames: IMaterialNonRaw[] = [
    // Gear:

    // "SentinelsBoots",
    // "SentinelsBreeches",
    // "SentinelsCoat",
    "SentinelsGloves", // DONE
    // "MagickianTophat",
    // "ExplorersPack",
    // "HermeticsFormalShirt",

    // Tools:

    "MysticLantern",
    // "MysticUmbrellaGlider",

    // Weapons:

    // "PorterPistol",
  ];

  for (const recipeName of recipeNames) {
    console.log(formatMaterial(recipeName));

    const mats = getMats(recipeName);

    console.log("MATS:", mats);
  }
};

main();
