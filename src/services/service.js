import axios from "axios"
const url = 'https://api.unsplash.com/photos/'
const CLIENT_ID = "hRxwNbdc7eSQzqcpNKx_32g8UXUrJqTp7EYLoIgH1EQ";

export const getGalleryImages = (page=1) => {

    return axios.get(`${url}?page=${page}`, {
        headers: {
          Authorization: 'Client-ID '+ CLIENT_ID
        }
      })
}