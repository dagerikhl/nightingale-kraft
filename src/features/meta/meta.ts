import {
  IMaterial,
  IMaterialNonRaw,
  IMaterialRaw,
  MATERIALS_NON_RAW,
  MATERIALS_RAW,
} from "../recipes/recipes";

export type IMaterialBench =
  | "Sawing"
  | "Sewing"
  | "Smelter"
  | "Stone"
  | "Tanning"
  | "Textile"
  | "Workbench";

const MATERIAL_BENCH_MAP: Record<IMaterialNonRaw, IMaterialBench> = {
  Action: "Smelter",
  ArtisanalPickHead: "Smelter",
  Barrel: "Smelter",
  Blade: "Smelter",
  Buckles: "Smelter",
  Buttons: "Smelter",
  Cloth: "Textile",
  CutGem: "Stone",
  DurableCloth: "Textile",
  ExplorersPack: "Sewing",
  Fasteners: "Smelter",
  Fibre: "Tanning",
  Filigree: "Smelter",
  ForgedHandle: "Smelter",
  GildedBlade: "Smelter",
  GildedLumber: "Sawing",
  Glass: "Smelter",
  Grip: "Tanning",
  Guard: "Smelter",
  Hammerhead: "Smelter",
  Handle: "Sawing",
  HermeticsFormalShirt: "Sewing",
  Hilt: "Smelter",
  Leather: "Tanning",
  Lens: "Smelter",
  Lining: "Textile",
  Lumber: "Sawing",
  MagickianTophat: "Sewing",
  MechanicalGears: "Smelter",
  MetalPlate: "Smelter",
  MetalTip: "Smelter",
  MouldedGlass: "Smelter",
  MysticClimbingPicks: "Workbench",
  MysticExplosiveGrenadeSatchel: "Workbench",
  MysticLantern: "Workbench",
  MysticMaul: "Workbench",
  MysticSpyglass: "Workbench",
  MysticSword: "Workbench",
  MysticThrowingKnifeSheath: "Workbench",
  MysticUmbrellaGlider: "Workbench",
  Ornament: "Smelter",
  PickHead: "Smelter",
  Pole: "Sawing",
  PorterPistol: "Workbench",
  RefinedAction: "Smelter",
  ReinforcedHammerhead: "Smelter",
  ReinforcedLeather: "Tanning",
  SentinelsBoots: "Sewing",
  SentinelsBreeches: "Sewing",
  SentinelsCoat: "Sewing",
  SentinelsGloves: "Sewing",
  Shaft: "Smelter",
  StonePowder: "Stone",
  Straps: "Tanning",
  Thread: "Textile",
  Twine: "Textile",
  Wick: "Textile",
  Wire: "Smelter",
  WranglerBackpack: "Sewing",
  WranglerShirt: "Sewing",
  Wrap: "Tanning",
};

export const getMetaBench = (mat: IMaterial): IMaterialBench | undefined =>
  checkIsRaw(mat) ? undefined : MATERIAL_BENCH_MAP[mat];

export type IMaterialType = "Gear" | "Ingredient" | "ToolOrWeapon";

export const getMetaType = (mat: IMaterial): IMaterialType => {
  const bench = getMetaBench(mat);

  if (bench === "Sewing") {
    return "Gear";
  } else if (bench === "Workbench") {
    return "ToolOrWeapon";
  }

  return "Ingredient";
};

export const checkIsRaw = (mat: IMaterial): mat is IMaterialRaw =>
  MATERIALS_RAW.includes(mat);
export const checkIsNonRaw = (mat: IMaterial): mat is IMaterialNonRaw =>
  MATERIALS_NON_RAW.includes(mat as IMaterialNonRaw);

export interface IMeta {
  bench?: IMaterialBench;
  type: IMaterialType;
  isRaw: boolean;
}

export const getMeta = (mat: IMaterial): IMeta => ({
  bench: getMetaBench(mat),
  type: getMetaType(mat),
  isRaw: checkIsRaw(mat),
});
