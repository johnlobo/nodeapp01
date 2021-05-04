import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import userRoutes from './routes/user.routes'

const app = express();

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

app.use('/users',userRoutes);

export default app;