export interface IProduct {
  _id?: string | null;
  name: string;
  brand: string;
  description: string;
  categories: string[];
  images: string[];
  price: number;
  stock: number;
  rating: number;
  createdAt: Date;
}

export interface IProductCart extends IProduct {
  quantity: number
}