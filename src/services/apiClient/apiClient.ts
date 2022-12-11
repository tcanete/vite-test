import axios from "axios";

const apiClient = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })

export const apiGet = async <Params, Result>(url: string, params?: Params) => {
    const { data } = await apiClient.get<Result>(url, { params });
    return data;
}
