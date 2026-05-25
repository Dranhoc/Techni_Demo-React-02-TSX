export type ProductData = {
	id: number;
	name: string;
	description?: string;
	price: number;
	isPromo: boolean;
};

export type Products = ProductData[];
