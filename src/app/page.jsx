"use client";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { data } from "@/lib/dummy";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [produk, setProduk] = useState(data);
  const [search, setSearch] = useState("");
  const [urut, setUrut] = useState("");
  const handleSearch = () => {
    console.log(search);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="py-20">
        <div className="flex justify-center font-bold text-2xl">
          <h1>PRODUK KAMI</h1>
        </div>
        <div className="w-[500px] flex gap-2 pt-10 md:px-[100px] px-5">
          <Input
            type="text"
            placeholder="Cari Produk"
            onChange={(e) => setSearch(e.target.value)}
          ></Input>
          <Button onClick={handleSearch}>Cari</Button>
        </div>
        <div className="py-15 md:px-[100px] px-5 grid md:grid-cols-4 grid-cols-2 gap-4">
          {produk.map((e, i) => {
            return <Card data={e} key={i} />;
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
