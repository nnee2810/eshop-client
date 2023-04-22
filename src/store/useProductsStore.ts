import { create } from "zustand"

export interface ProductsQuery {
  name?: string
  orderBy?: string
  category?: string[]
  brand?: string[]
  color?: string[]
}

interface ProductsState {
  query: ProductsQuery
  setQuery: (query: ProductsQuery) => void
  clearQuery: () => void
}

export const useProductsStore = create<ProductsState>((set) => ({
  query: {},
  setQuery: (query) =>
    set({
      query,
    }),
  clearQuery: () =>
    set({
      query: {},
    }),
}))
