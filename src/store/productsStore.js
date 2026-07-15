import { atom } from 'jotai'
import { products as productData } from '../data/products'

// Shared Jotai atom that exposes the catalog data to the app.
export const productsAtom = atom(productData)

// Shared pagination state used by the product listing view.
export const productPaginationAtom = atom({ startIndex: 0, pageSize: 6 })
