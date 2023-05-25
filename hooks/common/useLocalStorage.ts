export const useLocalStorage = () => {
  const getter = (key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (err) {
        return value;
      }
    } else {
      return null;
    }
  };

  const setter = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const cleaner = (key: string) => {
    localStorage.removeItem(key);
  };

  return { getter, setter, cleaner };
};
