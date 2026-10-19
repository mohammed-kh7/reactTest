export const fetchProducts = async ({ search, limit, skip }) => {
  const params = new URLSearchParams();
  if (limit) params.append('limit', limit);
  if (skip !== undefined) params.append('skip', skip);

  if (search && search.trim()) {
    params.append('q', search.trim());
    const queryString = params.toString();
    const url = `https://dummyjson.com/products/search?${queryString}`;
    const response = await fetch(url);
    return response.json();
  }

  const queryString = params.toString();
  const url = `https://dummyjson.com/products${queryString ? `?${queryString}` : ''}`;
  const response = await fetch(url);
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};
