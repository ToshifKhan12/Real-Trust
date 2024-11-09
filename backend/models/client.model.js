import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  designation: String,
});

const Client = mongoose.model('Client', ClientSchema);
export default Client;