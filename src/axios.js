import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/online-store-9aa1a/us-central1/api' //this is the API (cloud function ) URL
})

export default instance;