export const getObjectEntries = <K, T>(
  obj: { [s: string]: T } | ArrayLike<T>,
): [K, T][] => Object.entries(obj) as [K, T][];
