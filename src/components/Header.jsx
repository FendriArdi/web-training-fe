import { BiLogOut } from "react-icons/bi";

export const Header = ({ isAdmin = false }) => {
    const navLinks = isAdmin
        ? [
              { name: "Daftar Pengajuan", url: "/" },
              { name: "Riwayat Pengajuan", url: "/" },
          ]
        : [
              { name: "Tambah Pengajuan", url: "/" },
              { name: "Riwayat Pengajuan", url: "/" },
          ];

    return (
        <header className="sticky top-0 bg-white">
            <div className="container flex items-center justify-between py-6">
                <div className="flex item-center gap-8">
                    <a href="/">
                        <img src="/images/logo.svg" alt="logo" />
                    </a>
                    {navLinks.map((nav, i) => (
                        <a key={`nav-${i}`} href={nav.url} className="link font-poppins">
                            {nav.name}
                        </a>
                    ))}
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

Header.propTypes = {
    isAdmin: Boolean,
};
