import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "cinematic-content-system",
    title: { en: "Cinematic Content System", zh: "电影感内容系统" },
    type: { en: "Visual Workflow", zh: "视觉工作流" },
    description: {
      en: "A placeholder for a future workflow case combining scripting, visual direction and production rhythm.",
      zh: "用于未来展示脚本、视觉方向与生产节奏结合方式的工作流案例占位。",
    },
    cover: "",
    status: { en: "Project slot", zh: "项目占位" },
  },
  {
    id: "short-form-narrative-pack",
    title: { en: "Short-form Narrative Pack", zh: "短视频叙事包装" },
    type: { en: "Motion / Editorial", zh: "动态设计 / 剪辑" },
    description: {
      en: "Designed to hold future covers, trailers and project notes for short-form story formats.",
      zh: "用于未来放置短视频叙事项目封面、预告片与说明文案。",
    },
    cover: "",
    status: { en: "Awaiting material", zh: "等待素材" },
  },
  {
    id: "aigc-visual-experiment",
    title: { en: "AIGC Visual Experiment", zh: "AIGC 视觉实验" },
    type: { en: "Creative Lab", zh: "创意实验" },
    description: {
      en: "A modular card ready for AI-assisted visual prototypes, mood films or concept scenes.",
      zh: "可用于展示 AI 辅助视觉原型、情绪短片或概念场景的模块化卡片。",
    },
    cover: "",
    status: { en: "Coming Soon", zh: "即将更新" },
  },
];
