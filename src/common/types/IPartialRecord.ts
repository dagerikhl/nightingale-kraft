export type IPartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
