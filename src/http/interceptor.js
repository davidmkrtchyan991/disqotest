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