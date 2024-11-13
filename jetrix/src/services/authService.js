import { refresh } from 'aos';
import axios from 'axios';
import URL from '../urlStatic'


// const URL_PRODUCTION = 'https://jetrix-api-production.up.railway.app/api'
// const TEST_URL =  'http://localhost:8000/api'
const API_URL = process.env.REACT_APP_API_URL


const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// register methods
export const registerUser = async (userData) =>{
    const response = await axios.post(`${API_URL}/register/`, userData);
    return response.data;
}

// login methods

export const login = async (username, password) =>{
    const response = await axios.post(`${API_URL}/token/`, {username, password});
    if (response.data.access){
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        axios.defaults.headers.common['Authorization']= `Bearer ${response.data.access}`;
    }
    return response.data;
};

export const refreshToken = async () =>{
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await axios.post(`${API_URL}/token/refresh/`, {refresh: refreshToken});
    localStorage.setItem('access_token', response.data.access);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete axios.defaults.headers.common['Authorization'];
}

axios.interceptors.response.use(
    response => response,
    async(error) => {
        const originalRequest = error.config;
        if(error.response?.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            try{
                await refreshToken();
                originalRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
                return axios(originalRequest);
            } catch(refreshError){
                logout();
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
)