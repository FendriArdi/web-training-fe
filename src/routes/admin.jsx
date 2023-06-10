import { Layout } from "../components/Layout";
import DataTable from "react-data-table-component";
import { pengajuanColumn } from "../utils/pengajuanColumns";
import { useEffect, useState } from "react";
import {
    getAllTrainingSchedule,
    getRequestedTrainingData,
    updateTrainingData,
} from "../api/trainingData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ConfirmationAlert } from "../components/ConfirmationAlert";
import { BigCalendar } from "../components/BigCalendar";
import { BiCalendar } from "react-icons/bi";
import moment from "moment";

export const Admin = () => {
    const [data, setData] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [scheduleCalendar, setScheduleCalendar] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const requestedTraining = await getRequestedTrainingData();
            const [allSchedule, mappedSchedule] = await getAllTrainingSchedule();

            if (requestedTraining) {
                setData(requestedTraining);
            }

            if (allSchedule && mappedSchedule) {
                setSchedule(allSchedule);
                setScheduleCalendar(mappedSchedule);
            }
        };

        fetchData();
    }, []);

    const handleApproveTraining = async (id) => {
        try {
            const result = await updateTrainingData(id, "ongoing");
            if (result === "success") {
                toast.success("Pelatihan berhasil diterima!");
                setTimeout(() => {
                    navigate(0);
                }, 500);
            } else {
                toast.error("Gagal mengupdate pelatihan, silakan coba lagi");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleRejectTraining = async (id) => {
        try {
            const result = await updateTrainingData(id, "rejected");
            if (result === "success") {
                toast.success("Pelatihan berhasil ditolak!");
                setTimeout(() => {
                    navigate(0);
                }, 500);
            } else {
                toast.error("Gagal mengupdate pelatihan, silakan coba lagi");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <Layout>
            <section className="container py-10">
                <h1 className="h4">Daftar Pengajuan Pelatihan</h1>
                <DataTable
                    className="mt-5"
                    columns={pengajuanColumn(
                        (id) => {
                            ConfirmationAlert(() => handleRejectTraining(id));
                        },
                        (id) => {
                            ConfirmationAlert(() => handleApproveTraining(id));
                        }
                    )}
                    data={data}
                />
                <h2 className="h4 mt-12">Daftar Pelatihan</h2>
                <div className="tab mt-8 grid grid-cols-3 gap-12">
                    <div className="col-span-2">
                        <BigCalendar
                            data={scheduleCalendar}
                            fullData={schedule}
                            onSelect={(index) => setSelectedIndex(index)}
                        />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden">
                        {selectedIndex !== null && (
                            <>
                                <div className="bg-primary-1 flex items-center gap-4 px-6 py-4">
                                    <BiCalendar />
                                    <p className="h6">
                                        {moment(schedule[selectedIndex].heldAt).format(
                                            "DD MMMM YYYY"
                                        )}
                                    </p>
                                </div>
                                <div className="px-6 py-4 flex flex-col gap-3">
                                    <div className="rounded-md">
                                        <p className="h5">{schedule[selectedIndex].name}</p>
                                        <p className="p2 text-neutral-4">
                                            {schedule[selectedIndex]?.purpose}
                                        </p>
                                        <p className="p2 mt-4">
                                            <strong>Lokasi:</strong>{" "}
                                            {schedule[selectedIndex].location}
                                        </p>
                                        <p className="p2">
                                            <strong>Penyelenggara:</strong>
                                            {schedule[selectedIndex].organizer}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};
