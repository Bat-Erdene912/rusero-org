import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';

const exportData = [
  { year: '2013', amount: 4269 },
  { year: '2014', amount: 4267 },
  { year: '2015', amount: 3957 },
  { year: '2016', amount: 4181 },
  { year: '2017', amount: 5289 },
  { year: '2018', amount: 6289 },
  { year: '2019', amount: 5897 },
  { year: '2020', amount: 5234 },
  { year: '2021', amount: 7456 },
  { year: '2022', amount: 11234 },
  { year: '2023', amount: 13456 },
  { year: '2024', amount: 15710 },
];

const chartConfig = {
  amount: {
    label: "輸出額 (百万USD)",
    color: "hsl(221, 83%, 53%)", // A nice blue color
  },
};

function InvestmentInformationPage() {
  return (
    <>
      <Helmet>
        <title>投資関連情報 - モンゴル投資情報</title>
        <meta name="description" content="モンゴルへの外国直接投資（FDI）の動向、国別投資比率、主要貿易相手国と輸出入品目に関する詳細データ。" />
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
                投資関連情報
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              
              {/* FDI Section */}
              <section>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">外国直接投資 (FDI) の動向</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                    モンゴルへの直接投資は、主に鉱業セクターを中心に行われています。オランダ、中国、シンガポールからの投資額が上位を占めています。
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5 }} 
                    className="bg-card rounded-2xl p-4 border border-border shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-center mb-4">主要国・地域別直接投資額 (2011-2025年)</h3>
                    <img src="https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/4edade78484b7c9bf38759cb508afad5.png" alt="国別外国直接投資の棒グラフ：オランダ、中国、シンガポール等が上位" className="w-full h-auto rounded-lg" />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5 }} 
                    className="space-y-8"
                  >
                    <div className="bg-card rounded-2xl p-4 border border-border shadow-lg">
                      <h3 className="text-lg font-semibold text-center mb-4">国別直接投資企業数比率 (2023年3月末)</h3>
                      <img src="https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/c32cc6d3170960085fdd481595433a56.png" alt="投資企業数の円グラフ：中国54.1%、韓国16.2%、日本4.5%など" className="w-full h-auto rounded-lg" />
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-3">投資企業数の特徴</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center justify-between border-b border-border/50 pb-2"><span>中国</span> <span className="font-medium text-foreground">54.1% (4,954社)</span></li>
                        <li className="flex items-center justify-between border-b border-border/50 pb-2"><span>韓国</span> <span className="font-medium text-foreground">16.2% (1,483社)</span></li>
                        <li className="flex items-center justify-between border-b border-border/50 pb-2"><span>日本</span> <span className="font-medium text-foreground">4.5% (408社)</span></li>
                        <li className="flex items-center justify-between pb-2"><span>ロシア</span> <span className="font-medium text-foreground">4.4% (400社)</span></li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-4 text-right">※全9,157社中</p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Trade Section */}
              <section className="bg-section-gray rounded-3xl p-8 lg:p-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-section-gray-foreground mb-4">貿易動向と主要品目</h2>
                    <p className="text-lg text-section-gray-foreground/80 max-w-3xl mx-auto leading-relaxed">
                      モンゴルの貿易は隣国である中国とロシアに大きく依存しています。輸出は鉱物資源が中心で、輸入は機械・設備や燃料が主となります。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.5 }} 
                      className="bg-background rounded-2xl overflow-hidden shadow-xl border border-border"
                    >
                      <img src="https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/screenshot-2026-05-09-at-16.42.53-pW7HC.png" alt="2013年から2024年のモンゴル輸出額推移と品目構成：石炭57.4%、銅鉱石17.4%、鉄鉱石2.9%、原油2.4%、その他19.9%" className="w-full h-auto" />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.5 }} 
                      className="bg-background rounded-2xl overflow-hidden shadow-xl border border-border"
                    >
                      <img src="https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/screenshot-2026-05-09-at-16.45.16-HzujA.png" alt="モンゴルの輸入構成：機械・トラック6.5%、自動車7.4%、電力2.1%、ガソリン19.9%、その他64.1%" className="w-full h-auto" />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-background rounded-xl p-6 border border-border/50">
                      <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        輸出の構造
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm">石炭と銅鉱石が輸出全体の70%以上を占め、資源価格の変動が経済に直結する構造となっています。</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between"><span className="text-muted-foreground">石炭</span> <span className="font-semibold">57.4%</span></li>
                        <li className="flex justify-between"><span className="text-muted-foreground">銅鉱石</span> <span className="font-semibold">17.4%</span></li>
                        <li className="flex justify-between"><span className="text-muted-foreground">鉄鉱石</span> <span className="font-semibold">2.9%</span></li>
                        <li className="flex justify-between"><span className="text-muted-foreground">原油</span> <span className="font-semibold">2.4%</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-background rounded-xl p-6 border border-border/50">
                      <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                        輸入の構造
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm">工業化とインフラ整備に必要な機械類や、国内生産が少ないガソリン等の燃料に依存しています。</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between"><span className="text-muted-foreground">ガソリン・燃料</span> <span className="font-semibold">19.9%</span></li>
                        <li className="flex justify-between"><span className="text-muted-foreground">自動車・輸送機器</span> <span className="font-semibold">7.4%</span></li>
                        <li className="flex justify-between"><span className="text-muted-foreground">機械・トラック</span> <span className="font-semibold">6.5%</span></li>
                        <li className="flex justify-between"><span className="text-muted-foreground">電力</span> <span className="font-semibold">2.1%</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Export Chart Section */}
                  <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">モンゴルの輸出額推移 (2013-2024)</h3>
                      <p className="text-muted-foreground">単位: 百万USD</p>
                    </div>
                    
                    <ChartContainer config={chartConfig} className="h-[400px] w-full">
                      <BarChart data={exportData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          tickLine={false}
                          axisLine={false}
                          tickMargin={10}
                        />
                        <YAxis 
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value.toLocaleString()}`}
                          width={60}
                        />
                        <ChartTooltip 
                          cursor={{ fill: 'var(--color-muted)', opacity: 0.4 }}
                          content={<ChartTooltipContent />} 
                        />
                        <Bar 
                          dataKey="amount" 
                          fill="var(--color-amount)" 
                          radius={[4, 4, 0, 0]} 
                          maxBarSize={60}
                        />
                      </BarChart>
                    </ChartContainer>
                  </div>

                </motion.div>
              </section>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default InvestmentInformationPage;