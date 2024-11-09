import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobileNumber: String,
  city: String,
});

const Contact = mongoose.model('Contact', ContactSchema);
export default Contact;