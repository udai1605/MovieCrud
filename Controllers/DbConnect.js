const { connect } = require('mongoose');
require('dotenv').config();
const mongoPASS = process.env.MONGO_PASS;
const mongoUSER = process.env.MONGO_USER;
console.log(mongoPASS)
const dbConnect = async() => {
    try {
        const url = `mongodb+srv://${mongoUSER}:${mongoPASS}@cluster0.fluyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        const options = {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await connect(url, options);
        console.log('Database connected....')
    } catch (err) {
        console.log(err)
    }

}

module.exports = dbConnect;