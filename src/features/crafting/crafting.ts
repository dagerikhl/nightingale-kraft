import { IPartialRecord } from "../../common/types/IPartialRecord";
import { getObjectEntries } from "../../common/utils/objects";
import { checkIsNonRaw, getMeta } from "../meta/meta";
import { IMaterial, RECIPES } from "../recipes/recipes";

export interface IMatTree {
  parent: IMaterial;
  level: number;
  amount: number;
  ingredients?: IPartialRecord<IMaterial, IMatTree>;
}

export const getMatTree = (mat: IMaterial, amount = 1, level = 0): IMatTree => {
  const tree: IMatTree = { parent: mat, level, amount };

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
  parents: IMaterial[];
  levels: number[];
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
        parents: [...(mats[ingredient]?.parents ?? []), matTree.parent],
        levels: [...(mats[ingredient]?.levels ?? []), ingredientTree.level],
        amount: (mats[ingredient]?.amount ?? 0) + ingredientTree.amount,
      };

      getMatsFromMatTree(ingredientTree, mats);
    }
  }

  return mats;
};

export const sortMats = (mats: IMats): IMats =>
  Object.fromEntries(
    getObjectEntries<IMaterial, IMatsItem>(mats).sort(
      ([aMat, aItem], [bMat, bItem]) => {
        const aMeta = getMeta(aMat);
        const bMeta = getMeta(bMat);

        if (aMeta.bench === bMeta.bench) {
          if (!aMeta.bench && !bMeta.bench) {
            return aMat.localeCompare(bMat);
          }

          if (bItem.parents.includes(aMat)) {
            return -1;
          } else if (aItem.parents.includes(bMat)) {
            return 1;
          }

          return 0;
        } else {
          return (aMeta.bench ?? "ZZZ").localeCompare(bMeta.bench ?? "ZZZ");
        }
      },
    ),
  );
