// ProductApi.js
const axiosClient = require("./axiosClient");

const getLatestProducts = () => axiosClient.get('/products?populate=*');
const getProductById=(id)=>axiosClient.get(`/products/${id}?populate=*`)
const getProductByCategory=(category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
module.exports = {
     getLatestProducts,
    getProductById,
    getProductByCategory
};
