import axios from 'axios';
export default class HttpClient {
    
    httpClient = null;

    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });
    }
}
