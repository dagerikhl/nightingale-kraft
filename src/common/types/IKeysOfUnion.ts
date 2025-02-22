export type IKeysOfUnion<T> = T extends any ? keyof T : never;
