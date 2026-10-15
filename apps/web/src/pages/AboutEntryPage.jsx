import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Landmark, FileText, Calculator, Calendar, TrendingUp, GraduationCap, Plane, Leaf } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const milestones = [{
  year: "1972年",
  event: "外交関係"
}, {
  year: "1974年",
  event: "文化交流取極"
}, {
  year: "1977年",
  event: "経済協力協定"
}, {
  year: "1990年",
  event: "貿易協定"
}, {
  year: "1991年",
  event: "青年海外協力隊派遣取極"
}, {
  year: "1993年",
  event: "航空協定"
}, {
  year: "1996年",
  event: "総合的パートナーシップ関係"
}, {
  year: "2001年",
  event: "投資保護協定"
}, {
  year: "2003年",
  event: "技術協力協定"
}, {
  year: "2010年",
  event: "戦略的パートナーシップ関係"
}, {
  year: "2013年",
  event: "戦略的パートナーシップ関係の中期行動計画"
}, {
  year: "2016年",
  event: "経済連携協定（EPA）"
}];
function AboutEntryPage() {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
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
        staggerChildren: 0.1
      }
    }
  };
  return <>
      <Helmet>
        <title>進出について - モンゴル投資情報</title>
        <meta name="description" content="日本企業によるモンゴル進出の概況、主要な進出企業例、投資分野、関連政府機関へのリンク、税制、設立形態。" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Page Header */}
        <div className="bg-muted/30 pt-16 pb-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <p className="text-primary font-medium mb-2">投資情報</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground" style={{
              letterSpacing: '-0.02em'
            }}>
                進出について
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">

              {/* SECTION 1: Entry-Friendly Features */}
              <motion.section initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={staggerContainer}>
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                    Features
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">進出しやすい特徴</h2>
                  <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                    モンゴルは親日国として知られ、ビジネス環境においても日本企業にとって有利な条件が数多く存在します。
                  </p>
                </motion.div>

                <div className="space-y-16">
                  {/* SUBSECTION 1: Official Relations Timeline */}
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-primary" />
                      モンゴル・日本の公式な国家関係
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {milestones.map((milestone, index) => <motion.div key={index} variants={fadeInUp} className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                          <span className="text-primary font-bold text-lg mb-1">{milestone.year}</span>
                          <span className="text-foreground font-medium text-sm">{milestone.event}</span>
                        </motion.div>)}
                    </div>
                  </motion.div>

                  {/* SUBSECTION 2: Entry-Friendly Features Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Part 1: Market & Economic Environment */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                      <h3 className="text-xl font-bold text-foreground border-b border-border pb-3">
                        市場・経済環境の改善
                      </h3>
                      <div className="space-y-4">
                        <div className="flex gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50">
                          <div className="flex-shrink-0 mt-1">
                            <TrendingUp className="w-5 h-5 text-blue-500" />
                          </div>
                          <p className="text-foreground leading-relaxed text-sm md:text-base">
                            日本との間でモンゴル初の経済連携協定（EPA）が発行され、今後も両国の戦略的なパートナーシップが強化されている
                          </p>
                        </div>
                        <div className="flex gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50">
                          <div className="flex-shrink-0 mt-1">
                            <GraduationCap className="w-5 h-5 text-emerald-500" />
                          </div>
                          <p className="text-foreground leading-relaxed text-sm md:text-base">
                            モンゴルから日本への留学生数は出身国別で世界第12位、人口比では第1位
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Part 2: Abundant Business Opportunities */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                      <h3 className="text-xl font-bold text-foreground border-b border-border pb-3">
                        豊富な日本企業の参入機会
                      </h3>
                      <div className="space-y-4">
                        <div className="flex gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50">
                          <div className="flex-shrink-0 mt-1">
                            <Landmark className="w-5 h-5 text-amber-500" />
                          </div>
                          <p className="text-foreground leading-relaxed text-sm md:text-base">
                            政府は海外からの投資誘致に積極的に取り組んでいる。資源開発に加え、観光、建設、医療などと幅広い分野にチャンスがある
                          </p>
                        </div>
                        <div className="flex gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50">
                          <div className="flex-shrink-0 mt-1">
                            <Plane className="w-5 h-5 text-indigo-500" />
                          </div>
                          <p className="text-foreground leading-relaxed text-sm md:text-base">
                            ウランバートル新国際空港の運営を日本企業が行っている。今後、関連したビジネスチャンスに期待
                          </p>
                        </div>
                        <div className="flex gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50">
                          <div className="flex-shrink-0 mt-1">
                            <Leaf className="w-5 h-5 text-green-500" />
                          </div>
                          <p className="text-foreground leading-relaxed text-sm md:text-base">
                            二国間オフセット・クレジット（JCM）により、2013年以降8件のプロジェクトが登録され、日本の環境技術に期待
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

              {/* SECTION 2: Entry Procedures */}
              <motion.section initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={staggerContainer} className="pt-16 border-t border-border/50">
                <motion.div variants={fadeInUp} className="mb-10 text-center">
                  <h2 className="text-3xl font-bold text-foreground">進出手続き「投資・事業形態」</h2>
                  <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    モンゴルでの事業展開にあたり、主に「有限責任会社 (LLC)」「株式会社 (JSC)」「駐在員事務所」の3つの形態が選択されます。
                  </p>
                </motion.div>

                <motion.div
  variants={fadeInUp}
  className="mb-16 max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-lg overflow-hidden p-4"
>
  <img
    src="/images/business-structure copy.png"
    alt="モンゴルへの進出形態：現地法人（LLC、JSC）と駐在員事務所の比較"
    className="w-full h-auto object-contain rounded-xl"
  />
</motion.div>
                <div className="space-y-12">
                  <motion.div variants={fadeInUp}>
                    <div className="flex items-center gap-2 mb-4">
                      <Landmark className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">法人形態の比較 (JSC vs LLC)</h3>
                    </div>
                    <div className="border border-border rounded-xl overflow-hidden bg-card">
                      <Table>
                        <TableHeader className="bg-muted/50">
                          <TableRow>
                            <TableHead className="w-[15%]">会社形態</TableHead>
                            <TableHead className="w-[20%]">資本金要件</TableHead>
                            <TableHead className="w-[25%]">責任</TableHead>
                            <TableHead className="w-[25%]">税務上の扱い</TableHead>
                            <TableHead className="w-[15%]">運営の複雑さ</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-semibold">LLC (有限責任会社)</TableCell>
                            <TableCell className="text-muted-foreground">通常、最低資本金の制限なし (外国投資法人の場合は10万USD相当以上)</TableCell>
                            <TableCell className="text-muted-foreground">出資額を限度とする有限責任</TableCell>
                            <TableCell className="text-muted-foreground">一般的な法人所得税適用。配当や利益送金時の源泉税に注意。</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                比較的容易
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">JSC (株式会社)</TableCell>
                            <TableCell className="text-muted-foreground">会社法に基づく規定あり</TableCell>
                            <TableCell className="text-muted-foreground">出資額を限度とする有限責任</TableCell>
                            <TableCell className="text-muted-foreground">公開会社としての厳格な会計監査・報告義務とそれに伴う税務監査</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                複雑
                              </span>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">駐在員事務所 (Representative Office)</h3>
                    </div>
                    <div className="border border-border rounded-xl overflow-hidden bg-card">
                      <Table>
                        <TableHeader className="bg-muted/50">
                          <TableRow>
                            <TableHead className="w-[25%]">役割・機能</TableHead>
                            <TableHead className="w-[25%]">責任</TableHead>
                            <TableHead className="w-[25%]">制限事項</TableHead>
                            <TableHead className="w-[25%]">設立要件</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="text-muted-foreground">市場調査、情報収集、親会社との連絡調整、広報活動など</TableCell>
                            <TableCell className="text-muted-foreground">独立した法人格を持たず、本国の親会社が全ての法的責任を負う</TableCell>
                            <TableCell className="font-medium text-destructive">
                              営業活動・収益事業を行うことは法的に禁止されている
                            </TableCell>
                            <TableCell className="text-muted-foreground">法人設立に比べ登録手続きが比較的簡易。投資庁(IDA)等への登録が必要。</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* SECTION 3: Tax System */}
              <motion.section initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={staggerContainer} className="pt-20 border-t border-border/50">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <motion.div variants={fadeInUp}>
                    <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                      Taxation
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">税制</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      モンゴルの税制は近年近代化が進んでおり、外国投資家にとって透明性の高い枠組みの構築が目指されています。投資判断において、各税率と優遇措置の理解が重要です。
                    </p>
                  </motion.div>
                </div>

                {/* Prominent Full-Width Image Container */}
                <motion.div variants={fadeInUp} className="mb-20">
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
    className="w-full bg-card rounded-3xl border-2 border-border/40 shadow-xl overflow-hidden p-6"
  >
    <img
      src="/images/mongolia-tax-system copy.png"
      alt="モンゴルの主要な税種と税率の概要"
      className="block w-full h-auto object-contain rounded-xl"
    />
  </motion.div>
</motion.div>

                {/* Detail Tables */}
                <div className="space-y-16 max-w-5xl mx-auto">
                  <motion.div variants={fadeInUp}>
                    <div className="flex items-center gap-2 mb-6">
                      <Calculator className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">主要な税率</h3>
                    </div>
                    <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                      <Table>
                        <TableHeader className="bg-muted/50">
                          <TableRow>
                            <TableHead className="w-[30%] md:w-[40%] text-base py-4">税目</TableHead>
                            <TableHead className="w-[20%] text-base py-4">税率</TableHead>
                            <TableHead className="w-[50%] md:w-[40%] text-base py-4">備考</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-semibold py-4">法人所得税 (Corporate Income Tax)</TableCell>
                            <TableCell className="font-bold text-primary text-lg">10% / 25%</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">年間課税所得60億MNT以下は10%、超過部分は25%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold py-4">源泉税 (Withholding Tax)</TableCell>
                            <TableCell className="font-bold text-primary text-lg">20%</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">非居住者への利子、配当、ロイヤリティの支払いに対して</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold py-4">個人所得税 (Personal Income Tax)</TableCell>
                            <TableCell className="font-bold text-primary text-lg">10%</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">フラットレート（標準的な給与所得等）</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold py-4">付加価値税 (VAT)</TableCell>
                            <TableCell className="font-bold text-primary text-lg">10%</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">国内での商品・サービスの販売、輸入品に適用</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold py-4">関税 (Tariff)</TableCell>
                            <TableCell className="font-bold text-primary text-lg">5%</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">一般的な標準税率（品目により異なる場合あり）</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="flex items-center gap-2 mb-6">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">特別な税制上の条件(特別な税務規定・優遇)</h3>
                    </div>
                    <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                      <Table>
                        <TableHeader className="bg-muted/50">
                          <TableRow>
                            <TableHead className="w-[20%] text-base py-4">規定の種類</TableHead>
                            <TableHead className="w-[30%] text-base py-4">概要</TableHead>
                            <TableHead className="w-[25%] text-base py-4">適用条件</TableHead>
                            <TableHead className="w-[25%] text-base py-4">メリット</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-semibold py-4">安定化契約<br /><span className="text-xs text-muted-foreground font-normal">(Stabilization Agreement)</span></TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">特定期間にわたり、締結時の税率が変更されないよう固定する契約</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">一定規模以上（金額や地域による）の大型投資プロジェクト</TableCell>
                            <TableCell className="text-sm text-foreground font-medium py-4">税制変更による予期せぬコスト増リスクの回避</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold py-4">地方投資優遇<br /><span className="text-xs text-muted-foreground font-normal">(Regional Incentives)</span></TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">ウランバートル市以外の地方部での投資に対する法人税の減免</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">指定された地方行政区での事業設立・運営</TableCell>
                            <TableCell className="text-sm text-foreground font-medium py-4">初期運営コストの削減、法人税の大幅免除</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold py-4">革新技術免税<br /><span className="text-xs text-muted-foreground font-normal">(Innovation Exemption)</span></TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">新技術導入や特定産業設備の輸入関税・VAT免除</TableCell>
                            <TableCell className="text-sm text-muted-foreground py-4">政府が指定するハイテク・優先セクターの設備投資</TableCell>
                            <TableCell className="text-sm text-foreground font-medium py-4">設備投資における初期キャッシュフローの改善</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Related Gov Sites */}
              <motion.section initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeInUp} className="bg-section-gray rounded-3xl p-8 lg:p-12 mt-24">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-section-gray-foreground mb-4">投資・進出に役立つ政府機関リンク</h2>
                  <p className="text-section-gray-foreground/80 max-w-2xl mx-auto">
                    法整備や最新の政府方針については、以下の公式ウェブサイトにてご確認いただけます。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <a href="https://president.mn/" target="_blank" rel="noopener noreferrer" className="group bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">大統領府</h3>
                    <p className="text-sm text-muted-foreground">President.mn</p>
                  </a>
                  
                  <a href="https://www.parliament.mn/" target="_blank" rel="noopener noreferrer" className="group bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">国民大呼ラル (議会)</h3>
                    <p className="text-sm text-muted-foreground">Parliament.mn</p>
                  </a>
                  
                  <a href="https://mongolia.gov.mn/" target="_blank" rel="noopener noreferrer" className="group bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">政府 (内閣)</h3>
                    <p className="text-sm text-muted-foreground">Mongolia.gov.mn</p>
                  </a>
                </div>
              </motion.section>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>;
}
export default AboutEntryPage;