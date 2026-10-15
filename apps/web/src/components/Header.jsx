import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navData = [
  {
    id: 'investment',
    label: '経済・投資関連情報',
    path: '/investment',
    subItems: [
      { label: ' 政治体制', path: '/investment/political-system' },
      { label: ' 経済', path: '/investment/economy' },
      { label: ' 日本からの直接投資', path: '/investment/japan-direct-investment' },
      { label: ' 進出について', path: '/investment/about-entry' },
    ]
  },
  {
    id: 'tourism',
    label: '観光',
    path: '/tourism',
    subItems: []
  }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileExpand = (id) => {
    setMobileExpanded(mobileExpanded === id ? null : id);
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80 z-50">
        <img
              src="https://i.postimg.cc/Y0Cr9Gr0/Screenshot-2026-05-14-at-13-49-43-removebg-preview.png"
  alt="Logo"
  className="w-12 h-12 object-contain"
/>
            <span className="text-xl font-bold text-foreground">RUSERO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-stretch h-full gap-2">
            {navData.map((item) => (
              <div
                key={item.id}
                className="relative flex items-center h-full px-2"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive(item.path) ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                  {item.subItems.length > 0 && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.id && item.subItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[calc(100%-0.5rem)] left-0 min-w-[280px] bg-card rounded-xl shadow-xl border border-border overflow-hidden py-2"
                    >
                      {item.subItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          to={subItem.path}
                          className="group flex items-center px-4 py-2.5 text-sm font-medium text-card-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Other main links */}
            <div className="flex items-center h-full ml-4 border-l border-border pl-4 gap-1">
           
              <Link to="/contact" className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${isActive('/contact') ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-muted'}`}>お問い合わせ</Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navData.map((item) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex-1 px-4 py-3 rounded-lg font-bold text-sm transition-colors ${
                        isActive(item.path) ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.subItems.length > 0 && (
                      <button
                        onClick={() => toggleMobileExpand(item.id)}
                        className="p-3 text-muted-foreground hover:text-foreground"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === item.id ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {mobileExpanded === item.id && item.subItems.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-primary/20 ml-4">
                          {item.subItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center px-4 py-2.5 text-sm font-medium text-muted-foreground rounded-lg transition-colors hover:bg-muted hover:text-foreground"
                            >
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Standard Links for Mobile */}
              <div className="pt-4 mt-4 border-t border-border flex flex-col gap-1">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted">ホーム</Link>
             
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted">お問い合わせ</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;