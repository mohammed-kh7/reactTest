import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleButtonClick = (msg) => {
    setStatusMessage(msg);
  };

  // Table 1 data
  const studentColumns = ['Name', 'Age', 'City', 'Track'];
  const studentData = [
    { Name: 'Mohammed Hafez', Age: 22, City: 'Gaza', Track: 'Front-End & AI Automation' },
    { Name: 'Ahmed Samir', Age: 23, City: 'Cairo', Track: 'React Developer' },
    { Name: 'Lina Tariq', Age: 21, City: 'Amman', Track: 'UI/UX Design' },
    { Name: 'Omar Khaled', Age: 24, City: 'Riyadh', Track: 'Quality Assurance' },
  ];

  // Table 2 data
  const productColumns = ['Product', 'Category', 'Price'];
  const productData = [
    { Product: 'React Dashboard Template', Category: 'Web UI', Price: '$35' },
    { Product: 'n8n Automation Workflow', Category: 'AI Automation', Price: '$50' },
    { Product: 'Cloud Box Storage', Category: 'Hardware', Price: '$120' },
  ];

  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="main-container">
        <div className="page-header">
          <h1>Assignment 2: Reusable Components in React</h1>
          <p>Built with clean React components and reusable props.</p>
          {statusMessage && <div className="alert-box">{statusMessage}</div>}
        </div>

        {/* 1. Button Component */}
        <section className="section">
          <h2 className="section-title">1. Button Component</h2>
          <div className="button-group">
            <Button
              text="Primary Button"
              variant="primary"
              onClick={() => handleButtonClick('You clicked the Primary Button!')}
            />
            <Button
              text="Secondary Button"
              variant="secondary"
              onClick={() => handleButtonClick('You clicked the Secondary Button!')}
            />
            <Button
              text="Danger Button"
              variant="danger"
              onClick={() => handleButtonClick('Warning: Danger Button clicked!')}
            />
            <Button
              text="Disabled Button"
              variant="primary"
              disabled={true}
              onClick={() => handleButtonClick('This should not work')}
            />
          </div>
        </section>

        {/* 2. Card Component */}
        <section className="section">
          <h2 className="section-title">2. Card Component (with children & optional image)</h2>
          <div className="cards-grid">
            <Card
              title="Front-End Development"
              description="Building responsive, clean, and modern user interfaces using React, JavaScript, HTML, and CSS."
              image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
            >
              <div className="card-actions">
                <span className="badge">React.js</span>
                <Button
                  text="View Details"
                  variant="primary"
                  onClick={() => handleButtonClick('Viewing Front-End Details')}
                />
              </div>
            </Card>

            <Card
              title="AI Workflow Automation"
              description="Automating tasks and connecting services between Google Drive and Google Sheets seamlessly."
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
            >
              <div className="card-actions">
                <Button
                  text="Run Workflow"
                  variant="secondary"
                  onClick={() => handleButtonClick('Workflow Started!')}
                />
                <Button
                  text="Stop"
                  variant="danger"
                  onClick={() => handleButtonClick('Workflow Stopped!')}
                />
              </div>
            </Card>

            <Card
              title="Card Without Image"
              description="This card tests the optional image prop while passing custom nested HTML elements inside the children prop."
            >
              <div className="custom-children-box">
                <p>Status: <strong>Ready for Deployment</strong></p>
                <Button
                  text="Deploy Now"
                  variant="primary"
                  onClick={() => handleButtonClick('Deploying Application...')}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* 3. Table Component */}
        <section className="section">
          <h2 className="section-title">3. Table Component</h2>

          <h3 className="sub-title">Students / Developers Table (Striped Rows = true)</h3>
          <Table columns={studentColumns} data={studentData} striped={true} />

          <h3 className="sub-title" style={{ marginTop: '28px' }}>
            Products List (Striped Rows = false)
          </h3>
          <Table columns={productColumns} data={productData} striped={false} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
