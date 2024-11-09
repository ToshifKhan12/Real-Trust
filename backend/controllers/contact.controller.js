import Contact from "../models/contact.model.js"

// Get all contact form submissions
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit a new contact form entry
export const submitContact = async (req, res) => {
  const { fullName, email, mobileNumber, city } = req.body;
  try {
    const newContact = new Contact({ fullName, email, mobileNumber, city });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a contact form entry
export const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.json({ message: "Contact entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
