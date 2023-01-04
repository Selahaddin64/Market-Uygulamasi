import {HeartIcon, ShoppingCartIcon} from "@heroicons/react/outline";
// import { useSelector } from "react-redux";
// import { selectLikedItems } from "../redux/likedSlice";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link to="product">
          <div className="relative transition">
            <button className="bg-blue-600 hover:bg-blue-700 rounded-full w-32 h-8 text-white font-bold before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 hover:before:scale-x-100">Coin<span className="text-gray-400">Shop</span></button>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <Link to="cart">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            5
            </span>
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
          </div>
        </Link>
        <Link to="favorites">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            5
            </span>
            <HeartIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;