import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Login } from "./routes/login";
import { Admin } from "./routes/admin";
import { TambahPengajuan } from "./routes/tambah-pengajuan";
import { RiwayatPelatihan } from "./routes/riwayat-pelatihan";
import { RiwayatPengajuan } from "./routes/riwayat-pengajuan";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <ProtectedAdminRoute>
                    <Admin />
                </ProtectedAdminRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/tambah-pengajuan",
        element: (
            <ProtectedRoute>
                <TambahPengajuan />
            </ProtectedRoute>
        ),
    },
    {
        path: "/riwayat-pengajuan",
        element: (
            <ProtectedRoute>
                <RiwayatPengajuan />
            </ProtectedRoute>
        ),
    },
    {
        path: "/riwayat-pelatihan",
        element: (
            <ProtectedRoute>
                <ProtectedAdminRoute>
                    <RiwayatPelatihan />
                </ProtectedAdminRoute>
            </ProtectedRoute>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </React.StrictMode>
);
