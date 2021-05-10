import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

import {createRoles} from './libs/initialSetup'

const app = express();
createRoles();

app.set('pkg', pkg);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json(
        {
            'Name': pkg.name,
            'Author': pkg.author
        }
    )
}
)

app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);

export default app;