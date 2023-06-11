import { Layout } from "../components/Layout";
import { useLoaderData } from "react-router-dom";
import QRCode from "react-qr-code";
import { getTrainingDetail } from "../api/questionData";
import { BiShow } from "react-icons/bi";

export async function loader({ params }) {
    const training = await getTrainingDetail(params.id);
    const id = params.id;
    return { training, id };
}

export const TrainingQR = () => {
    const { training, id } = useLoaderData();
    const getTrainingUrl = () => {
        const originalUrl = window.location.protocol + "//" + window.location.host;
        return originalUrl + "/training/" + id;
    };

    return (
        <Layout isTraining>
            <section className="min-h-screen bg-primary-1">
                <div className="container flex gap-4 items-center justify-center flex-col min-h-screen">
                    <div className="flex flex-col mt-12 bg-white shadow-card rounded-xl px-12 py-8 min-w-[461px] gap-2 items-center">
                        <div className="logo">
                            <img src="/images/logo.svg" className="h-20 mb-4" alt="logo" />
                        </div>

                        <div className="text-center">
                            <h1 className="h4 text-primary-4">Scan untuk Memasuki Soal Quiz</h1>
                            <p className="">
                                Pelatihan {training.name} | {training.location}
                            </p>
                        </div>
                        <div className="mt-5">
                            <QRCode value={getTrainingUrl()} />
                        </div>
                        <div className="mt-5">
                            <a href="#answer" className="btn btn-primary">
                                Lihat Jawaban Peserta
                            </a>
                            <a href="/riwayat-pelatihan" className="btn btn-secondary mt-4">
                                Kembali
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 bg-white p-5 w-full rounded-lg mb-12" id="answer">
                        <h2 className="h5">Jawaban Peserta</h2>
                        <div className="my-4">
                            <table className="w-full text-sm text-left text-neutral-500 rounded-md overflow-hidden">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nama
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Lihat Jawaban
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {training?.answers?.map((answer, index) => (
                                        <tr key={`answer-${index}`} className="bg-white">
                                            <td scope="col" className="px-6 py-3">
                                                {index + 1}
                                            </td>
                                            <td scope="col" className="px-6 py-3">
                                                {answer.participant}
                                            </td>
                                            <td scope="col" className="px-6 py-3">
                                                <a
                                                    href={`/training-answer/${training.id}/${answer.id}`}
                                                    className="btn btn-primary w-fit"
                                                >
                                                    <BiShow className="text-white" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}

                                    {training?.answers === 0 && "Belum ada jawaban yang masuk"}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
