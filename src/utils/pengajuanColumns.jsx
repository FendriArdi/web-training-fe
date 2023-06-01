import { BiCheck, BiX } from "react-icons/bi";

export const pengajuanColumn = [
    {
        name: "No",
        selector: (row, index) => index + 1,
        width: "60px",
    },
    {
        name: "Nama Pelatihan",
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: "Tujuan",
        selector: (row) => row.purpose,
        sortable: true,
        style: {
            whiteSpace: "prewarp",
        },
    },
    {
        name: "Penyelenggara",
        selector: (row) => row.organizer,
        sortable: true,
    },
    {
        name: "Tempat",
        selector: (row) => row.location,
        sortable: true,
    },
    {
        name: "Tanggal",
        selector: (row) => row.heldAt,
        sortable: true,
    },
    {
        name: "Biaya",
        selector: (row) => row.cost ?? "-",
        sortable: true,
    },
    {
        name: "Aksi",
        width: "180px",
        selector: () => (
            <div className="flex items-center gap-2 justify-center w-full">
                <button className="btn btn-secondary px-2 py-2 text-red-600 bg-red-100 hover:bg-red-200">
                    <BiX />
                </button>
                <button className="btn btn-primary px-4 py-2">
                    <BiCheck /> Setujui
                </button>
            </div>
        ),
        sortable: true,
    },
];
