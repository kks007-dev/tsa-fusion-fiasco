import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { 
    type: [[mongoose.Schema.Types.Mixed]],  // A 2D array with mixed types
    default: [['item 1', 100, true], ['item 2', 200, false]]
  }
});

let User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
