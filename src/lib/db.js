import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) return;

  try {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://joshuaayuk21:11Roge11@volunteering.axxa2.mongodb.net/TSAWebmasters?retryWrites=true&w=majority&appName=Volunteering';
    await mongoose.connect(uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    // isConnected = db.connections[0].readyState === 1;
    // console.log('Connected to MongoDB');
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to database');
  }
};
