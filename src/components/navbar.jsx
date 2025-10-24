import Link from "next/link";
import { ROUTES } from "@/lib/routes";
export default function Navbar() {
  return (
    <div className="py-5 border border-b-gray-400">
      <div className="flex justify-center items-center gap-8">
        <Link
          href={ROUTES.PAGE_ROUTES.HOME}
          className="py-2 px-4 hover:bg-gray-300"
        >
          Beranda
        </Link>
        <Link
          href={ROUTES.PAGE_ROUTES.KELOLA_PRODUK}
          className="py-2 px-4 hover:bg-gray-300"
        >
          Kelola Produk
        </Link>
        <Link
          href={ROUTES.PAGE_ROUTES.DATA}
          className="py-2 px-4 hover:bg-gray-300"
        >
          Fetch Data
        </Link>
      </div>
    </div>
  );
}
