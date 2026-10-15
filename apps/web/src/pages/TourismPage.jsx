import React from 'react';

import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';

import { CheckCircle2, AlertTriangle, MapPin, Users, Languages, BookOpen, Coins, Maximize, Tent, Mountain, Camera, Fish, Bird, PlayCircle, Star, Sparkles, Coffee, Moon, Flame, Compass, ChevronRight, Image as ImageIcon } from 'lucide-react';

import Header from '@/components/Header.jsx';

import Footer from '@/components/Footer.jsx';

import PhotoGallery from '@/components/PhotoGallery.jsx';

import { useState } from "react";



function TourismPage() {

  const [selectedImage, setSelectedImage] = useState(null);

  const experiences = [{

    icon: <MapPin className="w-6 h-6" />,

    title: '越境体験',

    desc: '国境を越える壮大な旅',

    link: 'https://youtube.com/results?search_query=モンゴル+越境体験'

  }, {

    icon: <Users className="w-6 h-6" />,

    title: 'ナーダム祭',

    desc: 'モンゴル最大のスポーツの祭典',

    link: 'https://youtube.com/results?search_query=モンゴル+ナーダム祭'

  }, {

    icon: <BookOpen className="w-6 h-6" />,

    title: 'チンギス・ハーン歴史',

    desc: '大帝国の足跡を辿る',

    link: 'https://youtube.com/results?search_query=チンギス・ハーン+歴史'

  }, {

    icon: <Tent className="w-6 h-6" />,

    title: 'ゲル宿泊',

    desc: '伝統的な移動式住居での生活',

    link: 'https://youtube.com/results?search_query=モンゴル+ゲル宿泊'

  }, {

    icon: <Users className="w-6 h-6" />,

    title: '遊牧民文化',

    desc: '大自然と共に生きる知恵',

    link: 'https://youtube.com/results?search_query=モンゴル+遊牧民'

  }, {

    icon: <BookOpen className="w-6 h-6" />,

    title: '仏教文化',

    desc: 'チベット仏教の寺院巡り',

    link: 'https://youtube.com/results?search_query=モンゴル+仏教'

  }, {

    icon: <Mountain className="w-6 h-6" />,

    title: '乗馬',

    desc: '果てしない大草原を駆ける',

    link: 'https://youtube.com/results?search_query=モンゴル+乗馬'

  }, {

    icon: <Fish className="w-6 h-6" />,

    title: '釣り',

    desc: '手つかずの清流で巨大魚を狙う',

    link: 'https://youtube.com/results?search_query=モンゴル+釣り'

  }, {

    icon: <Camera className="w-6 h-6" />,

    title: '高山植物',

    desc: '短い夏に咲き誇る可憐な花々',

    link: 'https://youtube.com/results?search_query=モンゴル+高山植物'

  }, {

    icon: <Bird className="w-6 h-6" />,

    title: 'バードウォッチング',

    desc: '希少な渡り鳥の観察',

    link: 'https://youtube.com/results?search_query=モンゴル+バードウォッチング'

  }];



  const detailedDestinations = [

    {

      id: 1,

      title: 'テレルジ自国立公園',

      subtitle: 'Terelj National Park',

      image: 'https://images.unsplash.com/photo-1695554468837-35c3c3b1ee66',

      content: (

        <div className="space-y-4 text-muted-foreground leading-relaxed">

          <p>

            ウランバートルの東50～76kmに位置し、美しい自然と、岩だらけの斜面を持つ独特の山岳地帯に恵まれた地域です。標高2,000m級の山々や広大な草原、森林地帯が広がります。

          </p>

          <p>

            エーデルワイスの白い花や唐松、松、柳、ドロノキなど珍しい木や高山植物が多く見られ、さまざまな蝶々が生息しています。また、公園内には「亀岩」「ラクダ岩」といった奇岩群や、チベット仏教のアリヤバル寺院など歴史的名所も点在し、自然と文化が融合した魅力的なスポットです。

          </p>

          <p>

            乗馬やハイキングなどのアクティビティに、ツーリストキャンプも整備された避暑地となっています。

          </p>

         <div className="grid grid-cols-3 gap-4 pt-6">

  {[

    "https://i.postimg.cc/JztJJ2h5/terelj-national-park-tour.jpg",

    "https://i.postimg.cc/9QS9BY4t/terelj-weekend.jpg",

    "https://i.postimg.cc/2SJWx7qw/thumb-1555-default-big.jpg"

  ].map((img, index) => (

    <div key={index}>

      <img

        src={img}

        alt={`Terelj ${index + 1}`}

        onClick={() => setSelectedImage(img)}

        className="w-full h-[180px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

      />

    </div>

  ))}

</div>





        </div>

      )

    },

    {

      id: 2,

      title: 'フブスグル湖',

      subtitle: 'Khövsgöl Lake',

      image: '/images/k1 copy.png',

      content: (

        <div className="space-y-4 text-muted-foreground leading-relaxed">

          <p>

            「モンゴルのスイス」という愛称で有名なフブスグル湖は、モンゴルで美しい自然が広がる湖です。琵琶湖の4倍、面積2612㎢（アジア大陸2番目）、周囲136㎞、幅39㎞、深さはアジア最深の245ｍを誇ります。

          </p>

          <p>

            モンゴル人はこの湖を「母なる海」として深く尊敬しており、現在世界遺産への登録を目指しています。

          </p>

          <p>

            大自然の絶景を楽しめると共に、周辺に暮らすトナカイ族（ツァータン）の独自の文化を体験できる貴重な場所でもあります。

          </p>

          {/* SUB IMAGES */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  <img

    src="https://i.postimg.cc/brrSvYGh/181577e4-a70a-4729-bdd5-e323318b8204-galle-2-lakeshore.jpg"

    alt="Khovsgol 1"

    onClick={() => setSelectedImage("https://i.postimg.cc/brrSvYGh/181577e4-a70a-4729-bdd5-e323318b8204-galle-2-lakeshore.jpg")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />



  <img

    src="https://i.postimg.cc/4yyH34Kf/khovsgol-national-park-mongolia.jpg"

    alt="Khovsgol 2"

    onClick={() => setSelectedImage("https://i.postimg.cc/4yyH34Kf/khovsgol-national-park-mongolia.jpg")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />



  <img

              src="https://i.postimg.cc/V6CLZSbj/GERto-GER-Geotourism-Mongolia-Horseback-Riding-and-Nomadic-Lifestyle-at-Khuvsgul-Lake-2.webp"

    alt="Khovsgol 3"

              onClick={() => setSelectedImage("https://i.postimg.cc/V6CLZSbj/GERto-GER-Geotourism-Mongolia-Horseback-Riding-and-Nomadic-Lifestyle-at-Khuvsgul-Lake-2.webp")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />

</div>

        </div>

      )

    },

    {

      id: 3,

      title: 'カラコルム',

      subtitle: 'Karakorum',

      image: '/images/ko1 copy.png',

      content: (

        <div className="space-y-4 text-muted-foreground leading-relaxed">

          <p>

            カラコルムは、かつてのモンゴル帝国の首都であり、マルコポーロがフビライハンに謁見し「東方見聞録」に記した古都として有名です。

          </p>

          <p>

            13世紀に世界中の熟練工や建築家が集まって都市が建設され、貿易・政治・文化の中心地として栄えました。当時の繁栄を示す貴重な遺物や歴史が学べるカラコルム歴史博物館は必見です。

          </p>

          <p>

            また、遊牧民の2000年以上の伝統を伝えるオルホン渓谷の様々なモニュメントなど、自然と共存するモンゴルのかつての栄光を存分に堪能できます。

          </p>

          {/* SUB IMAGES */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  <img

              src="https://i.postimg.cc/PqB2ncPJ/Screenshot-2026-05-17-at-20-15-52.png"

    alt="Karakorum 1"

              onClick={() => setSelectedImage("https://i.postimg.cc/PqB2ncPJ/Screenshot-2026-05-17-at-20-15-52.png")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />



  <img

              src="https://i.postimg.cc/1twMmHqt/Screenshot-2026-05-17-at-20-16-00.png"

    alt="Karakorum 2"

              onClick={() => setSelectedImage("https://i.postimg.cc/1twMmHqt/Screenshot-2026-05-17-at-20-16-00.png")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />



  <img

              src="https://i.postimg.cc/SsCVSrMR/Screenshot-2026-05-17-at-20-16-07.png"

    alt="Karakorum 3"

              onClick={() => setSelectedImage("https://i.postimg.cc/SsCVSrMR/Screenshot-2026-05-17-at-20-16-07.png")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />

</div>

        </div>

      )

    },

    {

      id: 4,

      title: 'ゴビ砂漠',

      subtitle: 'Gobi Desert',

      image: '/images/g1 copy.png',

      content: (

        <div className="space-y-4 text-muted-foreground leading-relaxed">

          <p>

            モンゴルゴビ砂漠（ゴビさばく）は、モンゴル南部から中国北西部に広がる、世界で5番目に大きい砂漠です。モンゴル語で「草がまばらに生える砂地」を意味するゴビは、広大な砂漠地帯でありながら多様な顔を持っています。

          </p>

          <ul className="space-y-3 mt-4">

            <li className="flex items-start gap-3">

              <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />

              <span><strong className="text-foreground">多様な景観:</strong> 砂漠、砂利、岩、草原、森林など、様々な自然が広がっています。</span>

            </li>

            <li className="flex items-start gap-3">

              <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />

              <span><strong className="text-foreground">動物と植物:</strong> ゴビ砂漠に生息する動物や植物は、乾燥に耐える独特の生態系を形成しています。</span>

            </li>

            <li className="flex items-start gap-3">

              <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />

              <span><strong className="text-foreground">恐竜化石:</strong> 恐竜の化石が豊富に発見される場所として世界的に有名です。</span>

            </li>

            <li className="flex items-start gap-3">

              <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />

              <span><strong className="text-foreground">観光:</strong> その壮大な景観と多様な自然、そして恐竜化石などが観光客を引き寄せる人気スポットです。</span>

            </li>

          </ul>

          <p className="mt-4">

            その広さ、多様な景観、そして独特の生態系が特徴です。観光客は、砂漠の冒険を楽しんだり、恐竜の化石を見学したりすることができます。

          </p>

          {/* SUB IMAGES */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">



  <img

    src="https://i.postimg.cc/2jB35tyK/Screenshot-2026-05-17-at-20-23-43.png"

    alt="Gobi 1"

    onClick={() => setSelectedImage("https://i.postimg.cc/2jB35tyK/Screenshot-2026-05-17-at-20-23-43.png")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />



  <img

    src="https://i.postimg.cc/3r6J5FZG/999ace19-0687-48ef-8f0f-ef0bef636d03-The-enigmatic-beauty-of-the-001-1440x0.jpg"

    alt="Gobi 2"

    onClick={() => setSelectedImage("https://i.postimg.cc/3r6J5FZG/999ace19-0687-48ef-8f0f-ef0bef636d03-The-enigmatic-beauty-of-the-001-1440x0.jpg")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />



  <img

    src="https://i.postimg.cc/MZ4K2mYR/b6d9517e-a157-4590-93c3-a8ee6bafa032-HGK0608.jpg"

    alt="Gobi 3"

    onClick={() => setSelectedImage("https://i.postimg.cc/MZ4K2mYR/b6d9517e-a157-4590-93c3-a8ee6bafa032-HGK0608.jpg")}

    className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

  />



</div>

        </div>

      )

    },

    {

      id: 5,

      title: 'アルタイ山脈',

      subtitle: 'Altai Mountains',

      image: '/images/a1 copy.png',

      content: (

        <div className="space-y-6 text-muted-foreground leading-relaxed">

          <p>

            ユーラシア大陸の中央にそびえるアルタイ山脈は、モンゴル西部に広がる壮大な山岳地帯。標高4,000メートルを超える峰々、氷河を湛える谷、手つかずの自然が広がるこの地は、まさに冒険心をかきたてる秘境です。

          </p>

          <div className="space-y-2">

            <h4 className="text-lg font-bold text-foreground">大自然が織りなす絶景</h4>

            <p>

              モンゴル最高峰「フイテン山（4,374m）」に登れば、ロシア・中国・カザフスタンとの国境を望むことができます。純白の氷河、エメラルドグリーンの湖、広大な草原と砂漠が折り重なる風景は、息をのむ美しさ。トレッキング、乗馬、キャンプなどのアウトドア体験も豊富です。

            </p>

          </div>



          <div className="space-y-2">

            <h4 className="text-lg font-bold text-foreground">遊牧文化とともに生きる旅</h4>

            <p>

              この地域はカザフ系の遊牧民が多く暮らし、伝統的なゲル（移動式住居）でのホームステイ体験が可能。名物「イーグル・ハンティング（鷹狩り）」は、現地の鷹匠とともに体験・見学できる貴重な文化遺産です。

            </p>

          </div>



          <div className="space-y-2">

            <h4 className="text-lg font-bold text-foreground">貴重な文化遺産の宝庫</h4>

            <p>

              アルタイ山脈は、先史時代の人々が刻んだ岩絵（ペトログリフ）が点在する、世界的にも貴重な文化遺産の宝庫です。特に有名なのが、ツァガーン・サラー岩絵群とシャーヴィーン・ホトゴ岩絵群で、ユネスコ世界文化遺産に登録されています。

            </p>

            <p>

              岩肌に彫られた数千もの動物・狩猟・祭礼の図像は、紀元前1万年以上前から刻まれてきたものとされ、中央アジア最古級の人類の足跡といわれています。現地ガイドとともに探索する岩絵ツアーでは、当時の暮らしや信仰に想いを馳せることができます。

            </p>

            {/* SUB IMAGES */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">



              <img

                src="https://i.postimg.cc/QCRTFGZd/Screenshot-2026-05-17-at-20-28-24.png"

                alt="Altai 1"

                onClick={() => setSelectedImage("https://i.postimg.cc/QCRTFGZd/Screenshot-2026-05-17-at-20-28-24.png")}

                className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

              />



              <img

                src="https://i.postimg.cc/kMZ8186Q/Screenshot-2026-05-17-at-20-28-30.png"

                alt="Altai 2"

                onClick={() => setSelectedImage("https://i.postimg.cc/kMZ8186Q/Screenshot-2026-05-17-at-20-28-30.png")}

                className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

              />



              <img

                src="https://i.postimg.cc/Zn1dWtzv/Screenshot-2026-05-17-at-20-28-42.png"

                alt="Altai 3"

                onClick={() => setSelectedImage("https://i.postimg.cc/Zn1dWtzv/Screenshot-2026-05-17-at-20-28-42.png")}

                className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

              />



              <img

                src="https://i.postimg.cc/59Gv7vYS/Screenshot-2026-05-17-at-20-28-58.png"

                alt="Altai 4"

                onClick={() => setSelectedImage("https://i.postimg.cc/59Gv7vYS/Screenshot-2026-05-17-at-20-28-58.png")}

                className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

              />



              <img

                src="https://i.postimg.cc/dQXdHdkm/Screenshot-2026-05-17-at-20-29-08.png"

                alt="Altai 5"

                onClick={() => setSelectedImage("https://i.postimg.cc/dQXdHdkm/Screenshot-2026-05-17-at-20-29-08.png")}

                className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

              />



              <img

                src="https://i.postimg.cc/FKBcMJC7/Screenshot-2026-05-17-at-20-29-17.png"

                alt="Altai 6"

                onClick={() => setSelectedImage("https://i.postimg.cc/FKBcMJC7/Screenshot-2026-05-17-at-20-29-17.png")}

                className="w-full h-[240px] object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"

              />



            </div>

          </div>

        </div>

      )

    }

  ];



  const deluxeImages = [

    { src: '/images/p1.png', alt: '夕暮れのキャンプ風景' },

    { src: '/images/p2 copy.png', alt: 'エントランス' },

    { src: '/images/p3.png', alt: 'インテリア' },

    { src: '/images/p4.png', alt: '星空' },

    { src: '/images/p5.png', alt: 'インテリア' },

    { src: '/images/p6.png', alt: 'バスルーム' }

  ];



  const standardImages = [

    { src: '/images/s1.png' },

    { src: '/images/s2.png' },

    { src: '/images/s3.png' },

    { src: '/images/s4.png' },

    { src: '/images/s5.png' }

  ];



  return (

    <>

      <Helmet>

        <title>モンゴル観光ガイド - 魅力、体験、おすすめスポット | モンゴル観光</title>

        <meta name="description" content="モンゴルの観光地の長所と短所、基本情報、体験できるアクティビティ、おすすめ観光スポット5選、ゲルキャンプの選び方をご紹介します。" />

      </Helmet>



      <div className="min-h-screen flex flex-col bg-background">

        <Header />



        {/* Hero Section */}

        <section className="relative py-24 bg-muted/30 border-b border-border overflow-hidden">

          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1691219571875-edbc9ae22c50')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>

                モンゴルの観光

              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">

                大自然と遊牧民の文化が息づく国、モンゴル。その魅力とリアルな姿を徹底解説します。

              </p>

            </motion.div>

          </div>

        </section>



        {/* SECTION 1: Strengths and Weaknesses */}

        <section className="py-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-4">モンゴルの観光地の長点と弱点</h2>

              <p className="text-muted-foreground">リアルな視点でモンゴル観光の特徴を分析します。</p>

            </motion.div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Strengths */}

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-success-tint rounded-3xl p-8 md:p-10 border border-success/20">

                <div className="flex items-center gap-3 mb-8">

                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">

                    <CheckCircle2 className="w-6 h-6 text-success" />

                  </div>

                  <h3 className="text-2xl font-bold text-foreground">長点 (Strengths)</h3>

                </div>

                <ul className="space-y-6">

                  <li className="flex items-start gap-4">

                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm">

                      <span className="text-success font-bold">1</span>

                    </div>

                    <div>

                      <h4 className="font-bold text-lg text-foreground mb-1">豊かな自然景観</h4>

                      <p className="text-muted-foreground">果てしなく続く大草原、満天の星空、手つかずの大自然を独り占めできます。</p>

                    </div>

                  </li>

                  <li className="flex items-start gap-4">

                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm">

                      <span className="text-success font-bold">2</span>

                    </div>

                    <div>

                      <h4 className="font-bold text-lg text-foreground mb-1">ユニークな文化体験</h4>

                      <p className="text-muted-foreground">ゲルでの宿泊や遊牧民との交流など、他国では味わえない独自の体験が可能です。</p>

                    </div>

                  </li>

                  <li className="flex items-start gap-4">

                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm">

                      <span className="text-success font-bold">3</span>

                    </div>

                    <div>

                      <h4 className="font-bold text-lg text-foreground mb-1">親日の国</h4>

                      <p className="text-muted-foreground">日本に対して非常に友好的で、治安も比較的良く、安心して旅行を楽しめます。</p>

                    </div>

                  </li>

                </ul>

              </motion.div>



              {/* Weaknesses */}

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-info-tint rounded-3xl p-8 md:p-10 border border-info/20">

                <div className="flex items-center gap-3 mb-8">

                  <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center">

                    <AlertTriangle className="w-6 h-6 text-info" />

                  </div>

                  <h3 className="text-2xl font-bold text-foreground">弱点 (Weaknesses)</h3>

                </div>

                <ul className="space-y-6">

                  <li className="flex items-start gap-4">

                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm">

                      <span className="text-info font-bold">1</span>

                    </div>

                    <div>

                      <h4 className="font-bold text-lg text-foreground mb-1">インフラの未整備</h4>

                      <p className="text-muted-foreground">地方では舗装道路が少なく、移動に時間がかかります。水回りなどの設備も限定的です。</p>

                    </div>

                  </li>

                  <li className="flex items-start gap-4">

                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm">

                      <span className="text-info font-bold">2</span>

                    </div>

                    <div>

                      <h4 className="font-bold text-lg text-foreground mb-1">気候による制限</h4>

                      <p className="text-muted-foreground">冬は極寒となるため、観光のベストシーズンが夏（6月〜9月）に限定されがちです。</p>

                    </div>

                  </li>

                  <li className="flex items-start gap-4">

                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm">

                      <span className="text-info font-bold">3</span>

                    </div>

                    <div>

                      <h4 className="font-bold text-lg text-foreground mb-1">知名度の低さ</h4>

                      <p className="text-muted-foreground">国際的な観光地としての認知度がまだ低く、情報収集が難しい場合があります。</p>

                    </div>

                  </li>

                </ul>

              </motion.div>

            </div>

          </div>

        </section>



        {/* SECTION 2: What Kind of Country is Mongolia? */}

        <section className="py-20 bg-muted/50 border-y border-border">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-4">モンゴルはどんな国？</h2>

              <p className="text-muted-foreground">ユーラシア大陸の中心に位置する、広大な国土を持つ内陸国です。</p>

            </motion.div>



            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Facts Grid */}

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">

                    <MapPin className="w-4 h-4" />

                    <span className="text-sm font-medium">国名</span>

                  </div>

                  <p className="font-bold text-foreground">モンゴル国</p>

                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">

                    <MapPin className="w-4 h-4" />

                    <span className="text-sm font-medium">首都</span>

                  </div>

                  <p className="font-bold text-foreground">ウランバートル</p>

                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">

                    <Users className="w-4 h-4" />

                    <span className="text-sm font-medium">人口</span>

                  </div>

                  <p className="font-bold text-foreground">約340万人</p>

                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">

                    <Languages className="w-4 h-4" />

                    <span className="text-sm font-medium">言語</span>

                  </div>

                  <p className="font-bold text-foreground">モンゴル語</p>

                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">

                    <BookOpen className="w-4 h-4" />

                    <span className="text-sm font-medium">宗教</span>

                  </div>

                  <p className="font-bold text-foreground">チベット仏教</p>

                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">

                    <Coins className="w-4 h-4" />

                    <span className="text-sm font-medium">通貨</span>

                  </div>

                  <p className="font-bold text-foreground">トゥグルグ (MNT)</p>

                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm sm:col-span-2">

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">

                    <Maximize className="w-4 h-4" />

                    <span className="text-sm font-medium">面積</span>

                  </div>

                  <p className="font-bold text-foreground">156万4,100平方キロメートル（日本の約4倍）</p>

                </div>

              </div>



              {/* Map Image */}

              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-border shadow-md min-h-[400px]">

                <img src="https://images.unsplash.com/photo-1650990416698-071dd53df491" alt="モンゴルの風景と地図" className="absolute inset-0 w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="bg-background/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 inline-block">

                    <p className="text-sm font-medium text-foreground">

                      ロシアと中国に挟まれた内陸国。東アジアの日本や韓国からも比較的アクセスしやすい位置にあります。

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* SECTION 3: What Can You Experience? */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">モンゴルで体験できることは？</h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

                大自然と伝統文化が織りなす、多彩なアクティビティの数々。

              </p>

            </motion.div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

              {experiences.map((exp, index) => (

                <motion.a key={index} href={exp.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="tourism-card group flex flex-col h-full p-6">

                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">

                    {exp.icon}

                  </div>

                  <h3 className="font-bold text-foreground mb-2">{exp.title}</h3>

                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{exp.desc}</p>

                  <div className="flex items-center gap-2 text-sm font-medium text-primary mt-auto">

                    <PlayCircle className="w-4 h-4" />

                    <span>動画を見る</span>

                  </div>

                </motion.a>

              ))}

            </div>

          </div>

        </section>



        {/* SECTION 4: Detailed Tourism Spots (Zig-Zag Layout) */}

        <section className="py-24 bg-muted/30 border-y border-border">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">モンゴルおすすめ観光スポット5選</h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

                絶対に訪れたい、モンゴルを代表する絶景スポットを厳選しました。それぞれの魅力と見どころを詳しくご紹介します。

              </p>

            </motion.div>



            <div className="space-y-24 md:space-y-32">

              {detailedDestinations.map((dest, index) => (

                <motion.article 

                  key={dest.id} 

                  initial={{ opacity: 0, y: 40 }} 

                  whileInView={{ opacity: 1, y: 0 }} 

                  viewport={{ once: true, margin: "-100px" }} 

                  transition={{ duration: 0.6 }} 

                  className={`flex flex-col gap-10 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}

                >

                  {/* Image Side */}

                  <div className="w-full lg:w-1/2">

                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border aspect-[4/3] lg:aspect-square">

                      <img 

                        src={dest.image} 

                        alt={dest.title} 

                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 

                      />

                      <div className="absolute top-6 left-6 w-14 h-14 bg-background/90 backdrop-blur text-foreground rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg border border-border/50">

                        {dest.id}

                      </div>

                    </div>

                  </div>



                  {/* Content Side */}

                  <div className="w-full lg:w-1/2 flex flex-col justify-center">

                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">

                      {dest.title}

                    </h3>

                    <p className="text-lg font-medium text-muted-foreground mb-8 tracking-wide uppercase">

                      {dest.subtitle}

                    </p>

                    <div className="prose prose-slate dark:prose-invert max-w-none">

                      {dest.content}

                    </div>

                  </div>

                </motion.article>

              ))}

            </div>

          </div>

        </section>



        {/* SECTION 5: Ger Camp */}

        <section className="py-24 relative">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ゲルキャンプでの宿泊</h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

                モンゴル観光の醍醐味であるゲル宿泊。ニーズに合わせて選べる2つのスタイルをご紹介します。

              </p>

            </motion.div>



            <div className="space-y-16">

              {/* Deluxe Ger Section - Luxury Redesign */}

              <motion.div 

                initial={{ opacity: 0, y: 20 }} 

                whileInView={{ opacity: 1, y: 0 }} 

                viewport={{ once: true }}

                className="bg-luxury-dark text-[hsl(var(--luxury-dark-foreground))] rounded-3xl border border-luxury-gold/20 overflow-hidden shadow-2xl relative"

              >

                {/* Decorative background glow */}

                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--luxury-gold))]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="p-8 md:p-12 lg:p-16 relative z-10">

                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Content Side */}

                    <div className="lg:w-1/3">

                      <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">

                        <Sparkles className="w-4 h-4" />

                        Premium Experience

                      </div>

                      <h3 className="text-3xl md:text-4xl font-serif-elegant text-white mb-6 leading-tight">

                        デラックス<br />ゲルキャンプ

                      </h3>

                      <p className="text-[hsl(var(--luxury-dark-foreground))]/80 leading-relaxed mb-8">

                        洗練されたデザインと優れたサービスを提供する高級志向のキャンプ。専用のシャワーやトイレ、床暖房などの近代的な設備が整っており、大自然の中でもホテル並みの快適な滞在が可能です。

                      </p>

                      <ul className="space-y-4">

                        <li className="flex items-center gap-4 border-b border-white/10 pb-4">

                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">

                            <Star className="w-5 h-5 text-luxury-gold" />

                          </div>

                          <div>

                            <span className="block text-sm font-bold text-white">専用バスルーム完備</span>

                            <span className="block text-xs text-[hsl(var(--luxury-dark-foreground))]/60 mt-1">プライベートな空間でリフレッシュ</span>

                          </div>

                        </li>

                        <li className="flex items-center gap-4 border-b border-white/10 pb-4">

                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">

                            <Coffee className="w-5 h-5 text-luxury-gold" />

                          </div>

                          <div>

                            <span className="block text-sm font-bold text-white">上質なダイニング</span>

                            <span className="block text-xs text-[hsl(var(--luxury-dark-foreground))]/60 mt-1">専属シェフによる本格的な食事</span>

                          </div>

                        </li>

                        <li className="flex items-center gap-4">

                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">

                            <Moon className="w-5 h-5 text-luxury-gold" />

                          </div>

                          <div>

                            <span className="block text-sm font-bold text-white">快適な空調設備</span>

                            <span className="block text-xs text-[hsl(var(--luxury-dark-foreground))]/60 mt-1">床暖房完備で夜間も心地よく</span>

                          </div>

                        </li>

                      </ul>

                    </div>



                    {/* Image Grid Side */}

                    <div className="lg:w-2/3 w-full">

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

                        {deluxeImages.map((img, idx) => (

                          <div key={idx} onClick={() => setSelectedImage(img.src)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedImage(img.src); }} className="luxury-img-card aspect-[4/5] group cursor-zoom-in">

                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

                              <span className="text-white font-medium text-sm drop-shadow-md">

                                {img.alt}

                              </span>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>



                  </div>

                </div>

              </motion.div>



              {/* Standard Ger Section - Upgraded to Luxury Aesthetic */}

              <motion.div 

                initial={{ opacity: 0, y: 20 }} 

                whileInView={{ opacity: 1, y: 0 }} 

                viewport={{ once: true }}

                className="bg-luxury-dark text-[hsl(var(--luxury-dark-foreground))] rounded-3xl border border-luxury-gold/20 overflow-hidden shadow-2xl relative"

              >

                {/* Decorative background glow - positioned differently from Deluxe */}

                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--luxury-gold))]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

                <div className="p-8 md:p-12 lg:p-16 relative z-10">

                  <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">

                    {/* Content Side */}

                    <div className="lg:w-1/3">

                      <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">

                        <Tent className="w-4 h-4" />

                        Authentic Heritage

                      </div>

                      <h3 className="text-3xl md:text-4xl font-serif-elegant text-white mb-6 leading-tight">

                        スタンダード<br />ゲルキャンプ

                      </h3>

                      <p className="text-[hsl(var(--luxury-dark-foreground))]/80 leading-relaxed mb-8">

                        遊牧民の伝統的な生活様式を、洗練された空間で追体験。薪ストーブの柔らかな暖かさと共に、大自然との深いつながりを感じる、本物志向のプレミアムな滞在をお約束します。

                      </p>

                      <ul className="space-y-4">

                        <li className="flex items-center gap-4 border-b border-white/10 pb-4">

                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">

                            <Flame className="w-5 h-5 text-luxury-gold" />

                          </div>

                          <div>

                            <span className="block text-sm font-bold text-white">伝統的な薪ストーブ</span>

                            <span className="block text-xs text-[hsl(var(--luxury-dark-foreground))]/60 mt-1">心地よい暖かさと揺らぐ炎の癒し</span>

                          </div>

                        </li>

                        <li className="flex items-center gap-4 border-b border-white/10 pb-4">

                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">

                            <Compass className="w-5 h-5 text-luxury-gold" />

                          </div>

                          <div>

                            <span className="block text-sm font-bold text-white">遊牧民文化の追体験</span>

                            <span className="block text-xs text-[hsl(var(--luxury-dark-foreground))]/60 mt-1">大自然と調和する本物のモンゴルライフ</span>

                          </div>

                        </li>

                        <li className="flex items-center gap-4">

                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">

                            <Sparkles className="w-5 h-5 text-luxury-gold" />

                          </div>

                          <div>

                            <span className="block text-sm font-bold text-white">清潔な共有ファシリティ</span>

                            <span className="block text-xs text-[hsl(var(--luxury-dark-foreground))]/60 mt-1">自然の中での快適性を追求した設備</span>

                          </div>

                        </li>

                      </ul>

                    </div>



                    {/* Image Grid Side */}

                    <div className="lg:w-2/3 w-full">

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

                        {standardImages.map((img, idx) => (

                          <div key={idx} onClick={() => setSelectedImage(img.src)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedImage(img.src); }} className="luxury-img-card aspect-[4/5] group cursor-zoom-in">

                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

                              <span className="text-white font-medium text-sm drop-shadow-md">

                                {img.alt}

                              </span>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>



                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>



        {/* SECTION 6: Photo Gallery */}



        {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="拡大画像"
        >
          <button
            type="button"
            aria-label="閉じる"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-5 z-10 text-white text-4xl font-light hover:opacity-70"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="拡大画像"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />

      </div>

    </>

  );

}



export default TourismPage;