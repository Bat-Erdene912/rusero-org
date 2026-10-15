import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, TrendingUp, Building2, ArrowRight, Globe } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function InvestmentPage() {
  const investmentLinks = [
    {
      title: '政治体制',
      description: 'モンゴルの政府機構、大統領、首相、議会などの基本情報について解説します。',
      icon: Landmark,
      path: '/investment/political-system',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: '経済',
      description: '主要経済指標、GDP成長率、産業構造など、マクロ経済の概況をご確認いただけます。',
      icon: TrendingUp,
      path: '/investment/economy',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    },
    {
      title: '進出について',
      description: '投資の各種形態、税制、設立に関する手続き、政府機関のリンク集を掲載しています。',
      icon: Building2,
      path: '/investment/about-entry',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10'
    },
    {
      title: '日本からの直接投資',
      description: '外国直接投資の動向、日本からの投資概況、および進出に関する各種相談や協力の事例を紹介します。',
      icon: Globe,
      path: '/investment/japan-direct-investment',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Helmet>
        <title>モンゴルへの投資 - Investment in Mongolia</title>
        <meta name="description" content="モンゴルの政治体制、経済状況、進出支援、日本からの投資動向など、ビジネスと投資に関する総合情報を提供します。" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-muted/30">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                モンゴルへの投資と<br />ビジネス展開
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                豊かな資源、成長する市場、そして日本との強力なパートナーシップ。
                モンゴルでのビジネス成功に向けた包括的な情報とサポートをご提供します。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Navigation Grid */}
        <section className="py-20 -mt-16 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {investmentLinks.map((link) => {
                return (
                  <motion.div
                    key={link.title}
                    variants={itemVariants}
                    className="col-span-1 group"
                  >
                    <Link 
                      to={link.path}
                      className="block h-full bg-card rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50 relative overflow-hidden"
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 transition-transform duration-500 group-hover:scale-110 ${link.bgColor}`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${link.bgColor}`}>
                          <link.icon className={`w-7 h-7 ${link.color}`} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-card-foreground mb-3">{link.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                          {link.description}
                        </p>
                        
                        <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                          詳細を見る
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default InvestmentPage;