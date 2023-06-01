import { Layout } from "../components/Layout";
import DataTable from "react-data-table-component";
import { getAllTrainingData } from "../api/trainingData";
import { useEffect, useState } from "react";
import { riwayatColumns } from "../utils/riwayatColumns";

export const RiwayatPelatihan = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const trainingData = await getAllTrainingData();
            if (trainingData) {
                setData(trainingData);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout>
            <section className="container py-10">
                <h1 className="h4">Riwayat Pelatihan</h1>
                <DataTable className="mt-5" columns={riwayatColumns} data={data} />
            </section>
        </Layout>
    );
};
