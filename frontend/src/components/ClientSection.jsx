 import React from 'react';
import "../stylesheets/ClientSection.css";
import Client1 from "../Assets/Client1.svg";
import Client2 from "../Assets/Client2.svg";
import Client3 from "../Assets/Client3.svg";
import Client4 from "../Assets/Client4.svg";
import Client5 from "../Assets/Client5.svg";

const ClientSection = () => {
  const clients = [
    {
      id: 1,
      name: 'Rowman Smith',
      designation: 'CEO, Tech Corp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: {Client1},
    },
    {
      id: 2,
      name: 'Stipra Kayak',
      designation: 'Marketing Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: {Client2},
    },
    {
      id: 3,
      name: 'John Lupoes',
      designation: 'Product Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: {Client3},
    },
    {
      id: 4,
      name: 'Merry Freeman',
      designation: 'Branding Strategist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: {Client4},
    },
    {
      id: 5,
      name: 'Lucy',
      designation: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: {Client5},
    },
  ];

  return (
    <section className="happy-clients">
      <h2>Happy Clients</h2>
      <div className="clients-container">
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <img src={client.image} alt={client.name} className="client-image" />
            <div className="client-info">
              <h3>{client.name}</h3>
              <p className="client-designation">{client.designation}</p>
              <p className="client-description">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ClientSection;
