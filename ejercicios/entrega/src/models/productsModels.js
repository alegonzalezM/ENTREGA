import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import {db} from '../../data/data.js';

export const obtenerProductos = async (nombreColleccion) => {  //reemplaza funcion getProducts de productsService
  try{
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(d =>({ id: d.id, ...d.data() }) );
  } catch (error){
    console.error(`Error obteniendo la colección ${nombreColleccion}: ` , error);
    throw error;
  }
}
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const rutaArchivo = path.join(__dirname, 'data/products.json');

// export function getProducts() {
//   try {
//     const data = fs.readFileSync(rutaArchivo, 'utf-8');
//     return JSON.parse(data);
//   } catch (err) {
//     console.error('Error al leer el archivo:', err);
//     return null;
//   }
// }   