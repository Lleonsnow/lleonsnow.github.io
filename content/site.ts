import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

const stack = [
  "Python",
  "Django",
  "FastAPI",
  "NestJS",
  "Node.js",
  "Laravel",
  "TypeScript",
  "Next.js",
  "Vue",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Nginx",
] as const;

const shared = {
  name: "Leon",
  fullName: "Leon Snow",
  github: {
    url: "https://github.com/Lleonsnow",
    handle: "Lleonsnow",
  },
  telegram: {
    url: "https://t.me/Le47on",
    handle: "@Le47on",
  },
  stack,
} as const;

const copy = {
  ru: {
    role: "Backend · Full-stack",
    tagline: "API · интеграции · Telegram-продукты · Docker-платформы",
    headline: "Делаю рабочие продукты от идеи до релиза.",
    bio: "Backend-first разработчик: от идеи и архитектуры до кода, Docker и релиза — не только тикеты.",
    openTo: "Открыт к ролям backend / full-stack",
    githubLabel: "GitHub",
    telegramLabel: "Telegram",
    nav: [
      { path: "/", label: "Главная" },
      { path: "/about", label: "О себе" },
      { path: "/projects", label: "Проекты" },
      { path: "/contact", label: "Контакты" },
    ],
    ui: {
      intro: "Вступление",
      stack: "Стек",
      featured: "Избранные проекты",
      allProjects: "Все проекты",
      contact: "Контакты",
      about: "О себе",
      projects: "Проекты",
      projectsLead:
        "Ключевые продуктовые работы: e-commerce, бэкенды и платформы.",
      featuredShort: "Избранное",
      more: "Ещё",
      smaller: "Мелкие / старые",
      ctaGithub: "GitHub",
      ctaContact: "Контакты",
      techLine: "Python · Node/Nest · Laravel · TypeScript · Docker",
      keyCta: "Написать в Telegram",
    },
    strengths: [
      {
        title: "E-commerce и каталоги",
        text: "Магазины, корзины, заказы, промо, админка, платежные сценарии",
      },
      {
        title: "Сначала бэкенд",
        text: "REST API, доменные модели, auth, интеграции, фоновые задачи",
      },
      {
        title: "Полный цикл продукта",
        text: "Идея → архитектура → код → Docker → релиз → правки",
      },
      {
        title: "Мультисервисные схемы",
        text: "Бот + API + webapp + админка на одной модели данных",
      },
      {
        title: "Продакшен-привычки",
        text: "Миграции, идемпотентность, ревью, тесты, базовая наблюдаемость",
      },
      {
        title: "Ширина стека",
        text: "Python (Django / FastAPI), Node (NestJS), PHP (Laravel), TypeScript-фронт",
      },
    ],
    featured: [
      {
        name: "Pchelka",
        blurb: "Telegram-магазин",
        stack: "Aiogram 3 · Django / DRF · Next.js Mini App · PostgreSQL · Docker",
        description:
          "Полный commerce-цикл в Telegram: каталог, корзина, заказы, FAQ, бот + WebApp на одном PostgreSQL.",
        url: "https://github.com/Lleonsnow/Pchelka",
      },
      {
        name: "GranitShop",
        blurb: "Магазин камня / гранита",
        stack: "Laravel · Vue · Docker",
        description:
          "Классический e-commerce: каталог, карточки, корзина/заказ и админка на Laravel + Vue.",
        url: "https://github.com/Lleonsnow/GranitShop",
      },
      {
        name: "Couponator",
        blurb: "Платформа купонов / промо",
        stack: "Next.js monorepo · PostgreSQL · Docker · Nginx",
        description:
          "Мерчанты, промо-флоу, синк фидов, auth и production-oriented compose.",
        url: "https://github.com/Lleonsnow/Couponator",
      },
      {
        name: "Cosmetics e-commerce",
        blurb: "Продакшен-магазин",
        stack: "Next.js · NestJS / Prisma · PostgreSQL · Docker",
        description:
          "Продакшен-магазин косметики на VPS — миграция с legacy WordPress/MySQL.",
        url: null,
      },
      {
        name: "banking-system",
        blurb: "Двойная запись / ledger",
        stack: "NestJS · TypeORM · React · PostgreSQL · Docker · JWT",
        description:
          "Переводы, обмен USD/EUR и реальный ledger. API + дашборд, Swagger, юнит-тесты.",
        url: "https://github.com/Lleonsnow/banking-system",
      },
      {
        name: "file-exchange-task",
        blurb: "Файловый pipeline-бэкенд",
        stack: "FastAPI · Celery · Redis · PostgreSQL · Next.js · Docker",
        description:
          "Слоёный API (api → services → repositories), один Celery-пайплайн, алерты, pytest/mypy/ruff.",
        url: "https://github.com/Lleonsnow/file-exchange-task",
      },
      {
        name: "TraceDock",
        blurb: "Observability-платформа",
        stack: "TypeScript · microservices · auth · ingest · alerts · UI",
        description:
          "Ingest, аналитика и алерты — от auth до операционного UI.",
        url: "https://github.com/Lleonsnow/TraceDock",
      },
      {
        name: "nodefy.pro",
        blurb: "Визуальная node-платформа",
        stack: "TypeScript · NestJS · Docker · monorepo",
        description: "Живой node-based продукт: web + API в одном репо.",
        url: "https://nodefy.pro",
      },
    ],
    more: [
      {
        name: "Pchelka-CRM",
        blurb: "CRM-компаньон экосистемы магазина",
        stack: "NestJS, TypeScript, Docker",
        url: "https://github.com/Lleonsnow/Pchelka-CRM",
      },
      {
        name: "girl",
        blurb: "Личный сайт + CMS",
        stack: "Nuxt 3, Django, PostgreSQL",
        url: "https://github.com/Lleonsnow/girl",
      },
      {
        name: "Trendsee",
        blurb: "Контент-платформа с JWT auth",
        stack: "FastAPI, Vue 3, Redis, PostgreSQL",
        url: "https://github.com/Lleonsnow/Trendsee",
      },
      {
        name: "table_task",
        blurb: "UI на 1M строк: фильтры, DnD, infinite scroll",
        stack: "Next.js, Express, Docker",
        url: "https://github.com/Lleonsnow/table_task",
      },
    ],
    smaller: [
      {
        name: "Habit_bot",
        blurb: "Telegram-бот привычек",
        url: "https://github.com/Lleonsnow/Habit_bot.github.io",
      },
      {
        name: "beauty_bot",
        blurb: "Telegram-бот для beauty / записи",
        url: "https://github.com/Lleonsnow/beauty_bot",
      },
      {
        name: "twitter_clone",
        blurb: "API микроблогинга",
        url: "https://github.com/Lleonsnow/twitter_clone",
      },
      {
        name: "api_links",
        blurb: "Сервис коротких ссылок",
        url: "https://github.com/Lleonsnow/api_links",
      },
      {
        name: "Sinchronizer_v.01",
        blurb: "Синхронизация local ↔ Яндекс.Диск",
        url: "https://github.com/Lleonsnow/Sinchronizer_v.01",
      },
    ],
  },
  en: {
    role: "Backend · Full-stack",
    tagline: "APIs · integrations · Telegram products · Dockerized platforms",
    headline: "I ship working products end-to-end.",
    bio: "Backend-first developer who takes products from idea through architecture, code, Docker, and release — not just tickets.",
    openTo: "Open to backend / full-stack roles",
    githubLabel: "GitHub",
    telegramLabel: "Telegram",
    nav: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/projects", label: "Projects" },
      { path: "/contact", label: "Contact" },
    ],
    ui: {
      intro: "Intro",
      stack: "Stack",
      featured: "Featured projects",
      allProjects: "All projects",
      contact: "Contact",
      about: "About",
      projects: "Projects",
      projectsLead:
        "Flagship product work across e-commerce, backends, and platforms.",
      featuredShort: "Featured",
      more: "More",
      smaller: "Smaller / older",
      ctaGithub: "GitHub",
      ctaContact: "Contact",
      techLine: "Python · Node/Nest · Laravel · TypeScript · Docker",
      keyCta: "Message on Telegram",
    },
    strengths: [
      {
        title: "E-commerce & catalogs",
        text: "Shops, carts, orders, promo, admin, payments-ready flows",
      },
      {
        title: "Backend first",
        text: "REST APIs, domain models, auth, integrations, background jobs",
      },
      {
        title: "Full product loop",
        text: "Idea → architecture → code → Docker → release → fixes",
      },
      {
        title: "Multi-service setups",
        text: "Bot + API + webapp + admin on one data model",
      },
      {
        title: "Production habits",
        text: "Migrations, idempotency, reviews, tests, observability basics",
      },
      {
        title: "Stack range",
        text: "Python (Django / FastAPI), Node (NestJS), PHP (Laravel), TypeScript frontends",
      },
    ],
    featured: [
      {
        name: "Pchelka",
        blurb: "Telegram shop",
        stack: "Aiogram 3 · Django / DRF · Next.js Mini App · PostgreSQL · Docker",
        description:
          "Full commerce loop inside Telegram: catalog, cart, orders, FAQ, bot + WebApp on one PostgreSQL as source of truth.",
        url: "https://github.com/Lleonsnow/Pchelka",
      },
      {
        name: "GranitShop",
        blurb: "Stone / granite store",
        stack: "Laravel · Vue · Docker",
        description:
          "Classic e-commerce: catalog, product cards, cart/order flow and admin on Laravel + Vue.",
        url: "https://github.com/Lleonsnow/GranitShop",
      },
      {
        name: "Couponator",
        blurb: "Coupons / promo platform",
        stack: "Next.js monorepo · PostgreSQL · Docker · Nginx",
        description:
          "Merchants, promo flows, feed sync, auth and production-oriented compose setup.",
        url: "https://github.com/Lleonsnow/Couponator",
      },
      {
        name: "Cosmetics e-commerce",
        blurb: "Production store",
        stack: "Next.js · NestJS / Prisma · PostgreSQL · Docker",
        description:
          "Production cosmetics store on VPS — migration from legacy WordPress/MySQL.",
        url: null,
      },
      {
        name: "banking-system",
        blurb: "Double-entry ledger",
        stack: "NestJS · TypeORM · React · PostgreSQL · Docker · JWT",
        description:
          "Transfers, USD/EUR exchange and a real ledger for money integrity. API + dashboard, Swagger, unit tests.",
        url: "https://github.com/Lleonsnow/banking-system",
      },
      {
        name: "file-exchange-task",
        blurb: "File pipeline backend",
        stack: "FastAPI · Celery · Redis · PostgreSQL · Next.js · Docker",
        description:
          "Layered API (api → services → repositories), one Celery worker pipeline, alerts, pytest/mypy/ruff.",
        url: "https://github.com/Lleonsnow/file-exchange-task",
      },
      {
        name: "TraceDock",
        blurb: "Observability platform",
        stack: "TypeScript · microservices · auth · ingest · alerts · UI",
        description:
          "Ingest, analytics and alerting surface — auth through operational UI.",
        url: "https://github.com/Lleonsnow/TraceDock",
      },
      {
        name: "nodefy.pro",
        blurb: "Visual node platform",
        stack: "TypeScript · NestJS · Docker · monorepo",
        description: "Live node-based product: web + API in one repo.",
        url: "https://nodefy.pro",
      },
    ],
    more: [
      {
        name: "Pchelka-CRM",
        blurb: "CRM companion for the shop ecosystem",
        stack: "NestJS, TypeScript, Docker",
        url: "https://github.com/Lleonsnow/Pchelka-CRM",
      },
      {
        name: "girl",
        blurb: "Personal site + CMS",
        stack: "Nuxt 3, Django, PostgreSQL",
        url: "https://github.com/Lleonsnow/girl",
      },
      {
        name: "Trendsee",
        blurb: "Content platform with JWT auth",
        stack: "FastAPI, Vue 3, Redis, PostgreSQL",
        url: "https://github.com/Lleonsnow/Trendsee",
      },
      {
        name: "table_task",
        blurb: "1M-row UI: filters, DnD, infinite scroll",
        stack: "Next.js, Express, Docker",
        url: "https://github.com/Lleonsnow/table_task",
      },
    ],
    smaller: [
      {
        name: "Habit_bot",
        blurb: "Habit tracking Telegram bot",
        url: "https://github.com/Lleonsnow/Habit_bot.github.io",
      },
      {
        name: "beauty_bot",
        blurb: "Telegram bot for beauty / booking",
        url: "https://github.com/Lleonsnow/beauty_bot",
      },
      {
        name: "twitter_clone",
        blurb: "Microblogging API",
        url: "https://github.com/Lleonsnow/twitter_clone",
      },
      {
        name: "api_links",
        blurb: "Short links service",
        url: "https://github.com/Lleonsnow/api_links",
      },
      {
        name: "Sinchronizer_v.01",
        blurb: "Local ↔ Yandex Disk sync",
        url: "https://github.com/Lleonsnow/Sinchronizer_v.01",
      },
    ],
  },
} as const;

export function getSite(locale: Locale) {
  const t = copy[locale];
  return {
    locale,
    name: shared.name,
    fullName: shared.fullName,
    role: t.role,
    tagline: t.tagline,
    headline: t.headline,
    bio: t.bio,
    openTo: t.openTo,
    github: { ...shared.github, label: t.githubLabel },
    telegram: { ...shared.telegram, label: t.telegramLabel },
    nav: t.nav.map((item) => ({
      href: localizedPath(locale, item.path),
      path: item.path,
      label: item.label,
    })),
    ui: t.ui,
    strengths: t.strengths,
    stack: shared.stack,
    featured: t.featured,
    more: t.more,
    smaller: t.smaller,
  };
}

export type SiteContent = ReturnType<typeof getSite>;
