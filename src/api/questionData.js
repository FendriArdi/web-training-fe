import apiClient from "./apiClient";
import { getApiConfig } from "./getApiConfig";

export const getTrainingQuestions = async (id) => {
    const config = getApiConfig();

    try {
        const res = await apiClient.get("questions/" + id, config);
        return res.data.data;
    } catch (error) {
        console.log(error);
        return null
    }
};

export const postTrainingAnswer = async (id, data, answers) => {
    const config = getApiConfig();

    try {
        const res = await apiClient.post("questions/" + id,
            {
                ...data,
                results: answers,
            },
            config);
        return res.data.data;
    } catch (error) {
        console.log(error);
        return null
    }
};
