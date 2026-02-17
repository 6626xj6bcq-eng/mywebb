
import React from 'react';
import { SKILLS, GAME_STATS, GAME_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="wood-panel p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Cats */}
          <div className="absolute top-4 left-[5%] md:left-[15%] text-4xl animate-bounce" style={{ animationDuration: '4s' }}>🐈‍⬛</div>
          <div className="absolute -top-6 left-[20%] text-3xl animate-pulse delay-300">🧶</div>
          <div className="absolute top-12 left-[2%] text-2xl transform -rotate-12">🐟</div>
          <div className="absolute top-0 left-[25%] text-2xl animate-bounce delay-500">✨</div>
          <div className="absolute top-8 right-[10%] md:right-[20%] text-3xl animate-pulse delay-700">🐾</div>

          <div className="inline-block bg-[#fce7cf] border-4 border-[#4a3020] px-8 py-4 transform -rotate-1 shadow-[4px_4px_0_#4a3020] relative">
            <div className="absolute -top-7 right-6 text-3xl transform rotate-12">🐈</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a3020] uppercase tracking-widest">
                Character Profile
            </h2>
          </div>
          <div className="absolute top-0 right-0 text-4xl">💎</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Portrait & Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="pixel-border p-2 bg-white flex flex-col items-center">
              <div className="w-full aspect-square bg-[#71aa34] border-4 border-[#4a3020] mb-4 overflow-hidden flex items-center justify-center">
                <img src="/avatar.png" alt="Portrait" className="w-full h-full object-contain p-4 smooth-image" />
              </div>
              <div className="w-full bg-[#4a3020] p-2 text-white text-center font-bold">
                IAN LV.21
              </div>
              <div className="w-full p-4 space-y-2">
                <div className="flex justify-between font-bold text-red-700"><span>Health</span><span>100/100</span></div>
                <div className="w-full bg-slate-200 h-4 border-2 border-[#4a3020]"><div className="bg-red-500 h-full w-[100%]"></div></div>
                <div className="flex justify-between font-bold text-blue-700"><span>Ability</span><span>90/100</span></div>
                <div className="w-full bg-slate-200 h-4 border-2 border-[#4a3020]"><div className="bg-blue-500 h-full w-[90%]"></div></div>
              </div>
            </div>

            {/* Gaming Inventory */}
            <div className="pixel-border p-4 bg-[#fff8e1]">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-[#4a3020] pb-2 text-[#4a3020] text-center">游戏经历</h3>
              <div className="grid grid-cols-2 gap-3">
                {GAME_STATS.map(game => (
                  <div key={game.name} className="flex flex-col items-center p-2 bg-white/50 border-2 border-[#4a3020]">
                    <span className="text-3xl mb-1">{game.icon}</span>
                    <span className="font-bold truncate w-full text-center text-[#d97706] text-sm">{game.name}</span>
                    <span className="text-xs text-slate-800 font-semibold">{game.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio & Inventory */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="bg-[#fff8e1] border-4 border-[#4a3020] p-8 relative">
              <div className="absolute -top-5 left-8 bg-[#4a3020] text-white px-4 py-1 text-sm font-bold uppercase">About me</div>
              <p className="text-xl leading-relaxed text-[#4a3020]">
                大家好，我叫杨竣成，可以叫我Ian或者杨序。出生于2004年6月27日，今年21岁。对游戏设计非常热爱，立志于成为一名有想法有创意的“游戏设计师”！
              </p>
              <p className="mt-4 text-xl leading-relaxed text-[#4a3020]">
                目前在独立制作自己的第一款AVG游戏中，灵感是来自于我个人的经历。我平时非常热爱游戏、电影和小说，这些都能成为我创作的灵感。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
              <div className="absolute -top-3 left-8 bg-[#4a3020] text-white px-4 py-1 text-sm font-bold uppercase z-10">Abilities</div>
              {SKILLS.map((skill) => (
                <div key={skill.name} className="pixel-border p-4 flex flex-col items-center justify-center gap-2 hover:bg-yellow-200 transition-colors cursor-pointer group">
                  <span className="text-5xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                  <span className="font-bold text-center text-sm text-red-600 text-xl">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* My Game List */}
            <div className="bg-[#fff8e1] border-4 border-[#4a3020] p-8 relative mt-4">
              <div className="absolute -top-5 left-8 bg-[#4a3020] text-white px-4 py-1 text-sm font-bold uppercase">My Game List</div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {GAME_DETAILS.map((category) => (
                  <div key={category.category} className="border-b-2 border-[#4a3020]/20 pb-2 h-full flex flex-col justify-between">
                    <h4 className="font-bold text-[#d97706] mb-1">{category.category}</h4>
                    <div className="text-[#4a3020] text-sm leading-relaxed">
                      {category.games.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
