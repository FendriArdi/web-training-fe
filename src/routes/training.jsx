import { useState } from "react";
import { Layout } from "../components/Layout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import clsx from "clsx";
import { getTrainingQuestions, postTrainingAnswer } from "../api/questionData";
import { useLoaderData } from "react-router-dom";
import { handleArrayChange } from "../utils/arrayHandling";

export async function loader({ params }) {
    const training = await getTrainingQuestions(params.id);
    const id = params.id;
    return { training, id };
}

export const Training = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [answers, setAnswers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { training, id } = useLoaderData();

    const handleChangeAnswer = (index, val) => {
        handleArrayChange(null, index, val, answers, setAnswers);
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const result = await postTrainingAnswer(id, data, answers);
            if (result) {
                toast.success("Jawaban berhasil dikirimkan!");
            } else {
                toast.error("Gagal menyimpan jawaban, silakan coba lagi");
            }
        } catch (error) {
            toast.error(error.message);
        }
        setIsLoading(false);
    };

    return (
        <Layout isTraining>
            <section className="container grid gap-10">
                <div className="py-12">
                    <h1 className="h4">Quiz</h1>
                    <h2 className="h6 text-gray-800 mt-2">Pelatihan {training.name}</h2>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <div className="form-group flex flex-col">
                                <label className="p2 text-gray-700">Nama Lengkap*</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    required
                                    placeholder="Tuliskan nama lengkapmu di sini"
                                    {...register("participant", { required: true })}
                                />
                                {errors.participant?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Nama lengkap wajib diisi
                                    </p>
                                )}
                            </div>
                            <p className="text-gray-600 text-xl mt-3">
                                Jawablah semua pertanyaan di bawah ini dengan benar
                            </p>

                            {training?.questions.map((question, index) => (
                                <div className="form-group flex flex-col" key={`q-${index}`}>
                                    <label className="p2 text-gray-700">{question.text}</label>
                                    <textarea
                                        required
                                        className="input-field"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="4"
                                        value={answers[index]}
                                        onChange={(e) => handleChangeAnswer(index, e.target.value)}
                                    ></textarea>
                                </div>
                            ))}

                            <button
                                className={clsx(
                                    "btn btn-primary",
                                    (isLoading || answers.includes("") || answers.length === 0) &&
                                        "opacity-40 pointer-events-none"
                                )}
                                type="submit"
                            >
                                Kirim Jawaban
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
