import mongooes from 'mongoose';


const connectDB = async () => {
    try {
        const conn = await mongooes.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`mongoDB connect ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error new :  ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;