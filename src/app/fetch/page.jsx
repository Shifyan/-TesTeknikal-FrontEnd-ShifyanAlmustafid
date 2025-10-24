"use client";
import axios from "axios";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        setData(data.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center py-20">
        <Card className="w-[500px] py-4 px-4 ">
          <CardContent className="flex flex-col gap-4">
            {data.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between  border-b border-b-gray-600"
                >
                  <h1>{e.name}</h1>
                  <Link target="blank" href={e.url}>
                    Link
                  </Link>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
