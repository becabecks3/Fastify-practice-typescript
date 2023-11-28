import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(`${process.env.mongo_connection}`)

mongoose.connection.on('connected', () => {
    console.log('Now connected to MongoDB Cloud Server!');
});
  
mongoose.connection.on('error', (err) => {
console.error('MongoDB connection error:', err);
});

export default mongoose;