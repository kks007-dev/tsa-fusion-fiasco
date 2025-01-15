import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { 
    type: Array,  // A 2D array with mixed types
    // default: [{name: 'Saigon Suya Tacos', price: 16.5, quantity: 2}, {name: 'Lagos Curry Bomb', price: 18.99, quantity: 1}]
  }
});

let User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
