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
import { Training, loader } from "./routes/training";
import { TrainingQR, loader as QRLoader } from "./routes/training-qr";
import { TrainingAnswer, loader as answerLoader } from "./routes/training-answer";

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
    {
        path: "/training/:id",
        loader: loader,
        element: <Training />,
    },
    {
        path: "/training-answer/:trainingId/:userId",
        loader: answerLoader,
        element: <TrainingAnswer />,
    },
    {
        path: "/qr-training/:id",
        loader: QRLoader,
        element: <TrainingQR />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </React.StrictMode>
);
