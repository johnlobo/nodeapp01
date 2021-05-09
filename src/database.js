import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://johnlobo:chinaski@cluster0.9ks6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);