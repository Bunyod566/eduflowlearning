        /* ===== EduFlow: to'liq til qatlami (uz / en / ru) =====
           Mavjud i18n lug'atiga tegmaydi; qolgan barcha matnlarni (modal, admin, profil,
           kurs nomlari, alert/confirm, placeholder) avtomatik tarjima qiladi. */
        (function () {
            const D = [
                // [uz (kalit), en, ru, (ixtiyoriy) uz o'rniga]
                ["Bunday akkount yo'q!", "No such account!", "Такого аккаунта нет!"],
                ["Chiqish", "Log out", "Выйти"],
                ["Dasturlash", "Programming", "Программирование"],
                ["Dizayn", "Design", "Дизайн"],
                ["Biznes", "Business", "Бизнес"],
                ["Chet tillari", "Foreign languages", "Иностранные языки"],
                ["SMM & Marketing", "SMM & Marketing", "SMM и маркетинг"],
                ["© 2026 EduFlow Platformasi. Barcha huquqlar himoyalangan.", "© 2026 EduFlow Platform. All rights reserved.", "© 2026 Платформа EduFlow. Все права защищены."],
                ["Tizimga Kirish", "Log In", "Вход"],
                ["ISM-FAMILIYA", "FULL NAME", "ИМЯ И ФАМИЛИЯ"],
                ["EMAIL / LOGIN", "EMAIL / LOGIN", "EMAIL / ЛОГИН"],
                ["PAROL", "PASSWORD", "ПАРОЛЬ"],
                ["Kirish", "Sign in", "Войти"],
                ["Kod yuborish", "Send code", "Отправить код"],
                ["Qayta yuborish", "Resend", "Отправить снова"],
                ["POCHTANGIZGA KELGAN KOD", "CODE SENT TO YOUR EMAIL", "КОД, ПРИШЕДШИЙ НА ПОЧТУ"],
                ["Email manzilini to'g'ri kiriting.", "Enter a valid email address.", "Введите корректный адрес электронной почты."],
                ["Avval emailga kod yuboring.", "Send the code to your email first.", "Сначала отправьте код на почту."],
                ["Kod noto'g'ri. Qaytadan urinib ko'ring.", "Incorrect code. Please try again.", "Неверный код. Попробуйте ещё раз."],
                ["Kod muddati tugadi. Yangi kod so'rang.", "The code has expired. Request a new one.", "Срок действия кода истёк. Запросите новый."],
                ["Urinishlar soni tugadi. Yangi kod so'rang.", "Too many attempts. Request a new code.", "Попытки закончились. Запросите новый код."],
                ["Kod yuborilmadi. Birozdan so'ng qayta urinib ko'ring.", "The code could not be sent. Please try again in a moment.", "Не удалось отправить код. Повторите попытку чуть позже."],
                ["Aloqa", "Contact", "Контакты"],
                ["ta dars", "lessons", "уроков"],
                ["Akkaunt yaratish", "Create Account", "Создать аккаунт"],
                ["Akkauntingiz yo'qmi?", "Don't have an account?", "Нет аккаунта?"],
                ["Akkauntingiz bormi?", "Already have an account?", "Уже есть аккаунт?"],
                ["Bu email bilan akkaunt allaqachon mavjud. Iltimos, tizimga kiring.", "An account with this email already exists. Please log in.", "Аккаунт с этим email уже существует. Пожалуйста, войдите."],
                ["Bunday akkaunt topilmadi. Avval \"Akkaunt yaratish\" tugmasi orqali ro'yxatdan o'ting.", "Account not found. Please register first with the \"Create Account\" button.", "Аккаунт не найден. Сначала зарегистрируйтесь кнопкой «Создать аккаунт»."],
                ["Profilni Tahrirlash", "Edit Profile", "Редактировать профиль"],
                ["EMAIL POCHTA", "EMAIL", "ЭЛЕКТРОННАЯ ПОЧТА"],
                ["PROFIL RASMI (AVATAR LINKI)", "PROFILE PICTURE (AVATAR LINK)", "ФОТО ПРОФИЛЯ (ССЫЛКА)"],
                ["O'ZINGIZ HAQINGIZDA (BIO)", "ABOUT YOU (BIO)", "О СЕБЕ (БИО)"],
                ["O'zgarishlarni Saqlash", "Save Changes", "Сохранить изменения"],
                ["Admin Boshqaruvi", "Admin Access", "Вход администратора"],
                ["Tizimga kirish uchun login va parolni kiriting", "Enter your login and password to sign in", "Введите логин и пароль для входа"],
                ["ADMIN LOGIN", "ADMIN LOGIN", "ЛОГИН АДМИНА"],
                ["Admin Panelga Kirish", "Enter Admin Panel", "Войти в админ-панель"],
                ["Savatcha", "Cart", "Корзина"],
                ["To'lov qilish (Click / Payme)", "Checkout (Click / Payme)", "Оплатить (Click / Payme)"],
                ["Savatcha bo'sh", "Your cart is empty", "Корзина пуста"],
                ["EduFlow PRO A'zolik", "EduFlow PRO Membership", "Членство EduFlow PRO"],
                ["Muddatni tanlang - cheksiz imkoniyatlar", "Choose a period – unlimited possibilities", "Выберите срок — безграничные возможности"],
                ["1 oylik", "1 month", "1 месяц"],
                ["1 yillik", "1 year", "1 год"],
                ["UZS / 1 oy", "UZS / 1 month", "UZS / 1 месяц"],
                ["UZS / 1 yil", "UZS / 1 year", "UZS / 1 год"],
                ["Barcha 100+ kurslarga to'liq va cheksiz kirish", "Full unlimited access to all 100+ courses", "Полный безлимитный доступ ко всем 100+ курсам"],
                ["O'qituvchilarga shaxsiy topshiriq va savollar yo'llash", "Send personal assignments and questions to teachers", "Отправляйте преподавателям личные задания и вопросы"],
                ["Profil va Headerda rasmiy PRO oltin Crown 👑 nishoni", "Official gold PRO Crown 👑 badge in profile and header", "Официальный золотой значок PRO Crown 👑 в профиле и шапке"],
                ["Parolni Almashtirish", "Change Password", "Сменить пароль"],
                ["! yangi parol esdan chiqmasin", "! don't forget your new password", "! не забудьте новый пароль"],
                ["yangi parol esdan chiqmasin", "don't forget your new password", "не забудьте новый пароль"],
                ["HOZIRGI PAROL", "CURRENT PASSWORD", "ТЕКУЩИЙ ПАРОЛЬ"],
                ["YANGI PAROL", "NEW PASSWORD", "НОВЫЙ ПАРОЛЬ"],
                ["YANGI PAROLNI TASDIQLASH", "CONFIRM NEW PASSWORD", "ПОДТВЕРДИТЕ НОВЫЙ ПАРОЛЬ"],
                ["Parolni Saqlash", "Save Password", "Сохранить пароль"],
                ["Hozircha hech kim ro'yxatdan o'tmagan", "No one has registered yet", "Пока никто не зарегистрировался"],
                ["ALL Categories", "All Categories", "Все категории", "Barcha kategoriyalar"],
                ["Hech qanday kurs topilmadi", "No courses found", "Курсы не найдены"],
                ["Siz nimalarni o'rganasiz", "What you will learn", "Чему вы научитесь"],
                ["reyting", "rating", "рейтинг"],
                ["sharh", "reviews", "отзывов"],
                ["Kurs muallifi", "Course author", "Автор курса"],
                ["Hoziroq boshlang", "Start right now", "Начните прямо сейчас"],
                ["EduFlow bilan yangi kasb egallang!", "Gain a new profession with EduFlow!", "Освойте новую профессию с EduFlow!"],
                ["Videoni ochish", "Open video", "Открыть видео"],
                ["Avto-taqdimot", "Auto presentation", "Автопрезентация"],
                ["Haqiqiy video qo'shish: Admin panel → Kurslarni boshqarish → VIDEO LINKI.", "To add a real video: Admin panel → Manage courses → VIDEO LINK.", "Чтобы добавить настоящее видео: Админ-панель → Управление курсами → ССЫЛКА НА ВИДЕО."],
                ["← Katalogga qaytish", "← Back to catalog", "← Назад в каталог"],
                ["Kurs Haqida", "About the Course", "О курсе"],
                ["PRO Bilan Bepul Ko'rish", "Watch Free with PRO", "Смотреть бесплатно с PRO"],
                ["Profilga kirish uchun tizimga kiring", "Log in to access your profile", "Войдите, чтобы открыть профиль"],
                ["EduFlow platformasi faol talabasi", "Active student of the EduFlow platform", "Активный студент платформы EduFlow"],
                ["Hozircha saqlangan kurslar mavjud emas.", "No saved courses yet.", "Сохранённых курсов пока нет."],
                ["Admin Kirish Talab Qilinadi", "Admin Login Required", "Требуется вход администратора"],
                ["EduFlow Control Center", "EduFlow Control Center", "Центр управления EduFlow"],
                ["Admin Boshqaruv Paneli", "Admin Dashboard", "Панель администратора"],
                ["Admin Chiqish", "Admin Logout", "Выход администратора"],
                ["Jonli", "Live", "Онлайн"],
                ["Ro'yxatdan o'tganlar", "Registered", "Зарегистрированные"],
                ["Jami Kurslar", "Total Courses", "Всего курсов"],
                ["Kategoriyalar", "Categories", "Категории"],
                ["PRO Active", "PRO Active", "PRO активные", "PRO faol"],
                ["Tizim Statusi", "System Status", "Статус системы"],
                ["Ro'yxatdan o'tgan foydalanuvchilar", "Registered users", "Зарегистрированные пользователи"],
                ["Bugun:", "Today:", "Сегодня:"],
                ["Yangilandi:", "Updated:", "Обновлено:"],
                ["Eksport", "Export", "Экспорт"],
                ["Import", "Import", "Импорт"],
                ["Ism", "Name", "Имя"],
                ["Sana", "Date", "Дата"],
                ["Yangi Kurs Qo'shish", "Add New Course", "Добавить новый курс"],
                ["KURS NOMI", "COURSE NAME", "НАЗВАНИЕ КУРСА"],
                ["KATEGORIYA", "CATEGORY", "КАТЕГОРИЯ"],
                ["NARXI (UZS)", "PRICE (UZS)", "ЦЕНА (UZS)"],
                ["O'QITUVCHI", "INSTRUCTOR", "ПРЕПОДАВАТЕЛЬ"],
                ["RASM LINKI (URL)", "IMAGE LINK (URL)", "ССЫЛКА НА ИЗОБРАЖЕНИЕ (URL)"],
                ["VIDEO LINKI (YouTube yoki .mp4)", "VIDEO LINK (YouTube or .mp4)", "ССЫЛКА НА ВИДЕО (YouTube или .mp4)"],
                ["+ Qo'shish", "+ Add", "+ Добавить"],
                ["Kurslarni Boshqarish va Narxni Tahrirlash", "Manage Courses & Edit Prices", "Управление курсами и редактирование цен"],
                ["Kategoriyadagi barcha kurslarga video:", "Video for all courses in a category:", "Видео для всех курсов категории:"],
                ["Qo'llash", "Apply", "Применить"],
                ["VIDEO LINKI", "VIDEO LINK", "ССЫЛКА НА ВИДЕО"],
                ["AMALLAR", "ACTIONS", "ДЕЙСТВИЯ"],
                ["Lokal rejim (Firebase ulanmagan)", "Local mode (Firebase not connected)", "Локальный режим (Firebase не подключён)"],
                ["Firebase ulangan", "Firebase connected", "Firebase подключён"],
                ["Firebase xatosi (Console ga qarang)", "Firebase error (see Console)", "Ошибка Firebase (см. Console)"],
                ["Amaliy Topshiriqlar", "Practical Assignments", "Практические задания"],
                ["Python OOP - Amaliy topshiriq #1", "Python OOP - Practical assignment #1", "Python OOP — практическое задание №1"],
                ["Kutilmoqda", "Pending", "В ожидании"],
                ["Biz Bilan Bog'lanish", "Contact Us", "Свяжитесь с нами"],
                ["XABAR NOMI", "MESSAGE SUBJECT", "ТЕМА СООБЩЕНИЯ"],
                ["XABARINGIZ", "YOUR MESSAGE", "ВАШЕ СООБЩЕНИЕ"],
                ["Yuborish", "Send", "Отправить"],
                ["Savatchada", "In Cart", "В корзине"],
                ["Savatchaga Qo'shish", "Add to Cart", "В корзину"],
                // placeholder / title
                ["Foydalanuvchini o'chirish", "Delete user", "Удалить пользователя"],
                ["Search...", "Search...", "Поиск...", "Qidirish..."],
                ["Kurs videosi", "Course video", "Видео курса"],
                ["Ijro etish / to'xtatish", "Play / pause", "Воспроизвести / пауза"],
                ["Masalan: Python Django Noldan", "e.g. Python Django from Scratch", "Например: Python Django с нуля"],
                ["https://youtu.be/... (bo'sh = o'chirish)", "https://youtu.be/... (empty = remove)", "https://youtu.be/... (пусто = удалить)"],
                ["Narx va videoni saqlash", "Save price and video", "Сохранить цену и видео"],
                ["Kursni o'chirish", "Delete course", "Удалить курс"],
                ["Mavzu", "Subject", "Тема"],
                ["Savol yoki taklifingizni yozing...", "Write your question or suggestion...", "Напишите ваш вопрос или предложение..."],
                // kurs nomlari va tavsifi
                ["Full-stack Web Dasturlash (Python & React)", "Full-stack Web Development (Python & React)", "Full-stack веб-разработка (Python и React)"],
                ["UI/UX Dizayn va Figma asoslari", "UI/UX Design and Figma Basics", "Основы UI/UX-дизайна и Figma"],
                ["SMM va Zamonaviy Marketing", "SMM and Modern Marketing", "SMM и современный маркетинг"],
                ["Ingliz tili: Beginner'dan IELTS 7.5'gacha", "English: From Beginner to IELTS 7.5", "Английский: от Beginner до IELTS 7.5"],
                ["Biznes va Startap asoslari", "Business and Startup Basics", "Основы бизнеса и стартапов"],
                ["Mobile App Development: Flutter", "Mobile App Development: Flutter", "Разработка мобильных приложений: Flutter"],
                ["Grafik Dizayn: Photoshop va Illustrator", "Graphic Design: Photoshop and Illustrator", "Графический дизайн: Photoshop и Illustrator"],
                ["Ispan tili: Noldan so'zlashuv", "Spanish: Conversation from Scratch", "Испанский: разговорный с нуля"],
                ["Finans va Buxgalteriya asoslari", "Finance and Accounting Basics", "Основы финансов и бухгалтерии"],
                ["Data Science va Machine Learning Python'da", "Data Science and Machine Learning in Python", "Data Science и машинное обучение на Python"],
                ["Ushbu interaktiv kurs orqali siz noldan boshlab professional ko'nikmalarni egallaysiz va amaliy loyihalar ustida ishlaysiz.", "With this interactive course you will master professional skills from scratch and work on practical projects.", "На этом интерактивном курсе вы с нуля освоите профессиональные навыки и поработаете над практическими проектами."],
                // kurs videosi sahnalari
                ["Noldan boshlab kod yozishni o'rganasiz", "You will learn to code from scratch", "Вы научитесь программировать с нуля"],
                ["Real loyihalar ustida amaliyot qilasiz", "You will practice on real projects", "Вы будете практиковаться на реальных проектах"],
                ["Portfolio uchun tayyor ishlar yaratasiz", "You will create finished work for your portfolio", "Вы создадите готовые работы для портфолио"],
                ["Zamonaviy dizayn vositalari bilan ishlaysiz", "You will work with modern design tools", "Вы будете работать с современными инструментами дизайна"],
                ["Foydalanuvchi qulayligi (UX) asoslarini bilasiz", "You will know the basics of user experience (UX)", "Вы узнаете основы удобства пользователя (UX)"],
                ["Portfolio uchun loyihalar yaratasiz", "You will create projects for your portfolio", "Вы создадите проекты для портфолио"],
                ["Biznes g'oyangizni tekshirasiz", "You will test your business idea", "Вы проверите свою бизнес-идею"],
                ["Moliya va rejalashtirishni o'rganasiz", "You will learn finance and planning", "Вы изучите финансы и планирование"],
                ["Mijozlarni jalb qilish yo'llarini bilasiz", "You will know how to attract customers", "Вы узнаете, как привлекать клиентов"],
                ["So'zlashuv va tinglab tushunishni mashq qilasiz", "You will practice speaking and listening", "Вы потренируете разговорную речь и аудирование"],
                ["Grammatika va lug'atni mustahkamlaysiz", "You will strengthen grammar and vocabulary", "Вы закрепите грамматику и словарный запас"],
                ["Real hayotiy suhbatlarga tayyorlanasiz", "You will prepare for real-life conversations", "Вы подготовитесь к реальным разговорам"],
                ["Kontent reja va strategiya tuzasiz", "You will build a content plan and strategy", "Вы составите контент-план и стратегию"],
                ["Reklama va auditoriya bilan ishlaysiz", "You will work with ads and audiences", "Вы будете работать с рекламой и аудиторией"],
                ["Natijalarni tahlil qilishni o'rganasiz", "You will learn to analyze results", "Вы научитесь анализировать результаты"],
                ["Yangi ko'nikmalarni egallaysiz", "You will gain new skills", "Вы освоите новые навыки"],
                ["Amaliy topshiriqlarni bajarasiz", "You will complete practical assignments", "Вы выполните практические задания"],
                ["Mentor yordamiga ega bo'lasiz", "You will get mentor support", "Вы получите поддержку наставника"],
                // alert / confirm
                ["Fayl noto'g'ri. Faqat \"Eksport\" tugmasi bilan saqlangan .json faylni yuklang.", "Invalid file. Upload only a .json file saved with the \"Export\" button.", "Неверный файл. Загрузите только .json-файл, сохранённый кнопкой «Экспорт»."],
                ["Xabaringiz yuborildi!", "Your message has been sent!", "Ваше сообщение отправлено!"],
                ["To'lov muvaffaqiyatli amalga oshirildi! Kurslar profilingizga biriktirildi.", "Payment successful! The courses have been added to your profile.", "Оплата прошла успешно! Курсы добавлены в ваш профиль."],
                ["PRO obunangiz muddati tugadi. Yangilash uchun \"PRO Tariflar\" bo'limiga o'ting.", "Your PRO subscription has expired. Go to the \"PRO Plans\" section to renew it.", "Срок вашей PRO-подписки истёк. Для продления перейдите в раздел «PRO-тарифы»."],
                ["Login yoki parol xato!", "Incorrect login or password!", "Неверный логин или пароль!"],
                ["Hozirgi parol noto'g'ri kiritildi!", "The current password is incorrect!", "Текущий пароль введён неверно!"],
                ["Yangi parol va tasdiqlash paroli mos kelmadi!", "The new password and confirmation do not match!", "Новый пароль и подтверждение не совпадают!"],
                ["Admin paroli muvaffaqiyatli o'zgartirildi!", "Admin password changed successfully!", "Пароль администратора успешно изменён!"],
                ["Video havolasi noto'g'ri. https:// bilan boshlanadigan havola kiriting.", "Invalid video link. Enter a link starting with https://.", "Неверная ссылка на видео. Введите ссылку, начинающуюся с https://."]
            ];

            const norm = s => s.replace(/\s+/g, ' ').trim();
            const MAP = new Map();
            D.forEach(([u, e, r, uo]) => MAP.set(norm(u), { uz: uo, en: e, ru: r }));

            const planL = (x, l) => { const e = MAP.get(x); return e ? (l === 'uz' ? x : e[l]) : x; };
            const dayW = { uz: 'kun', en: 'days', ru: 'дн.' };
            const P = [
                { re: /^(\d+) ta dars$/, en: m => `${m[1]} lessons`, ru: m => `${m[1]} уроков` },
                { re: /^(.*) \((\d+) sharhlar\)$/, en: m => `${m[1]} (${m[2]} reviews)`, ru: m => `${m[1]} (${m[2]} отзывов)` },
                { re: /^Saqlangan Kurslar \((\d+)\)$/, en: m => `Saved Courses (${m[1]})`, ru: m => `Сохранённые курсы (${m[1]})` },
                { re: /^(1 oylik|1 yillik) · (.+) gacha$/, en: m => `${planL(m[1], 'en')} · until ${m[2]}`, ru: m => `${planL(m[1], 'ru')} · до ${m[2]}` },
                {
                    re: /^PRO (\S+) gacha \((\d+) kun qoldi\)(\. Yangi obuna muddatni uzaytiradi\.)?$/,
                    en: m => `PRO until ${m[1]} (${m[2]} days left)` + (m[3] ? '. A new subscription extends the period.' : ''),
                    ru: m => `PRO до ${m[1]} (осталось ${m[2]} дн.)` + (m[3] ? '. Новая подписка продлит срок.' : '')
                },
                { re: /^Kod yuborilmadi\. Birozdan so'ng qayta urinib ko'ring\.(?: \(([\s\S]*)\))?$/, en: m => `The code could not be sent. Please try again in a moment.${m[1] ? ` (${m[1]})` : ''}`, ru: m => `Не удалось отправить код. Повторите попытку чуть позже.${m[1] ? ` (${m[1]})` : ''}` },
                { re: /^Qayta yuborish \((\d+) s\)$/, en: m => `Resend (${m[1]} s)`, ru: m => `Отправить снова (${m[1]} с)` },
                { re: /^Kod (.+) manziliga yuborildi\. 10 daqiqa amal qiladi\.$/, en: m => `The code was sent to ${m[1]}. It is valid for 10 minutes.`, ru: m => `Код отправлен на ${m[1]}. Действителен 10 минут.` },
                { re: /^Test rejimi: email xizmati ulanmagan\. Kod: (\d+)$/, en: m => `Test mode: email service is not connected. Code: ${m[1]}`, ru: m => `Тестовый режим: почтовый сервис не подключён. Код: ${m[1]}` },
                { re: /^Obunani tasdiqlash \((.+)\)$/, en: m => `Confirm subscription (${m[1]})`, ru: m => `Подтвердить подписку (${m[1]})` },
                { re: /^Muddati: (\d+) kun qoldi$/, en: m => `Due: ${m[1]} days left`, ru: m => `Срок: осталось ${m[1]} дн.` },
                { re: /^Kurs videosi(.*)$/, en: m => `Course video${m[1]}`, ru: m => `Видео курса${m[1]}` },
                { re: /^(.+) #(\d+)$/, en: m => MAP.has(m[1]) ? `${MAP.get(m[1]).en} #${m[2]}` : null, ru: m => MAP.has(m[1]) ? `${MAP.get(m[1]).ru} #${m[2]}` : null },
                // alert / confirm
                { re: /^"(.*)" foydalanuvchini o'chirmoqchimisiz\?$/, en: m => `Delete user "${m[1]}"?`, ru: m => `Удалить пользователя «${m[1]}»?` },
                { re: /^Import tugadi: (\d+) ta yangi, (\d+) ta yangilandi\.$/, en: m => `Import finished: ${m[1]} new, ${m[2]} updated.`, ru: m => `Импорт завершён: новых — ${m[1]}, обновлено — ${m[2]}.` },
                {
                    re: /^Tabriklaymiz! PRO \((.+)\) faollashtirildi\. Amal qilish muddati: (.+) gacha\.$/,
                    en: m => `Congratulations! PRO (${planL(m[1], 'en')}) is activated. Valid until: ${m[2]}.`,
                    ru: m => `Поздравляем! PRO (${planL(m[1], 'ru')}) активирован. Действует до: ${m[2]}.`
                },
                {
                    re: /^Kurs #(\d+) yangilandi: narx (.+) UZS(, video saqlandi)?\.$/,
                    en: m => `Course #${m[1]} updated: price ${m[2]} UZS${m[3] ? ', video saved' : ''}.`,
                    ru: m => `Курс #${m[1]} обновлён: цена ${m[2]} UZS${m[3] ? ', видео сохранено' : ''}.`
                },
                {
                    re: /^"(.*)" kategoriyasidagi (\d+) ta kursga (shu videoni qo'llaymizmi|videoni o'chiramizmi)\?$/,
                    en: m => `Do you want to ${m[3].startsWith('shu') ? 'apply this video to' : 'remove the video from'} ${m[2]} courses in the "${MAP.has(m[1]) ? MAP.get(m[1]).en : m[1]}" category?`,
                    ru: m => `${m[3].startsWith('shu') ? 'Применить это видео к' : 'Удалить видео у'} ${m[2]} курсам категории «${MAP.has(m[1]) ? MAP.get(m[1]).ru : m[1]}»?`
                }
            ];

            function tr(raw, lang) {
                const key = norm(raw);
                if (!key) return null;
                const e = MAP.get(key);
                if (e) return lang === 'uz' ? (e.uz !== undefined ? e.uz : null) : e[lang];
                if (lang === 'uz') return null;
                for (const p of P) {
                    const m = key.match(p.re);
                    if (m) { const out = p[lang](m); if (out) return out; }
                }
                return null;
            }
            const L = () => (typeof currentLang !== 'undefined' && currentLang) || 'uz';

            function doText(n) {
                const cur = n.nodeValue, lang = L();
                const src = (n.__t !== undefined && cur === n.__t) ? n.__o : cur;
                const t = tr(src, lang);
                if (t !== null) {
                    const lead = src.match(/^\s*/)[0], trail = src.match(/\s*$/)[0];
                    const out = lead + t + trail;
                    if (cur !== out) n.nodeValue = out;
                    n.__o = src; n.__t = out;
                } else if (src !== cur) {
                    n.nodeValue = src; n.__t = undefined; n.__o = undefined;
                }
            }
            const ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
            function doEl(el) {
                const lang = L();
                el.__a = el.__a || {};
                for (const a of ATTRS) {
                    if (!el.hasAttribute(a)) continue;
                    const cur = el.getAttribute(a), rec = el.__a[a];
                    const src = (rec && cur === rec.t) ? rec.o : cur;
                    const t = tr(src, lang);
                    if (t !== null) { if (cur !== t) el.setAttribute(a, t); el.__a[a] = { o: src, t }; }
                    else if (src !== cur) { el.setAttribute(a, src); delete el.__a[a]; }
                }
            }
            function walk(root) {
                if (root.nodeType === 3) { doText(root); return; }
                if (root.nodeType !== 1) return;
                const tag = root.tagName;
                if (tag === 'SCRIPT' || tag === 'STYLE') return;
                doEl(root);
                const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
                    acceptNode: n => (n.nodeType === 1 && (n.tagName === 'SCRIPT' || n.tagName === 'STYLE')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                });
                let n;
                while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doEl(n); }
            }

            const TITLES = { uz: "EduFlow - Onlayn Ta'lim Platformasi", en: "EduFlow - Online Education Platform", ru: "EduFlow — онлайн-платформа обучения" };
            const OPTS = { childList: true, subtree: true, characterData: true };
            const mo = new MutationObserver(recs => {
                mo.disconnect();
                try {
                    for (const r of recs) {
                        if (r.type === 'characterData') doText(r.target);
                        else r.addedNodes.forEach(walk);
                    }
                } finally { mo.observe(document.body, OPTS); }
            });
            function applyAll() {
                mo.disconnect();
                try {
                    const l = L();
                    document.documentElement.lang = l;
                    document.title = (window.pageTitle && window.pageTitle(l)) || TITLES[l] || TITLES.uz;
                    walk(document.body);
                } finally { mo.observe(document.body, OPTS); }
            }

            // alert / confirm xabarlarini tarjima qilish
            const _alert = window.alert.bind(window), _confirm = window.confirm.bind(window);
            const msg = m => { const s = String(m); const t = tr(s, L()); return t !== null ? t : s; };
            window.alert = m => _alert(msg(m));
            window.confirm = m => _confirm(msg(m));

            // Til almashganda butun sahifani (modal, footer, admin) qayta tarjima qilish
            const _change = window.changeLanguage;
            window.changeLanguage = function (lang) { _change(lang); applyAll(); };

            applyAll();
            document.addEventListener('DOMContentLoaded', applyAll);
            window.addEventListener('load', applyAll);
        })();
