import { BiLogOut } from "react-icons/bi";

export const Header = () => {
    return (
        <header className="sticky top-0 bg-white">
            <div className="container flex items-center justify-between py-6">
                <div className="flex item-center gap-8">
                    <a href="/">
                        <img src="/images/logo.svg" alt="logo" />
                    </a>
                    <a href="#" className="link font-poppins">
                        Daftar Pengajuan
                    </a>
                    <a href="#" className="link font-poppins">
                        Riwayat Pelatihan
                    </a>
                </div>
                <div className="flex items-center gap-8">
                    <p className="p3 text-neutral-4">Halo, John Doe</p>
                    <button className="btn btn-secondary">
                        <BiLogOut />
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};
