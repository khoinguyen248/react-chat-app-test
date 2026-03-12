
export const saveToStorage = <T,>(key: string, data: T): void => {
  try {
    const serializeData = JSON.stringify(data);
    localStorage.setItem(key, serializeData);
  } catch (error) {
    console.warn('Failed to save LocalStorage', error)
  }
};

export const loadFromStorage = <T,>(key: string): T | null => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) return null;
    return JSON.parse(serializedData) as T;
  } catch (error) {
    console.warn('Lỗi đọc LocalStorage:', error);
    return null;
  }
};
