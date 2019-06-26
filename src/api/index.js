import axios from 'axios';
const baseURL = 'http://localhost:3003'

export const API = {
    async fetchMarkdownFiles() {
        const result = await axios(
            `${baseURL}/files`,
          );
        return result
    }
}