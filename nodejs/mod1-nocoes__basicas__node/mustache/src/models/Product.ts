type Product = {
	title: string,
	price: number
};

const data: Product[] = [
	{title: 'produto X', price:10},
	{title: 'produto Y', price:15},
	{title: 'produto Z', price:40},
	{title: 'produto G', price:5}
];

export const Product = {
	getAll: (): Product[]=>{
		return data;
	},
	getFromPriceAfter: (price: number): Product[]=>{
		return data.filter(item => item.price >= price);
	}
};

