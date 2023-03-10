const menuItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Productos",
        path: "/products"
    },

];

const products = [
    {
        id: "1",
        image: "https://assets.mayoral.com/images/t_auto_img/h_896/v20230120134310/23-00530-042-XL-4/pantalon-chino-slim-de-algodon-sostenible-para-chico_id_23-00530-042-M-4.jpg",
        name: "Pantalon Chino",
        price: 10.5,
        colors: ["red", "green", "blue"],
        discount: 5,
    }, 
    {
        id: "2",
        image: "https://assets.mayoral.com/images/t_auto_img/h_896/v20230120134349/23-06335-054-XL-4/chaleco-acolchado-ultraligero-para-chico_id_23-06335-054-M-4.jpg",
        name: "Chaleco acolchado",
        price: 20,
        colors: ["red", "green", "blue"],
    }, 
    {
        id: "3",
        image: "https://assets.mayoral.com/images/t_auto_img/h_896/v20221103071145/23-06451-046-XL-1/cortavientos-bomber-para-chico_id_23-06451-046-M-1.jpg",
        name: "Cortavientos",
        price: 59.5,
        colors: ["red", "green", "blue"],
        discount: 20,
    }, 
    {
        id: "4",
        image: "https://assets.mayoral.com/images/t_auto_img/h_896/v20221019133430/23-00890-081-XL-1/polo-de-manga-corta-en-algodon-sostenible-para-chico_id_23-00890-081-M-1.jpg",
        name: "Polo de manga",
        price: 14.9,
        colors: ["red", "green", "blue"],
        discount: 20,
    }, 
    {
        id: "5",
        image: "https://assets.mayoral.com/images/t_auto_img/h_896/v20221102093612/23-06440-027-XL-1/sudadera-estampada-con-algodon-para-chico_id_23-06440-027-M-1.jpg",
        name: "Sudadera estampada",
        price: 31.5,
        colors: ["red", "green", "blue"],
        discount: 10,
    }, 
    {
        id: "6",
        image: "https://assets.mayoral.com/images/t_auto_img/h_896/v20221202143608/23-00742-032-XL-4/pantalon-largo-deportivo-para-nino_id_23-00742-032-M-4.jpg",
        name: "Pantalon largo deportivo",
        price: 17.5,
        colors: ["red", "green", "blue"],
    }, 
];

module.exports = {
    menuItems,
    products,
}