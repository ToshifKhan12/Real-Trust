import Subscriber from "../models/subscriber.model.js"

// Get all subscribed emails
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new subscriber
export const addSubscriber = async (req, res) => {
  const { email } = req.body;
  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email already subscribed" });
    }
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a subscriber
export const deleteSubscriber = async (req, res) => {
  const { id } = req.params;
  try {
    await Subscriber.findByIdAndDelete(id);
    res.json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
