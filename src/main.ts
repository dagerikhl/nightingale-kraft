type INonRawMatKey = string & {};
type IRawMatKey = `$${string}`;
type IMatKey = INonRawMatKey | IRawMatKey;

type IInnerMatMap = Record<IMatKey, number>;
type IRawMatMap = Record<IRawMatKey, number>;
type IMatMap = Record<INonRawMatKey, IInnerMatMap>;

const matMap: IMatMap = {
  _SentinelsBoots: {
    ReinforcedLeather: 2,
    Buckles: 2,
    Buttons: 2,
    Lining: 2,
  },
  ReinforcedLeather: {
    Leather: 2,
    Fasteners: 1,
  },
  Leather: {
    $Hide: 1,
  },
  Fasteners: {
    $Ingot: 1,
  },
  Buckles: {
    MetalPlate: 1,
  },
  MetalPlate: {
    $Ingot: 1,
  },
  Buttons: {
    $Ingot: 1,
  },
  Lining: {
    Cloth: 1,
    Thread: 2,
  },
  Cloth: {
    Thread: 2,
  },
  Thread: {
    Fibre: 2,
  },
  Fibre: {
    $Meat: 2,
  },

  _SentinelsBreeches: {
    DurableCloth: 2,
    Lining: 2,
    Thread: 4,
    Buckles: 2,
  },
  DurableCloth: {
    Cloth: 1,
    Lining: 1,
  },

  _SentinelsCoat: {
    ReinforcedLeather: 3,
    DurableCloth: 3,
    MetalPlate: 2,
    Buckles: 1,
  },

  _SentinelsGloves: {
    ReinforcedLeather: 2,
    Lining: 2,
    Thread: 2,
    Buttons: 2,
  },

  _MagickianTophat: {
    ReinforcedLeather: 2,
    Filigree: 1,
    Ornament: 1,
    CutGem: 1,
  },
  Filigree: {
    Wire: 1,
  },
  Wire: {
    $Ingot: 1,
  },
  Ornament: {
    $Ingot: 1,
  },
  CutGem: {
    $Gem: 1,
    StonePowder: 1,
  },
  StonePowder: {
    $StoneBlock: 2,
  },

  _ExplorersPack: {
    ReinforcedLeather: 2,
    Straps: 2,
    Buttons: 2,
  },
  Straps: {
    $Hide: 1,
  },

  _HermeticsFormalShirt: {
    DurableCloth: 2,
    Lining: 2,
    Buttons: 2,
    Thread: 2,
  },

  _PorterPistol: {
    Barrel: 1,
    Filigree: 1,
    Handle: 1,
    RefinedAction: 1,
  },
  Barrel: {
    Shaft: 1,
  },
  Shaft: {
    $Ingot: 1,
  },
  Handle: {
    Pole: 1,
    Fasteners: 1,
  },
  Pole: {
    GildedLumber: 2,
  },
  GildedLumber: {
    Lumber: 1,
    $Ingot: 1,
  },
  Lumber: {
    $WoodBundle: 2,
  },
  RefinedAction: {
    Action: 1,
    MechanicalGears: 1,
  },
  Action: {
    $Ingot: 1,
  },
  MechanicalGears: {
    $Ingot: 2,
  },

  _MysticLantern: {
    MouldedGlass: 1,
    ForgedHandle: 1,
    Filigree: 1,
    CutGem: 1,
  },
  MouldedGlass: {
    Glass: 2,
  },
  Glass: {
    $Gem: 2,
  },
  ForgedHandle: {
    Shaft: 1,
    Ornament: 1,
  },

  _MysticUmbrellaGlider: {
    DurableCloth: 1,
    Pole: 1,
    Wire: 1,
    CutGem: 1,
  },

  _Infusions: {
    $MeleeDamage:
      // 1 + // DONE
      1 +
      //
      1 +
      //
      1 +
      //
      1 +
      //
      1 +
      //
      1 +
      //
      1,
    $CriticalDamage:
      //
      1 +
      //
      1,
  },

  _Charms: {
    $CharmOfTheImmovable: 1,
    $CharmOfTheRaven: 1,
    $CharmOf100Blows: 1,
    // $CharmOfThePugilist: 1, // DONE
    $CharmOfTheLeader: 1,
    $CharmOfTheLuddite: 1,
    $CharmOfTheWind: 1,
    $CharmOfTheSniper: 1,
    $CharmOfTheHaymaker: 1,
    $CharmOfTheWanderer: 1,
  },
};

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
    "_SentinelsBoots",
    "_SentinelsBreeches",
    "_SentinelsCoat",
    "_SentinelsGloves",
    "_MagickianTophat",
    "_ExplorersPack",
    "_HermeticsFormalShirt",
  ],
  Workbench: ["_PorterPistol"],
  Enchanting: ["_Infusions", "_Charms"],
};

// const materialNameMap: Record<IRawMatKey, string> = {
//   $Gem: "Raw Gem (Star Ruby)",
//   $Hide: "Fabled Hide (Fabled Yex)",
//   $Ingot: "Ingot (Fabled Bound Sentinel)",
//   $Meat: "Fabled Meat (Fabled Yex)",
//   $Stoneblock: "Stone Block (Granite)",
// };

const checkIsRaw = (key: string): boolean => !Object.keys(matMap).includes(key);

const getMats = (
  key: string,
  multiplier = 1,
  res: IRawMatMap = {},
): IRawMatMap => {
  const value = matMap[key];

  res[key] = (res[key] ?? 0) + multiplier;

  if (!checkIsRaw(key)) {
    for (const [innerKey, innerValue] of Object.entries(value)) {
      getMats(innerKey, multiplier * innerValue, res);
    }
  }

  return res;
};

const main = () => {
  const total: IRawMatMap = {};

  const gear: INonRawMatKey[] = [
    // Gear:

    // "_SentinelsBoots",
    // "_SentinelsBreeches",
    // "_SentinelsCoat",
    // "_SentinelsGloves", // DONE
    // "_MagickianTophat",
    // "_ExplorersPack",
    // "_HermeticsFormalShirt",

    // Tools:

    "_MysticLantern",
    "_MysticUmbrellaGlider",

    // Weapons:

    // "_PorterPistol",

    // Spells:

    "_Infusions",
    "_Charms",
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
    Object.entries(total).filter(([key]) => key.startsWith("$")),
  );

  console.log("Total raw:", totalRaw);

  // console.log("Material names:", materialNameMap);
};

main();
