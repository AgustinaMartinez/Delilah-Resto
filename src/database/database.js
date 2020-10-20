import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:admin@node-api-rest.fdfqz.mongodb.net/delilahresto?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(db => console.log("Database has been connected successfully."))
.catch(error => console.log(error));
