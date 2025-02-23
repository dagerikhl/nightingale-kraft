import { IPartialRecord } from "../../common/types/IPartialRecord";
import { getObjectEntries } from "../../common/utils/objects";
import { checkIsNonRaw, getMeta } from "../meta/meta";
import { IMaterial, RECIPES } from "../recipes/recipes";

export interface IMatTree {
  level: number;
  amount: number;
  ingredients?: IPartialRecord<IMaterial, IMatTree>;
}

export const getMatTree = (mat: IMaterial, amount = 1, level = 0): IMatTree => {
  const tree: IMatTree = { level, amount };

  if (checkIsNonRaw(mat)) {
    const ingredients = RECIPES[mat];

    tree.ingredients = {};
    for (const [ingredient, ingredientAmount] of getObjectEntries<
      IMaterial,
      number
    >(ingredients)) {
      tree.ingredients![ingredient] = getMatTree(
        ingredient,
        amount * ingredientAmount,
        level + 1,
      );
    }
  }

  return tree;
};

export interface IMatsItem {
  levels: Set<number>;
  amount: number;
}

export type IMats = IPartialRecord<IMaterial, IMatsItem>;

export const getMatsFromMatTree = (
  matTree: IMatTree,
  mats: IMats = {},
): IMats => {
  if (matTree.ingredients) {
    for (const [ingredient, ingredientTree] of getObjectEntries<
      IMaterial,
      IMatTree
    >(matTree.ingredients)) {
      mats[ingredient] = {
        levels: new Set([
          ...(mats[ingredient]?.levels ?? []),
          ingredientTree.level,
        ]),
        amount: (mats[ingredient]?.amount ?? 0) + ingredientTree.amount,
      };

      getMatsFromMatTree(ingredientTree, mats);
    }
  }

  return mats;
};

export const sortMats = (mats: IMats): IMats =>
  Object.fromEntries(
    getObjectEntries<IMaterial, IMatsItem>(mats).sort(([a], [b]) => {
      const aMeta = getMeta(a);
      const bMeta = getMeta(b);

      if (aMeta.bench === bMeta.bench) {
        return a.localeCompare(b);
      } else {
        return (aMeta.bench ?? "ZZZ").localeCompare(bMeta.bench ?? "ZZZ");
      }
    }),
  );
