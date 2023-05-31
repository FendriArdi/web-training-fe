import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./routes/root";
import { Login } from "./routes/login";
import { Admin } from "./routes/admin";
import { TambahPengajuan } from "./routes/tambah-pengajuan";
import { RiwayatPelatihan } from "./routes/riwayat-pelatihan";
import { RiwayatPengajuan } from "./routes/riwayat-pengajuan";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/tambah-pengajuan",
        element: <TambahPengajuan />,
    },
    {
        path: "/riwayat-pengajuan",
        element: <RiwayatPengajuan />,
    },
    {
        path: "/riwayat-pelatihan",
        element: <RiwayatPelatihan />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
