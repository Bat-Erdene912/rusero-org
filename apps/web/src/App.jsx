import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import TourismPage from './pages/TourismPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import InvestmentPage from './pages/InvestmentPage.jsx';
import PoliticalSystemPage from './pages/PoliticalSystemPage.jsx';
import EconomyPage from './pages/EconomyPage.jsx';
import AboutEntryPage from './pages/AboutEntryPage.jsx';
import ConsultationCooperationPage from './pages/ConsultationCooperationPage.jsx';
import JapanDirectInvestmentPage from './pages/JapanDirectInvestmentPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Investment Routes */}
        <Route path="/investment" element={<InvestmentPage />} />
        <Route path="/investment/political-system" element={<PoliticalSystemPage />} />
        <Route path="/investment/economy" element={<EconomyPage />} />
        <Route path="/investment/about-entry" element={<AboutEntryPage />} />
        <Route path="/investment/consultation-cooperation" element={<ConsultationCooperationPage />} />
        <Route path="/investment/japan-direct-investment" element={<JapanDirectInvestmentPage />} />
        
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
              <p className="text-muted-foreground mb-6">ページが見つかりません</p>
              <a href="/" className="text-primary hover:underline">ホームに戻る</a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;