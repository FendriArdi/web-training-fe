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

export const getTrainingAnswers = async (trainingId, answerId) => {
    const config = getApiConfig();

    try {
        const res = await apiClient.get(`training/${trainingId}/${answerId}`, config);
        return res.data.data;
    } catch (error) {
        console.log(error);
        return null
    }
};

export const getTrainingDetail = async (id) => {
    const config = getApiConfig();

    try {
        const res = await apiClient.get("training/" + id, config);
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
