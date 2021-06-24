import axios from "axios";

const instance = axios.create ({
    baseURL: 'http://localhost:5001/clone-fb43f/us-central1/api)'

});

export default instance;