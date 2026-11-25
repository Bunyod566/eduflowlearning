# EduFlow

Asosiy sayt bitta fayl: **index.html** (menyu, footer, barcha sahifalar, uz/en/ru tarjima, uslublar va mantiq ichida).
Ustozlar sayti alohida bitta fayl: **teacher.html**.
Sahifalar o'rtasida o'tish sahifani qayta yuklamaydi, manzillar `#` bilan boshlanadi:

| Manzil | Sahifa |
|---|---|
| `index.html` | Bosh sahifa |
| `index.html#/catalog` | Kurslar katalogi (`#/catalog/Dizayn` kategoriya bilan) |
| `index.html#/course/5` | Kurs sahifasi |
| `index.html#/pricing`, `#/tasks`, `#/profile`, `#/contact` | PRO tariflar, topshiriqlar, profil, aloqa |
| `/payment.html?order=...` | To'lovdan qaytgandan keyingi natija (netlify.toml uni index.html ga yo'naltiradi) |

Alohida qolgan fayllar:
- `manager.html`: menejer paneli (o'quvchilar, ustozlar, xodimlar).
- `teacher.html`: ustozlar sayti (`teacher.html#/teacher-courses`, `#/teacher-edit/ID`, `#/teacher-profile`). Ustozlar uni to'g'ridan-to'g'ri manzil orqali ochadi (asosiy saytda havola yo'q).
- `admin.html`: admin panel (alohida sayt).
- `netlify.toml`, `netlify/functions/`: to'lov serveri (Payme, Click, Uzum Bank). Sozlash: `PAYMENTS-SETUP.md`, kalitlar namunasi: `.env.example`.

Eski `catalog.html`, `course.html`, `pricing.html`, `profile.html`, `tasks.html`, `contact.html`, `payment.html`, `app.js`, `layout.js`, `translate.js`, `style.css` kerak emas, o'chirib tashlash mumkin.

## VS Code da ishga tushirish
1. `File > Open Folder` orqali shu papkani oching.
2. "Live Server" (Ritwick Dey) ni o'rnating.
3. `index.html` ustida o'ng tugma > "Open with Live Server".
(Live Server'da server funksiyalari va `/payment.html` yo'naltirishi ishlamaydi, to'lov demo rejimida bo'ladi.)

## Netlify
Server funksiyalari uchun GitHub yoki Netlify CLI orqali yuklang (qarang: `PAYMENTS-SETUP.md`).

## Ustozlar sayti: guruhlar, ballar, davomat
`teacher.html#/teacher-groups` sahifasida ustoz guruh yaratadi va unga saytda ro'yxatdan o'tgan o'quvchilarni qo'shadi. Guruh ichida:
- **O'quvchilar va ballar**: har bir o'quvchiga ball qo'shish yoki ayirish (miqdor va sabab bilan), "Hammasiga qo'shish". Ball 0 dan pastga tushmaydi.
- **Davomat**: sana tanlab Keldi / Kechikdi / Sababli / Kelmadi belgilanadi va saqlanadi; pastda har bir o'quvchi bo'yicha hisobot va foiz.
- **Tarix**: guruhdagi ball o'zgarishlari.

O'quvchi o'z ballarini asosiy saytda ko'radi: sarlavhadagi tanga belgisi va Profil sahifasidagi "Mening ballarim" (tarixi bilan).

Firestore kolleksiyalari: `groups`, `points` (kaliti o'quvchi emaili), `pointLog`, `attendance`.

## Menejer paneli (manager.html)
Rollar: **bosh egasi** (`bunedniyazov2014@gmail.com`, o'chirib bo'lmaydi) > **menejer** > **admin**. Xodimlar Firestore'dagi `staff` kolleksiyasida (hujjat nomi = email kichik harflarda).
- **Menejer**: o'quvchilarga ball qo'shadi/ayiradi (izoh bilan, ball tarixida "Menejer" bo'lib ko'rinadi), o'quvchi va ustoz akkauntlarini o'chiradi va tiklaydi, adminlarni qo'shadi va o'chiradi.
- **Bosh egasi**: menejer imkoniyatlari + menejerlarni tayinlaydi va o'chiradi.
- **Admin**: `admin.html` da ishlaydi (ustozlar, kurslar, sharhlar, Edu-Shop). Menejer panelini ocholmaydi.
- Yangi xodim: menejer emailini "Xodimlar" ga qo'shadi, xodim `manager.html` dagi **Akkaunt yaratish** orqali shu email bilan parol o'rnatadi. Admin keyin `admin.html` dagi Firebase kirishida shu email va parol bilan kiradi.
- O'chirish: o'quvchi saytga kira olmaydi (ballari saqlanadi); ustoz ustozlar saytida hech narsa qila olmaydi (kurslari saqlanadi). Ikkalasini ham tiklash mumkin. Firebase'dagi kirish akkauntining o'zi server talab qilgani uchun o'chirilmaydi, faqat huquqlari yopiladi.

## Edu-Shop
Asosiy saytning sarlavhasida **Edu-Shop** (`index.html#/shop`): o'quvchi ustozlardan olgan ballarini texnika, kitob va sovg'alarga almashtiradi. Buyurtma "kutilmoqda" holatida tushadi va shu ball "band qilingan" bo'ladi. Admin `admin.html` dagi **Edu-Shop buyurtmalari** bo'limida sovg'ani topshirganda **Topshirish** ni bosadi va ball shunda yechiladi (ball tarixida "Edu-Shop: ..." bo'lib ko'rinadi). Rad etilsa, ball qaytadi.
Mahsulotlar ro'yxati kod ichida (`SHOP_ITEMS`): uni `index.html` va `admin.html` da bir xil o'zgartirish kerak. Firestore kolleksiyasi: `shopOrders`.

## Ustoz akkauntlarini tasdiqlash
Yangi ustoz ro'yxatdan o'tganda akkaunti "kutmoqda" holatida bo'ladi: u faqat profilini to'ldira oladi. Admin `admin.html` dagi **Ustozlar** bo'limida tasdiqlaydi, rad etadi yoki bloklaydi (sabab bilan). Tasdiqlangunga qadar ustoz kurs yarata olmaydi, ball bera olmaydi va davomat qila olmaydi; buni Firestore qoidalari ham tekshiradi. Avval ro'yxatdan o'tgan ustozlar ham bir marta tasdiqlanishi kerak.

## Ustoz kurslarini sotish
Admin tasdiqlagan ustoz kurslari asosiy saytning katalogida (qidiruv va kategoriya filtri bilan) va kurs sahifasida chiqadi (manzil `#/course/<raqam>`). Birinchi dars bepul, qolganlari sotib olingandan keyin ochiladi. PRO obunaga kirmaydi.
To'lov hozircha demo karta oynasi orqali: sayt Vercel'da, Netlify server funksiyalari ishlamaydi. Haqiqiy to'lov ulanganda server ustoz kurslarining narxini ham Firestore'dan tekshiradigan qilib yangilanishi kerak; shu vaqtgacha haqiqiy to'lov rejimida ustoz kurslari savatdan olib tashlanishi so'raladi.

## Ustozlar sayti: sozlash
1. Firebase Console > Authentication > Sign-in method > **Email/Password** yoqilgan bo'lsin.
2. Firebase Console > Firestore Database > **Rules** dagi hamma matnni quyidagi bilan almashtiring va **Publish** ni bosing. `admin()` ichidagi email admin panelga kiradigan Firebase akkaunti bo'lishi kerak.
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Email/parol bilan kirgan foydalanuvchi (ustoz yoki admin)
    function pw() {
      return request.auth != null
        && request.auth.token.firebase.sign_in_provider == 'password';
    }
    // Bosh egasi (o'chirib bo'lmaydi)
    function owner() {
      return pw() && request.auth.token.email == 'bunedniyazov2014@gmail.com';
    }
    // Xodimlar ro'yxatidagi rol: staff/{email}.role = 'admin' yoki 'manager'
    function staffRole() {
      return exists(/databases/$(database)/documents/staff/$(request.auth.token.email))
        ? get(/databases/$(database)/documents/staff/$(request.auth.token.email)).data.role : '';
    }
    // Menejer: bosh egasi yoki menejer rolidagi xodim
    function manager() {
      return owner() || (pw() && staffRole() == 'manager');
    }
    // Admin: bosh egasi, menejer yoki admin rolidagi xodim
    function admin() {
      return owner() || (pw() && staffRole() in ['admin', 'manager']);
    }
    // Admin tasdiqlagan ustoz
    function teacher() {
      return pw()
        && get(/databases/$(database)/documents/teachers/$(request.auth.uid)).data.get('approval', '') == 'approved';
    }

    // Foydalanuvchilar ro'yxati (asosiy sayt va admin panel)
    match /users/{id} {
      allow read, create, update: if true;
      allow delete: if admin();
    }

    // Sharhlar: hamma o'qiydi, kirgan odam yozadi, o'zinikini yoki admin o'chiradi
    match /comments/{id} {
      allow read: if true;
      allow create: if request.auth != null
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.text is string
        && request.resource.data.text.size() <= 500;
      allow delete: if request.auth != null
        && (resource.data.uid == request.auth.uid || admin());
    }

    // Ustoz profili: yangi ustoz 'pending' bo'lib yaratiladi, tasdiqni faqat admin o'zgartiradi
    match /teachers/{uid} {
      allow read: if pw() && (request.auth.uid == uid || admin());
      allow create: if pw() && request.auth.uid == uid
        && request.resource.data.approval == 'pending';
      allow update: if admin()
        || (pw() && request.auth.uid == uid
          && request.resource.data.approval == resource.data.get('approval', 'pending')
          && request.resource.data.get('approvalReason', '') == resource.data.get('approvalReason', ''));
      allow delete: if admin();
    }

    // Ustoz kurslari
    match /teacherCourses/{id} {
      allow read: if resource.data.status == 'approved'
        || (pw() && (resource.data.ownerUid == request.auth.uid || admin()));
      allow create: if teacher()
        && request.resource.data.ownerUid == request.auth.uid
        && request.resource.data.status in ['draft', 'pending'];
      allow update: if admin()
        || (teacher()
          && resource.data.ownerUid == request.auth.uid
          && request.resource.data.ownerUid == request.auth.uid
          && request.resource.data.status in ['draft', 'pending']);
      allow delete: if pw() && (resource.data.ownerUid == request.auth.uid || admin());
    }

    // Ustoz guruhlari: faqat guruh egasi (tasdiqlangan ustoz)
    match /groups/{id} {
      allow read: if pw() && (resource.data.ownerUid == request.auth.uid || admin());
      allow create: if teacher()
        && request.resource.data.ownerUid == request.auth.uid
        && request.resource.data.students.size() <= 100;
      allow update: if teacher()
        && resource.data.ownerUid == request.auth.uid
        && request.resource.data.ownerUid == request.auth.uid
        && request.resource.data.students.size() <= 100;
      allow delete: if pw() && (resource.data.ownerUid == request.auth.uid || admin());
    }

    // O'quvchi ballari: hamma ko'radi, tasdiqlangan ustozlar va admin (Edu-Shop) o'zgartiradi, 0 dan kam bo'lmaydi
    match /points/{key} {
      allow read: if true;
      allow create, update: if (teacher() || admin())
        && request.resource.data.balance is int
        && request.resource.data.balance >= 0;
      allow delete: if admin();
    }

    // Ball tarixi: faqat qo'shiladi, keyin o'zgartirib bo'lmaydi
    match /pointLog/{id} {
      allow read: if true;
      allow create: if (teacher() || admin())
        && request.resource.data.teacherUid == request.auth.uid
        && request.resource.data.delta is int;
      allow delete: if admin();
    }

    // Davomat: faqat guruh egasi
    match /attendance/{id} {
      allow read: if pw() && (resource.data.ownerUid == request.auth.uid || admin());
      allow create: if teacher() && request.resource.data.ownerUid == request.auth.uid;
      allow update: if teacher()
        && resource.data.ownerUid == request.auth.uid
        && request.resource.data.ownerUid == request.auth.uid;
      allow delete: if pw() && (resource.data.ownerUid == request.auth.uid || admin());
    }

    // Xodimlar: bosh egasi menejer va admin tayinlaydi; menejer faqat admin qo'shadi va o'chiradi
    match /staff/{email} {
      allow read: if pw() && (request.auth.token.email == email || admin());
      allow create: if request.resource.data.email == email
        && (owner() && request.resource.data.role in ['admin', 'manager']
          || manager() && request.resource.data.role == 'admin');
      allow update: if request.resource.data.email == email
        && (owner() && request.resource.data.role in ['admin', 'manager']
          || manager() && resource.data.role == 'admin' && request.resource.data.role == 'admin');
      allow delete: if owner() || (manager() && resource.data.role == 'admin');
    }

    // orders va txnIndex: faqat to'lov serveri kiradi, saytdan yopiq.
    // Qolgan hamma narsa ham yopiq.

    // Edu-Shop buyurtmalari: o'quvchi 'pending' buyurtma yuboradi, faqat admin topshiradi yoki rad etadi
    match /shopOrders/{id} {
      allow read: if true;
      allow create: if request.resource.data.status == 'pending'
        && request.resource.data.key is string
        && request.resource.data.itemId is string
        && request.resource.data.price is int
        && request.resource.data.price > 0
        && request.resource.data.get('note', '').size() <= 120;
      allow update, delete: if admin();
    }
  }
}
```
3. Ustoz kursi holatlari: `draft`, `pending`, `approved`, `rejected`. Admin panelidagi "Ustoz kurslari: tekshiruv" bo'limida tekshiruvdagi kurslar tasdiqlanadi yoki rad etiladi.
