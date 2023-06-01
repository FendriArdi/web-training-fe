import { Layout } from "../components/Layout";
import DataTable from "react-data-table-component";
import { pengajuanColumn } from "../utils/pengajuanColumns";
import { useEffect, useState } from "react";
import { getRequestedTrainingData, updateTrainingData } from "../api/trainingData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ConfirmationAlert } from "../components/ConfirmationAlert";

export const Admin = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const trainingData = await getRequestedTrainingData();
            if (trainingData) {
                setData(trainingData);
            }
        };

        fetchData();
    }, []);

    const handleApproveTraining = async (id) => {
        try {
            const result = await updateTrainingData(id, "approved");
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
                <div className="tab mt-5"></div>
                <h2 className="h4 mt-12">Daftar Pelatihan</h2>
                <div className="tab mt-5"></div>
            </section>
        </Layout>
    );
};
