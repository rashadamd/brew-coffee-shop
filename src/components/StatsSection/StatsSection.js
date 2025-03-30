import React, { useState, useEffect } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const [dailyCoffeesBrewed, setDailyCoffeesBrewed] = useState(0);
  const [uniqueRecipesCrafted, setUniqueRecipesCrafted] = useState(0);
  const [successfulCollaborations, setSuccessfulCollaborations] = useState(0);
  const [satisfiedGuests, setSatisfiedGuests] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const incrementCoffees = 500 / (duration / 10);
    const incrementRecipes = 75 / (duration / 10);
    const incrementCollaborations = 200 / (duration / 10);
    const incrementGuests = 1000 / (duration / 10);

    let coffeesInterval, recipesInterval, collaborationsInterval, guestsInterval;

    coffeesInterval = setInterval(() => {
      setDailyCoffeesBrewed((prevCount) => {
        const nextCount = prevCount + incrementCoffees;
        if (nextCount >= 500) {
          clearInterval(coffeesInterval);
          return 500;
        }
        return nextCount;
      });
    }, 10);

    recipesInterval = setInterval(() => {
      setUniqueRecipesCrafted((prevCount) => {
        const nextCount = prevCount + incrementRecipes;
        if (nextCount >= 75) {
          clearInterval(recipesInterval);
          return 75;
        }
        return nextCount;
      });
    }, 10);

    collaborationsInterval = setInterval(() => {
      setSuccessfulCollaborations((prevCount) => {
        const nextCount = prevCount + incrementCollaborations;
        if (nextCount >= 200) {
          clearInterval(collaborationsInterval);
          return 200;
        }
        return nextCount;
      });
    }, 10);

    guestsInterval = setInterval(() => {
      setSatisfiedGuests((prevCount) => {
        const nextCount = prevCount + incrementGuests;
        if (nextCount >= 1000) {
          clearInterval(guestsInterval);
          return 1000;
        }
        return nextCount;
      });
    }, 10);

    return () => {
      clearInterval(coffeesInterval);
      clearInterval(recipesInterval);
      clearInterval(collaborationsInterval);
      clearInterval(guestsInterval);
    };
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                <img src="/images/icon-daily-visitors.svg" alt="Daily Coffees Brewed" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(dailyCoffeesBrewed)}+</div>
            <div className="stat-text">Daily Coffees Brewed</div>
          </div>

          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                <img src="/images/icon-recipe-created.svg" alt="Unique Recipes Crafted" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(uniqueRecipesCrafted)}</div>
            <div className="stat-text">Unique Recipes Crafted</div>
          </div>

          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                <img src="/images/icon-events-hosted.svg" alt="Successful Collaborations" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(successfulCollaborations)}+</div>
            <div className="stat-text">Collaborations</div>
          </div>

          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                <img src="/images/icon-happy-customer.svg" alt="Satisfied Guests" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(satisfiedGuests)}+</div>
            <div className="stat-text">Satisfied Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
