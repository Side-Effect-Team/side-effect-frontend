export const useLocalStorage = () => {
  const getter = (key: string) => {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  };

  const setter = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { getter, setter };
};
