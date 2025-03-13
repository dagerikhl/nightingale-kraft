import { IKeysOfUnion } from "../../common/types/IKeysOfUnion";

export const RECIPES = {
  // Gear

  SentinelsBoots: {
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
    Hide: 1,
  },
  Fasteners: {
    Ingot: 1,
  },
  Buckles: {
    MetalPlate: 1,
  },
  MetalPlate: {
    Ingot: 1,
  },
  Buttons: {
    Ingot: 1,
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
    Meat: 2,
  },

  SentinelsBreeches: {
    DurableCloth: 2,
    Lining: 2,
    Thread: 4,
    Buckles: 2,
  },
  DurableCloth: {
    Cloth: 1,
    Lining: 1,
  },

  SentinelsCoat: {
    ReinforcedLeather: 3,
    DurableCloth: 3,
    MetalPlate: 2,
    Buckles: 1,
  },

  SentinelsGloves: {
    ReinforcedLeather: 2,
    Lining: 2,
    Thread: 2,
    Buttons: 2,
  },

  MagickianTophat: {
    ReinforcedLeather: 2,
    Filigree: 1,
    Ornament: 1,
    CutGem: 1,
  },
  Filigree: {
    Wire: 1,
  },
  Wire: {
    Ingot: 1,
  },
  Ornament: {
    Ingot: 1,
  },
  CutGem: {
    Gem: 1,
    StonePowder: 1,
  },
  StonePowder: {
    StoneBlock: 2,
  },

  ExplorersPack: {
    ReinforcedLeather: 2,
    Straps: 2,
    Buttons: 2,
  },
  Straps: {
    Hide: 1,
  },
  WranglerBackpack: {
    ReinforcedLeather: 2,
    Lining: 4,
    Ornament: 1,
  },

  HermeticsFormalShirt: {
    DurableCloth: 2,
    Lining: 2,
    Buttons: 2,
    Thread: 2,
  },
  WranglerShirt: {
    DurableCloth: 2,
    Lining: 2,
    Buttons: 2,
    Buckles: 1,
  },

  // Weapons

  PorterPistol: {
    Barrel: 1,
    Filigree: 1,
    Handle: 1,
    RefinedAction: 1,
  },
  Barrel: {
    Shaft: 1,
  },
  Shaft: {
    Ingot: 1,
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
    Ingot: 1,
  },
  Lumber: {
    WoodBundle: 2,
  },
  RefinedAction: {
    Action: 1,
    MechanicalGears: 1,
  },
  Action: {
    Ingot: 1,
  },
  MechanicalGears: {
    Ingot: 2,
  },

  MysticSword: {
    GildedBlade: 1,
    Guard: 1,
    Hilt: 1,
    CutGem: 1,
  },
  GildedBlade: {
    Blade: 1,
    PreciousMetalIngot: 1,
  },
  Blade: {
    MetalPlate: 1,
  },
  Guard: {
    Shaft: 1,
  },
  Hilt: {
    Ingot: 1,
  },

  MysticExplosiveGrenadeSatchel: {
    PreciousMetalIngot: 2,
    Gunpowder: 6,
    Wick: 1,
    EtchedAlloyIngot: 2,
  },
  Wick: {
    Twine: 2,
  },
  Twine: {
    Fibre: 2,
  },

  MysticMaul: {
    ReinforcedHammerhead: 1,
    Handle: 1,
    Filigree: 1,
    CutGem: 1,
  },
  ReinforcedHammerhead: {
    Hammerhead: 1,
    AlloyIngot: 1,
  },
  Hammerhead: {
    Ingot: 1,
  },

  MysticThrowingKnifeSheath: {
    GildedBlade: 2,
    DurableCloth: 2,
  },

  MysticSlingbow: {
    Handle: 1,
    Filigree: 1,
    Rope: 1,
    CutGem: 1,
  },
  Rope: {
    Thread: 2,
  },

  MasterworkSword: {
    MasterworkToolhead: 1,
    Guard: 1,
    MasterworkHandle: 1,
    CutGem: 2,
  },
  MasterworkToolhead: {
    CutGem: 2,
    AnyToolheadOrBlade: 2,
  },
  MasterworkHandle: {
    Gem: 4,
    Handle: 2,
  },

  // Tools

  MysticLantern: {
    MouldedGlass: 1,
    ForgedHandle: 1,
    Filigree: 1,
    CutGem: 1,
  },
  MouldedGlass: {
    Glass: 2,
  },
  Glass: {
    Gem: 2,
  },
  ForgedHandle: {
    Shaft: 1,
    Ornament: 1,
  },

  MysticUmbrellaGlider: {
    DurableCloth: 1,
    Pole: 1,
    Wire: 1,
    CutGem: 1,
  },

  MysticClimbingPicks: {
    ArtisanalPickHead: 2,
    Handle: 1,
    Ornament: 1,
    CutGem: 1,
  },
  ArtisanalPickHead: {
    PickHead: 1,
    Filigree: 1,
  },
  PickHead: {
    Ingot: 1,
    MetalTip: 1,
  },
  MetalTip: {
    Ingot: 1,
  },

  MysticSpyglass: {
    Lens: 1,
    Grip: 1,
    Filigree: 1,
    CutGem: 1,
  },
  Lens: {
    Glass: 2,
  },
  Grip: {
    Hide: 1,
    Wrap: 1,
  },
  Wrap: {
    Straps: 2,
  },

  MysticSickle: {
    GildedBlade: 1,
    Handle: 1,
    Filigree: 1,
    CutGem: 1,
  },

  MysticWoodAxe: {
    ArtisanalAxeHead: 1,
    Handle: 1,
    Hilt: 1,
    CutGem: 1,
  },
  ArtisanalAxeHead: {
    AxeHead: 1,
    Filigree: 1,
  },
  AxeHead: {
    Ingot: 1,
    Blade: 1,
  },

  MysticMiningPick: {
    ArtisanalPickHead: 1,
    Handle: 1,
    CounterBalance: 1,
    CutGem: 1,
  },
  CounterBalance: {
    CarvedStone: 2,
  },
  CarvedStone: {
    StoneBlock: 2,
  },

  MysticHuntingKnife: {
    GildedBlade: 1,
    Guard: 1,
    Hilt: 1,
    CutGem: 1,
  },

  MysticAxepick: {
    ArtisanalPickHead: 1,
    ArtisanalAxeHead: 1,
    Handle: 1,
    CutGem: 1,
  },

  MysticFishingRod: {
    Pole: 1,
    Line: 1,
    Filigree: 1,
    CutGem: 1,
  },
  Line: {
    Fibre: 2,
  },

  MysticHammer: {
    ReinforcedHammerhead: 1,
    Handle: 1,
    CounterBalance: 1,
    CutGem: 1,
  },

  MysticWateringCan: {
    Reservoir: 1,
    Handle: 1,
    Filigree: 1,
    CutGem: 1,
  },
  Reservoir: {
    Ingot: 1,
  },
};

type IRecipes = typeof RECIPES;

export type IMaterialNonRaw = keyof IRecipes;
export const MATERIALS_NON_RAW = Object.keys(RECIPES) as IMaterialNonRaw[];

export type IMaterial =
  | IMaterialNonRaw
  | IKeysOfUnion<IRecipes[IMaterialNonRaw]>;
export const MATERIALS = [
  ...Object.keys(RECIPES),
  ...new Set(
    Object.values(RECIPES).reduce(
      (res, cur) => [...res, ...Object.keys(cur)],
      [] as string[],
    ),
  ),
] as IMaterial[];

export type IMaterialRaw = Exclude<IMaterial, IMaterialNonRaw>;
export const MATERIALS_RAW = MATERIALS.filter(
  (mat) => !MATERIALS_NON_RAW.includes(mat as IMaterialNonRaw),
);
