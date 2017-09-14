export const FETCH_PRODUCTS = 'fetch_products';

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
    payload: [
      {
        id: '1',
        name: 'Hey',
      },
    ],
  };
}
