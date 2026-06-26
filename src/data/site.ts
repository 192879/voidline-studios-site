import type { LocalizedText } from "@/types/content";

export const brand = {
  english: "Voidline Studios",
  chinese: "未界影像",
  contentLabel: "零界影业",
  labLabel: "虚境工坊",
  product: "AnimeShortFlow",
};

export const navItems = [
  { id: "studio", label: { en: "Studio", zh: "理念" } },
  { id: "matrix", label: { en: "Matrix", zh: "矩阵" } },
  { id: "services", label: { en: "Services", zh: "能力" } },
  { id: "projects", label: { en: "Projects", zh: "项目" } },
  { id: "product", label: { en: "Product", zh: "产品" } },
  { id: "contact", label: { en: "Contact", zh: "联系" } },
];

export const ui = {
  loading: { en: "Loading signal", zh: "载入视觉信号" },
  exploreStudio: { en: "Explore the Studio", zh: "探索工作室" },
  viewProjects: { en: "View Projects", zh: "查看项目" },
  comingSoon: { en: "Coming Soon", zh: "即将开放" },
  futureEntry: { en: "Future Entry", zh: "未来入口" },
  projectDetails: { en: "Project Detail", zh: "项目详情" },
  close: { en: "Close", zh: "关闭" },
  openLink: { en: "Open Link", zh: "打开链接" },
  emptyProject: {
    en: "Project material can be added here when ready.",
    zh: "项目素材准备好后可在此处更新。",
  },
};

export const hero = {
  eyebrow: {
    en: "Visual content studio for motion, story and intelligent systems",
    zh: "面向影像、叙事与智能系统的视觉内容工作室",
  },
  headline: {
    en: "Visual storytelling for the next frontier.",
    zh: "在影像与智能之间，构建新的表达边界。",
  },
  description: {
    en: "Voidline Studios creates cinematic visual content, short-form narratives and AIGC-driven production systems for a new era of moving images.",
    zh: "未界影像以电影感视觉、短视频叙事与 AIGC 内容系统为核心，探索下一阶段动态影像的生产与表达。",
  },
};

export const studio = {
  kicker: { en: "Studio Philosophy", zh: "品牌理念" },
  title: {
    en: "Where motion meets intelligence.",
    zh: "让内容不止被看见，也被记住。",
  },
  body: {
    en: "We work between visual craft and creative technology. Every frame is treated as a designed moment: shaped by story, refined through motion and extended by intelligent workflows. The studio is built for lean, precise and memorable content production.",
    zh: "我们工作在影像美学与创意科技之间。每一帧都不是素材堆叠，而是经过叙事、运动和系统化流程打磨后的表达。未界影像关注精确、克制、可持续的内容生产方式。",
  },
  principles: [
    {
      word: "Visual",
      text: {
        en: "Frames with atmosphere, contrast and intent.",
        zh: "建立有氛围、有对比、有指向的画面秩序。",
      },
    },
    {
      word: "Motion",
      text: {
        en: "Rhythm, pacing and transitions designed as narrative tools.",
        zh: "把节奏、转场与运动设计作为叙事工具。",
      },
    },
    {
      word: "Story",
      text: {
        en: "Content shaped to be understood quickly and remembered longer.",
        zh: "让复杂内容更快被理解，也更长久地留下印象。",
      },
    },
    {
      word: "Intelligence",
      text: {
        en: "AIGC and automation used to strengthen craft, not replace taste.",
        zh: "用 AIGC 与自动化增强创作效率，而不是替代审美判断。",
      },
    },
  ],
};

export const services = [
  {
    title: "Video Production",
    copy: {
      en: "Cinematic content planning and production for brand, social and narrative formats.",
      zh: "面向品牌、社媒与叙事内容的影像策划与制作。",
    },
  },
  {
    title: "Motion Design",
    copy: {
      en: "Title design, visual packaging, transitions and motion identity systems.",
      zh: "片头、视觉包装、转场语言与动态识别系统。",
    },
  },
  {
    title: "Short-form Content",
    copy: {
      en: "Short-video structure, pacing and repeatable production methods.",
      zh: "短视频结构、节奏设计与可复用生产方法。",
    },
  },
  {
    title: "AIGC Visuals",
    copy: {
      en: "AI-assisted visual development for concepts, scenes and experimental looks.",
      zh: "用于概念、场景和实验视觉的 AI 辅助影像开发。",
    },
  },
  {
    title: "Content Systems",
    copy: {
      en: "Workflow thinking for scalable content creation and editorial operations.",
      zh: "为规模化内容创作与编辑运营建立工作流思维。",
    },
  },
  {
    title: "Creative Experiments",
    copy: {
      en: "Prototype-led exploration across moving image, automation and new media.",
      zh: "围绕动态影像、自动化与新媒介进行原型实验。",
    },
  },
];

export const contactItems = [
  { label: "Email", value: { en: "To be added", zh: "待补充" } },
  { label: "WeChat", value: { en: "To be added", zh: "待补充" } },
  { label: "Social", value: { en: "To be added", zh: "待补充" } },
  { label: "Portfolio", value: { en: "To be linked", zh: "待关联" } },
  { label: "Business Inquiry", value: { en: "To be added", zh: "待补充" } },
];

export const sectionLabels: Record<string, LocalizedText> = {
  matrix: { en: "Brand Matrix", zh: "品牌矩阵" },
  services: { en: "Capabilities", zh: "服务能力" },
  projects: { en: "Featured Projects", zh: "精选项目" },
  product: { en: "First Product", zh: "首个产品" },
  contact: { en: "Contact", zh: "联系" },
};
