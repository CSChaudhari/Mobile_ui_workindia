import axios from 'axios';

const API_URL = 'https://mocky.io/v2/your-mock-api-endpoint';

export const fetchItems = () => axios.get(`${API_URL}/items`);
export const addItem = (item) => axios.post(`${API_URL}/items`, item);
