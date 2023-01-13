/* eslint-disable @typescript-eslint/naming-convention */
export type productDataType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type productDataTypeKey = keyof productDataType;
