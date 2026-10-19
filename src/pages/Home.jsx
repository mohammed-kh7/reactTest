import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import BlurText from '../components/ui/BlurText';
import LightRays from '../components/ui/LightRays';
import StarBorder from '../components/ui/StarBorder';
import ScrollReveal from '../components/ui/ScrollReveal';

const Home = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleButtonClick = (msg) => {
    setStatusMessage(msg);
  };

  return (
    <div className="main-container">
      <div className="page-header hero">
        <LightRays />
        <div className="hero-content">
          <h1>
            <BlurText text="React Store - Products Demo" />
          </h1>
          <p>Browse our product catalog with search and pagination.</p>
          {statusMessage && <div className="alert-box">{statusMessage}</div>}
        </div>
      </div>

      <section className="section">
        <ScrollReveal>
          <h2 className="section-title">Features</h2>
        </ScrollReveal>
        <div className="cards-grid">
          <ScrollReveal delay={0}>
            <Card
              title="Server-Side Pagination"
              description="Uses limit and skip parameters for efficient data loading."
            >
              <div className="card-actions">
                <StarBorder onClick={() => handleButtonClick('Navigate to /products')}>
                  View Products
                </StarBorder>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Card
              title="Debounced Search"
              description="Search with 400ms debounce to reduce API calls."
            >
              <div className="card-actions">
                <Button
                  text="Try Search"
                  variant="secondary"
                  onClick={() => handleButtonClick('Search coming soon!')}
                />
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card
              title="React Query Caching"
              description="All data is cached and refetched automatically."
            >
              <div className="card-actions">
                <Button
                  text="Learn More"
                  variant="primary"
                  onClick={() => handleButtonClick('React Query documentation')}
                />
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
