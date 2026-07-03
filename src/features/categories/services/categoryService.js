import { getData, saveData } from "../../../services/storage";

export function getCategories() {
  const data = getData();

  if (data === null) {
    return [];
  }

  return data.categories;
}

export function getCategoryById(id) {
  const categories = getCategories();

  return categories.find((category) => category.id === id) ?? null;
}

export function addCategory(category) {
  const data = getData();

  if (data === null) {
    return false;
  }

  data.categories = [...data.categories, category];

  saveData(data);

  return true;
}

export function updateCategory(id, updates) {
  const data = getData();

  if (data === null) {
    return false;
  }

  const index = data.categories.findIndex((category) => category.id === id);

  if (index === -1) {
    return false;
  }

  data.categories[index] = {
    ...data.categories[index],
    ...updates,
  };

  saveData(data);

  return true;
}

export function deleteCategory(id) {
  const data = getData();

  if (data === null) {
    return false;
  }

  data.categories = data.categories.filter((category) => category.id !== id);

  saveData(data);

  return true;
}
