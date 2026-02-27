# SEO налаштування та Google Search Console

## Що вже зроблено

- ✅ Meta-теги (title, description, keywords, author)
- ✅ Open Graph для Facebook та соцмереж
- ✅ Twitter Card для поширення в Twitter
- ✅ `robots.txt` — дозвіл для пошукових роботів
- ✅ `sitemap.xml` — карта сайту з усіма сторінками
- ✅ Canonical URL — унікальні посилання для кожної сторінки
- ✅ JSON-LD (Schema.org) — структуровані дані для Google
- ✅ SEO-переклади для en та ru
- ✅ Динамічні title/description через useSeo

---

## 1. Оновлення домену

Якщо твій домен відрізняється від `www.pulsebeauty-studio.com`, онови:

1. **index.html** — усі URL в meta-тегах та JSON-LD
2. **public/robots.txt** — рядок `Sitemap:`
3. **public/sitemap.xml** — усі `<loc>` URL
4. **src/config/seo.js** — `SITE_URL` або змінна середовища `VITE_SITE_URL`

Для production можна задати URL через `.env`:

```
VITE_SITE_URL=https://твій-домен.com
```

---

## 2. Google Search Console

### Крок 1: Реєстрація

1. Перейди на [Google Search Console](https://search.google.com/search-console)
2. Увійди в Google-акаунт
3. Натисни **«Додати ресурс»** (Add property)

### Крок 2: Підтвердження домену

**Варіант A — через DNS (рекомендовано):**

1. Обери тип **«Домен»**
2. Введи домен (наприклад, `www.pulsebeauty-studio.com`)
3. Google дасть TXT-запис для DNS
4. Додай цей запис у налаштуваннях домену (де купував домен)
5. Натисни **«Підтвердити»**

**Варіант B — через HTML-файл:**

1. Обери тип **«Префікс URL»**
2. Введи URL сайту (наприклад, `https://www.pulsebeauty-studio.com`)
3. Скачай HTML-файл для підтвердження
4. Завантаж його в корінь сайту (у `public/`)
5. Переконайся, що файл доступний за `https://твій-домен.com/google123...html`
6. Натисни **«Підтвердити»**

**Варіант C — через meta-тег:**

1. Обери тип **«Префікс URL»**
2. Google дасть meta-тег
3. Додай його в `<head>` у `index.html`
4. Задеплой сайт і натисни **«Підтвердити»**

### Крок 3: Відправка Sitemap

1. У Search Console: **Sitemaps** (Карти сайту)
2. У полі введи: `sitemap.xml`
3. Натисни **«Надіслати»**
4. Google почне індексувати сторінки

### Крок 4: Перевірка індексації

1. **URL Inspection** — перевір окремі сторінки
2. **Coverage** — подивись, які сторінки в індексі
3. **Performance** — кількість показів і кліків у пошуку

---

## 3. Google Analytics (опційно)

1. Перейди на [Google Analytics](https://analytics.google.com)
2. Створи властивість для сайту
3. Отримай Measurement ID (наприклад, `G-XXXXXXXXXX`)
4. Додай скрипт у `index.html` перед `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 4. Перевірка Open Graph

Щоб перевірити, як виглядає посилання при поширенні:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

Встав URL сторінки і перевір прев’ю.

---

## 5. Рекомендації

1. **Швидкість** — оптимізуй зображення (WebP вже використовується)
2. **Mobile** — viewport і responsive вже налаштовані
3. **HTTPS** — обов’язково для production
4. **Оновлення контенту** — регулярно додавай новий контент (блог, оновлення цін тощо)
5. **Локальне SEO** — додай бізнес у [Google Business Profile](https://business.google.com)

---

## 6. Файли, які варто оновити після деплою

| Файл | Що змінити |
|------|------------|
| `index.html` | Усі `https://www.pulsebeauty-studio.com` → твій домен |
| `public/robots.txt` | Sitemap URL |
| `public/sitemap.xml` | Усі `<loc>` URL |
| `src/config/seo.js` | `SITE_URL` або `VITE_SITE_URL` |
