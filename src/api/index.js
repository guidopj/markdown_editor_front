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
        axios.post('/file', file)
            .then((response) => {
                return file
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    async editMarkdownFile(file){
        axios.put('/file/' + file.objectID, file)
        .then(function (response) {
            return file
        })
        .catch(function (error) {
            console.log(error)
        })
    }
}