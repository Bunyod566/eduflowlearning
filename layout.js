// EduFlow: barcha sahifalarda bir xil bo'ladigan qismlar (sarlavha, footer, modal oynalar).
// Sarlavha yoki footer'ni o'zgartirmoqchi bo'lsangiz, faqat shu faylni tahrirlang.
(function () {
    const TOP = `    <div id="scroll-progress"></div>

    <!-- ACCOUNT DELETED BANNER -->
    <div id="account-missing-banner" class="hidden sticky top-0 z-50 bg-red-600 text-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-3 text-sm font-bold">
            <i class="fa-solid fa-triangle-exclamation text-lg"></i>
            <span>Bunday akkount yo'q!</span>
            <button onclick="logoutUser()"
                class="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-xs transition">Chiqish</button>
        </div>
    </div>

    <!-- NAVIGATION BAR -->
    <header class="sticky top-0 z-40 glass border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

            <!-- Logo -->
            <a href="index.html"
                class="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition shrink-0 mr-6 lg:mr-14">
                <span
                    class="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white text-base shadow-lg"><i
                        class="fa-solid fa-graduation-cap"></i></span>
                <span class="font-display text-lg font-extrabold text-gray-900 dark:text-white">EduFlow</span>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center gap-4 lg:gap-6 font-medium text-sm [&>a]:whitespace-nowrap">
                <a href="catalog.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    id="nav-catalog">Kurslar Katalogi</a>
                <a href="pricing.html"
                    class="hover:text-amber-500 font-bold dark:hover:text-amber-400 transition flex items-center gap-1.5"
                    id="nav-pricing">
                    <i class="fa-solid fa-crown text-amber-500"></i> <span id="nav-pricing-text">PRO Tariflar</span>
                </a>
                <a href="tasks.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    id="nav-tasks">Topshiriqlar</a>
                <a href="contact.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    id="nav-contact">Aloqa</a>
            </nav>

            <!-- Actions Right -->
            <div class="flex items-center gap-3">
                <!-- Premium Upgrade Page Button -->
                <a href="pricing.html" id="premium-header-btn"
                    class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 rounded-lg font-bold text-xs shadow-md hover:opacity-90 transition cursor-pointer">
                    <i class="fa-solid fa-crown text-amber-950"></i>
                    <span id="premium-btn-text">PRO Obuna (30k/oy)</span>
                </a>

                <!-- Language Selector -->
                <select id="lang-select" onchange="changeLanguage(this.value)"
                    class="bg-gray-100 dark:bg-gray-800 border-none text-xs font-semibold rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200">
                    <option value="uz">O'zbek</option>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                </select>

                <!-- Dark Mode Toggle -->
                <button onclick="toggleDarkMode()"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <i id="theme-icon" class="fa-solid fa-moon text-gray-600 dark:text-yellow-400"></i>
                </button>

                <!-- Bookmarks -->
                <a href="profile.html"
                    class="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <i class="fa-solid fa-bookmark text-gray-600 dark:text-gray-300"></i>
                    <span id="bookmark-count"
                        class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                </a>

                <!-- Cart Button -->
                <button onclick="openCartModal()"
                    class="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <i class="fa-solid fa-cart-shopping text-gray-600 dark:text-gray-300"></i>
                    <span id="cart-count"
                        class="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                </button>

                <!-- Auth Buttons / User Profile Badge -->
                <div id="auth-buttons-container"></div>
            </div>
        </div>
    </header>`;
    const BOTTOM = `    <footer class="bg-gray-900 text-gray-400 border-t border-gray-800 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center gap-2 text-2xl font-bold text-white mb-4">
                        <i class="fa-solid fa-graduation-cap text-blue-500"></i>
                        <span>EduFlow</span>
                    </div>
                    <p class="text-sm text-gray-400" id="footer-desc">Zamonaviy va interaktiv ta'lim platformasi. Bilim
                        va ko'nikmalaringizni biz bilan oshiring.</p>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider" id="footer-nav-title">
                        Navigatsiya</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="catalog.html" class="hover:text-white transition"
                                id="footer-catalog">Kurslar katalogi</a></li>
                        <li><a href="pricing.html"
                                class="hover:text-amber-400 text-amber-500 font-medium transition"
                                id="footer-pricing">PRO Tariflar</a></li>
                        <li><a href="tasks.html" class="hover:text-white transition"
                                id="footer-tasks">Topshiriqlar</a></li>
                        <li><a href="contact.html" class="hover:text-white transition"
                                id="footer-contact">Aloqa</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider" id="footer-cat-title">
                        Kategoriyalar</h4>
                    <ul class="space-y-2 text-sm">
                        <li><button onclick="filterCategoryAndNavigate('Dasturlash')"
                                class="hover:text-white transition text-left">Dasturlash</button></li>
                        <li><button onclick="filterCategoryAndNavigate('Dizayn')"
                                class="hover:text-white transition text-left">Dizayn</button></li>
                        <li><button onclick="filterCategoryAndNavigate('Biznes')"
                                class="hover:text-white transition text-left">Biznes</button></li>
                        <li><button onclick="filterCategoryAndNavigate('Chet tillari')"
                                class="hover:text-white transition text-left">Chet tillari</button></li>
                        <li><button onclick="filterCategoryAndNavigate('SMM & Marketing')"
                                class="hover:text-white transition text-left">SMM & Marketing</button></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
                        id="footer-contact-title">Bog'lanish</h4>
                    <p class="text-sm text-gray-400 mb-2">
                        <a href="mailto:info@eduflow.uz" class="hover:text-blue-400 transition flex items-center gap-2">
                            <i class="fa-solid fa-envelope"></i> info@eduflow.uz
                        </a>
                    </p>
                    <p class="text-sm text-gray-400 mb-4">
                        <a href="tel:+998712000000" class="hover:text-blue-400 transition flex items-center gap-2">
                            <i class="fa-solid fa-phone"></i> +998 (77) 501-20-75
                        </a>
                    </p>
                    <div class="flex gap-4 text-lg">
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                            class="hover:text-blue-400 transition" title="Telegram"><i
                                class="fa-brands fa-telegram"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            class="hover:text-pink-500 transition" title="Instagram"><i
                                class="fa-brands fa-instagram"></i></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            class="hover:text-blue-600 transition" title="Facebook"><i
                                class="fa-brands fa-facebook"></i></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                            class="hover:text-red-500 transition" title="YouTube"><i
                                class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
                &copy; 2026 EduFlow Platformasi. Barcha huquqlar himoyalangan.
            </div>
        </div>
    </footer>
    <!-- MODALS -->

    <!-- AUTH MODAL -->
    <div id="auth-modal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
        <div
            class="bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl p-6 shadow-2xl relative border border-gray-100 dark:border-gray-700">
            <button onclick="closeAuthModal()"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <h3 id="auth-modal-title" class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tizimga Kirish</h3>

            <form onsubmit="handleAuthSubmit(event)" class="space-y-4">
                <div id="auth-name-wrap">
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1"
                        id="lbl-auth-name">ISM-FAMILIYA</label>
                    <input type="text" id="auth-name" required placeholder="Ali Valiyev"
                        class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">EMAIL /
                        LOGIN</label>
                    <div class="flex gap-2">
                        <input type="email" id="auth-email" required placeholder="ali@example.com"
                            oninput="onAuthEmailInput()"
                            class="flex-1 min-w-0 px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                        <button type="button" id="auth-send-code-btn" onclick="sendAuthCode()"
                            class="shrink-0 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg text-xs font-semibold transition whitespace-nowrap">Kod
                            yuborish</button>
                    </div>
                </div>
                <div id="auth-code-wrap" class="hidden">
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1"
                        id="lbl-auth-code">POCHTANGIZGA KELGAN KOD</label>
                    <input type="text" id="auth-code" inputmode="numeric" autocomplete="one-time-code"
                        pattern="[0-9]{6}" oninput="this.value=this.value.replace(/\\D/g,'').slice(0,6)"
                        placeholder="••••••"
                        class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-center font-mono text-lg tracking-[0.4em]">
                    <p id="auth-code-hint" class="text-xs text-gray-500 dark:text-gray-400 mt-1"></p>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1"
                        id="lbl-auth-pass">PAROL</label>
                    <input type="password" id="auth-password" required placeholder="••••••••"
                        class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                </div>
                <button type="submit" id="auth-submit-btn"
                    class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-sm shadow-md">
                    Kirish
                </button>
            </form>
            <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                <span id="auth-switch-text">Akkauntingiz yo'qmi?</span>
                <button type="button" id="auth-switch-btn"
                    onclick="setAuthMode(authMode === 'login' ? 'register' : 'login')"
                    class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Akkaunt yaratish</button>
            </p>
        </div>
    </div>

    <!-- EDIT NAME MODAL -->
    <div id="edit-name-modal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
        <div
            class="bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl p-6 shadow-2xl relative border border-gray-100 dark:border-gray-700">
            <button onclick="closeEditNameModal()"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2"
                id="edit-modal-title">
                <i class="fa-solid fa-user-pen text-blue-600"></i> Profilni Tahrirlash
            </h3>

            <form onsubmit="handleEditNameSubmit(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1"
                        id="lbl-edit-name">ISM-FAMILIYA</label>
                    <input type="text" id="edit-name-input" required
                        class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">EMAIL
                        POCHTA</label>
                    <input type="email" id="edit-email-input" required
                        class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1"
                        id="lbl-edit-avatar">PROFIL RASMI (AVATAR LINKI)</label>
                    <input type="text" id="edit-avatar-input" placeholder="https://..."
                        class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1"
                        id="lbl-edit-bio">O'ZINGIZ HAQINGIZDA (BIO)</label>
                    <textarea id="edit-bio-input" rows="3"
                        class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"></textarea>
                </div>
                <button type="submit" id="edit-save-btn"
                    class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-sm shadow-md">
                    O'zgarishlarni Saqlash
                </button>
            </form>
        </div>
    </div>

    <!-- CART MODAL -->
    <div id="cart-modal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
        <div
            class="bg-white dark:bg-gray-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative border border-gray-100 dark:border-gray-700">
            <button onclick="closeCartModal()"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2"
                id="cart-modal-title">
                <i class="fa-solid fa-cart-shopping text-blue-600"></i> Savatcha
            </h3>

            <div id="cart-items-container" class="space-y-3 max-h-60 overflow-y-auto mb-4"></div>

            <div
                class="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4 flex justify-between items-center font-bold">
                <span id="cart-total-label">Jami:</span>
                <span id="cart-total-price" class="text-xl text-blue-600 dark:text-blue-400">0 UZS</span>
            </div>

            <button onclick="processCheckout()" id="checkout-btn"
                class="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition text-sm shadow-md flex items-center justify-center gap-2">
                <i class="fa-solid fa-credit-card"></i> To'lov qilish (Click / Payme)
            </button>
        </div>
    </div>

    <!-- PREMIUM SUBSCRIPTION MODAL -->
    <div id="premium-modal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md hidden">
        <div
            class="bg-white dark:bg-gray-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative border border-amber-500/40">
            <button onclick="closePremiumModal()"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>

            <div class="text-center mb-6">
                <div
                    class="w-16 h-16 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <i class="fa-solid fa-crown text-3xl text-gray-950"></i>
                </div>
                <h3 class="text-2xl font-black text-gray-900 dark:text-white">EduFlow PRO A'zolik</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Muddatni tanlang - cheksiz imkoniyatlar</p>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-4">
                <button type="button" id="plan-monthly" onclick="selectProPlan('monthly')"
                    class="rounded-2xl border-2 p-4 text-center transition">
                    <div class="text-xs font-bold text-gray-500 dark:text-gray-400">1 oylik</div>
                    <div class="text-2xl font-black text-gray-900 dark:text-white my-1">30,000</div>
                    <div class="text-[11px] text-gray-500 dark:text-gray-400">UZS / 1 oy</div>
                </button>
                <button type="button" id="plan-yearly" onclick="selectProPlan('yearly')"
                    class="rounded-2xl border-2 p-4 text-center transition">
                    <div class="text-xs font-bold text-gray-500 dark:text-gray-400">1 yillik</div>
                    <div class="text-2xl font-black text-gray-900 dark:text-white my-1">360,000</div>
                    <div class="text-[11px] text-gray-500 dark:text-gray-400">UZS / 1 yil</div>
                </button>
            </div>
            <p id="premium-current-status"
                class="hidden text-center text-xs font-semibold text-amber-600 dark:text-amber-400 mb-4"></p>

            <div class="space-y-3 mb-6">
                <div
                    class="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/40 text-xs font-semibold text-amber-900 dark:text-amber-200">
                    <i class="fa-solid fa-check text-amber-500 text-base"></i>
                    <span>Barcha 100+ kurslarga to'liq va cheksiz kirish</span>
                </div>
                <div
                    class="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/40 text-xs font-semibold text-amber-900 dark:text-amber-200">
                    <i class="fa-solid fa-check text-amber-500 text-base"></i>
                    <span>O'qituvchilarga shaxsiy topshiriq va savollar yo'llash</span>
                </div>
                <div
                    class="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/40 text-xs font-semibold text-amber-900 dark:text-amber-200">
                    <i class="fa-solid fa-check text-amber-500 text-base"></i>
                    <span>Profil va Headerda rasmiy PRO oltin Crown 👑 nishoni</span>
                </div>
            </div>

            <button onclick="processPremiumCheckout()"
                class="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:opacity-90 text-gray-950 font-black rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2">
                <i class="fa-solid fa-bolt"></i> <span id="premium-confirm-text">Obunani tasdiqlash (30,000 UZS)</span>
            </button>
        </div>
    </div>`;
    const t = document.getElementById('site-top');
    const b = document.getElementById('site-bottom');
    if (t) t.outerHTML = TOP;
    if (b) b.outerHTML = BOTTOM;
})();
