
import { SectionData, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'UE/Unity', icon: '🎮', color: 'bg-yellow-100' },
  { name: 'Excel', icon: '📊', color: 'bg-yellow-100' },
  { name: 'Python/C++', icon: '🐍', color: 'bg-yellow-100' },
  { name: '摄影', icon: '📸', color: 'bg-yellow-100' },
  { name: '画画', icon: '🎨', color: 'bg-yellow-100' },
  { name: '英文/日语', icon: '🌍', color: 'bg-yellow-100' },
];

export const GAME_STATS = [
  { name: 'ACT & ARPG', stat: '2000+ Hrs', icon: '⚔️' },
  { name: 'FPS', stat: '3000+ Hrs', icon: '🔫' },
  { name: 'MOBA', stat: '5000+ Hrs', icon: '🏰' },
  { name: 'MMO', stat: '1000+ Hrs', icon: '🛡️' },
  { name: '模拟经营', stat: '500+ Hrs', icon: '🌾' },
  { name: '策略游戏', stat: '1000+ Hrs', icon: '♟️' },
];

export const GAME_DETAILS = [
  {
    category: 'ACT & ARPG',
    games: ['永劫无间（目前最爱的竞技游戏！）', '只狼', '鬼泣', '黑魂', '艾尔登法环', '黑神话悟空等']
  },
  {
    category: 'FPS',
    games: ['CS·GO', '无畏契约（非常非常深度）', 'PUBG', '三角洲行动', 'CF', 'COD等']
  },
  {
    category: 'MOBA',
    games: ['英雄联盟', '王者荣耀（两个都是从开服开始玩，陪伴了我整个游戏生涯）']
  },
  {
    category: 'MMO',
    games: ['倩女幽魂（我的mmo启蒙）', '燕云十六声', '逆水寒', '魔兽世界']
  },
  {
    category: '模拟经营',
    games: ['天际线', '模拟城市', '星露谷物语', '动物之森']
  },
  {
    category: '策略游戏',
    games: ['云顶之弈', '金铲铲之战', '王者万象棋']
  }
];

export const PORTFOLIO_DATA: SectionData = {
  education: [
    { year: '2010-2019', title: '文清实验学校', subtitle: '小学 - 初中', description: '初中有一门课叫做“游戏的原理”，是我游戏设计的启蒙。' },
    { year: '2019-2022', title: '文清外国语学校', subtitle: '高中', description: '中考保送，三年15w全额奖学金，高三获得雅思7.5单科7分，ALevel 5A*的成绩，满绩点年级第一毕业。' },
    { year: '2022-2025', title: '伦敦大学学院（UCL）', subtitle: '理学经济学本科', description: '游戏社/金融社核心成员，积累了扎实的数学基础。本科期间接触了大量游戏，产生了想要设计自己的游戏的想法。' },
    { year: '2025-2027', title: '香港中文大学（深圳）', subtitle: '金融学硕士', description: '入学后迈出了进入游戏行业的是第一步，写作多份拆解案、策划案，将自己的想法输出成可以落地的demo策划案。' },
  ],
  career: [
    { year: '2023', title: 'J.P.Morgan（摩根大通）', subtitle: 'Spring week实习生', description: '摸索职业方向的第一步。' },
    { year: '2024', title: '中信证券 & 中信建投', subtitle: '研究员', description: '试着接触研究型工作，发现自己并不喜欢😢' },
    { year: '2025', title: '松禾资本', subtitle: '投资助理', description: '试着做一级市场，接触到了一些做游戏的初创公司，深深感受到他们对于做游戏的热情。' },
    { year: '2025-2026', title: '腾讯（IEG）', subtitle: '游戏体验研究员', description: '迈出进入游戏行业的第一步，在高强度和策划沟通中，想要成为游戏设计师的心汹汹燃烧🔥' },
  ],
  gaming: [
    { year: '2015', title: 'Competitive Gaming', subtitle: 'Team Alpha', description: 'Learned teamwork, leadership and strategy under pressure.' },
  ],
  projects: [
    { 
      title: '《永劫无间战斗系统的博弈论拆解》', 
      tags: ['系统拆解', '博弈论'], 
      description: '从设计思路、设计目的以及程序实现三个方面拆解永劫战斗系统的每个部份。',
      imageUrl: '/projects/naraka.jpg',
      link: 'https://docs.qq.com/doc/DS0RFVVNQRVVNZGdO'
    },
    { 
      title: '《永劫无间商业化系统拆解案》', 
      tags: ['商业化', '经济系统'], 
      description: '以藏宝阁为核心，解析了永劫局内外数字化经济系统的构建逻辑。',
      imageUrl: '/projects/naraka2.jpg',
      link: 'https://docs.qq.com/doc/DS3NRQmpBYWV0Rm1r'
    },
    { 
      title: '《遗忘之海内测体验报告》', 
      tags: ['游戏体验', '系统拆解'], 
      description: '解析遗忘之海系统和战斗机制，针对优势和痛点提出反馈。',
       imageUrl: '/projects/yiwangzhihai.png',
      link: 'https://docs.qq.com/doc/DS29jc1ZhTFV5YVZW'
    },
  ],
  articles: [
    { 
      title: '独立游戏《月色》策划案', 
      tags: ['独立游戏', 'AVG'], 
      description: '从零开始独立完成的AVG视觉小说游戏策划案，涵盖剧本创作、玩法设计与程序交互逻辑等多个方面。',
      imageUrl: '/projects/yuese.jpg',
      link: ''
    },
    { 
      title: '《永劫无间》连招教学系统策划案', 
      tags: ['战斗系统', '教学系统'], 
      description: '通过战斗系统拆解，引入连招教学系统构建博弈中的相对平衡。',
      imageUrl: '/projects/naraka3.jpg',
      link: 'https://docs.qq.com/sheet/DS1BqQXVOYmFjWHBT?tab=000001'
    },
  ],
  deconstructions: [
    { 
      title: '《月色》', 
      tags: ['独立游戏', 'AVG'], 
      description: '雨夜、操场、夏目漱石。很多年后他才终于明白少女口中“月色真美”的意义。',
      imageUrl: '/projects/yuese.jpg',
      link: ''
    },
  ],
};
