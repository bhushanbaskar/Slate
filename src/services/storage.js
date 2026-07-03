import { STORAGE_KEY } from "../utils/constants";
import defaultData from "../data/defaultData";

export function initializeStorage() {
  const existingData = localStorage.getItem(STORAGE_KEY);

  if (existingData === null) {
    saveData(defaultData);
  }
}

export function saveData(data) {
  const dataString = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, dataString);
}

export function getData() {
  try {
    const dataString = localStorage.getItem(STORAGE_KEY);

    if (dataString === null) {
      return null;
    }

    return JSON.parse(dataString);
  } catch (error) {
    console.error("Failed to read Slate data:", error);
    return null;
  }
}

export function resetData() {
  localStorage.removeItem(STORAGE_KEY);
}
