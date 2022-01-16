import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/welcome/Welcome';
import Footer from './components/Footer';
import Services from './components/services/Services';
import Transactions from './components/Transactions';

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
