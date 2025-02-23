import c from "chalk";
import { IMats, IMatTree } from "../crafting/crafting";
import { getMeta } from "../meta/meta";
import { IMaterial } from "../recipes/recipes";

const WIDTHS = {
  Name: 40,
  Bench: 20,
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
): string => {
  const meta = getMeta(mat);

  const strs: string[] = [];

  strs.push(`${SEPARATOR.repeat(indent)}${amount}x ${mat}`.padEnd(WIDTHS.Name));

  strs.push((meta?.bench ?? "").padEnd(WIDTHS.Bench));

  strs.push((meta.type === "Ingredient" ? "" : meta.type).padEnd(WIDTHS.Type));

  let str = `${SPACE}${strs.join(SPACE)}${SPACE}`;

  if (meta.isRaw) {
    str = c.green(str);
  }

  if (indent === 0) {
    return [
      "",
      c.yellow(str),
      c.yellow(`${SPACE}${LINE.repeat(TOTAL_WIDTH)}${SPACE}`),
    ].join("\n");
  }

  return str;
};

export const formatMatTree = (matTree: IMatTree, depth = 0): string => {
  const strs: string[] = [];

  if (matTree.ingredients) {
    for (const [ingredient, ingredientTree] of Object.entries(
      matTree.ingredients,
    ) as [IMaterial, IMatTree][]) {
      strs.push(formatMaterial(ingredient, ingredientTree.amount, depth + 1));

      if (ingredientTree.ingredients) {
        strs.push(formatMatTree(ingredientTree, depth + 1));
      }
    }
  }

  return strs.join("\n");
};

export const formatMats = (mats: IMats): string => {
  const strs: string[] = [];

  for (const [mat, amount] of Object.entries(mats) as [IMaterial, number][]) {
    strs.push(formatMaterial(mat, amount, 1));
  }

  return strs.join("\n");
};
