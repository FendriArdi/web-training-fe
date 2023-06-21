import clsx from "clsx";
import moment from "moment";
import { rupiahFormatter } from "./rupiahFormatter";

export const riwayatColumns = [
    {
        name: "No",
        selector: (row, index) => index + 1,
        width: "60px",
    },
    {
        name: "Nama Pelatihan",
        selector: (row) =>
            row.status === "ongoing" ? (
                <a className="font-semibold text-blue-600" href={`/qr-training/${row.id}`}>
                    {row.name}
                </a>
            ) : (
                row.name
            ),
        sortable: true,
    },
    {
        name: "Tujuan",
        selector: (row) => <div className="!whitespace-normal">{row.purpose}</div>,
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
        name: "Tanggal Pelatihan",
        selector: (row) => moment(row.heldAt).locale("id").format("DD MMMM YYYY"),
        sortable: true,
    },
    {
        name: "Biaya",
        selector: (row) => rupiahFormatter(row.cost) ?? "-",
        sortable: true,
    },
    {
        name: "Status",
        selector: (row) => (
            <div
                className={clsx(
                    "px-2 py-1 rounded-full flex items-center justify-center",
                    row.status === "requested" && "bg-yellow-100 text-yellow-600",
                    row.status === "ongoing" && "bg-teal-100 text-teal-600",
                    row.status === "approved" && "bg-red-100 text-blue-500",
                    row.status === "rejected" && "bg-red-100 text-red-500"
                )}
            >
                {row.status}
            </div>
        ),
        sortable: true,
    },
];
