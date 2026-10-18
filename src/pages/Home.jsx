import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Footer from '../components/layout/Footer';

const Home = () => {
  const [statusMessage, setStatusMessage] = useState('');
  console.log('Home component rendering...');

  const handleButtonClick = (msg) => {
    setStatusMessage(msg);
  };

  return (
    <div className="app-wrapper">
      <main className="main-container">
        <div className="page-header">
          <h1>React Store - Products Demo</h1>
          <p>Browse our product catalog with search and pagination.</p>
          {statusMessage && <div className="alert-box">{statusMessage}</div>}
        </div>

        <section className="section">
          <h2 className="section-title">Features</h2>
          <div className="cards-grid">
            <Card
              title="Server-Side Pagination"
              description="Uses limit and skip parameters for efficient data loading."
            >
              <div className="card-actions">
                <Button
                  text="View Products"
                  variant="primary"
                  onClick={() => handleButtonClick('Navigate to /products')}
                />
              </div>
            </Card>

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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
