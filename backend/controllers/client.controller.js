import Client from "../models/client.model.js"

// Get all clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new client
export const addClient = async (req, res) => {
  const { name, description, image, designation } = req.body;
  try {
    const newClient = new Client({ name, description, image, designation });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a client
export const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, description, image, designation } = req.body;
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      id,
      { name, description, image, designation },
      { new: true }
    );
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a client
export const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await Client.findByIdAndDelete(id);
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
