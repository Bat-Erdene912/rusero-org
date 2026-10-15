
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'メールアドレス',
      content: 'amarsanaa1206@gmail.com',
      link: 'mailto:amarsanaa1206@gmail.com'
    },
    {
      icon: Phone,
      title: '電話番号',
      content: '+976 88086091',
      link: 'tel:+97688086091'
    },
    {
      icon: MapPin,
      title: '住所',
      content:
        'ウランバートルのZMUB/ULN空港、21st Khoroo、Khan-Uul District、Ulaanbaatar 17121、モンゴル',
      link: null
    },
    {
      icon: Clock,
      title: '営業時間',
      content: '月曜日 - 金曜日: 9:00 - 18:00',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          お問い合わせ | RUSERO
        </title>
        <meta
          name="description"
          content="経済・投資およびモンゴル旅行に関するお問い合わせはこちらから。お気軽にご連絡ください。"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-center"
                style={{ letterSpacing: '-0.02em' }}
              >
                お問い合わせ
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center px-2">
                経済・投資に関するご質問やご相談は、お気軽にお問い合わせください。
                <br className="hidden md:block" />
                専門スタッフが丁寧にお答えいたします。
                <br className="hidden md:block" />
                モンゴル旅行に関するお問い合わせも承っております。
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT INFORMATION SECTION */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  連絡先情報
                </h2>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto text-center px-2">
                  以下の方法でもお問い合わせいただけます。
                  <br className="hidden sm:block" />
                  お電話またはメールにて、お気軽にご連絡ください。
                </p>

                {/* CONTACT CARDS */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 * index
                        }}
                        className="relative flex items-center justify-center min-h-[90px] p-4 sm:p-5 rounded-xl bg-muted transition-all duration-200 hover:bg-muted/80"
                      >
                        {/* ICON */}
                        <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>

                        {/* TEXT */}
                        <div className="w-full text-center px-10 sm:px-16">
                          <h3 className="font-semibold text-foreground mb-1 text-center">
                            {info.title}
                          </h3>

                          {info.link ? (
                            <a
                              href={info.link}
                              className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base break-words text-center"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed break-words text-center">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                アクセス
              </h2>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center px-2">
                ウランバートル市内に事務所がございます
              </p>
            </motion.div>

            {/* GOOGLE MAP */}
            <div className="w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-lg bg-background">
              <iframe
                title="RUSERO アクセス"
                src="https://www.google.com/maps?q=Buyant-Ukhaa+International+Airport,+Khan-Uul+District,+Ulaanbaatar,+Mongolia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
