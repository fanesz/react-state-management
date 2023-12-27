import api from ".";

export const login = async (username: string, password: string) => {
  const response = await api.post("/auth/login", {
    username, password
  });
  return response.data;
}

export const getCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
}

export const getProducts = async (limit: number, sort: string) => {
  const response = await api.get(`/products?limit=${limit}&sort=${sort}`);
  return response.data;
}

export const getProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
}