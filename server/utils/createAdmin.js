import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user.js'; // Make sure the path is correct

dotenv.config();

// Connect to your MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection failed:', error));

async function createAdminUser() {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@gmail.com' });
    if (!existingAdmin) {
      // Use bcrypt's genSalt() and hash() as in userSchema.pre('save')
      const admin = new User({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'admin123', // Password will be hashed in the schema pre-save hook
        isAdmin: true,
      });
      await admin.save();
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close(); // Close the connection after the operation
  }
}

// Run the function to create the admin user
createAdminUser();
