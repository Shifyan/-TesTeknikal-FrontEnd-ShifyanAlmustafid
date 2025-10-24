import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardAction,
} from "@/components/ui/card";
import { data } from "@/lib/dummy";
import { Pencil, CircleX, PackagePlus } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function KelolaProduk() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-20 py-10">
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Manajemen Produk</h1>
        </div>
        <div className="mt-15">
          <Card className="py-10 px-2">
            <CardHeader className="my-3">
              <CardAction>
                <Link
                  href={ROUTES.CRUD_ROUTES.CREATE}
                  className="flex justify-center items-center gap-2 font-semibold"
                >
                  <PackagePlus />
                  Tambah Produk
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {data.map((e, i) => {
                return (
                  <Card key={i}>
                    <div className="mx-3 flex justify-between">
                      <div>
                        <h1 className="font-semibold">{e.nama}</h1>
                      </div>
                      <div className="flex gap-5">
                        <Link href={ROUTES.CRUD_ROUTES.EDIT(e.id)}>
                          <Pencil className="text-blue-700" />
                        </Link>
                        <Link href={ROUTES.CRUD_ROUTES.DELETE(e.id)}>
                          <CircleX className="text-red-700" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
