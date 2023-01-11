export interface FavProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}
export interface FavProducts {
  id: number;
  product: FavProduct;
}
