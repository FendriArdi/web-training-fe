import apiClient from "./apiClient";
import { getApiConfig } from "./getApiConfig";

export const getRequestedTrainingData = async () => {
    const config = getApiConfig();

    try {
        const res = await apiClient.get("training?status=requested", config);
        return res.data.data;
    } catch (error) {
        console.log(error);
        return null
    }
};

export const getAllTrainingData = async () => {
    const config = getApiConfig();

    try {
        const res = await apiClient.get("training", config);
        return res.data.data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getAllTrainingSchedule = async () => {
    const config = getApiConfig();

    try {
        const res = await apiClient.get("training/schedule", config);
        const data = res.data.data

        const mappedData = data.map((item, idx) => ({
            id: idx,
            title: item.name,
            allDay: true,
            start: new Date(item.heldAt),
            end: new Date(item.heldAt)
        }))

        return [res.data.data, mappedData];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const submitTrainingData = async (data, participants, questions) => {
    try {
        const config = getApiConfig();
        const res = await apiClient.post(
            "training",
            {
                ...data,
                participants,
                questions,
                cost: parseInt(data.cost),
            },
            config
        );

        if (res.status === 201) {
            return "success";
        } else {
            return "error";
        }
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const updateTrainingData = async (id, status) => {
    try {
        const config = getApiConfig();
        const res = await apiClient.put(
            "training/" + id,
            {
                status
            },
            config
        );

        if (res.status === 200) {
            return "success";
        } else {
            return "error";
        }
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};