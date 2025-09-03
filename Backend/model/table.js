import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  contact: { type: String },
  address: { type: String },
  profile: { type: String },
  userType: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})
export const userModel = mongoose.model('users', userSchema);


const propertySchema = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  area: { type: String },
  description: { type: String },
  location: { type: String },
  pic: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})
export const propertyModel = mongoose.model('properties', propertySchema);


const BuyerSchema = new mongoose.Schema({
  userId: { type: String },
  propertyId: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})
export const buyerModel = mongoose.model('buyers',BuyerSchema);

const ContactSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  contact: {type: String},
  subject: {type: String},
  message: {type: String},
  createdAt:{type:Date,default:Date.now()},
  updatedAt:{type:Date,default:Date.now()}, 
})

export const contactModel = mongoose.model('contacts', ContactSchema);


