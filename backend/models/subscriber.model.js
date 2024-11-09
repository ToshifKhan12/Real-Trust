import mongoose from "mongoose"

const SubscriberSchema = new mongoose.Schema({
  email: String,
});

const Subscriber = mongoose.model('Subscriber', SubscriberSchema);
export default Subscriber;