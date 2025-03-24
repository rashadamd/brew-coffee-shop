// src/components/StatsSection/StatsSection.js
import React, { useState, useEffect } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  // State for each statistic number to control the animation
  const [dailyVisitorsCount, setDailyVisitorsCount] = useState(0);
  const [recipeCreatedCount, setRecipeCreatedCount] = useState(0);
  const [eventsHostedCount, setEventsHostedCount] = useState(0);
  const [happyCustomerCount, setHappyCustomerCount] = useState(0);

  useEffect(() => {
    // Animation duration and increment step (adjust as needed)
    const duration = 2000; // milliseconds for the whole animation
    const incrementVisitors = 300 / (duration / 10); // Increment approx. every 10ms
    const incrementRecipes = 50 / (duration / 10);
    const incrementEvents = 120 / (duration / 10);
    const incrementCustomers = 500 / (duration / 10);

    let visitorsInterval, recipesInterval, eventsInterval, customersInterval;

    visitorsInterval = setInterval(() => {
      setDailyVisitorsCount((prevCount) => {
        const nextCount = prevCount + incrementVisitors;
        if (nextCount >= 300) {
          clearInterval(visitorsInterval);
          return 300; // Ensure it stops exactly at 300
        }
        return nextCount;
      });
    }, 10); // Interval in milliseconds for Visitors

    recipesInterval = setInterval(() => {
      setRecipeCreatedCount((prevCount) => {
        const nextCount = prevCount + incrementRecipes;
        if (nextCount >= 50) {
          clearInterval(recipesInterval);
          return 50;
        }
        return nextCount;
      });
    }, 10); // Interval in milliseconds for Recipes

    eventsInterval = setInterval(() => {
      setEventsHostedCount((prevCount) => {
        const nextCount = prevCount + incrementEvents;
        if (nextCount >= 120) {
          clearInterval(eventsInterval);
          return 120;
        }
        return nextCount;
      });
    }, 10); // Interval in milliseconds for Events

    customersInterval = setInterval(() => {
      setHappyCustomerCount((prevCount) => {
        const nextCount = prevCount + incrementCustomers;
        if (nextCount >= 500) {
          clearInterval(customersInterval);
          return 500;
        }
        return nextCount;
      });
    }, 10); // Interval in milliseconds for Customers

    // Cleanup intervals when component unmounts or effect re-runs
    return () => {
      clearInterval(visitorsInterval);
      clearInterval(recipesInterval);
      clearInterval(eventsInterval);
      clearInterval(customersInterval);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount


  return (
    <section className="stats-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                 {/* Replace with your actual icon component or SVG */}
                 <img src="/images/icon-daily-visitors.svg" alt="Daily Visitors" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(dailyVisitorsCount)}+</div>
            <div className="stat-text">Daily Visitors</div>
          </div>

          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                 {/* Replace with your actual icon component or SVG */}
                 <img src="/images/icon-recipe-created.svg" alt="Recipe Created" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(recipeCreatedCount)}</div>
            <div className="stat-text">Recipe Created</div>
          </div>

          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                 {/* Replace with your actual icon component or SVG */}
                 <img src="/images/icon-events-hosted.svg" alt="Events Hosted" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(eventsHostedCount)}+</div>
            <div className="stat-text">Events Hosted</div>
          </div>

          <div className="col-md-3 col-sm-6 stat-item">
            <div className="stat-icon">
              <i className="stat-icon-img">
                 {/* Replace with your actual icon component or SVG */}
                 <img src="/images/icon-happy-customer.svg" alt="Happy Customer" />
              </i>
            </div>
            <div className="stat-number">{Math.floor(happyCustomerCount)}+</div>
            <div className="stat-text">Happy Customer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;