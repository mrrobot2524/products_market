import { api } from "./api";

export async function getProducts() {
  try {
    const response = await api.get(`/products`);
    return response.data;
  } catch (e) {
    console.error("Ошибка при получении постов", e);
    throw e;
  }
}

export async function getByCategoryProducts() {
  try {
    const response = await api.get(`https://dummyjson.com/products/categories`);
    return response.data;
  } catch (e) {
    console.error("Ошибка при получении постов", e);
    throw e;
  }
}

export async function sortByCategoryProducts(cat) {
  try {
    const response = await api.get(
      `https://dummyjson.com/products/category/${cat}`,
    );
    return response.data;
  } catch (e) {
    console.error("Ошибка при получении постов", e);
    throw e;
  }
}

export async function getProductsDeteils(productId) {
  try {
    const response = await api.get(
      `https://dummyjson.com/products/${productId}`,
    );
    return response.data;
  } catch (e) {
    console.error("Ошибка при получении постов", e);
    throw e;
  }
}
