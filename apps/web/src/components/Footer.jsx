import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
function Footer() {
  return <footer className="bg-card text-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">RUSERO</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              モンゴルの美しい自然、豊かな文化、そして成長を続ける投資機会を体験してください。
            </p>
          </div>

          {/* Quick Links */}
        

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">お問い合わせ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">amarsanaa1206@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+976 88086091</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">モンゴル国、ウランバートル市、
ハンウール区、ブヤント・ウハー空港、2-223</span>
              </div>
            </div>
            
          
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Copyright © 2024 Rusero
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                プライバシーポリシー
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;