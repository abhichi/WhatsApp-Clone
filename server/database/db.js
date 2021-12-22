import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@chatapp-shard-00-00.lxgwu.mongodb.net:27017,chatapp-shard-00-01.lxgwu.mongodb.net:27017,chatapp-shard-00-02.lxgwu.mongodb.net:27017/WHATSAPP-CLONE?ssl=true&replicaSet=atlas-nloe2u-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log(' this is the error ', error);
    }
}

export default Connection;