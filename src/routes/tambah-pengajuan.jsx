// import { useState } from "react";
import { Layout } from "../components/Layout";
import { useForm } from "react-hook-form";

export const TambahPengajuan = () => {
    // const [peserta, setPeserta] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <Layout>
            <section className="container grid grid-cols-2 gap-4">
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
                                    {...register("nama", { required: true })}
                                />
                                {errors.nama?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Nama pelatihan wajib diisi
                                    </p>
                                )}
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Tujuan Pelatihan*</label>
                                <textarea
                                    className="input-field"
                                    {...register("tujuan", {
                                        required: true,
                                    })}
                                />
                                {errors.tujuan?.type === "required" && (
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
                                            {...register("penyelenggara", { required: true })}
                                            type="radio"
                                            value="Internal"
                                            name="penyelenggara"
                                            id="internal"
                                        />
                                        <label htmlFor="internal">Internal</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("penyelenggara", { required: true })}
                                            type="radio"
                                            value="Eksternal"
                                            name="penyelenggara"
                                            id="eksternal"
                                        />
                                        <label htmlFor="eksternal">Eksternal</label>
                                    </div>
                                </div>
                                {errors.penyelenggara?.type === "required" && (
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
                                    {...register("tempat", { required: true })}
                                />
                                {errors.tempat?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Tempat pelatihan wajib diisi
                                    </p>
                                )}
                            </div>

                            <div className="form-group flex flex-col gap-1">
                                <label className="p2 text-gray-700">Biaya</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    placeholder="Biaya"
                                    {...register("biaya", {})}
                                />
                            </div>

                            <button className="btn btn-primary" type="submit">
                                Ajukan Pelatihan
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
