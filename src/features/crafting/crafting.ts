import { IPartialRecord } from "../../common/types/IPartialRecord";
import { checkIsNonRaw, getMeta } from "../meta/meta";
import { IMaterial, RECIPES } from "../recipes/recipes";

export interface IMatTree {
  amount: number;
  ingredients?: IPartialRecord<IMaterial, IMatTree>;
}

export const getMatTree = (mat: IMaterial, amount = 1): IMatTree => {
  const tree: IMatTree = { amount };

  if (checkIsNonRaw(mat)) {
    const ingredients = RECIPES[mat];

    tree.ingredients = {};
    for (const [ingredient, ingredientAmount] of Object.entries(
      ingredients,
    ) as [IMaterial, number][]) {
      tree.ingredients![ingredient] = getMatTree(
        ingredient,
        amount * ingredientAmount,
      );
    }
  }

  return tree;
};

export type IMats = IPartialRecord<IMaterial, number>;

export const getMatsFromMatTree = (
  matTree: IMatTree,
  mats: IMats = {},
): IMats => {
  if (matTree.ingredients) {
    for (const [ingredient, ingredientTree] of Object.entries(
      matTree.ingredients,
    ) as [IMaterial, IMatTree][]) {
      mats[ingredient] = (mats[ingredient] ?? 0) + ingredientTree.amount;

      getMatsFromMatTree(ingredientTree, mats);
    }
  }

  return mats;
};

export const sortMats = (mats: IMats): IMats =>
  Object.fromEntries(
    (Object.entries(mats) as [IMaterial, number][]).sort(([a], [b]) => {
      const aMeta = getMeta(a);
      const bMeta = getMeta(b);

      if (aMeta.bench === bMeta.bench) {
        return a.localeCompare(b);
      } else {
        return (aMeta.bench ?? "ZZZ").localeCompare(bMeta.bench ?? "ZZZ");
      }
    }),
  );
