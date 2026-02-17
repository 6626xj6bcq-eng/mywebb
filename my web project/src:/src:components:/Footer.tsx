
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-[#5c4033] border-t-8 border-[#4a3020] text-[#fce7cf]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
            <div className="font-bold text-4xl mb-4 tracking-tighter uppercase">IAN'S VALLEY</div>
            <p className="text-base text-[#fce7cf]/80 leading-relaxed tracking-wide font-medium">感谢你来访问我的世界，让我们一起做出最好的游戏吧！</p>
          </div>
        
        <div className="flex flex-col gap-4 text-2xl font-bold">
            <h4 className="text-yellow-400 uppercase text-lg tracking-widest mb-2">Connect</h4>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-base font-medium">微信：</span>
              <span>_Tasogare_is6</span>
            </a>
          <a href="tel:+8615216113813" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-base font-medium">电话：</span>
              <span>+86 15216113813 / +86 18617115507</span>
            </a>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="pixel-border p-4 bg-white text-[#4a3020] font-bold text-center">
             <div className="text-3xl mb-1">📬</div>
             <div>给我发邮件哦</div>
             <div className="text-sm mt-2 font-mono underline">yx_Tasogare@163.com</div>
          </div>
          <div className="text-center mt-12 pt-8 border-t-2 border-[#fce7cf]/20">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
