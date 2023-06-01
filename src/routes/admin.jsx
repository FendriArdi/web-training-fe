import { Layout } from "../components/Layout";
import DataTable from "react-data-table-component";
import { pengajuanColumn } from "../utils/pengajuanColumns";
import { useEffect, useState } from "react";
import { getRequestedTrainingData } from "../api/trainingData";

export const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const trainingData = await getRequestedTrainingData();
            if (trainingData) {
                setData(trainingData);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout>
            <section className="container py-10">
                <h1 className="h4">Daftar Pengajuan Pelatihan</h1>
                <DataTable className="mt-5" columns={pengajuanColumn} data={data} />
                <div className="tab mt-5"></div>
                <h2 className="h4 mt-12">Daftar Pelatihan</h2>
                <div className="tab mt-5"></div>
            </section>
        </Layout>
    );
};
