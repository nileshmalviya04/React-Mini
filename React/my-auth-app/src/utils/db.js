import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/Users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};

export default connectDB;
