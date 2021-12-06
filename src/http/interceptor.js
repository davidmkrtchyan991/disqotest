import axios from 'axios';

export default function setup() {
    const token = "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";
    axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `token ${token}`;
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}