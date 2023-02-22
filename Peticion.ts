import { Product } from "./modelos/Products";
import axios from "axios";

//Peticion:
(async ()=>{
    async function getProducts() {
        const {data}=
        await axios.get
        ('https://api.escuelajs.co/api/v1/products');
        return data;
    }
    const products=await getProducts();
    console.log(products);
})();