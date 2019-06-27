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
        axios.put(`${baseURL}/file/${file.objectID}`, file)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error)
        })
    },
    async deleteMarkdownFile(file){
        axios.delete(`${baseURL}/file/${file._id}`)
    },
}