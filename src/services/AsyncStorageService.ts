import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToStorage = async (
  key: string,
  data: string | boolean | number,
) => {
  try {
    let value = data;
    if (typeof value !== 'string') {
      value = String(value);
    }
    await AsyncStorage.setItem(key, value);
  } catch (e: any) {
    return e.message;
  }
};

export const removeFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e: any) {
    return e.message;
  }
};

export const storeObjToStorage = async (key: string, data: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return JSON.stringify(data);
  } catch (e: any) {
    return e.message;
  }
};

export const getFromStorage = async (key: string) => {
  try {
    let value = await AsyncStorage.getItem(key);
    switch (value) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return value;
    }
  } catch (e: any) {
    return e.message;
  }
};

export const getObjectFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e: any) {
    return e.message;
  }
};
