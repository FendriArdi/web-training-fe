import clsx from "clsx";

export const riwayatColumns = [
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
        name: "Status",
        selector: (row) => (
            <div
                className={clsx(
                    "px-2 py-1 rounded-full flex items-center justify-center",
                    row.status === "requested" && "bg-yellow-100 text-yellow-600",
                    row.status === "approved" && "bg-teal-100 text-teal-600",
                    row.status === "rejected" && "bg-red-100 text-red-600"
                )}
            >
                {row.status}
            </div>
        ),
        sortable: true,
    },
];