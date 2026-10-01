import axios from 'axios';

export const addBookApi =  async (data) => {
    try {
        const res  = await axios.post('http://localhost:3000/api/books', data);
        return res.data;
    } catch (error) {
        throw new Error("Failed to fetch");
    }
}