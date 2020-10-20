import express, {json} from 'express';
import morgan from 'morgan';
import {createRoles} from './controllers/roles.controller';
import neighborhoodRoutes from './routes/neighborhood.route';
import authRoutes from './routes/auth.route';
import userRoutes from './routes/user.route';
import productRoutes from './routes/product.route';
import orderRoutes from './routes/order.route';
import statusRoutes from './routes/status.route';

// Inizialization
const app = express();
createRoles();

// Middlewares
app.use(morgan('dev')); // It shows in console the requests made from Insomnia
app.use(json()); // It understands json files

//Settings
app.set('port', 3000);

//Routes
app.use('/neighborhoods', neighborhoodRoutes); /*http://localhost:3000/neighborhoods*/
app.use('/auth', authRoutes); /*http://localhost:3000/auth*/
app.use('/users', userRoutes); /*http://localhost:3000/users*/
app.use('/products', productRoutes); /*http://localhost:3000/products*/
app.use('/orders', orderRoutes); /*http://localhost:3000/orders*/
app.use('/status', statusRoutes); /*http://localhost:3000/status*/

app.use('/', (req, res) => {
    res.json('Welcome to the Delilah Resto API REST!');
}); /*http://localhost:3000/home*/

export default app;
