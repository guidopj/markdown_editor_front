import axios from 'axios';
const baseURL = 'http://localhost:3003'

export const API = {
    async fetchMarkdownFiles() {
        const result = await axios(
            `${baseURL}/files`,
          );
        return result
    }, 

    async createMarkdownFile(file) {
        return axios.post(`${baseURL}/file`, file);
    },

    async editMarkdownFile(file){
        return axios.put(`${baseURL}/file/${file._id}`,file)
    },
    async deleteMarkdownFile(file){
        axios.delete(`${baseURL}/file/${file._id}`)
    },
}