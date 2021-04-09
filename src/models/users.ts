import { Schema, Document, Types, model } from 'mongoose';

export interface UserInterface extends Document {
    rut: String,
    name: String,
    lastname: String,
    email: String,
    phone: String,
    password: String,
    rol: String,
    is_available?: Boolean,
    avatar: String,
    genre?: String,
    birthdate?: Date,
    cargo: String,
    specialties?: Array<Types.ObjectId>
}

const UserSchema: Schema = new Schema({
    rut: { type: String, require: true },
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String },
    password: { type: String, require: true },
    rol: { type: String, require: true },
    is_available: { type: Boolean, default: true },
    avatar: { type: String, require: true },
    genre: { type: String },
    birthdate: { type: Date },
    cargo: { type: String, require: true },
    specialties: [Types.ObjectId]
});

interface UserInterfaceDoc extends UserInterface, Document {}

export default model<UserInterfaceDoc>("User", UserSchema);