import { getAllProductsService, getProductByIdService } from "../services/productService.js";

export async function getAllProducts(req,res) {
 
     const category = req.query.categoria?.toLowerCase();     
    //   console.log("req.query completo:", req.query);
      console.log("category:", category);
    try{
     const products = await getAllProductsService(category);       
        if(products.length>0){
            res.status(200).send({
                message: "Productos encontrados: ",
                data: products
            }
    )} else {
        res.status(404).send({
            message: "No se encontraron productos"
        })
     }
    } catch(e){
         console.log(e.stack);
        res.status(500).send({
            
            message: "Error en la solicitud (controlador): " + e.message })
    }}

export const getProductsById = async (req,res) => {   //se verifica acá poraue no lo tengo q dejar llegar a la capa de servicios, een el caso de categoria es opcional pero el id es obligatorio => no lo dejo llegar a la capa de servicios para verificarlo, si no hay ID ya lo reboto acá
    try{    // usar siempre el try/ catch
  
    const id = req.params.id;
        if (!id) {
        return res.status(400).json({ message: "El ID es obligatorio" });
        }   
    const product= await getProductByIdService(id)
    if(product){
    res.status(200).json({ message: 'Producto encontrado: ' , 
                           data:  product })
} else {
    res.status(400).json({ message:"No se encontró el producto"} )
}} catch(e){
        res.status(500).send({
            message: "Error en la solicitud : " + e.message })
    }}

//     API Open BYMA Data (oficial, sin key)
// Es la más completa. BYMA expone endpoints públicos con 20 min de demora:

// CEDEARs: https://open.bymadata.com.ar/vanoms-be-core/rest/api/bymadata/free/cedears
// Bonos públicos: https://open.bymadata.com.ar/vanoms-be-core/rest/api/bymadata/free/public-bonds
// También hay endpoints para acciones, índices y datos históricos. 
// Librerías de terceros que consumen esta API:

// PyOBD (Python): pip install PyOBD — sin autenticación
// openbymadata (Go): github.com/carvalab/openbymadata
