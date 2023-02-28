import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    googleID: { type: String, required: true },
    gmail: { type: String, requird: true },
    displayName: { type: String, requird: true },
    image: { type: String, requird: true },
    firstName: { type: String, requird: true },
    lastName: { type: String, requird: true }
}, {
    timestamps: true
});

const user = mongoose.model('users', UserSchema);

export default user;