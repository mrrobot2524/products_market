import { api } from "./api";

export async function getPosts(skip, limit) {
  try {
    const response = await api.get(`/posts`, {
      params: {
        skip: skip,
        limit: limit,
      },
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка при получении постов", e);
    throw e;
  }
}

export async function getPostsByTag(tag) {
  try {
    const response = await api.get(`/posts/tag/${tag}`);
    return response.data;
  } catch (e) {
    console.error("Ошибка при получении постов", e);
    throw e;
  }
}

export async function getAllTags() {
  try {
    const response = await api.get(`/posts/tags/`);
    return response.data;
  } catch (e) {
    console.error("Ошибка при получении постов", e);
    throw e;
  }
}
