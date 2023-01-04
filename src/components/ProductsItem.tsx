
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

type Props = {
    id: number;
    image: string;
    title: string;
    price: number;
}

export function ProductItem({ id, title, price, image}: Props) {
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-slate-100 p-8 md:h-[500px] md:w-[300px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <img src={image} alt={""} />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="md:text-l space-y-3 text-center text-base text-black">
          <h2>{title}</h2>
          <hr />
          <p className="text-blue-600">{price} ₺</p>
        </div>
        <div className="mb-16 flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[40px] md:w-[40px] ">
        <ShoppingCartIcon className="h-6 w-6 text-white" />
        </div>
        <div className="mb-16 flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[40px] md:w-[40px]">
        <HeartIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}