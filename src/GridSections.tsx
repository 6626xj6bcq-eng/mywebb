
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ContentCard } from '../types';

const Card: React.FC<{ data: ContentCard }> = ({ data }) => (
  <a 
    href={data.link}
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-[#fff8e1] border-4 border-[#4a3020] flex flex-col group overflow-hidden shadow-[4px_4px_0_#4a3020] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer block"
  >
    <div className="h-48 border-b-4 border-[#4a3020] relative">
      <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      <div className="absolute top-2 right-2 flex gap-1">
        {data.tags.slice(0, 2).map(tag => (
          <span key={tag} className="text-[10px] font-bold bg-[#4a3020] text-white px-2 py-0.5 uppercase">{tag}</span>
        ))}
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#4a3020] mb-2 group-hover:underline">{data.title}</h3>
      <p 
        className="text-base text-[#4a3020] leading-tight mb-4 flex-grow"
        dangerouslySetInnerHTML={{
          __html: data.description
            .replace(/设计思路/g, '<span class="text-[#d97706] font-bold">设计思路</span>')
            .replace(/设计目的/g, '<span class="text-[#d97706] font-bold">设计目的</span>')
            .replace(/程序实现/g, '<span class="text-[#d97706] font-bold">程序实现</span>')
            .replace(/藏宝阁/g, '<span class="text-[#d97706] font-bold">藏宝阁</span>')
            .replace(/数字化经济系统/g, '<span class="text-[#d97706] font-bold">数字化经济系统</span>')
            .replace(/系统和战斗机制/g, '<span class="text-[#d97706] font-bold">系统和战斗机制</span>')
            .replace(/优势和痛点/g, '<span class="text-[#d97706] font-bold">优势和痛点</span>')
            .replace(/剧本创作/g, '<span class="text-[#d97706] font-bold">剧本创作</span>')
            .replace(/玩法设计/g, '<span class="text-[#d97706] font-bold">玩法设计</span>')
            .replace(/程序交互逻辑/g, '<span class="text-[#d97706] font-bold">程序交互逻辑</span>')
            .replace(/战斗系统/g, '<span class="text-[#d97706] font-bold">战斗系统</span>')
            .replace(/相对平衡/g, '<span class="text-[#d97706] font-bold">相对平衡</span>')
            .replace(/月色真美/g, '<span class="text-[#d97706] font-bold">月色真美</span>')
        }}
      />
      <div className="mt-auto pt-4 border-t-2 border-[#4a3020]/20 flex justify-between items-center font-bold">
        <span className="text-[#65a30d] uppercase">
          {data.title.includes('商业化') ? 'Length: Medium' : data.title.includes('遗忘之海') || data.title.includes('连招') || data.title.includes('月色') ? 'Length: Short' : 'Length: Extensive'}
        </span>
        <span className="text-xl">✨</span>
      </div>
    </div>
  </a>
);

const Section: React.FC<{ title: string; items: ContentCard[]; icon: string }> = ({ title, items, icon }) => (
  <div className="mb-24">
    <div className="flex items-center gap-4 mb-10">
      <span className="text-5xl">{icon}</span>
      <h3 className="text-4xl font-bold text-[#4a3020] uppercase tracking-wider underline decoration-[#8b5a2b] decoration-8">{title}</h3>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  </div>
);

const GridSections: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Section title="游戏拆解案" items={PORTFOLIO_DATA.projects} icon="🛠️" />
        <Section title="游戏策划案" items={PORTFOLIO_DATA.articles} icon="📜" />
        <Section title="DEMO" items={PORTFOLIO_DATA.deconstructions} icon="🎮" />
      </div>
    </section>
  );
};

export default GridSections;
