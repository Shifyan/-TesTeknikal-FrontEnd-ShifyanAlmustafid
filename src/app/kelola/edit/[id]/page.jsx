"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect, use } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { data } from "@/lib/dummy";
export default function EditProduk({ params }) {
  const id = use(params);

  const [namaProduk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const filtered = data.filter((e) => e.id == id.id);
    setNamaProduk(filtered[0].nama);
    setHarga(filtered[0].harga);
    setStock(filtered[0].stock);
  });
  const handleClick = () => {
    if (namaProduk === "") {
      setIsOpen(true);
    }
    if (harga === "") {
      setIsOpen(true);
    }
    if (harga == "0") {
      setIsOpen(true);
    }
    if (stock === "") {
      setIsOpen(true);
    }
    if (stock == "0") {
      setIsOpen(true);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Form Wajib Di Isi</AlertDialogTitle>
            <AlertDialogDescription>
              Isi Formulir Produk Baru dengan benar
              <br />
              Tidak Boleh Kosong
              <br />
              Harga Tidak Boleh 0
              <br />
              Stock Tidak Boleh 0
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setIsOpen(false)}
              className="hover:cursor-pointer"
            >
              Kembali
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Card className="md:w-[555px]">
        <CardHeader>
          <div>
            <Link
              href={ROUTES.PAGE_ROUTES.KELOLA_PRODUK}
              className="flex items-center font-semibold gap-2"
            >
              <ArrowLeft /> Kembali
            </Link>
          </div>
          <CardTitle className="font-bold text-2xl flex justify-center">
            Edit Produk
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-7 mt-10">
          <Input
            type="text"
            placeholder={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
            defaultValue={namaProduk}
          />
          <Input
            type="number"
            placeholder={harga}
            onChange={(e) => setHarga(e.target.value)}
            defaultValue={harga}
          />
          <Input
            type="number"
            placeholder={stock}
            onChange={(e) => setStock(e.target.value)}
            defaultValue={stock}
          />
          <div className="w-full mt-3">
            <Button
              className="w-full hover:cursor-pointer"
              onClick={() => handleClick()}
            >
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
