export interface IProduct {
    id: string;
    image: string;
    name: string;
    price: number;
    colors?: string[];
    discount?: number;
}