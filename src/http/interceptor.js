import axios from 'axios';
import CryptoJS from 'crypto-js';

export default function setup() {
    const cipher = 'Z2hwX2pKQ2tRNDV3UE1BWnJ4RTFYQzhQQk1KcmVqOVh5bDNwTTBnZQ==';
    const token = CryptoJS.enc.Base64.parse(cipher).toString(CryptoJS.enc.Utf8);
    axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `token ${token}`;
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}