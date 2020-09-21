// import

export interface Product {
  id: string;
  name: string;
  image: string[];
  department: string;
  promotion: boolean;
  description: string[];
  price: number;
  rating: number;
}

export interface ProductResolved {
  product: Product;
  error?: any;
}
