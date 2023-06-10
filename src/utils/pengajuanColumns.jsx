import moment from "moment/moment";
import { BiCheck } from "react-icons/bi";
import { rupiahFormatter } from "./rupiahFormatter";

export const pengajuanColumn = (rejectFunction, acceptFunction) => [
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
        name: "Aksi",
        width: "180px",
        selector: (row) => (
            <div className="flex items-center gap-2 justify-center w-full">
                {/* <button
                    className="btn btn-secondary px-2 py-2 text-red-600 bg-red-100 hover:bg-red-200"
                    onClick={() => rejectFunction(row.id)}
                >
                    <BiX />
                </button> */}
                <button
                    className="btn btn-primary px-4 py-2"
                    onClick={() => acceptFunction(row.id)}
                >
                    <BiCheck /> Setujui
                </button>
            </div>
        ),
        sortable: true,
    },
];
