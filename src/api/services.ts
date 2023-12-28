import api from ".";

export const login = async (username: string, password: string) => {
  const response = await api.post("/auth/login", {
    username,
    password,
  });
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

export const getProductsByCategory = async (
  category: string,
  sort: string,
  limit: number,
) => {
  const path = category === "all" ? "/products" : `/products/category/${category}`;
  const response = await api.get(`${path}?sort=${sort}&limit=${limit}`);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
