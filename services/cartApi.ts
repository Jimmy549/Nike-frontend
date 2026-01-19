import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface CartItem {
  productId: string;
  quantity: number;
  name?: string;
  price?: number;
  image?: string;
}

export interface Cart {
  items: CartItem[];
  totalPrice?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query<Cart, void>({
      query: () => '/api/cart',
      providesTags: ['Cart'],
    }),
    addToCart: builder.mutation<Cart, { productId: string; quantity: number }>({
      query: (body) => ({
        url: '/api/cart',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
    updateCartItem: builder.mutation<Cart, { id: string; quantity: number }>({
      query: ({ id, quantity }) => ({
        url: `/api/cart/${id}`,
        method: 'PATCH',
        body: { quantity },
      }),
      invalidatesTags: ['Cart'],
    }),
    removeFromCart: builder.mutation<Cart, string>({
      query: (id) => ({
        url: `/api/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    clearCart: builder.mutation<Cart, void>({
      query: () => ({
        url: '/api/cart',
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;
