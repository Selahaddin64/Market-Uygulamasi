export interface CartProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
export interface CartProducts {
  id: number;
  quantity: number;
  product: CartProduct;
}
export interface FetchCartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}
export interface FetchCartResponse {
  id: number;
  products: FetchCartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
export interface FetchCartBody {
  id: number;
  quantity: number;
}
