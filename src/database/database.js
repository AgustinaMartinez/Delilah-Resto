import mongoose from 'mongoose';
import {envVariables} from '../config/config';

mongoose.connect(`${envVariables.host}+srv://${envVariables.user}:${envVariables.pass}@node-api-rest.fdfqz.mongodb.net/${envVariables.name}?retryWrites=${envVariables.retryWrites}&w=${envVariables.user}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(db => console.log("Database has been connected successfully."))
.catch(error => console.log(error));
