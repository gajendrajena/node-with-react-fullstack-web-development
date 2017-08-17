const mongoose = require('mongoose');
// const Schema = mongoosevgc.Schema;
const {Schema} = mongoose; // destructuring of line#2

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);

