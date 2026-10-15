import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Mountain, Tent, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import DestinationCard from '@/components/DestinationCard.jsx';

function HomePage() {
  const heroImage =
    'https://i.postimg.cc/SRFsG1Bm/2.png';

  const featuredDestinations = [
    {
      image: 'https://images.unsplash.com/photo-1691219571875-edbc9ae22c50',
      title: 'ゴビ砂漠',
      description: '世界で最も美しい砂漠の一つ。広大な砂丘と独特の地形が織りなす絶景をお楽しみください。'
    },
    {
      image: 'https://images.unsplash.com/photo-1695554468837-35c3c3b1ee66',
      title: 'フスタイン・ヌルー国立公園',
      description: '野生のモウコノウマが生息する美しい草原。モンゴルの自然を間近で体験できます。'
    },
    {
      image: 'https://images.unsplash.com/photo-1695126316077-ea8470db0ea6',
      title: 'フブスグル湖',
      description: 'モンゴルの青い真珠と呼ばれる美しい湖。透明度の高い水と周囲の山々が絶景を作り出します。'
    }
  ];

  return (
    <>
      <Helmet>
        <title>モンゴル観光・投資情報 - 草原と文化の国へようこそ</title>
        <meta
          name="description"
          content="モンゴルの美しい自然、豊かな歴史、投資情報、独特の文化を体験してください。忘れられない旅と新たなビジネスチャンスがあなたを待っています。"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col w-full bg-background">
        <Header />

        {/* Hero Section */}
        <section className="w-full bg-white pt-0 overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
          <picture>
            <img
              src={heroImage}
              alt="モンゴル投資ガイド - 投資支援、企業設立、ローカルネットワーク、コンサルティングサービス"
              className="w-full h-auto block object-contain"
            />
          </picture>
        </section>

       
        <Footer />
      </div>
    </>
  );
}

export default HomePage;