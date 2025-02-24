import c from "chalk";
import { getObjectEntries } from "../../common/utils/objects";
import { IMats, IMatsItem, IMatTree } from "../crafting/crafting";
import { getMeta } from "../meta/meta";
import { IMaterial, IMaterialNonRaw, RECIPES } from "../recipes/recipes";

const WIDTHS = {
  Name: 30,
  Bench: 20,
  Parent: 30,
  Type: 15,
};

const MARGIN_HORIZONTAL = 1;

const SEPARATOR = " ";
const LINE = "=";

const SPACE = SEPARATOR.repeat(MARGIN_HORIZONTAL);

const TOTAL_WIDTH =
  Object.values(WIDTHS).reduce((res, cur) => res + cur, 0) +
  SEPARATOR.length * Object.keys(WIDTHS).length -
  1;

export const formatMaterial = (
  mat: IMaterial,
  amount = 1,
  indent = 0,
  parents?: IMaterial[],
): string => {
  const meta = getMeta(mat);

  const strs: string[] = [];

  strs.push(`${SEPARATOR.repeat(indent)}${amount}x ${mat}`.padEnd(WIDTHS.Name));

  strs.push((meta?.bench ?? "").padEnd(WIDTHS.Bench));

  const parentStr =
    parents && parents.length > 0 ? `^ ${parents.join(",")}` : "";
  const typeStr = meta.type === "Ingredient" ? "" : meta.type;

  if (typeStr) {
    strs.push(parentStr.padEnd(WIDTHS.Parent));
    strs.push(typeStr.padEnd(WIDTHS.Type));
  } else {
    strs.push(parentStr.padEnd(WIDTHS.Parent + WIDTHS.Type));
  }

  let str = `${SPACE}${strs.join(SPACE)}`;

  if (meta.isRaw) {
    str = c.green(str);
  }

  if (indent === 0) {
    return [
      "",
      c.yellow.bold(str),
      c.yellow.bold(`${SPACE}${LINE.repeat(TOTAL_WIDTH)}`),
    ].join("\n");
  }

  return str;
};

export const formatMatTree = (matTree: IMatTree): string => {
  const strs: string[] = [];

  if (matTree.ingredients) {
    for (const [ingredient, ingredientTree] of getObjectEntries<
      IMaterial,
      IMatTree
    >(matTree.ingredients)) {
      let formattedIngredient = formatMaterial(
        ingredient,
        ingredientTree.amount,
        ingredientTree.level,
        [matTree.parent],
      );
      if (ingredientTree.level === 1) {
        formattedIngredient = c.cyanBright(formattedIngredient);
      }
      strs.push(formattedIngredient);

      if (ingredientTree.ingredients) {
        strs.push(formatMatTree(ingredientTree));
      }
    }
  }

  return strs.join("\n");
};

export const formatMats = (
  mats: IMats,
  originalSources?: IMaterialNonRaw[],
): string => {
  const originalIngredients = originalSources?.reduce(
    (res, cur) => [...res, ...Object.keys(RECIPES[cur])],
    [] as string[],
  );

  const strs: string[] = [];

  let prevs: { mat: IMaterial; level: number }[] = [];
  let level = 1;
  for (const [mat, item] of getObjectEntries<IMaterial, IMatsItem>(mats)) {
    if (
      prevs.length > 0 &&
      getMeta(mat).bench !== getMeta(prevs[prevs.length - 1].mat).bench
    ) {
      prevs = [];
    }
    const parent = prevs.find(({ mat }) => item.parents.includes(mat));
    level = (parent?.level ?? 0) + 1;
    prevs.push({ mat, level });

    let formattedMat = formatMaterial(mat, item.amount, level, item.parents);
    if (originalIngredients?.includes(mat)) {
      if (item.levels.find((x) => x !== 1)) {
        formattedMat = c.cyan(formattedMat);
      } else {
        formattedMat = c.cyanBright(formattedMat);
      }
    }
    strs.push(formattedMat);
  }

  return strs.join("\n");
};
