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
        title: 'Golden Crisp & Savory Dips',
        price: '$14.50',
        description: 'Golden chips paired with velvety dips, crafted to satisfy every craving.',
      },
      {
        image: '/images/pricing-menu-2.jpeg',
        title: 'Herb-Grilled Octopus',
        price: '$20.00',
        description: 'Succulent octopus, grilled to perfection with a zesty lemon-herb glaze.',
      },
      {
        image: '/images/pricing-menu-3.jpeg',
        title: 'Flame-Kissed Veal Steak',
        price: '$24.00',
        description: 'Flame-grilled veal with bold seasoning, complemented by a medley of seasonal vegetables.',
      },
      {
        image: '/images/pricing-menu-4.jpeg',
        title: 'Rich Mexican Comfort Soup',
        price: '$13.50',
        description: 'A robust blend of spicy flavors, rich textures, and authentic Mexican warmth.',
      },
    ],
    seafood: [
      {
        image: '/images/pricing-menu-2.jpeg',
        title: 'Herb-Grilled Octopus',
        price: '$20.00',
        description: 'Succulent octopus, grilled to perfection with a zesty lemon-herb glaze.',
      },
    ],
    desserts: [
      {
        image: '/images/pricing-menu-1.jpeg',
        title: 'Chocolate Bliss Lava Cake',
        price: '$12.00',
        description: 'An indulgent chocolate cake, filled with molten decadence and served warm.',
      },
    ],
    drinks: [
      {
        image: '/images/pricing-menu-4.jpeg',
        title: 'Mint-Infused Mojito',
        price: '$9.50',
        description: 'Cool lime, crisp mint, and smooth rum mingle for the ultimate refreshment.',
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