import { useState } from "react";
import { Layout } from "../components/Layout";
import { useForm } from "react-hook-form";
import { BiPlus, BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { submitTrainingData } from "../api/trainingData";
import { handleArrayAdd, handleArrayChange, handleArrayRemove } from "../utils/arrayHandling";

export const TambahPengajuan = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [participants, setParticipants] = useState([""]);
    const [questions, setQuestions] = useState([""]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChangeParticipant = (index, val) => {
        handleArrayChange(null, index, val, participants, setParticipants);
    };

    const handleRemoveParticipant = (e, index) => {
        handleArrayRemove(e, index, participants, setParticipants);
    };

    const handleAddParticipant = (e) => {
        handleArrayAdd(e, participants, setParticipants);
    };

    const handleChangeQuestion = (index, val) => {
        handleArrayChange(null, index, val, questions, setQuestions);
    };

    const handleRemoveQuestion = (e, index) => {
        handleArrayRemove(e, index, questions, setQuestions);
    };

    const handleAddQuestion = (e) => {
        handleArrayAdd(e, questions, setQuestions);
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const result = await submitTrainingData(data, participants, questions);
            if (result === "success") {
                toast.success("Pelatihan berhasil diajukan!");
                setTimeout(() => {
                    navigate("/riwayat-pengajuan");
                }, 500);
            } else {
                toast.error("Gagal membuat pelatihan, silakan coba lagi");
            }
        } catch (error) {
            toast.error(error.message);
        }
        setIsLoading(false);
    };

    return (
        <Layout>
            <section className="container grid grid-cols-2 gap-10">
                <div className="py-12">
                    <h1 className="h4">Tambahkan Pengajuan Pelatihan</h1>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <div className="form-group flex flex-col">
                                <label className="p2 text-gray-700">Nama Pelatihan*</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    placeholder="Nama Pelatihan"
                                    {...register("name", { required: true })}
                                />
                                {errors.name?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Nama pelatihan wajib diisi
                                    </p>
                                )}
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Tujuan Pelatihan*</label>
                                <textarea
                                    className="input-field"
                                    {...register("purpose", {
                                        required: true,
                                    })}
                                    placeholder="Tujuan pelatihan"
                                />
                                {errors.purpose?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Tujuan pelatihan wajib diisi
                                    </p>
                                )}
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Penyelenggara*</label>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("organizer", { required: true })}
                                            type="radio"
                                            value="internal"
                                            name="organizer"
                                            id="internal"
                                        />

                                        <label htmlFor="internal">Internal</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("organizer", { required: true })}
                                            type="radio"
                                            value="external"
                                            name="organizer"
                                            id="eksternal"
                                        />
                                        <label htmlFor="eksternal">Eksternal</label>
                                    </div>
                                </div>
                                {errors.organizer?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Penyelenggara pelatihan wajib diisi
                                    </p>
                                )}
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Tempat Pelatihan*</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    placeholder="Tempat Pelatihan"
                                    {...register("location", { required: true })}
                                />
                                {errors.location?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Tempat pelatihan wajib diisi
                                    </p>
                                )}
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Tanggal Pelatihan*</label>
                                <input
                                    className="input-field"
                                    type="date"
                                    placeholder="Tempat Pelatihan"
                                    {...register("heldAt", { required: true })}
                                />
                                {errors.location?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Tanggal pelatihan wajib diisi
                                    </p>
                                )}
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Biaya</label>
                                <input
                                    className="input-field"
                                    type="number"
                                    placeholder="Biaya"
                                    {...register("cost", {})}
                                />
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Peserta</label>
                                <div className="flex flex-col">
                                    {participants.map((participant, index) => (
                                        <div
                                            key={`participant-${index}`}
                                            className="flex items-center gap-2 w-full"
                                        >
                                            <input
                                                value={participant}
                                                onChange={(e) =>
                                                    handleChangeParticipant(index, e.target.value)
                                                }
                                                className="input-field flex-grow"
                                                type="text"
                                                placeholder="Tambah Peserta"
                                            />
                                            {participants.length > 1 && (
                                                <button
                                                    className="text-neutral-3 hover:text-neutral-4"
                                                    onClick={(e) =>
                                                        handleRemoveParticipant(e, index)
                                                    }
                                                >
                                                    <BiTrash />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        className="btn btn-secondary w-fit mt-2"
                                        onClick={handleAddParticipant}
                                    >
                                        <BiPlus />
                                        Tambah
                                    </button>
                                </div>
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Soal Pelatihan</label>
                                <div className="flex flex-col">
                                    {questions.map((question, index) => (
                                        <div
                                            key={`question-${index}`}
                                            className="flex items-center gap-2 w-full"
                                        >
                                            <input
                                                value={question}
                                                onChange={(e) =>
                                                    handleChangeQuestion(index, e.target.value)
                                                }
                                                className="input-field flex-grow"
                                                type="text"
                                                placeholder="Tulis pertanyaan essai di sini"
                                            />
                                            {questions.length > 1 && (
                                                <button
                                                    className="text-neutral-3 hover:text-neutral-4"
                                                    onClick={(e) => handleRemoveQuestion(e, index)}
                                                >
                                                    <BiTrash />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        className="btn btn-secondary w-fit mt-2"
                                        onClick={handleAddQuestion}
                                    >
                                        <BiPlus />
                                        Tambah
                                    </button>
                                </div>
                            </div>

                            <button
                                className={clsx(
                                    "btn btn-primary",
                                    (isLoading ||
                                        questions.length === 0 ||
                                        questions[0] === "" ||
                                        participants.length === 0 ||
                                        participants[0] === "") &&
                                        "opacity-40 pointer-events-none"
                                )}
                                type="submit"
                            >
                                Ajukan Pelatihan
                            </button>
                        </form>
                    </div>
                </div>
                <div className="relative">
                    <img src="/images/bg-form.png" alt="" className="max-w-[45%] fixed right-0" />
                </div>
            </section>
        </Layout>
    );
};
