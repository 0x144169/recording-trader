const chapters = [
  {
    "key": "chapter01",
    "order": 1,
    "group": "foundation",
    "groupLabel": "基础上手",
    "slug": "chapter01-install-download",
    "titleZh": "安装、下载与更新",
    "titleEn": "Install, Download & Update",
    "summary": "完成下载、安装、首次启动确认，以及后续更新路径。",
    "href": "./chapter01-install-download.html",
    "posterPath": "./posters/chapter01-install-download.png"
  },
  {
    "key": "chapter02",
    "order": 2,
    "group": "foundation",
    "groupLabel": "基础上手",
    "slug": "chapter02-workspace-overview",
    "titleZh": "产品定位与工作区总览",
    "titleEn": "Positioning & Workspace Overview",
    "summary": "讲清产品定位、本地数据原则，以及第一次启动后的主工作区。",
    "href": "./chapter02-workspace-overview.html",
    "posterPath": "./posters/chapter02-workspace-overview.png"
  },
  {
    "key": "chapter03",
    "order": 3,
    "group": "foundation",
    "groupLabel": "基础上手",
    "slug": "chapter03-premarket-pretrade",
    "titleZh": "盘前计划与单前检查",
    "titleEn": "Premarket Plan & Pre-trade Gate",
    "summary": "演示盘前计划、偏见验证与强弱门槛。",
    "href": "./chapter03-premarket-pretrade.html",
    "posterPath": "./posters/chapter03-premarket-pretrade.png"
  },
  {
    "key": "chapter04",
    "order": 4,
    "group": "foundation",
    "groupLabel": "基础上手",
    "slug": "chapter04-first-order-daily-report",
    "titleZh": "第一笔订单与日报告",
    "titleEn": "First Order & Daily Report",
    "summary": "从录单到当日收盘整理，建立最小闭环。",
    "href": "./chapter04-first-order-daily-report.html",
    "posterPath": "./posters/chapter04-first-order-daily-report.png"
  },
  {
    "key": "chapter05",
    "order": 5,
    "group": "foundation",
    "groupLabel": "基础上手",
    "slug": "chapter05-journal-review",
    "titleZh": "订单总览与复盘模式",
    "titleEn": "Journal & Review Mode",
    "summary": "按筛选、标签、心理弱点完成结构化复盘。",
    "href": "./chapter05-journal-review.html",
    "posterPath": "./posters/chapter05-journal-review.png"
  },
  {
    "key": "chapter06",
    "order": 6,
    "group": "advanced",
    "groupLabel": "进阶能力",
    "slug": "chapter06-knowledge-ai",
    "titleZh": "知识库与 AI 工作流",
    "titleEn": "Knowledge Base & AI",
    "summary": "讲解知识沉淀、AI 对话与上下文联动。",
    "href": "./chapter06-knowledge-ai.html",
    "posterPath": "./posters/chapter06-knowledge-ai.png"
  },
  {
    "key": "chapter07",
    "order": 7,
    "group": "advanced",
    "groupLabel": "进阶能力",
    "slug": "chapter07-backtest-system",
    "titleZh": "系统回测",
    "titleEn": "Backtest System",
    "summary": "讲解回测 Case、记录录入、统计与 AI 分析。",
    "href": "./chapter07-backtest-system.html",
    "posterPath": "./posters/chapter07-backtest-system.png"
  },
  {
    "key": "chapter08",
    "order": 8,
    "group": "advanced",
    "groupLabel": "进阶能力",
    "slug": "chapter08-backup-migration-companion",
    "titleZh": "备份迁移与虚拟助手",
    "titleEn": "Backup, Migration & Companion",
    "summary": "收尾讲清换机、完整备份，以及陪伴式能力。",
    "href": "./chapter08-backup-migration-companion.html",
    "posterPath": "./posters/chapter08-backup-migration-companion.png"
  }
];

const pageBackground = document.getElementById('page-background');
const chapterGrid = document.getElementById('chapter-grid');
const chapterCount = document.getElementById('chapter-count');

const loadScript = (() => {
  const cache = new Map();
  return (src) => {
    if (cache.has(src)) {
      return cache.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });

    cache.set(src, promise);
    return promise;
  };
})();

const backgroundEngines = {
  async 'vanta.net'(target) {
    await loadScript('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
    return window.VANTA?.NET?.({
      el: target,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0xb7862d,
      backgroundColor: 0xf7f2e8,
      points: 9,
      maxDistance: 18,
      spacing: 16,
      showDots: true,
    });
  },
  async 'vanta.globe'(target) {
    await loadScript('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js');
    return window.VANTA?.GLOBE?.({
      el: target,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0x8a5d15,
      color2: 0xa8b88f,
      backgroundColor: 0xf7f2e8,
      size: 0.54,
    });
  },
  async 'vanta.dots'(target) {
    await loadScript('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js');
    return window.VANTA?.DOTS?.({
      el: target,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0xc89633,
      color2: 0x8d6119,
      backgroundColor: 0xf7f2e8,
      size: 2.9,
      spacing: 18,
      showLines: false,
    });
  },
  async fallback() {
    return null;
  },
};

class HeroBackgroundAdapter {
  constructor(target, preferredEngine) {
    this.target = target;
    this.preferredEngine = preferredEngine;
    this.instance = null;
    this.activeEngine = 'fallback';
  }

  async mount() {
    if (!this.target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touchOnly = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 900;
    const engineKey = reduceMotion || touchOnly ? 'fallback' : this.preferredEngine;
    this.activeEngine = backgroundEngines[engineKey] ? engineKey : 'fallback';
    document.documentElement.dataset.bgEngine = this.activeEngine;

    if (this.activeEngine === 'fallback') return;

    try {
      this.instance = await backgroundEngines[this.activeEngine](this.target);
    } catch (error) {
      console.warn('[tutorial-homepage] background engine failed, fallback enabled', error);
      this.activeEngine = 'fallback';
      document.documentElement.dataset.bgEngine = 'fallback';
      this.instance?.destroy?.();
      this.instance = null;
    }
  }

  destroy() {
    if (this.instance && typeof this.instance.destroy === 'function') {
      this.instance.destroy();
      this.instance = null;
    }
  }
}

const posterFallback = (chapter) =>
  `linear-gradient(160deg, rgba(46,31,15,0.92), rgba(166,116,28,0.86) 68%, rgba(248,214,138,0.86))`;

const createPosterFallbackMarkup = (chapter) => `
  <div class="chapter-card__placeholder">
    <div class="chapter-card__placeholder-grid"></div>
    <div class="chapter-card__placeholder-content">
      <div class="chapter-card__placeholder-kicker">Chapter ${String(chapter.order).padStart(2, '0')}</div>
      <div class="chapter-card__placeholder-title">${chapter.titleZh}</div>
      <div class="chapter-card__placeholder-subtitle">${chapter.titleEn || 'Recording Trader Help'}</div>
    </div>
  </div>
`;

const createPosterBrandMarkup = () => `
  <div class="chapter-card__brand">
    <div class="chapter-card__brand-badge">Recording Trader</div>
    <div class="chapter-card__brand-mark">HELP SERIES</div>
  </div>
`;

const createChapterCard = (chapter) => {
  const article = document.createElement('article');
  article.className = 'chapter-card';
  const safeSummary = chapter.summary || '帮助视频章节';
  const safeTitleEn = chapter.titleEn || '';
  const safeTitleZh = chapter.titleZh || chapter.key;
  const safePoster = chapter.posterPath || '';
  const safeHref = chapter.href || '#';

  article.innerHTML = `
    <div class="chapter-card__poster" style="${safePoster ? '' : `background:${posterFallback(chapter)};`}">
      <div class="chapter-card__order">Chapter ${String(chapter.order).padStart(2, '0')}</div>
      ${createPosterBrandMarkup()}
      ${
        safePoster
          ? `<img src="${safePoster}" alt="${safeTitleZh}" loading="lazy" />`
          : createPosterFallbackMarkup(chapter)
      }
    </div>
    <div class="chapter-card__body">
      <div class="chapter-card__status">已上线</div>
      <h3 class="chapter-card__title">${safeTitleZh}</h3>
      <p class="chapter-card__subtitle">${safeTitleEn}</p>
      <p class="chapter-card__summary">${safeSummary}</p>
      <div class="chapter-card__footer">
        <span class="chapter-card__meta">第 ${chapter.order} 章 · ${chapter.groupLabel}</span>
        <a class="chapter-card__cta" href="${safeHref}">观看</a>
      </div>
    </div>
  `;

  if (safePoster) {
    const posterElement = article.querySelector('.chapter-card__poster');
    const imageElement = article.querySelector('.chapter-card__poster img');
    imageElement?.addEventListener('error', () => {
      posterElement?.classList.add('chapter-card__poster--fallback');
      if (posterElement && !posterElement.querySelector('.chapter-card__placeholder')) {
        posterElement.insertAdjacentHTML('beforeend', createPosterFallbackMarkup(chapter));
      }
      imageElement.remove();
    });
  }

  return article;
};

const renderChapters = () => {
  chapterGrid.innerHTML = '';
  chapters
    .slice()
    .sort((left, right) => left.order - right.order)
    .forEach((chapter) => {
      chapterGrid.appendChild(createChapterCard(chapter));
    });
  chapterCount.textContent = String(chapters.length);
};

const resolvePreferredEngine = () => {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('bg');
  if (!requested) return 'vanta.globe';
  const normalized = `vanta.${requested.toLowerCase()}`;
  return backgroundEngines[normalized] ? normalized : 'vanta.globe';
};

renderChapters();

const backgroundAdapter = new HeroBackgroundAdapter(pageBackground, resolvePreferredEngine());
backgroundAdapter.mount();

window.addEventListener('beforeunload', () => {
  backgroundAdapter.destroy();
});
