
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Title Box */}
      <div className="relative z-10 p-8 mb-12 transform -rotate-1">
        <div className="bg-[#fce7cf] border-[6px] border-[#4a3020] p-4 relative mb-4">
            <h1 className="text-4xl md:text-6xl font-black text-[#4a3020] tracking-tighter mb-2" style={{ textShadow: '4px 4px 0px #fff' }}>
                欢迎来到<br/>杨竣成的 <span className="text-[#065f46] inline-block transform hover:scale-105 transition-transform cursor-pointer" style={{ textShadow: '2px 2px 0px #fff' }}>游戏世界</span>
            </h1>
            <div className="absolute -top-6 -right-6 text-5xl">☀️</div>
        </div>
        <p className="text-xl md:text-2xl font-bold text-[#4a3020] bg-white/40 px-4 py-1 inline-block">
          独立游戏设计师 · 游戏体验分析师 · 骨灰级游戏热爱者
        </p>
      </div>

      {/* Decorative Pixel Elements */}
      <div className="flex gap-8 items-end mb-12">
        <div className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🌲</div>
        <div className="text-8xl transition-all hover:scale-110 cursor-pointer">🏠</div>
        <div className="text-5xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌳</div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 relative z-10">
        <a href="#about" className="px-10 py-4 pixel-btn text-2xl font-bold inline-block">
          Enter My Valley
        </a>
        <a href="#projects" className="px-10 py-4 bg-[#8b5a2b] border-4 border-[#4a3020] text-white text-2xl font-bold shadow-[0_4px_0_#4a3020] hover:translate-y-1 hover:shadow-none transition-all inline-block">
          Inventory
        </a>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#5c4033] border-t-8 border-[#4a3020]">
        <div className="flex justify-around items-end h-full text-4xl pb-2">
            <span>🌱</span><span>🌿</span><span>🌱</span><span>🪴</span><span>🌱</span><span>🌾</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
