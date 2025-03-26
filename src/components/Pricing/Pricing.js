import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Pricing.css';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('all'); 

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  const menuItems = {
    all: [
      {
        image: '/images/pricing-menu-1.jpeg',
        title: 'Chips & Dip',
        price: '$16.00',
        description: 'A perfect pairing of crispy, freshly made chips and rich, flavorful dips.',
      },
      {
        image: '/images/pricing-menu-2.jpeg',
        title: 'Tender Octopus',
        price: '$18.00',
        description: 'Grilled to perfection, served with a tangy citrus glaze.',
      },
      {
        image: '/images/pricing-menu-3.jpeg',
        title: 'Grilled Veal Filet',
        price: '$22.00',
        description: 'Juicy and tender, served with a side of roasted vegetables.',
      },
      {
        image: '/images/pricing-menu-4.jpeg',
        title: 'Mexican Soup',
        price: '$12.00',
        description: 'A spicy and hearty soup with a blend of traditional Mexican flavors.',
      },
    ],
    seafood: [
      {
        image: '/images/pricing-menu-2.jpeg',
        title: 'Tender Octopus',
        price: '$18.00',
        description: 'Grilled to perfection, served with a tangy citrus glaze.',
      },
    ],
    desserts: [
      {
        image: '/images/pricing-menu-1.jpeg',
        title: 'Chocolate Lava Cake',
        price: '$10.00',
        description: 'Warm, gooey chocolate cake with a molten center.',
      },
    ],
    drinks: [
      {
        image: '/images/pricing-menu-4.jpeg',
        title: 'Classic Mojito',
        price: '$8.00',
        description: 'A refreshing mix of mint, lime, and rum.',
      },
    ],
  };

  return (
    <section
      className={`pricing ${sectionInView ? 'fade-in' : 'fade-out'}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-title">
          <h3>Our Pricing</h3>
          <h2>Savor every moment, without the premium price</h2>
        </div>
        <div className="pricing-tabs">
          <button
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Menu
          </button>
          <button
            className={`tab ${activeTab === 'seafood' ? 'active' : ''}`}
            onClick={() => setActiveTab('seafood')}
          >
            Seafood
          </button>
          <button
            className={`tab ${activeTab === 'desserts' ? 'active' : ''}`}
            onClick={() => setActiveTab('desserts')}
          >
            Desserts
          </button>
          <button
            className={`tab ${activeTab === 'drinks' ? 'active' : ''}`}
            onClick={() => setActiveTab('drinks')}
          >
            Drinks & Wine
          </button>
        </div>
        <div className="pricing-menu">
          {menuItems[activeTab].map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="menu-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;