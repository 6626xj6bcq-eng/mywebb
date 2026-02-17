
import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { label: '首页', href: '#home' },
    { label: '关于我', href: '#about' },
    { label: '个人经历', href: '#experience' },
    { label: '项目', href: '#projects' },
  ];

  return (
    <header className="sticky top-0 z-50 p-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4 wood-panel px-4 py-2 shadow-lg">
          <div className="w-10 h-10 border-4 border-[#4a3020] bg-white overflow-hidden">
            <img src="/avatar.png" alt="Logo" className="w-full h-full object-contain smooth-image" />
          </div>
          <span className="font-bold text-2xl tracking-wide uppercase hidden sm:inline text-[#fef3c7]">IAN'S VALLEY</span>
        </div>
        
        {/* Navigation Tabs as Pixel Blocks */}
        <div className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="pixel-btn px-3 py-2 md:px-6 md:py-3 text-lg md:text-xl font-bold flex items-center justify-center hover:scale-105 transition-transform"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu hint or placeholder if needed, currently fits 4 tabs well */}
        <div className="md:hidden ml-2">
          <span className="text-3xl">🎒</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
