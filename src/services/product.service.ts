import type { ProductData } from '../@types/product';
import products from '../data/product.json';

export function getProduct(): ProductData[] {
	return products as ProductData[];
}
