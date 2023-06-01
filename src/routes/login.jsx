import { useForm } from "react-hook-form";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const res = await apiClient.post("login", {
                username: data.username,
                password: data.password,
            });

            if (res.status === 200) {
                const userData = res.data.data;
                const role = res.data.data.role;

                localStorage.clear();
                localStorage.setItem("user-token", res.data.token.value);
                localStorage.setItem("role", role);
                localStorage.setItem("departement", userData.departement);

                toast.success("Login berhasil!");

                if (role === "admin") {
                    setTimeout(() => {
                        navigate("/");
                    }, 500);
                } else {
                    setTimeout(() => {
                        navigate("/riwayat-pengajuan");
                    }, 500);
                }
            } else {
                toast.error("Login gagal! silahkan coba lagi");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
        setIsLoading(false);
    };

    return (
        <>
            <main className="w-full min-h-screen bg-neutral-1 flex items-center justify-center">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col bg-white shadow-card rounded-xl px-5 py-8 min-w-[461px] gap-8">
                        <div className="logo">
                            <img src="/images/logo-full.svg" height={52} alt="logo" />
                        </div>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group flex flex-col">
                                <label className="label">
                                    <span className="p2 text-gray-500">Username</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="input-field"
                                    {...register("username", { required: true })}
                                />
                                {errors.username?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Username wajib diisi
                                    </p>
                                )}
                            </div>
                            <div className="form-group flex flex-col">
                                <label className="label">
                                    <span className="p2 text-gray-500">Pasword</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="******"
                                    className="input-field"
                                    {...register("password", { required: true })}
                                />
                                {errors.password?.type === "required" && (
                                    <p role="alert" className="text-red-400 text-xs mt-1">
                                        Password wajib diisi
                                    </p>
                                )}
                            </div>
                            <button
                                className={clsx(
                                    "btn btn-primary bg-primary-3",
                                    isLoading && "pointer-events-none opacity-50"
                                )}
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};
