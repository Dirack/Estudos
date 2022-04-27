type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto W', price: 20},
    {title: 'Produto G', price: 5}
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};