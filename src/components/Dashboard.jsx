import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const PageError = () => (
  <div data-testid="view-dashboard">
    <Header />
    <main role="main" className="Dashboard">
      <p>View Dashboard</p>
    </main>
    <Footer />
  </div>
);


export default PageError;
