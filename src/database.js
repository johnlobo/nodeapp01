import mongoose from 'mongoose'

mongoose.connect('mongodb://Localhost/companyDB')
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))