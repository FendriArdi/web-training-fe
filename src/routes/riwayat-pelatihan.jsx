import { Layout } from "../components/Layout";
import DataTable from "react-data-table-component";
import { getAllTrainingData } from "../api/trainingData";
import { useEffect, useMemo, useState } from "react";
import { riwayatColumns } from "../utils/riwayatColumns";
import { Filter } from "../components/Filter";

export const RiwayatPelatihan = () => {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const trainingData = await getAllTrainingData();
            if (trainingData) {
                setData(trainingData);
                setFullData(trainingData);
            }
        };

        fetchData();
    }, []);

    const subHeaderComponentMemo = useMemo(() => {
        return (
            <Filter
                filterText={filterText}
                onTextChange={setFilterText}
                onFilter={(column) => handleFilterData(column, filterText)}
                onClear={() => {
                    setFilterText("");
                    handleFilterData("name", "");
                }}
            />
        );
    }, [filterText]);

    const handleFilterData = (column, keyword) => {
        const newData = fullData.filter(
            (item) => item[column] && item[column].toLowerCase().includes(keyword.toLowerCase())
        );
        setData(newData);
    };

    return (
        <Layout>
            <section className="container py-10">
                <h1 className="h4">Riwayat Pelatihan</h1>
                <DataTable
                    className="mt-5"
                    columns={riwayatColumns}
                    data={data}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                />
            </section>
        </Layout>
    );
};
