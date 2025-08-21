import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Navbar />
        <main className="flex-grow">
          <HomePage />
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;