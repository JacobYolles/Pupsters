import axios from "axios";

export default {
    showDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getBreeds: function () {
        return axios.get("https://dog.ceo/api/breeds/list")
    },
    getImagesByBreed: function (breed) {
        return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    }
}