import { Header } from "../components/Header";

export const Login = () => {
    return (
        <>
            <Header />
            <main className="w-full min-h-screen bg-neutral-1 flex items-center justify-center">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col bg-white shadow-card rounded-xl px-5 py-8 min-w-[461px] gap-8">
                        <div className="logo">
                            <img src="/images/logo-full.svg" height={52} alt="logo" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="form-group flex flex-col">
                                <label className="label">
                                    <span className="p2 text-gray-500">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Email address"
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group flex flex-col">
                                <label className="label">
                                    <span className="p2 text-gray-500">Pasword</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="******"
                                    className="input-field"
                                />
                            </div>
                            <button className="btn btn-primary bg-primary-3">Login</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
