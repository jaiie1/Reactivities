import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../models/activity';

axios.defaults.baseURL = 'https://localhost:5001/api';

const responsBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const request = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responsBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responsBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responsBody),
    delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responsBody)
}

const Activities = {
    list: () => request.get('/activities'),
    details: (id: string) => request.get(`/activities/${id}`),
    create: (activity: IActivity) => request.post('/activities', activity),
    update: (Activity: IActivity) => request.put(`/activities${Activity.id}`, Activity),
    delete: (id: string) => request.delete(`/activities/${id}`)
}

export default {
    Activities
}