export const ROUTES = {
  PAGE_ROUTES: {
    HOME: "/",
    KELOLA_PRODUK: "/kelola",
    DATA: "/fetch",
  },
  CRUD_ROUTES: {
    CREATE: "/kelola/tambah",
    EDIT: (params) => {
      return `/kelola/edit/${params}`;
    },
    DELETE: (params) => {
      return `/kelola/delete/${params}`;
    },
  },
};
