"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Film,
  Layers3,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { brandMatrix } from "@/data/brands";
import { animeShortFlow } from "@/data/product";
import { projects } from "@/data/projects";
import {
  brand,
  contactItems,
  hero,
  navItems,
  sectionLabels,
  services,
  studio,
  ui,
} from "@/data/site";
import type { Locale, Project } from "@/types/content";

const iconMap = [Film, Layers3, Sparkles, ArrowRight];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  if (!path) return path;
  if (path.startsWith("http")) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

function t(text: Record<Locale, string>, locale: Locale) {
  return text[locale];
}

function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("voidline-locale");
    return saved === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [locale]);

  const updateLocale = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem("voidline-locale", next);
  };

  return [locale, updateLocale] as const;
}

export function StudioSite() {
  const [locale, setLocale] = useLocale();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeBrand, setActiveBrand] = useState<(typeof brandMatrix)[number] | null>(
    null,
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const modalTitle = useMemo(() => {
    if (activeProject) return t(activeProject.title, locale);
    if (activeBrand) return activeBrand.name;
    return "";
  }, [activeBrand, activeProject, locale]);

  return (
    <>
      <AnimatePresence>{loading && <Loader locale={locale} />}</AnimatePresence>
      <header className="site-header">
        <a className="mark" href="#top" aria-label="Voidline Studios">
          <span>
            <Image
              src={asset("/brand/voidline-monogram.svg")}
              alt=""
              width={38}
              height={38}
            />
          </span>
          <small>{brand.english}</small>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {t(item.label, locale)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch locale={locale} setLocale={setLocale} />
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="icon-button close-menu"
              type="button"
              aria-label={t(ui.close, locale)}
              onClick={() => setMenuOpen(false)}
            >
              <X size={18} />
            </button>
            <LanguageSwitch locale={locale} setLocale={setLocale} />
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(item.label, locale)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero-section">
          <div className="hero-backdrop" aria-hidden="true">
            <Image
              src={asset("/visuals/hero-cinematic.png")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-bg-image"
            />
            <Image
              src={asset("/brand/voidline-monogram.svg")}
              alt=""
              width={1200}
              height={1200}
              priority
              className="hero-logo-ghost"
            />
            <div className="hero-vignette" />
            <div className="metal-line line-a" />
            <div className="metal-line line-b" />
          </div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <p className="eyebrow">{t(hero.eyebrow, locale)}</p>
            <h1>{brand.english}</h1>
            <p className="hero-cn">{brand.chinese}</p>
            <p className="hero-tagline">{t(hero.headline, locale)}</p>
            <p className="hero-copy">{t(hero.description, locale)}</p>
            <div className="button-row">
              <a className="button primary" href="#studio">
                {t(ui.exploreStudio, locale)}
                <ArrowRight size={16} />
              </a>
              <a className="button secondary" href="#projects">
                {t(ui.viewProjects, locale)}
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
          <div className="hero-signature" aria-hidden="true">
            <Image
              src={asset("/brand/voidline-monogram.svg")}
              alt=""
              width={124}
              height={124}
            />
          </div>
          <div className="scroll-cue">Visual / Motion / Intelligence</div>
        </section>

        <section className="section philosophy" id="studio">
          <SectionHeader
            label={t(studio.kicker, locale)}
            title={t(studio.title, locale)}
            copy={t(studio.body, locale)}
          />
          <div className="principle-grid">
            {studio.principles.map((item, index) => (
              <Reveal key={item.word} delay={index * 0.06}>
                <article className="principle-card">
                  <span>0{index + 1}</span>
                  <h3>{item.word}</h3>
                  <p>{t(item.text, locale)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="visual-strip" aria-label="Voidline visual language">
          <div className="visual-strip-copy">
            <p className="eyebrow">
              {locale === "en" ? "Visual Language" : "视觉语言"}
            </p>
            <h2>
              {locale === "en"
                ? "Black fields. Metal edges. Images with weight."
                : "黑场、金属边缘，以及有重量的影像。"}
            </h2>
          </div>
          <div className="visual-frame large">
            <Image src={asset("/visuals/hero-cinematic.png")} alt="" fill sizes="60vw" />
          </div>
          <div className="visual-frame small">
            <div className="visual-mark-stage">
              <Image
                src={asset("/brand/voidline-monogram.svg")}
                alt=""
                width={360}
                height={360}
              />
            </div>
          </div>
        </section>

        <section className="section" id="matrix">
          <SectionHeader
            label={t(sectionLabels.matrix, locale)}
            title={locale === "en" ? "One studio, multiple frontiers." : "一个母品牌，多个创作边界。"}
            copy={
              locale === "en"
                ? "Voidline Studios holds the visual studio, content label, AIGC lab and first workflow product under one precise brand system."
                : "未界影像将视觉工作室、内容厂牌、AIGC 实验室与首个工作流产品，纳入同一套清晰的品牌系统。"
            }
          />
          <div className="matrix-grid">
            {brandMatrix.map((item, index) => {
              const Icon = iconMap[index] ?? ArrowRight;
              return (
                <Reveal key={item.name} delay={index * 0.07}>
                  <article className="matrix-card">
                    <div className="card-topline">
                      <Icon size={18} />
                      <span>{t(item.tag, locale)}</span>
                    </div>
                    <h3>{item.name}</h3>
                    <p className="matrix-cn">{item.cn}</p>
                    <p>{t(item.copy, locale)}</p>
                    <button type="button" onClick={() => setActiveBrand(item)}>
                      {t(ui.futureEntry, locale)}
                      <ArrowRight size={14} />
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section services-section" id="services">
          <SectionHeader
            label={t(sectionLabels.services, locale)}
            title={locale === "en" ? "Built for moving-image work." : "围绕动态影像建立能力。"}
            copy={
              locale === "en"
                ? "The studio keeps its offer focused: visual production, post, AIGC development and content systems that can actually be operated."
                : "工作室的能力保持聚焦：影像制作、后期包装、AIGC 视觉开发，以及真正可执行的内容系统。"
            }
          />
          <div className="service-list">
            {services.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="service-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{t(item.copy, locale)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeader
            label={t(sectionLabels.projects, locale)}
            title={locale === "en" ? "A system ready for real cases." : "为真实案例预留的展示系统。"}
            copy={
              locale === "en"
                ? "No invented clients, awards or metrics. These slots are designed so future covers, videos and case notes can replace placeholders cleanly."
                : "不编造客户、奖项或数据。这里先建立统一的精选项目占位系统，未来可直接替换封面、视频与案例文案。"
            }
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
                <ProjectCard
                  project={project}
                  locale={locale}
                  onOpen={() => setActiveProject(project)}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="product-section" id="product">
          <div className="product-orbit" aria-hidden="true" />
          <Reveal>
            <div className="product-panel">
              <p className="eyebrow">{t(animeShortFlow.eyebrow, locale)}</p>
              <h2>{animeShortFlow.name}</h2>
              <p className="product-title">{t(animeShortFlow.title, locale)}</p>
              <p>{t(animeShortFlow.body, locale)}</p>
              <div className="product-actions">
                <span>{t(animeShortFlow.status, locale)}</span>
                <button type="button" onClick={() => setActiveBrand(brandMatrix[3])}>
                  {t(animeShortFlow.cta, locale)}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeader
            label={t(sectionLabels.contact, locale)}
            title={locale === "en" ? "Open for precise conversations." : "为清晰的合作沟通预留入口。"}
            copy={
              locale === "en"
                ? "Contact fields are intentionally left as maintainable placeholders until official channels are confirmed."
                : "联系信息先以可维护结构占位，待官方渠道确认后再统一更新。"
            }
          />
          <div className="contact-grid">
            {contactItems.map((item) => (
              <div className="contact-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{t(item.value, locale)}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <Image
            src={asset("/brand/voidline-monogram.svg")}
            alt=""
            width={42}
            height={42}
          />
          <strong>{brand.english}</strong>
          <span>{brand.chinese}</span>
        </div>
        <p>© 2026 Voidline Studios</p>
        <p>Visual / Motion / Intelligence</p>
      </footer>

      <AnimatePresence>
        {(activeProject || activeBrand) && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveProject(null);
              setActiveBrand(null);
            }}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="icon-button modal-close"
                type="button"
                aria-label={t(ui.close, locale)}
                onClick={() => {
                  setActiveProject(null);
                  setActiveBrand(null);
                }}
              >
                <X size={18} />
              </button>
              <span className="modal-status">
                {activeProject
                  ? t(activeProject.status, locale)
                  : t(ui.comingSoon, locale)}
              </span>
              <h3>{modalTitle}</h3>
              <p>
                {activeProject
                  ? t(activeProject.description, locale)
                  : activeBrand
                    ? t(activeBrand.copy, locale)
                    : ""}
              </p>
              <div className="modal-actions">
                <button className="button secondary" type="button">
                  {t(ui.comingSoon, locale)}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Loader({ locale }: { locale: Locale }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="loader-bg" aria-hidden="true">
        <Image src={asset("/visuals/hero-cinematic.png")} alt="" fill priority sizes="100vw" />
      </div>
      <div className="loader-frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="loader-core">
        <div className="loader-mark">
          <Image
            src={asset("/brand/voidline-monogram.svg")}
            alt=""
            width={132}
            height={132}
            priority
          />
        </div>
        <div className="loader-identity">
          <span>{brand.english}</span>
          <span>{brand.chinese}</span>
        </div>
      </div>
      <div className="loader-gauge" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="loader-line">
        <span />
      </div>
      <p>{t(ui.loading, locale)}</p>
    </motion.div>
  );
}

function LanguageSwitch({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  return (
    <div className="language-switch" aria-label="Language switch">
      <button
        type="button"
        className={locale === "en" ? "active" : ""}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={locale === "zh" ? "active" : ""}
        onClick={() => setLocale("zh")}
      >
        中文
      </button>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <Reveal>
      <div className="section-header">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </Reveal>
  );
}

function ProjectCard({
  project,
  locale,
  onOpen,
}: {
  project: Project;
  locale: Locale;
  onOpen: () => void;
}) {
  return (
    <article className="project-card">
      <div className="project-media">
        {project.cover ? (
          <Image
            src={asset(project.cover)}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        ) : (
          <div className="project-placeholder">
            <span>VL</span>
          </div>
        )}
        <span className="project-status">{t(project.status, locale)}</span>
      </div>
      <div className="project-body">
        <span>{t(project.type, locale)}</span>
        <h3>{t(project.title, locale)}</h3>
        <p>{t(project.description, locale)}</p>
        <button type="button" onClick={onOpen}>
          {t(ui.projectDetails, locale)}
          <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
