import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ConsultationCooperationPage() {
  return (
    <>
      <Helmet>
        <title>進出に関する各種相談＆協力 - モンゴル投資情報</title>
        <meta name="description" content="日本企業のモンゴルでの事業展開事例。IT、医療、ファッション、教育、再生可能エネルギーなど多様な産業でのビジネス協力について。" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Page Header */}
        <div className="bg-muted/30 pt-16 pb-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-medium mb-2">投資情報</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
                進出に関する各種相談＆協力
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content removed */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ConsultationCooperationPage;