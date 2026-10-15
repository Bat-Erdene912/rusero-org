import React from 'react';

import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import { Globe, Briefcase, Building, Leaf, ShoppingBag, Coffee, HeartPulse } from 'lucide-react';

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

    color: "hsl(221, 83%, 53%)",

  },

};

function EconomyPage() {

  return (

    <>

      <Helmet>

        <title>経済・投資関連情報 - モンゴル投資情報</title>

        <meta name="description" content="モンゴルの基礎データ、主要経済指標、GDP成長率の推移、外国直接投資（FDI）の動向、主要貿易相手国と輸出入品目に関する詳細データを提供します。" />

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

                経済・投資関連情報

              </h1>

            </motion.div>

          </div>

        </div>

        {/* Main Content */}

        <div className="py-10 sm:py-16">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="space-y-14 sm:space-y-24">

              {/* Basic Info Section */}

              <motion.section 

                initial={{ opacity: 0, y: 20 }} 

                whileInView={{ opacity: 1, y: 0 }} 

                viewport={{ once: true }} 

                transition={{ duration: 0.5 }}

              >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                  <div>

                    <h2 className="text-2xl font-bold text-foreground mb-6">モンゴル基礎データ</h2>

                    <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">

                      <p>モンゴルは世界第18位の広大な国土を持ちながら、人口は約340万人と人口密度が非常に低い国です。首都ウランバートルに人口の約半数が集中しています。</p>

                      <ul className="mt-4 space-y-2">

                        <li><strong>面積:</strong> 156.4万平方キロメートル</li>

                        <li><strong>人口:</strong> 約340万人</li>

                        <li><strong>名目GDP:</strong> 180億米ドル (2024年推定)</li>

                        <li><strong>1人当たりGNI:</strong> 6,890米ドル</li>

                        <li><strong>言語:</strong> モンゴル語</li>

                        <li><strong>通貨:</strong> トゥグルグ (MNT)</li>

                      </ul>

                    </div>

                  </div>

                  <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg h-[350px]">

                  <img

  src="/images/mongolia-map copy.png"

  alt="モンゴル国の地図"

  className="w-full h-full object-contain"

/>

                  </div>

                  <div className="flex justify-end pr-4 pb-4">

  <p className="text-xs text-muted-foreground italic">

    出所：モンゴル統計庁＆JETRO

  </p>

</div>

                </div>

              </motion.section>

              {/* Economic Indicators */}

              <motion.section 

                initial={{ opacity: 0, y: 20 }} 

                whileInView={{ opacity: 1, y: 0 }} 

                viewport={{ once: true }} 

                transition={{ duration: 0.5 }} 

                className="bg-section-gray rounded-3xl p-4 sm:p-8 lg:p-12 min-w-0"

              >

                <h2 className="text-2xl font-bold text-section-gray-foreground mb-8">主要経済指標</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  <div className="lg:col-span-5 space-y-6">

                    <p className="text-section-gray-foreground/80 leading-relaxed">

                      鉱業が経済の牽引役となっており、輸出の大部分を占めています。直近の実質GDP成長率は4.9%を記録し、インフレ率は一時期のピークから落ち着きを見せつつあります。

                    </p>

                    <div className="grid grid-cols-2 gap-4">

                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 border border-border/50">

                        <div className="text-sm font-medium text-muted-foreground mb-1">実質GDP成長率</div>

                        <div className="text-2xl font-bold text-foreground">4.9%</div>

                      </div>

                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 border border-border/50">

                        <div className="text-sm font-medium text-muted-foreground mb-1">インフレ率</div>

                        <div className="text-2xl font-bold text-foreground">9.0%</div>

                      </div>

                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 border border-border/50">

                        <div className="text-sm font-medium text-muted-foreground mb-1">総貿易額</div>

                        <div className="text-2xl font-bold text-foreground">274.0<span className="text-sm font-normal ml-1">億米ドル</span></div>

                      </div>

                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 border border-border/50">

                        <div className="text-sm font-medium text-muted-foreground mb-1">失業率</div>

                        <div className="text-2xl font-bold text-foreground">5.8%</div>

                      </div>

                    </div>

                  </div>

                  <div className="lg:col-span-7 bg-background rounded-2xl overflow-hidden shadow-md h-[400px] flex items-center justify-center p-4">

                  <img

  src="/images/economic-indicators copy.png"

  alt="モンゴルの主要経済指標（2023～2024年）"

  className="w-full h-full object-contain"

/>

                  </div>

                </div>

              </motion.section>

              {/* Economic Growth Chart */}

              <motion.section 

                initial={{ opacity: 0, y: 20 }} 

                whileInView={{ opacity: 1, y: 0 }} 

                viewport={{ once: true }} 

                transition={{ duration: 0.5 }}

              >

                <div className="text-center mb-12">

                  <h2 className="text-2xl font-bold text-foreground mb-4">経済成長の推移と見通し</h2>

                  <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">

                    オユ・トルゴイ鉱山の開発進展や国際的な資源価格の変動に影響を受けながらも、中長期的には安定した成長（約5.0%）が見込まれています。

                  </p>

                </div>

              <div className="max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden border border-border shadow-lg p-3 sm:p-6">

  <div className="flex items-center justify-center min-h-[180px] sm:min-h-[400px]">

  <img

  src="/images/economic-growth copy.png"

  alt="モンゴルの経済成長の推移"

  className="w-full h-auto object-contain"

/>

  </div>

  <div className="flex justify-end mt-2">

    <p className="text-xs text-muted-foreground italic">

      出所：モンゴル統計庁＆JETRO

    </p>

  </div>

</div>

                <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">

                  <div className="bg-muted/50 p-4 rounded-lg">

                    <span className="font-semibold text-foreground block mb-1">過去の影響要因</span>

                    中国経済の減速、パンデミック、政治的要因が過去の成長率低下をもたらしました。

                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">

                    <span className="font-semibold text-foreground block mb-1">IMF支援プログラム</span>

                    マクロ経済の安定化に向けた国際的な金融支援が実施されました。

                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">

                    <span className="font-semibold text-foreground block mb-1">今後の見通し (2026-2030)</span>

                    鉱業生産の拡大により、年間約5.0%の安定した成長が予測されています。

                  </div>

                </div>

              </motion.section>

              {/* Trade Section */}

              <section className="bg-section-gray rounded-3xl p-4 sm:p-8 lg:p-12 min-w-0">

                <motion.div 

                  initial={{ opacity: 0, y: 20 }} 

                  whileInView={{ opacity: 1, y: 0 }} 

                  viewport={{ once: true }} 

                  transition={{ duration: 0.5 }}

                >

                  <div className="mb-10 text-center">

                    <h2 className="text-2xl sm:text-3xl font-bold text-section-gray-foreground mb-4">貿易動向と主要品目</h2>

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

                      className="bg-background rounded-2xl overflow-hidden shadow-xl border border-border min-h-[240px] sm:h-[400px] flex flex-col p-3 sm:p-6 min-w-0"

                    >

                      <h3 className="font-semibold text-center mb-4 text-foreground text-base">輸出の品目構成</h3>

                      <div className="flex-1 w-full flex items-center justify-center">

                        <img src="/images/2.png" alt="2013年から2024年のモンゴル輸出額推移と品目構成：石炭57.4%、銅鉱石17.4%、鉄鉱石2.9%、原油2.4%、その他19.9%" className="w-full h-full max-h-[320px] object-contain" />

                      </div>

                    </motion.div>

                    <motion.div 

                      initial={{ opacity: 0, x: 20 }} 

                      whileInView={{ opacity: 1, x: 0 }} 

                      viewport={{ once: true }} 

                      transition={{ duration: 0.5 }} 

                      className="bg-background rounded-2xl overflow-hidden shadow-xl border border-border min-h-[240px] sm:h-[400px] flex flex-col p-3 sm:p-6 min-w-0"

                    >

                      <h3 className="font-semibold text-center mb-4 text-foreground text-base">輸入の品目構成</h3>

                      <div className="flex-1 w-full flex items-center justify-center">

                        <img src="/images/1.png" alt="モンゴルの輸入構成：機械・トラック6.5%、自動車7.4%、電力2.1%、ガソリン19.9%、その他64.1%" className="w-full h-full max-h-[320px] object-contain" />

                      </div>

                    </motion.div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    <div className="bg-background rounded-xl p-6 border border-border/50 h-full">

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

                    <div className="bg-background rounded-xl p-6 border border-border/50 h-full">

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

                  <div className="bg-background rounded-2xl p-3 sm:p-6 md:p-8 border border-border shadow-lg min-w-0">

                    <div className="mb-6">

                      <h3 className="text-2xl font-bold text-foreground mb-2">モンゴルの輸出額推移 (2013-2024)</h3>

                      <p className="text-muted-foreground">単位: 百万USD</p>

                    </div>

                    <ChartContainer config={chartConfig} className="h-[300px] sm:h-[400px] w-full min-w-0">

                      <ResponsiveContainer width="100%" height="100%">

                        <BarChart data={exportData} margin={{ top: 12, right: 6, bottom: 12, left: 0 }}>

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

                            width={48}

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

                      </ResponsiveContainer>

                    </ChartContainer>

                    <div className="flex justify-end mt-4">

  <p className="text-xs text-muted-foreground italic">

    出所：モンゴル統計庁＆JETRO

  </p>

</div>

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

export default EconomyPage;