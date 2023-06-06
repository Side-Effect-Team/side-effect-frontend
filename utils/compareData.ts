export const compareData = (
  originData: Record<string, any>,
  changedData: Record<string, any>,
): Record<string, any> => {
  const keys = Object.keys(originData);
  const changes: Record<string, any> = {};
  for (const key of keys) {
    if (originData[key] !== changedData[key]) {
      changes[key] = changedData[key];
      if (changes[key] === undefined) {
        delete changes[key];
      }
    }
  }
  return changes;
};
