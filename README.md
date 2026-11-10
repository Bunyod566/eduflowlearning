# EduFlow

Har bir sahifa alohida fayl:

| Fayl | Sahifa |
|---|---|
| index.html | Bosh sahifa |
| catalog.html | Kurslar katalogi (`catalog.html?cat=Dizayn` kategoriya bilan) |
| course.html | Kurs sahifasi (`course.html?id=5`) |
| pricing.html | PRO tariflar |
| tasks.html | Topshiriqlar |
| profile.html | Profil |
| contact.html | Aloqa |
| admin.html | Admin panel (alohida sayt) |

Umumiy fayllar (barcha sahifalar ishlatadi):
- `layout.js` — sarlavha (menyu), footer va modal oynalar. Menyu yoki footer'ni o'zgartirmoqchi bo'lsangiz, faqat shu faylni tahrirlang.
- `app.js` — sayt mantig'i va sahifalar mazmuni.
- `translate.js` — uz / en / ru tarjima qatlami.
- `style.css` — qo'shimcha uslublar.

Hamma fayllar bitta papkada turishi kerak.

## VS Code da ishga tushirish
1. `File > Open Folder` orqali shu papkani oching.
2. "Live Server" (Ritwick Dey) ni o'rnating.
3. `index.html` ustida o'ng tugma > "Open with Live Server".

## Netlify
Butun papkani (barcha fayllar bilan) yuklang.
