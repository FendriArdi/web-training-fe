export const getApiConfig = () => {
    const token = localStorage.getItem("user-token");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    return config
}