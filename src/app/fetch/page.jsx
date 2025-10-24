"use client";
import axios from "axios";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("https://pokeapi.co/api/v2/ability");
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
        <Card className="w-[500px]">
          <CardContent>
            {data.map((e, i) => {
              return (
                <div key={i}>
                  <h1>{e.name}</h1>
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
