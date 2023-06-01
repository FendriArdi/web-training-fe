import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import clsx from "clsx";

export const Header = () => {
    const [departement, setDepartement] = useState(localStorage.getItem("departement"));
    const [role, setRole] = useState(localStorage.getItem("role"));
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setDepartement(localStorage.getItem("departement") ?? "");
        setRole(localStorage.getItem("role") ?? "");
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        toast.success("Berhasil logout...");
        navigate("/login");
    };

    const navLinks =
        role === "admin"
            ? [
                  { name: "Daftar Pengajuan", url: "/" },
                  { name: "Riwayat Pelatihan", url: "/riwayat-pelatihan" },
              ]
            : [
                  { name: "Tambah Pengajuan", url: "/tambah-pengajuan" },
                  { name: "Riwayat Pengajuan", url: "/riwayat-pengajuan" },
              ];

    return (
        <header className="sticky top-0 bg-white z-10">
            <div className="container flex items-center justify-between py-6">
                <div className="flex item-center gap-8">
                    <a href="/">
                        <img src="/images/logo.svg" alt="logo" />
                    </a>
                    {navLinks.map((nav, i) => (
                        <a
                            key={`nav-${i}`}
                            href={nav.url}
                            className={clsx(
                                "link font-poppins",
                                location.pathname === nav.url && "text-primary-4"
                            )}
                        >
                            {nav.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-8">
                    <p className="p3 text-neutral-4">Halo, {departement}</p>
                    <button className="btn btn-secondary" onClick={handleLogout}>
                        <BiLogOut />
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};
