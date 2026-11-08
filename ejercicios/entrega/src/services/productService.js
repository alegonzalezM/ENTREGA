
// import products from '../../data/products.json' with {type:"json"};
import { obtenerProductos } from '../models/productsModels.js';

export const getAllProductsService = async (categoria) => {
        const products  = await obtenerProductos();
        console.log(products);
            if(categoria){
        const productsQuery= await products.filter(product=> product.categoria == categoria);
        return productsQuery
    } else {
        return products
    }}

export const getProductByIdService =  async (id) => {  //id es el de la bd de firebase
    const products= await obtenerProductos();
    const product= products.find(products => product.id === Number(id));
    return product;
}