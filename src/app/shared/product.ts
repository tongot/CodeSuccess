// import

export interface IProduct {
  id: number;
  name: string;
  image: string[];
  department: string;
  promotion: boolean;
  description: string [];
  price: number;
  discount: number;
  category: string;
  rating: number;
  tags: string[];
}

export interface IProductResolved {
  product: IProduct;
  error?: any;
}
