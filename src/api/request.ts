import axios, { type AxiosInstance, type AxiosResponse, AxiosError} from 'axios';

import { MessagePlugin } from 'tdesign-vue-next';
import type {ErrorResponse} from '@/api/types'

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout:6000,

});

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;                 //        'Successfully login'
    },
    async (error: AxiosError<ErrorResponse>) => {
        const responseData:  ErrorResponse | undefined = error.response?.data;
        responseData && await MessagePlugin.error(error.message);
        return Promise.reject(error);         //        'Request failed with status code 400'
    }
);


export default instance;