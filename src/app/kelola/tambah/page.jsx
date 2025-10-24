"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
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
export default function TambahProduk() {
  const [namaProduk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
            Tambah Produk
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-7 mt-10">
          <Input
            type="text"
            placeholder="Nama Produk"
            onChange={(e) => setNamaProduk(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Harga"
            onChange={(e) => setHarga(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Stock"
            onChange={(e) => setStock(e.target.value)}
          />
          <div className="w-full mt-3">
            <Button
              className="w-full hover:cursor-pointer"
              onClick={() => handleClick()}
            >
              Tambah
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
