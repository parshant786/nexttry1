import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productInCart",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/products" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ``,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery } = productApi;
