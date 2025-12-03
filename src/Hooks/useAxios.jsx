import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL:'https://gamehub-backend-three.vercel.app'
})

const useAxios = () => {
    return axiosSecure;
};

export default useAxios;