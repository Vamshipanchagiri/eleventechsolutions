import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import Layout from '@/components/Layout';

function App() {
  return (
    <Layout>
      <HomePage />
      <Toaster />
    </Layout>
  );
}

export default App;