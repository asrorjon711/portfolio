# Asrorjon portfoliosi

HTML, CSS va JavaScript yordamida yaratilgan shaxsiy portfolio. Sayt uchta sahifadan iborat: Asosiy, Men haqimda va Kontakt. Barcha sahifalar umumiy `portfolio.css` faylidan foydalanadi.

## Ishga tushirish

1. Node.js 20.19+ yoki 22.12+ versiyasini o‘rnating.
2. Loyiha papkasida terminal oching va `npm install` buyrug‘ini bajaring.
3. Mahalliy ko‘rish uchun `npm run dev` buyrug‘ini bajaring.
4. Kodni tekshirish uchun `npm run lint` buyrug‘ini bajaring.
5. Tayyor sayt yaratish uchun `npm run build` buyrug‘ini bajaring; natija `dist/` papkasiga yoziladi.

## Sahifalar

- `index.html` — bosh sahifa manzili.
- `asosiy.html` — Asosiy sahifa.
- `men-haqimda.html` — Men haqimda sahifasi va matn belgilar sanagichi.
- `kontakt.html` — aloqa shakli va ijtimoiy tarmoqlar.

Bosh sahifadagi counter 0 dan boshlanadi. 0 bo‘lganda kamaytirish va qaytarish tugmalari ishlamaydi. Son manfiyga tushmaydi.

## GitHub Pages

Vite orqali tayyorlangan `dist/` papkasini GitHub Pages’da ko‘rsatish uchun repozitoriy sozlamalaridagi **Settings → Pages → Build and deployment → Source** bo‘limidan **GitHub Actions**-ni tanlang va joylash workflow’ini sozlang. Loyiha `/portfolio/` manzil yo‘liga moslangan.