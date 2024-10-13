import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ThemeCustomizer from './pages/ThemeCustomizer';
import InventoryManagement from './pages/InventoryManagement';
import OrderProcessing from './pages/OrderProcessing';
import Analytics from './pages/Analytics';
import ProductManagement from './pages/ProductManagement';
import MarketingTools from './pages/MarketingTools';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/theme-customizer" element={<ThemeCustomizer />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/orders" element={<OrderProcessing />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/marketing" element={<MarketingTools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;