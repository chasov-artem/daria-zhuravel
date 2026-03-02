# PulseBeauty Studio — Daria Zhuravel

Сайт студії електроепіляції PulseBeauty Studio (Окленд, NZ). React + Vite, мультимовність (en/ru), SEO.

## Стек

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **React Router 7**
- **Framer Motion**, **Swiper**, **react-icons**

## Запуск

```bash
npm install
npm run dev
```

Сайт відкриється на `http://localhost:5173`. За замовчуванням редірект на `/en`.

## Збірка

```bash
npm run build
```

Результат у `dist/`. Перегляд:

```bash
npm run preview
```

## Змінні середовища

| Змінна        | Опис                          |
|---------------|-------------------------------|
| `VITE_SITE_URL` | Production URL (наприклад `https://www.pulsebeauty-studio.com`) |

Якщо не задано, використовується значення з `src/config/seo.js`.

## Деплой

Підтримуються **Netlify** і **Vercel**:

- `netlify.toml` — build: `npm run build`, publish: `dist`
- `vercel.json` — SPA rewrites на `index.html`

Після деплою онови URL у `index.html`, `public/robots.txt`, `public/sitemap.xml`, `src/config/seo.js` (або задай `VITE_SITE_URL`).

## SEO

Детальні інструкції — у [SEO_SETUP.md](./SEO_SETUP.md).

## Необхідні assets (public/)

Додай у `public/` такі файли, щоб уникнути битих зображень:

| Файл | Призначення |
|------|-------------|
| `biglogo.PNG` | Логотип у header і hero |
| `studio.png` | Назва студії в header |
| `daria-logo.PNG` | Favicon (index.html) |
| `Diploma21century.png` | Сертифікат |
| `certificate.png` | Сертифікат |
| `certificate1.png` … `certificate4.png` | Сертифікати |

Зображення галереї та сервісів (`.webp`) вже є.

## Скрипти

| Команда | Опис |
|---------|------|
| `npm run dev` | Dev-сервер з HMR |
| `npm run build` | Production build |
| `npm run preview` | Перегляд збірки |
| `npm run lint` | ESLint |
| `npm run test` | Запуск тестів (Vitest) |
| `npm run test:watch` | Тести в watch-режимі |
