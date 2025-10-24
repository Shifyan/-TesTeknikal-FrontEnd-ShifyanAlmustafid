import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
export default function Card({ data }) {
  return (
    <div className="w-ful bg-gray-300 py-4 px-4 rounded-[10px]">
      <div className="w-full relative md:h-[270px] h-[130px]">
        <Image src="/tent.png" alt="Tenda" fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="py-4 font-semibold">
          <div className="flex justify-center font-semibold md:text-lg  text-[12px] mb-4">
            <h1>{data.nama}</h1>
          </div>
          <div className=" flex justify-between text-[11px] md:text-[16px]">
            <h2>USD {data.harga}</h2>
            <h2>Stock: {data.stock}</h2>
          </div>
        </div>
        <div className="flex w-full items-end">
          <Button className="w-full hover:cursor-pointer">
            <ShoppingCart />
            Keranjang
          </Button>
        </div>
      </div>
    </div>
  );
}
