import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Building, Map, TrendingUp, Briefcase, Target, Zap } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
function PoliticalSystemPage() {
  return <>
      <Helmet>
        <title>政治体制 - モンゴル投資情報</title>
        <meta name="description" content="モンゴルの政府構造、大統領、首相、議会、主要政党、行政区画などの政治体制に関する情報。" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Page Header */}
        <div className="bg-muted/30 pt-16 pb-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <p className="text-primary font-medium mb-2">投資情報</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground" style={{
              letterSpacing: '-0.02em'
            }}>
                政治体制
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
                
                {/* Key Facts */}
              
                {/* Political System Chart */}
              <motion.section initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.5
}}>
  <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
    モンゴルの政治体制図
  </h2>

  <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-md">
    <img
      src="/images/political-system-overview%20copy.png"
      alt="モンゴル国家の政治体制図：大統領、国民大呼ラル、政府の関係性"
      className="w-full h-auto"
    />

    <div className="p-4 bg-muted/50 border-t border-border">
      <p className="text-sm text-muted-foreground">
        三権分立を基盤とした民主的な政治システムが採用されています。
      </p>
    </div>

    <div className="flex justify-end pr-4 pb-4">
      <p className="text-xs text-muted-foreground italic">
        出所：モンゴル統計庁＆JETRO
      </p>
    </div>
  </div>
</motion.section>
            </div>
          </div>
        </div>

        {/* Investment and Business Development Section */}
     

        {/* Related Websites - Full Width Container */}
        <section className="bg-gov-section py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                  関連政府機関ウェブサイト
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  モンゴル政府の公式ウェブサイトをご紹介します。各機関の詳細情報や最新の政府ニュース等はこちらのリンクからご確認ください。
                </p>
              </div>

              <div className="gov-grid">
                <a href="https://president.mn/" target="_blank" rel="noopener noreferrer" className="gov-card group">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      大統領府
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">President.mn</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>

                <a href="https://www.parliament.mn/" target="_blank" rel="noopener noreferrer" className="gov-card group">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      国民大呼ラル（議会）
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">Parliament.mn</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>

                <a href="https://mongolia.gov.mn/" target="_blank" rel="noopener noreferrer" className="gov-card group">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      政府（内閣）
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">Mongolia.gov.mn</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default PoliticalSystemPage;