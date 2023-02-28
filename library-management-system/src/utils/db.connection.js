import mongoose from 'mongoose';
import config from '../configs'

let database;

const connect = async () => {
    const mongoURL = config.DB_CONNECTION;

    if (database) return;

    mongoose.connect(mongoURL).then((connection) => {

        database = connection;
        console.log('database synced');

    }).catch((err) => {
        console.log(err);
    })
}

export { connect }