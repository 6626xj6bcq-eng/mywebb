
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Timelines: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#fce7cf]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-[#8b5a2b] border-4 border-[#4a3020] px-10 py-4 shadow-[4px_4px_0_#4a3020]">
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest">The Growth Path</h2>
          </div>
          <p className="text-[#4a3020] text-2xl font-bold mt-6">From seeds to garden my path in game design</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 relative">
          {/* Vertical Wood Trunk Effect for both columns */}
          <div className="relative">
             <div className="absolute left-8 top-0 bottom-0 w-4 bg-[#8b5a2b] border-x-4 border-[#4a3020] hidden md:block">
                {/* Leaves on the trunk */}
                <div className="absolute -left-6 top-10 text-xl">🍂</div>
                <div className="absolute -right-6 top-32 text-xl transform scale-x-[-1]">🍁</div>
                <div className="absolute -left-6 top-64 text-xl">🍂</div>
                <div className="absolute -right-6 top-96 text-xl transform scale-x-[-1]">🍁</div>
                <div className="absolute -left-6 top-[32rem] text-xl">🍂</div>
                <div className="absolute -right-6 top-[40rem] text-xl transform scale-x-[-1]">🍁</div>
                <div className="absolute -left-6 bottom-32 text-xl">🍂</div>
             </div>
             <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 text-[#4a3020]">
                <span className="text-4xl">🎓</span> Education
             </h3>
             <div className="space-y-16 pl-0 md:pl-20">
                {PORTFOLIO_DATA.education.map((item, i) => (
                  <div key={i} className="pixel-border p-6 bg-white relative mt-8">
                    <div className="absolute -left-12 top-6 w-8 h-2 bg-[#4a3020] hidden md:block"></div>
                    <span className="bg-[#4a3020] text-white px-3 py-1 text-sm font-bold absolute -top-4 left-4 z-10">{item.year}</span>
                    <h4 className="text-2xl font-bold text-[#4a3020]">{item.title}</h4>
                    <p className="text-lg text-slate-600 font-bold mb-4 italic">{item.subtitle}</p>
                    <p className="text-xl text-[#4a3020]">{item.description}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="relative">
             <div className="absolute left-8 top-0 bottom-0 w-4 bg-[#8b5a2b] border-x-4 border-[#4a3020] hidden md:block">
                {/* Leaves on the trunk */}
                <div className="absolute -left-6 top-16 text-xl transform rotate-12">🍁</div>
                <div className="absolute -right-6 top-48 text-xl transform scale-x-[-1] -rotate-12">🍂</div>
                <div className="absolute -left-6 top-80 text-xl">🍁</div>
                <div className="absolute -right-6 bottom-24 text-xl transform scale-x-[-1]">🍂</div>
                <div className="absolute -left-6 top-[28rem] text-xl transform rotate-12">🍁</div>
                <div className="absolute -right-6 top-[36rem] text-xl transform scale-x-[-1] -rotate-12">🍂</div>
             </div>
             <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 text-[#4a3020]">
                <span className="text-4xl">💼</span> Employment
             </h3>
             <div className="space-y-16 pl-0 md:pl-20">
                {PORTFOLIO_DATA.career.map((item, i) => (
                  <div key={i} className="pixel-border p-6 bg-white relative mt-8">
                    <div className="absolute -left-12 top-6 w-8 h-2 bg-[#4a3020] hidden md:block"></div>
                    <span className="bg-[#65a30d] text-white border-2 border-[#365314] px-3 py-1 text-sm font-bold absolute -top-4 left-4 z-10">{item.year}</span>
                    <h4 className="text-2xl font-bold text-[#4a3020]">{item.title}</h4>
                    <p className="text-lg text-slate-600 font-bold mb-4 italic">{item.subtitle}</p>
                    <p className="text-xl text-[#4a3020]">{item.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timelines;
