import { Layout } from "../components/Layout";
import { getTrainingAnswers, getTrainingQuestions } from "../api/questionData";
import { useLoaderData } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

export async function loader({ params }) {
    const answers = await getTrainingAnswers(params.trainingId, params.userId);
    const training = await getTrainingQuestions(params.trainingId);
    const questions = training.questions;
    return { answers, questions, id: params.trainingId };
}

export const TrainingAnswer = () => {
    const { answers, questions, id } = useLoaderData();

    return (
        <Layout isTraining>
            <section className="container grid gap-10">
                <div className="py-12">
                    <a
                        className="flex gap-3 items-center text-blue-700 mb-8"
                        href={`/qr-training/${id}`}
                    >
                        <BiChevronLeft />
                        Kembali
                    </a>
                    <h1 className="h4">Jawaban Quiz</h1>
                    <div className="mt-5">
                        <div className="flex flex-col gap-6">
                            <div className="form-group flex flex-col">
                                <label className="p2 text-gray-700">Nama Lengkap</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    required
                                    disabled
                                    value={answers.participant}
                                />
                            </div>
                            <p className="text-gray-600 text-xl mt-3">Jawaban</p>

                            {answers?.results.map((answer, index) => (
                                <div className="form-group flex flex-col" key={`q-${index}`}>
                                    <label className="p2 text-gray-700">
                                        {questions[index].text}
                                    </label>
                                    <textarea
                                        className="input-field"
                                        cols="30"
                                        rows="4"
                                        value={answer}
                                        disabled
                                    ></textarea>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
