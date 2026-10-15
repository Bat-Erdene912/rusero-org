import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Building2, TrendingUp, Briefcase, Info, ChevronRight, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
function JapanDirectInvestmentPage() {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // --- MOCK DATA ---

  // Section 1: Investment by Country (Horizontal Stacked Bar)
  const investmentByCountryData = [{
    year: '2011',
    Netherlands: 6000,
    China: 4000,
    Singapore: 1500,
    HongKong: 1000,
    Luxembourg: 750,
    Japan: 500,
    USA: 1250,
    Canada: 2000,
    Others: 1500
  }, {
    year: '2012',
    Netherlands: 6500,
    China: 4200,
    Singapore: 1600,
    HongKong: 1100,
    Luxembourg: 800,
    Japan: 550,
    USA: 1300,
    Canada: 2100,
    Others: 1600
  }, {
    year: '2013',
    Netherlands: 7500,
    China: 4500,
    Singapore: 1750,
    HongKong: 1250,
    Luxembourg: 900,
    Japan: 600,
    USA: 1400,
    Canada: 2250,
    Others: 1750
  }, {
    year: '2014',
    Netherlands: 6000,
    China: 5000,
    Singapore: 1900,
    HongKong: 1400,
    Luxembourg: 950,
    Japan: 650,
    USA: 1450,
    Canada: 2400,
    Others: 1900
  }, {
    year: '2015',
    Netherlands: 4000,
    China: 5500,
    Singapore: 2000,
    HongKong: 1500,
    Luxembourg: 1000,
    Japan: 750,
    USA: 1500,
    Canada: 2500,
    Others: 2000
  }, {
    year: '2016',
    Netherlands: 4200,
    China: 6000,
    Singapore: 2100,
    HongKong: 1600,
    Luxembourg: 1050,
    Japan: 800,
    USA: 1550,
    Canada: 2600,
    Others: 2100
  }, {
    year: '2017',
    Netherlands: 4500,
    China: 6500,
    Singapore: 2250,
    HongKong: 1750,
    Luxembourg: 1100,
    Japan: 900,
    USA: 1600,
    Canada: 2750,
    Others: 2250
  }, {
    year: '2018',
    Netherlands: 5000,
    China: 7000,
    Singapore: 2400,
    HongKong: 1900,
    Luxembourg: 1150,
    Japan: 950,
    USA: 1650,
    Canada: 2900,
    Others: 2400
  }, {
    year: '2019',
    Netherlands: 5500,
    China: 7500,
    Singapore: 2500,
    HongKong: 2000,
    Luxembourg: 1250,
    Japan: 1000,
    USA: 1750,
    Canada: 3000,
    Others: 2500
  }, {
    year: '2020',
    Netherlands: 5200,
    China: 7200,
    Singapore: 2450,
    HongKong: 1950,
    Luxembourg: 1200,
    Japan: 980,
    USA: 1700,
    Canada: 2950,
    Others: 2450
  }, {
    year: '2021',
    Netherlands: 5000,
    China: 7000,
    Singapore: 2400,
    HongKong: 1900,
    Luxembourg: 1200,
    Japan: 950,
    USA: 1700,
    Canada: 2900,
    Others: 2400
  }, {
    year: '2022',
    Netherlands: 5800,
    China: 7600,
    Singapore: 2600,
    HongKong: 2100,
    Luxembourg: 1300,
    Japan: 1100,
    USA: 1800,
    Canada: 3100,
    Others: 2600
  }, {
    year: '2023',
    Netherlands: 6500,
    China: 8000,
    Singapore: 2750,
    HongKong: 2250,
    Luxembourg: 1400,
    Japan: 1250,
    USA: 1900,
    Canada: 3250,
    Others: 2750
  }, {
    year: '2025年3月末',
    Netherlands: 7000,
    China: 8500,
    Singapore: 3000,
    HongKong: 2500,
    Luxembourg: 1500,
    Japan: 1500,
    USA: 2000,
    Canada: 3500,
    Others: 3000
  }].reverse();
  const COUNTRY_COLORS = {
    Netherlands: '#1E40AF',
    // dark blue
    China: '#06B6D4',
    // cyan
    Singapore: '#22C55E',
    // green
    HongKong: '#FFA500',
    // orange
    Luxembourg: '#1F2937',
    // dark gray
    Japan: '#EF4444',
    // red
    USA: '#1E3A8A',
    // dark blue
    Canada: '#84CC16',
    // lime green
    Others: '#D1D5DB' // light gray
  };
  const xTicks = [0, 2500, 5000, 7500, 10000, 12500, 15000, 17500, 20000, 22500, 25000, 27500, 30000, 32500, 35000, 37500];

  // Section 2: Companies by Country (Donut & Table)
  const companyRatioData = [{
    name: '中国',
    percentage: 54.1,
    count: 4954,
    color: '#ef4444'
  }, {
    name: '韓国',
    percentage: 16.2,
    count: 1483,
    color: '#3b82f6'
  }, {
    name: '日本',
    percentage: 4.5,
    count: 412,
    color: '#10b981'
  }, {
    name: 'ロシア',
    percentage: 4.4,
    count: 403,
    color: '#f59e0b'
  }, {
    name: 'その他',
    percentage: 20.8,
    count: 1905,
    color: '#64748b'
  }];

  // Section 3: Cumulative Investment from Japan
  const cumulativeInvestmentData = [{
    year: '2010',
    amount: 183
  }, {
    year: '2011',
    amount: 214
  }, {
    year: '2012',
    amount: 353
  }, {
    year: '2013',
    amount: 419
  }, {
    year: '2014',
    amount: 528
  }, {
    year: '2015',
    amount: 540
  }, {
    year: '2016',
    amount: 585
  }, {
    year: '2017',
    amount: 657
  }, {
    year: '2018',
    amount: 843
  }, {
    year: '2019',
    amount: 923
  }, {
    year: '2020',
    amount: 982
  }, {
    year: '2021',
    amount: 1022
  }, {
    year: '2022',
    amount: 963
  }, {
    year: '2023',
    amount: 965
  }, {
    year: '2024',
    amount: 967
  }, {
    year: '2025年3月末',
    amount: 1002
  }];

  // Section 4: Business Cases
  const businessCases = [{
    industry: 'IT、AI',
    company: '電通デジタル',
    description: 'AI'
  }, {
    industry: 'IT、AI',
    company: 'GMOインターネット',
    description: 'インターネットインフラ'
  }, {
    industry: '医療',
    company: '富士フイルム',
    description: '健診センターNURA'
  }, {
    industry: 'ファッション',
    company: 'ジンズホールディングス',
    description: '眼鏡専門店'
  }, {
    industry: '教育・人材育成',
    company: 'キャスタリア',
    description: 'モバイルラーニング'
  }, {
    industry: '再生可能エネルギー',
    company: 'シャープ&重光商事',
    description: 'ダルハン太陽光発電所10×メガワット、ザミンウート太陽光発電所15メガワット'
  }, {
    industry: '再生可能エネルギー',
    company: 'ファームドゥ',
    description: 'モンナランン太陽光発電所12.7メガワット、農業、CO2クレジット取引'
  }, {
    industry: '再生可能エネルギー',
    company: 'テラスエナジー',
    description: 'ツェツィー風力発電所50×メガワット'
  }, {
    industry: '再生可能エネルギー',
    company: '賃光精機',
    description: 'スンベル太陽光発電所10×メガワット'
  }, {
    industry: '再生可能エネルギー',
    company: '京セラコミュニケーションシステム',
    description: 'ホブド・ナル太陽光発電所10メガワット'
  }, {
    industry: '再生可能エネルギー',
    company: '日捷&日本ガイシ',
    description: 'ホルフ太陽光発電所10×メガワット+NAS電池3.6×メガワット時'
  }, {
    industry: 'ホテル',
    company: '東横イン',
    description: 'ビジネスホテル'
  }, {
    industry: '外食',
    company: '吉野家ホールディングス',
    description: '牛丼チェーン'
  }, {
    industry: '外食',
    company: 'マコトフードサービス',
    description: 'ラーメンチェーン'
  }, {
    industry: '外食',
    company: 'ギフトホールディングス',
    description: 'ラーメンチェーン'
  }, {
    industry: '外食',
    company: 'ホットパレット',
    description: 'ステーキチェーン'
  }];
  return <>
      <Helmet>
        <title>日本からの直接投資 - 経済・投資関連情報 | モンゴル観光・ビジネス</title>
        <meta name="description" content="モンゴルにおける外国直接投資の動向、国別投資額、および日本企業の事業発展事例について解説します。" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Page Header */}
        <section className="bg-muted/30 pt-24 pb-16 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-semibold rounded-full bg-primary/10 text-primary">
                <Globe className="w-4 h-4" />
                <span>Foreign Direct Investment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
              letterSpacing: '-0.02em'
            }}>
                日本からの直接投資と展開
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                モンゴルへの外国直接投資（FDI）の全体的な動向と、多角化する日本企業の進出状況・事業発展事例を詳しく解説します。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="py-20 space-y-24">
          
          {/* SECTION 1: Investment by Country (Horizontal Stacked Bar Chart) */}
          <motion.section initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">外国投資国別 (100万ドル)</h2>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-lg text-muted-foreground">2011年から2025年3月までの主要国別投資額の推移</p>
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
                  <Info className="w-4 h-4" />
                  <span>出展: JETRO</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="chart-wrapper">
              <div className="h-[800px] w-full min-w-[700px] overflow-x-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={investmentByCountryData} margin={{
                  top: 20,
                  right: 30,
                  left: 40,
                  bottom: 20
                }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={true} />
                    <XAxis type="number" domain={[0, 37500]} ticks={xTicks} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={value => value.toLocaleString()} />
                    <YAxis dataKey="year" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} width={90} />
                    <RechartsTooltip cursor={{
                    fill: 'hsl(var(--muted)/0.5)'
                  }} contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }} formatter={value => value.toLocaleString()} />
                    <Legend verticalAlign="bottom" wrapperStyle={{
                    paddingTop: '30px'
                  }} />
                    <Bar dataKey="Netherlands" name="オランダ" stackId="a" fill={COUNTRY_COLORS.Netherlands} />
                    <Bar dataKey="China" name="中国" stackId="a" fill={COUNTRY_COLORS.China} />
                    <Bar dataKey="Singapore" name="シンガポール" stackId="a" fill={COUNTRY_COLORS.Singapore} />
                    <Bar dataKey="HongKong" name="香港" stackId="a" fill={COUNTRY_COLORS.HongKong} />
                    <Bar dataKey="Luxembourg" name="ルクセンブルク" stackId="a" fill={COUNTRY_COLORS.Luxembourg} />
                    <Bar dataKey="Japan" name="日本" stackId="a" fill={COUNTRY_COLORS.Japan} />
                    <Bar dataKey="USA" name="米国" stackId="a" fill={COUNTRY_COLORS.USA} />
                    <Bar dataKey="Canada" name="カナダ" stackId="a" fill={COUNTRY_COLORS.Canada} />
                    <Bar dataKey="Others" name="その他" stackId="a" fill={COUNTRY_COLORS.Others} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </motion.section>

          {/* SECTION 2: Companies by Country (Donut Chart & Table) */}
          <motion.section initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/30 rounded-3xl p-8 lg:p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left text column */}
              <motion.div variants={fadeInUp} className="max-w-xl sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">主要国・地域別直接投資企業数</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  モンゴルに進出している外国直接投資企業の国別割合です。地理的・経済的な結びつきが強い中国が過半数を占め、次いで韓国、日本、ロシアと続きます。日本企業は全体の約4.5%を占めており、着実なプレゼンスを示しています。
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-background px-4 py-2 rounded-lg border border-border">
                  <Info className="w-4 h-4" />
                  <span>出展: JETRO (日本貿易振興機構)</span>
                </div>
              </motion.div>

              {/* Right Chart & Table column */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border border-border shadow-sm flex flex-col h-full">
                
                {/* Donut Chart */}
                <div className="h-[320px] mb-8 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={companyRatioData} cx="50%" cy="50%" innerRadius={80} outerRadius={120} paddingAngle={2} dataKey="percentage" stroke="none">
                        {companyRatioData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                        <Label value="Total" position="centerBottom" dy={-10} className="text-muted-foreground text-sm font-medium" fill="currentColor" />
                        <Label value="9,157" position="centerTop" dy={15} className="text-3xl font-bold text-foreground" fill="currentColor" />
                      </Pie>
                      <RechartsTooltip formatter={value => `${value}%`} contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }} itemStyle={{
                      color: 'hsl(var(--foreground))'
                    }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Data Table */}
                <div className="mt-auto border rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[40%] font-semibold">国・地域</TableHead>
                        <TableHead className="text-right font-semibold">企業数</TableHead>
                        <TableHead className="text-right font-semibold">割合</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companyRatioData.map((item, index) => <TableRow key={index} className="hover:bg-muted/30">
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                              <span className="w-3 h-3 rounded-full shrink-0" style={{
                            backgroundColor: item.color
                          }} aria-hidden="true" />
                              {item.name}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">{item.count.toLocaleString()}</TableCell>
                          <TableCell className="text-right text-muted-foreground">
                            {item.percentage.toFixed(1)}%
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                </div>

              </motion.div>
            </div>
          </motion.section>

          {/* SECTION 3: Cumulative Investment from Japan */}
          <motion.section initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-semibold rounded-full bg-primary/10 text-primary">
                <span>IV. 貿易・投資</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  日本からの直接投資概要（累計）
                </h2>
              </div>

              <ul className="space-y-3 text-lg text-muted-foreground max-w-3xl">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>2025年3月末における日本からの直接投資額（累計）は、10億174万ドルとなった。</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>日本からの主要投資分野は通信、銀行、製造、鉱業、鉱山機械・建設機械の販売、建設やエネルギーなどとなっている。</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="chart-wrapper mb-8">
              <div className="h-[400px] w-full min-w-[600px] overflow-x-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cumulativeInvestmentData} margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20
                }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />

                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} dy={10} />

                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={value => value.toLocaleString()} />

                    <RechartsTooltip cursor={{
                    fill: 'hsl(var(--muted)/0.5)'
                  }} contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }} formatter={value => [`${value} 百万ドル`, '投資額']} />

                    <Legend verticalAlign="bottom" wrapperStyle={{
                    paddingTop: '20px'
                  }} />

                    <Bar dataKey="amount" name="モンゴル日本商工会会員企業名（一部抜粋、順不同）" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} maxBarSize={50} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-end mt-4 pr-2">
                <p className="text-xs text-muted-foreground italic">
                  出所：モンゴル統計庁＆JETRO
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-muted/50 rounded-2xl p-6 border border-border">
              <h4 className="text-sm font-bold text-foreground mb-3">
                モンゴル日本商工会会員企業名（一部抜粋、順不同）
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                伊藤忠商事、丸紅、住友商事、三井物産、賃光精機、三菱商事、Azuma Shipping、Aizawa Mongolia、HIS Mongolia、Transwest Mongolia、岩田地崎建設、原口総合法律事務所、メガテック、ユニメディア、HS Khan Resort、日本工営、シスメックス、TDB Leasing、加藤運輸、Apollo Building Service Mongolia、大正法律事務所、モンゴリア東横イン、TOYOTA SALES MONGOLIA、電通データアーティスト モンゴル、Cominix、KOHJITSU MONGOLIA、MJ Agritech、New Ulaanbaatar International Airport、GMO-Z.com Mongolia
              </p>
            </motion.div>
          </motion.section>

          {/* SECTION 4: Business Cases */}
          <motion.section initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div variants={fadeInUp} className="bg-white rounded-none border-0 shadow-none overflow-x-auto">
  <Table className="border-collapse w-full">
    <TableHeader>
      <TableRow className="bg-blue-800 hover:bg-blue-800">
        <TableHead className="w-[230px] text-center text-white font-bold border border-white text-lg">
          業種
        </TableHead>
        <TableHead className="w-[360px] text-center text-white font-bold border border-white text-lg">
          企業名
        </TableHead>
        <TableHead className="text-center text-white font-bold border border-white text-lg">
          事業内容
        </TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {businessCases.map((item, index) => {
                  const isFirstIndustry = index === 0 || businessCases[index - 1].industry !== item.industry;
                  const rowSpan = businessCases.filter(caseItem => caseItem.industry === item.industry).length;
                  return <TableRow key={index} className="hover:bg-transparent">
            {isFirstIndustry && <TableCell rowSpan={rowSpan} className="bg-slate-200 text-center align-middle font-bold text-black border border-gray-500 text-lg whitespace-pre-line">
                {item.industry === "再生可能エネルギー" ? "再生可能\nエネルギー" : item.industry}
              </TableCell>}

            <TableCell className="bg-slate-200 font-bold text-black border border-gray-500 text-lg">
              {item.company}
            </TableCell>

            <TableCell className="bg-white text-black border border-gray-500 text-lg">
              {item.description}
            </TableCell>
          </TableRow>;
                })}
    </TableBody>
            </Table>
   <div className="flex justify-end mt-3 pr-2 pb-2">
    <p className="text-xs text-muted-foreground italic">
      出所：モンゴル日本商工会&JETRO
    </p>
  </div>
</motion.div>
          </motion.section>

        </div>

        <Footer />
      </div>
    </>;
}
export default JapanDirectInvestmentPage;