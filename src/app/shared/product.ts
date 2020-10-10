// import

export interface IProduct {
  id: string;
  name: string;
  image: string;
  department: string;
  promotion: boolean;
  description: string;
  price: number;
  discount: number;
  category: string;
  rating: number;
}

export interface ProductResolved {
  product: IProduct;
  error?: any;
}
