import express from 'express'
import cors from 'cors'
import rutas from './src/routes/productRoutes.js'

const app = express();
const PORT = 3007;

app.use(cors({
  origin: '*',  //autoriza todo
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use((req,res,next) => {
  console.log(`${req.url} ${req.method}`);
  next();
});

app.use('/api', rutas);



app.use((req,res, next) => {
       res.status(404).json({
        error: "404. Ruta no encontrada",
        message: `El recurso ${req.url} no existe`
       })
         })

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}` )
})

// app.get('/users/:id', (req, res) => {
//   const id= req.params.id;
//   const user = users.find( user => user.id == id);
//   if (users.length>0) {
//      res.json({
//       message: "Usuario encontrado con éxito", data: user });
//   } else {
//     res.status(404).json( {message: "Usuario no encontrado" })
//   }
// });

// app.use("/users", (req, res) => {
//     const name = req.query.name;
//     const category = req.query.category;
//     if(name && category){
//         const users_query = users.filter(user => user.name == name && user.category == category);
//             if(users_query.length > 0){
//                 res.json({
//                     message: "usuarios encontrados con exito",
//                     data: users_query
//                 })
//             }else{
//                 res.status(404).json({
//                     message: "usuarios no encontrados"
//                 })
//             }
//     }else if(name){
//             const users_query = users.filter(user => user.name == name);
//             if(users_query.length > 0){
//                 res.json({
//                     message: "usuario encontrado con exito",
//                     data: users_query
//                 })
//             }else{
//                 res.status(404).json({
//                     message: "usuarios no encontrados"
//                 })
//             }
//     }else if(category){
//             const users_query = users.filter(user => user.category == category);
//             if(users_query.length > 0){
//                 res.json({
//                     message: "usuario encontrado con exito",
//                     data: users_query
//                 })
//             }else{
//                 res.status(404).json({
//                     message: "usuarios no encontrados"
//                 })
//             }
//     }else{
//         res.json({
//             message: "usuarios enviados",
//             data: users
//         })
//     }
// })




        //GET /api/products/?categoria=indumentaria   ruta correcta
