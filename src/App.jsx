import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgePercent,
  Bandage,
  Bell,
  Bone,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Footprints,
  Grid2X2,
  Heart,
  MapPin,
  Minus,
  Navigation,
  Phone,
  Plus,
  Repeat2,
  Ruler,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  SportShoe,
  Star,
  Stethoscope,
  User,
  X,
} from "lucide-react";
import ortekaLogo from "./assets/orteka-logo.png";
import pointsLogo from "./assets/points-logo.png";
import homeQrImage from "./assets/home-qr.png";
import promoCompressionImage from "./assets/promo-compression.png";
import promoInsolesImage from "./assets/promo-insoles.png";
import promoShoesImage from "./assets/promo-shoes.png";
import tabCartFigmaIcon from "./assets/tab-cart-figma.svg";
import tabCatalogFigmaIcon from "./assets/tab-catalog-figma.svg";
import tabFavFigmaIcon from "./assets/tab-fav-figma.svg";
import tabHomeFigmaIcon from "./assets/tab-home-figma.svg";
import tabProfileFigmaIcon from "./assets/tab-profile-figma.svg";
import tabServicesFigmaIcon from "./assets/tab-services-figma.svg";

const categories = [
  { id: "all", title: "Все", subtitle: "все товары", icon: Grid2X2 },
  { id: "insoles", title: "Стельки", subtitle: "для обуви и стопы", icon: Footprints },
  { id: "compression", title: "Трикотаж", subtitle: "чулки и гольфы", icon: ShieldCheck },
  { id: "braces", title: "Бандажи", subtitle: "ортезы и фиксаторы", icon: Ruler },
  { id: "shoes", title: "Обувь", subtitle: "на каждый день", icon: ShoppingBag },
];

const products = [
  {
    id: 1,
    category: "insoles",
    title: "Ортопедические стельки ORTO Comfort",
    price: "2 490 ₽",
    oldPrice: "3 190 ₽",
    badge: "Есть рядом",
    rating: "4.8",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    fit: "Для ежедневной обуви и поддержки стопы",
    reason: "Вы часто смотрите товары для стопы",
    availability: "В салоне на Тверской — сегодня",
    imageLabel: "Стельки",
  },
  {
    id: 2,
    category: "compression",
    title: "Компрессионные чулки 2 класс",
    price: "4 990 ₽",
    oldPrice: null,
    badge: "Нужен замер",
    rating: "4.7",
    sizes: ["S", "M", "L", "XL"],
    fit: "После операции, при отёках и нагрузке на ноги",
    reason: "Можно подобрать по вашим меркам",
    availability: "В 4 салонах рядом",
    imageLabel: "Компрессия",
  },
  {
    id: 3,
    category: "braces",
    title: "Ортез коленного сустава мягкой фиксации",
    price: "3 690 ₽",
    oldPrice: null,
    badge: "Популярно",
    rating: "4.6",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Для поддержки колена при ходьбе и восстановлении",
    reason: "Часто покупают после консультации",
    availability: "Доставка завтра",
    imageLabel: "Ортез",
  },
  {
    id: 4,
    category: "shoes",
    title: "Ортопедическая обувь для прогулок",
    price: "7 990 ₽",
    oldPrice: "9 490 ₽",
    badge: "Примерка",
    rating: "4.9",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    fit: "Мягкая посадка, поддержка стопы и комфортная ходьба",
    reason: "Есть ваш сохранённый размер 39",
    availability: "Можно примерить в ближайшем салоне",
    imageLabel: "Обувь",
  },
  {
    id: 5,
    category: "braces",
    title: "Бандаж на голеностопный сустав",
    price: "2 190 ₽",
    oldPrice: null,
    badge: "Есть рядом",
    rating: "4.7",
    sizes: ["S", "M", "L", "XL"],
    fit: "Фиксация и поддержка при растяжении",
    reason: "Подходит для активной ходьбы",
    availability: "В салоне на Тверской — сегодня",
    imageLabel: "Бандаж",
  },
  {
    id: 6,
    category: "compression",
    title: "Гольфы компрессионные 1 класс",
    price: "2 890 ₽",
    oldPrice: "3 490 ₽",
    badge: "Нужен замер",
    rating: "4.6",
    sizes: ["S", "M", "L", "XL"],
    fit: "Для профилактики варикоза и усталости ног",
    reason: "Часто берут в пару к чулкам",
    availability: "В 3 салонах рядом",
    imageLabel: "Гольфы",
  },
  {
    id: 7,
    category: "insoles",
    title: "Стельки-супинаторы ORTO Active",
    price: "3 290 ₽",
    oldPrice: null,
    badge: "Популярно",
    rating: "4.8",
    sizes: ["38", "39", "40", "41", "42", "43"],
    fit: "Усиленная поддержка свода стопы",
    reason: "Рекомендуют после диагностики",
    availability: "Доставка завтра",
    imageLabel: "Стельки",
  },
  {
    id: 8,
    category: "shoes",
    title: "Туфли ортопедические закрытые",
    price: "8 490 ₽",
    oldPrice: "9 990 ₽",
    badge: "Примерка",
    rating: "4.8",
    sizes: ["37", "38", "39", "40", "41", "42"],
    fit: "Для офиса и длительной ходьбы",
    reason: "Есть модель в вашем размере",
    availability: "Можно примерить в ближайшем салоне",
    imageLabel: "Обувь",
  },
  {
    id: 9,
    category: "braces",
    title: "Наколенник с шарнирами",
    price: "4 590 ₽",
    oldPrice: null,
    badge: "Есть рядом",
    rating: "4.7",
    sizes: ["S", "M", "L", "XL"],
    fit: "Стабилизация колена при нагрузке",
    reason: "Вы смотрели товары для колена",
    availability: "В салоне на Арбате — сегодня",
    imageLabel: "Наколенник",
  },
  {
    id: 10,
    category: "compression",
    title: "Чулки компрессионные до бедра",
    price: "5 490 ₽",
    oldPrice: null,
    badge: "Нужен замер",
    rating: "4.9",
    sizes: ["S", "M", "L", "XL"],
    fit: "Равномерная компрессия по всей ноге",
    reason: "Подбор по индивидуальным меркам",
    availability: "В 4 салонах рядом",
    imageLabel: "Чулки",
  },
];

const homeFeaturedProducts = products.slice(0, 10);

const salons = [
  {
    id: 1,
    title: "ORTEKA Тверская",
    distance: "1.2 км",
    address: "ул. Тверская, 12",
    status: "Открыто до 22:00",
    hasProduct: true,
  },
  {
    id: 2,
    title: "ORTEKA Арбат",
    distance: "2.8 км",
    address: "Новый Арбат, 24",
    status: "Открыто до 21:00",
    hasProduct: true,
  },
];

const katyaHomeQuickTiles = [
  { id: "symptoms", title: "Симптомы", category: "all", icon: Stethoscope },
  { id: "promo", title: "Акции", category: "all", icon: BadgePercent },
  { id: "insoles", title: "Стельки", category: "insoles", icon: Footprints },
  { id: "braces", title: "Бандажи", category: "braces", icon: Bandage },
  { id: "orthoses", title: "Ортезы", category: "braces", icon: Bone },
  { id: "shoes", title: "Обувь", category: "shoes", icon: SportShoe },
  { id: "compression", title: "Трикотаж", category: "compression", icon: ShieldCheck },
];

const homeCategories = katyaHomeQuickTiles.filter((tile) => tile.id !== "symptoms");

const symptomTiles = [
  { id: "back-pain", label: "Болит спина", category: "braces", query: "спина" },
  { id: "leg-pain", label: "Боль в ногах", category: "insoles", query: "ноги" },
  { id: "swelling", label: "Отёки", category: "compression", query: "отёки" },
  { id: "post-surgery", label: "После операции", category: "compression", query: "после операции" },
  { id: "knee-pain", label: "Боль в колене", category: "braces", query: "колено" },
  { id: "sports", label: "Для спорта", category: "shoes", query: "спорт" },
];

const promoCards = [
  {
    id: 1,
    title: "Больше, чем просто обувь",
    subtitle: "Новая коллекция с поддержкой стопы",
    action: "Смотреть",
    badge: "Новая коллекция",
    image: promoShoesImage,
  },
  {
    id: 2,
    title: "Скидка на компрессию",
    subtitle: "До -25% и бесплатный замер в салоне",
    action: "Выбрать",
    badge: "Только в приложении",
    image: promoCompressionImage,
  },
  {
    id: 3,
    title: "2-я пара стелек выгоднее",
    subtitle: "Добавьте в заказ и получите спеццену",
    action: "В акцию",
    badge: "До конца недели",
    image: promoInsolesImage,
  },
];

const homeOrderItems = [
  {
    id: "ready",
    tone: "ready",
    title: "К выдаче сегодня",
    address: "г. Москва, Тверская, 12",
    timing: "Заберите сегодня до 21:00",
    image: promoInsolesImage,
  },
  {
    id: "in-transit",
    tone: "transit",
    title: "Заказ в пути",
    address: "г. Москва, ул. Свободы, 40к1",
    timing: "Приедет завтра",
    image: promoCompressionImage,
  },
  {
    id: "needs-action",
    tone: "attention",
    title: "Нужно подтверждение",
    address: "г. Москва, Тверская, 12",
    timing: "Подтвердите до 18:00",
    image: promoShoesImage,
  },
];

const SAVED_FILTERS_STORAGE_KEY = "orteka.savedFilters.v1";
const defaultSavedFilters = [
  { id: "insoles-39-near", label: "Стельки · размер 39 · есть рядом", category: "insoles", query: "стельки", onlyNearby: true },
  { id: "compression-m", label: "Трикотаж · M · 2 класс", category: "compression", query: "компрессия", onlyNearby: false },
];

const homeProfileCustomers = [
  { name: "Катя", disabled: false },
  { name: "Лёша", disabled: false },
  { name: "Жильвинас", disabled: true },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PhoneShell({ children }) {
  return (
    <div className="h-dvh sm:h-auto sm:min-h-screen w-full bg-white sm:bg-neutral-100 sm:flex sm:items-center sm:justify-center sm:p-4 font-sans text-[#1c1c1c]">
      <div className="h-full w-full sm:w-[392px] sm:max-w-full sm:h-[820px] sm:bg-neutral-950 sm:rounded-[44px] sm:p-2 sm:shadow-2xl">
        <div className="h-full w-full bg-white sm:rounded-[32px] overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-950 rounded-b-2xl z-50 hidden sm:block" />
          {children}
        </div>
      </div>
    </div>
  );
}

function Header({ title, subtitle, onBack, right }) {
  return (
    <div className="px-4 pt-9 pb-3 bg-white sticky top-0 z-30 border-b border-black/5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="w-10 h-10 rounded-lg bg-white border border-[#e0e2e7] flex items-center justify-center shrink-0"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <div className="min-w-0">
            <div className="text-xl font-semibold tracking-tight truncate text-[#1c1c1c]">{title}</div>
            {subtitle && <div className="text-sm text-neutral-500 truncate">{subtitle}</div>}
          </div>
        </div>
        {right}
      </div>
    </div>
  );
}

function BottomNav({ screen, go, homeProfileCustomer, setHomeProfileCustomer }) {
  const [homeProfilePickerOpen, setHomeProfilePickerOpen] = useState(false);
  const homeTabProfileSwitch = screen === "home" && homeProfileCustomer === "Катя";

  useEffect(() => {
    if (!homeProfilePickerOpen) {
      return;
    }
    const close = (event) => {
      const nav = document.querySelector("[data-bottom-nav-root]");
      if (nav && event.target instanceof Node && nav.contains(event.target)) {
        return;
      }
      setHomeProfilePickerOpen(false);
    };
    window.addEventListener("pointerdown", close, true);
    return () => window.removeEventListener("pointerdown", close, true);
  }, [homeProfilePickerOpen]);

  useEffect(() => {
    if (screen !== "home") {
      setHomeProfilePickerOpen(false);
    }
  }, [screen]);

  const items = [
    { id: "home", title: "Главная", image: tabHomeFigmaIcon, width: 34, height: 24, action: () => go("home") },
    { id: "catalog", title: "Каталог", image: tabCatalogFigmaIcon, width: 24, height: 24, action: () => go("catalog", { category: "all" }) },
    { id: "services", title: "Услуги", image: tabServicesFigmaIcon, width: 24, height: 24, action: () => go("services") },
    { id: "cart", title: "Корзина", image: tabCartFigmaIcon, width: 24, height: 24, action: () => go("cart") },
    { id: "favorites", title: "Избранное", image: tabFavFigmaIcon, width: 24, height: 24, action: () => go("favorites") },
    { id: "profile", title: "Профиль", image: tabProfileFigmaIcon, width: 24, height: 24, action: () => go("profile") },
  ];

  return (
    <nav
      data-bottom-nav-root
      className="absolute bottom-0 left-0 right-0 z-40 bg-white px-2 pt-1 shadow-[0_-4px_8px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 6px)" }}
      aria-label="Основная навигация"
    >
      {homeProfilePickerOpen && (
        <div
          className="absolute bottom-full left-2 right-2 z-50 mb-1 overflow-hidden rounded-2xl border border-[#e0e2e7] bg-white p-1 shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
          role="menu"
        >
          <div className="px-2 py-1.5 text-[11px] font-medium text-neutral-500">Профиль демо</div>
          {homeProfileCustomers.map((customer) => (
            <button
              type="button"
              key={customer.name}
              role="menuitem"
              disabled={customer.disabled}
              onClick={() => {
                if (customer.disabled) {
                  return;
                }
                setHomeProfileCustomer(customer.name);
                setHomeProfilePickerOpen(false);
              }}
              className={cx(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm",
                customer.name === homeProfileCustomer ? "bg-[#f4f5f7] font-semibold text-[#1c1c1c]" : "text-neutral-700",
                customer.disabled && "cursor-not-allowed text-neutral-300"
              )}
            >
              <span>{customer.name}</span>
              {customer.disabled && <span className="text-[11px] font-medium">позже</span>}
            </button>
          ))}
        </div>
      )}
      <div className="flex h-[52px] w-full items-center justify-around">
        {items.map((item) => {
          const active = screen === item.id;

          if (item.id === "home" && homeTabProfileSwitch) {
            return (
              <button
                type="button"
                key={item.id}
                aria-label={`Главная, сменить профиль (${homeProfileCustomer})`}
                aria-expanded={homeProfilePickerOpen}
                aria-haspopup="menu"
                aria-current={active ? "page" : undefined}
                onClick={() => setHomeProfilePickerOpen((open) => !open)}
                className={cx(
                  "flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 outline-none",
                  "focus-visible:ring-2 focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  active ? "opacity-100" : "opacity-85 hover:opacity-100",
                  homeProfilePickerOpen && "bg-[#fff3e9]"
                )}
              >
                <img src={item.image} alt="" width={item.width} height={item.height} className="object-contain opacity-100" />
              </button>
            );
          }

          return (
            <button
              type="button"
              key={item.id}
              aria-label={item.title}
              aria-current={active ? "page" : undefined}
              onClick={item.action}
              className={cx(
                "flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 outline-none",
                "focus-visible:ring-2 focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                active ? "opacity-100" : "opacity-85 hover:opacity-100"
              )}
            >
              <img
                src={item.image}
                alt=""
                width={item.width}
                height={item.height}
                className={cx(
                  "object-contain transition-opacity duration-200",
                  active ? "opacity-100" : "opacity-90"
                )}
              />
            </button>
          );
        })}
      </div>
      <div aria-hidden="true" className="mx-auto mb-1 mt-0.5 h-1 w-[124px] rounded-full bg-[#1c1c1c]/20" />
    </nav>
  );
}

function SearchBar({ value, onChange, onFocus, smartRibbon }) {
  return (
    <div className="relative">
      <Search
        className={cx("absolute left-4 top-1/2 -translate-y-1/2", smartRibbon ? "text-neutral-500" : "text-[#1c1c1c]")}
        size={22}
      />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={onFocus}
        placeholder={
          smartRibbon
            ? "Умный поиск — размер, подсказки и наличие рядом"
            : "Найти стельки, бандаж, ортез или обувь"
        }
        title={
          smartRibbon
            ? "Умный поиск — размер, подсказки и наличие рядом"
            : "Найти стельки, бандаж, ортез или обувь"
        }
        className="orteka-search-input min-w-0 w-full h-11 overflow-hidden text-ellipsis whitespace-nowrap rounded-xl border border-[#e0e2e7] bg-white pl-12 pr-12 text-base text-[#1c1c1c] outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-[#ff6e00]/30"
        aria-label={smartRibbon ? "Умный поиск по каталогу" : undefined}
      />
      <button
        type="button"
        aria-label="Поиск по фото"
        className={cx(
          "absolute right-3 top-1/2 -translate-y-1/2 transition-colors hover:text-[#ff6e00]",
          smartRibbon ? "text-neutral-500" : "text-neutral-700"
        )}
      >
        <Camera size={20} />
      </button>
    </div>
  );
}

function Card({ children, className = "", onClick }) {
  if (onClick) {
    return (
      <motion.div
        role="button"
        tabIndex={0}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick();
          }
        }}
        className={cx("w-full text-left bg-white rounded-2xl border border-[#e0e2e7] cursor-pointer", className)}
      >
        {children}
      </motion.div>
    );
  }

  return <motion.div className={cx("w-full text-left bg-white rounded-2xl border border-[#e0e2e7]", className)}>{children}</motion.div>;
}

function ProductVisual({ label, large = false }) {
  return (
    <div
      className={cx(
        "rounded-2xl bg-[#fff3e9] flex flex-col items-center justify-center shrink-0",
        large ? "h-64 w-full" : "w-24 h-24"
      )}
    >
      <Footprints className="text-[#ff6e00]" size={large ? 86 : 34} />
      <div className="text-xs text-neutral-600 mt-2">{label}</div>
    </div>
  );
}

function ProductCard({ product, onOpen, compact = false }) {
  return (
    <Card onClick={() => onOpen(product)} className="p-3">
      <div className="flex gap-3">
        <ProductVisual label={product.imageLabel} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-1 rounded-lg bg-[#fff3e9] text-[#ff6e00] font-medium">{product.badge}</span>
            <span className="text-[12px] text-neutral-600 flex items-center gap-1">
              <Star size={12} fill="currentColor" />
              {product.rating}
            </span>
          </div>
          <div className="font-semibold text-[14px] leading-tight line-clamp-2">{product.title}</div>
          {!compact && <div className="text-xs text-neutral-600 mt-1 line-clamp-1">{product.fit}</div>}
          <div className="flex items-end gap-2 mt-2">
            <div className="text-lg font-bold">{product.price}</div>
            {product.oldPrice && <div className="text-xs text-neutral-400 line-through mb-0.5">{product.oldPrice}</div>}
          </div>
          <div className="text-xs text-green-700 mt-1">{product.availability}</div>
        </div>
      </div>
    </Card>
  );
}

function HomeScreen({ go, setSelectedProduct, setSearchValue, homeProfileCustomer, setHomeProfileCustomer }) {
  const [customerMenuOpen, setCustomerMenuOpen] = useState(false);
  const [katyaLoyaltyTierOpen, setKatyaLoyaltyTierOpen] = useState(true);
  const sectionTitleClass = "text-[15px] font-semibold text-[#1c1c1c]";
  /** Единый ритм для строк 11px на главной (без leading-tight — он визуально «сжимает» межстрочный блок). */
  const homeText11 = "text-[11px] leading-[1.45]";
  const homeEyebrow11 = `${homeText11} font-semibold uppercase tracking-[0.08em]`;
  const promoSliderRef = useRef(null);
  const prioritizedOrderItems = [...homeOrderItems].sort((a, b) => {
    if (a.tone === "ready") return -1;
    if (b.tone === "ready") return 1;
    return 0;
  });

  const isKatyaHome = homeProfileCustomer === "Катя";

  useEffect(() => {
    const slider = promoSliderRef.current;
    if (!slider) {
      return;
    }

    const middleCard = slider.children[1];
    if (!middleCard) {
      return;
    }

    const targetLeft = middleCard.offsetLeft - (slider.clientWidth - middleCard.clientWidth) / 2;
    slider.scrollTo({ left: Math.max(0, targetLeft), behavior: "auto" });
  }, []);

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden pb-20 bg-[#f7f8fa]">
      <div
        className={cx(
          "px-4 pb-4 flex flex-col gap-4",
          isKatyaHome ? "pt-0" : "pt-4"
        )}
      >
        {!isKatyaHome && (
          <div className="flex items-center justify-between">
            <div className="relative">
              <button
                type="button"
                onClick={() => setCustomerMenuOpen((value) => !value)}
                className="flex items-center gap-2 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/15"
                aria-haspopup="menu"
                aria-expanded={customerMenuOpen}
              >
                <img src={ortekaLogo} alt="ОРТЕКА" className="h-3.5 w-auto" />
              </button>
              {customerMenuOpen && (
                <div className="absolute left-0 top-7 z-50 w-40 overflow-hidden rounded-2xl border border-[#e0e2e7] bg-white p-1 shadow-[0_12px_28px_rgba(0,0,0,0.14)]" role="menu">
                  {homeProfileCustomers.map((customer) => (
                    <button
                      type="button"
                      key={customer.name}
                      role="menuitem"
                      disabled={customer.disabled}
                      onClick={() => {
                        if (customer.disabled) {
                          return;
                        }
                        setHomeProfileCustomer(customer.name);
                        setCustomerMenuOpen(false);
                      }}
                      className={cx(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm",
                        customer.name === homeProfileCustomer ? "bg-[#f4f5f7] font-semibold text-[#1c1c1c]" : "text-neutral-700",
                        customer.disabled && "cursor-not-allowed text-neutral-300"
                      )}
                    >
                      <span>{customer.name}</span>
                      {customer.disabled && <span className={cx(homeText11, "font-medium")}>позже</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="button"
              aria-label="Уведомления"
              className="w-10 h-10 rounded-xl border border-[#d7dbe3] bg-white text-[#1c1c1c] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-200 hover:bg-[#f5f7fb] hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/20"
            >
              <Bell size={20} />
            </button>
          </div>
        )}

        <section
          className={cx(
            "-mx-4 border-x-0 bg-[linear-gradient(135deg,#ffab6a_0%,#ffa374_12%,#ff9c68_24%,#ff945c_36%,#ff8b50_48%,#ff8244_58%,#ff7836_68%,#ff6e28_78%,#f06418_88%,#e75c00_100%)] px-4 pb-4 text-white shadow-[0_6px_14px_rgba(255,110,0,0.18)] border-b border-[#ffb57a]/40",
            isKatyaHome
              ? "pt-[max(2rem,env(safe-area-inset-top,0px))] rounded-b-3xl border-t-0"
              : "rounded-3xl border-t border-[#ffb57a]/40 pt-4"
          )}
        >
          {isKatyaHome ? (
            <div className="flex items-center gap-1.5">
              <button
                  type="button"
                  onClick={() => go("salons")}
                  aria-label="Салон рядом, г. Москва, Тверская, 12. Подробнее в списке салонов"
                  className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 rounded-xl px-0.5 py-1 text-left transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#ff8d3d]"
                >
                  <div className={cx(homeEyebrow11, "text-white/90 [text-shadow:none] shadow-none")}>
                    Салон рядом
                  </div>
                  <div className="flex min-w-0 w-full items-center justify-start gap-0">
                    <span className="min-w-0 max-w-[calc(100%-1.375rem)] truncate text-[15px] font-semibold leading-snug tracking-tight text-white [text-shadow:none] shadow-none">
                      г. Москва, Тверская, 12
                    </span>
                    <ChevronRight
                      className="shrink-0 -ml-px text-white opacity-95 [text-shadow:none] drop-shadow-none"
                      size={20}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </div>
                </button>
              </div>
          ) : (
            <div className="flex items-center justify-between gap-1.5">
              <button type="button" onClick={() => go("salons")} className="flex min-w-0 items-center gap-2 text-left">
                <span className="truncate text-sm font-semibold">г. Москва, Тверская, 12</span>
                <ChevronRight size={18} className="shrink-0" />
              </button>
              <div className="shrink-0 rounded-xl bg-white px-2 py-1 text-sm font-semibold text-[#ff6e00] flex items-center gap-1" aria-label="Баллы: 1 240">
                <span aria-hidden>1 240</span>
                <img src={pointsLogo} alt="" className="h-3 w-3" aria-hidden />
              </div>
            </div>
          )}

          <div className="mt-3">
            <SearchBar
              value=""
              onChange={(value) => {
                setSearchValue(value);
                go("catalog", { category: "all" });
              }}
              onFocus={() => go("catalog", { category: "all" })}
              smartRibbon={isKatyaHome}
            />
          </div>

          {isKatyaHome ? (
            <>
              <div className="mt-3 space-y-1.5">
                <div className="rounded-xl border border-[#ffd3b0] bg-white px-1.5 py-2 shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
                  <div className="flex min-h-[34px] items-stretch">
                    <button
                      type="button"
                      className={cx(
                        "flex shrink-0 items-center pl-1.5 pr-2 text-left",
                        "cursor-pointer rounded-lg border-0 bg-transparent p-0 font-inherit text-[#1c1c1c]",
                        "transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      )}
                    aria-expanded={katyaLoyaltyTierOpen}
                    aria-controls={katyaLoyaltyTierOpen ? "home-katya-loyalty-tier" : undefined}
                    aria-label={
                      katyaLoyaltyTierOpen
                        ? "Скрыть блок уровня программы лояльности"
                        : "Показать блок уровня программы лояльности"
                    }
                    onClick={() => setKatyaLoyaltyTierOpen((open) => !open)}
                  >
                      <div
                        className="flex items-baseline justify-start gap-2 text-2xl font-medium tabular-nums leading-none tracking-tight text-[#1c1c1c]"
                        aria-label="На счёте 1 240 баллов"
                      >
                        <span>1 240</span>
                        <img
                          src={pointsLogo}
                          alt=""
                          className="h-[0.69em] w-[0.69em] shrink-0 object-contain -translate-y-[0.05em]"
                          width={15}
                          height={15}
                        />
                      </div>
                    </button>
                    <div className="mx-1.5 h-5 w-px shrink-0 self-center bg-[#e0e2e7]" aria-hidden />
                    <button
                      type="button"
                      className={cx(
                        "flex min-w-0 flex-1 flex-col justify-center pl-3 pr-2 text-left",
                        "cursor-pointer rounded-lg border-0 bg-transparent p-0 font-inherit text-[#1c1c1c]",
                        "transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      )}
                      aria-expanded={katyaLoyaltyTierOpen}
                      aria-controls={katyaLoyaltyTierOpen ? "home-katya-loyalty-tier" : undefined}
                      onClick={() => setKatyaLoyaltyTierOpen((open) => !open)}
                    >
                      <div className={cx(homeEyebrow11, "whitespace-nowrap text-[#ff6e00]")}>К сгоранию</div>
                      <p className="mt-0.5 whitespace-nowrap text-xs text-neutral-700 leading-snug">
                        <span className="font-semibold text-[#1c1c1c]">240</span> баллов до 30 июня
                      </p>
                    </button>
                    <div className="ml-2.5 mr-4 h-5 w-px shrink-0 self-center bg-[#e0e2e7]" aria-hidden />
                    <button
                      type="button"
                      onClick={() => go("order")}
                      aria-label="Открыть QR в заказе"
                      className="flex w-10 shrink-0 items-center justify-center self-stretch bg-transparent p-0 pl-0 pr-0.5 transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      <img
                        src={homeQrImage}
                        alt=""
                        className="block aspect-square h-10 w-10 min-h-10 min-w-10 shrink-0 rounded-lg object-cover p-1 shadow-[0_2px_6px_rgba(0,0,0,0.06)]"
                        width={40}
                        height={40}
                      />
                    </button>
                  </div>
                  {katyaLoyaltyTierOpen ? (
                    <div className="mt-1.5 pt-1.5">
                      <div
                        id="home-katya-loyalty-tier"
                        className="rounded-xl bg-white p-2.5 space-y-2 shadow-[0_2px_10px_rgba(15,23,42,0.06)]"
                        aria-label="Уровень программы лояльности: Серебряный"
                      >
                        <div className="grid h-6 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2.5">
                          <span className="min-w-0 truncate text-xs leading-6 text-neutral-600">
                            До Золотого: <span className="font-semibold text-[#1c1c1c]">2 760</span> баллов
                          </span>
                          <span className="inline-flex h-6 shrink-0 items-center rounded-full border border-slate-400/90 bg-gradient-to-b from-white to-slate-100 px-2.5 text-[11px] font-semibold tracking-tight text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_2px_rgba(15,23,42,0.12)]">
                            Серебряный
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 shadow-[inset_0_1px_2px_rgba(15,23,42,0.12)]">
                          <div
                            className="h-full w-[31%] rounded-full bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                            aria-hidden
                          />
                        </div>
                        <div className="space-y-1.5 pt-2">
                          <p className={cx(homeText11, "whitespace-nowrap text-neutral-700")}>
                            Доступно к списанию <span className="font-semibold text-[#009aa6]">5%</span> от стоимости покупки
                          </p>
                          <p className={cx(homeText11, "whitespace-nowrap text-neutral-700")}>
                            Доступен кэшбек бонусами <span className="font-semibold text-[#009aa6]">10%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => go("salons")}
                className="h-16 rounded-xl border border-[#ffd3b0] bg-white px-3 text-left flex items-center justify-between gap-1.5 shadow-[0_3px_10px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <div className="min-w-0">
                  <div className={cx(homeEyebrow11, "text-[#ff6e00]")}>Салон рядом</div>
                  <div className="mt-1 text-sm font-semibold text-[#1c1c1c] leading-4 truncate">Тверская · 1.2 км</div>
                </div>
                <ChevronRight size={16} className="shrink-0 text-[#ff6e00]" />
              </button>
              <button
                type="button"
                onClick={() => go("order")}
                className="h-16 rounded-xl border border-[#ffd3b0] bg-white pl-3 pr-2 grid grid-cols-[1fr_2.5rem] items-center gap-1.5 shadow-[0_3px_10px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <div className="min-w-0 text-left">
                  <div className={cx(homeEyebrow11, "text-[#ff6e00]")}>Баллы</div>
                  <div className="mt-1 text-sm font-semibold leading-4 text-[#1c1c1c] truncate">240 сгорят 30 июня</div>
                </div>
                <div className="h-10 w-10 shrink-0 rounded-xl bg-white p-1 shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
                  <img src={homeQrImage} alt="QR код" className="h-full w-full rounded-lg object-cover" />
                </div>
              </button>
            </div>
          )}
        </section>

        <div className="-mx-4">
          <div className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [-ms-overflow-style:none]">
          {prioritizedOrderItems.map((item) => (
            <motion.div
              key={item.id}
              role="button"
              tabIndex={0}
              whileTap={{ scale: 0.98 }}
              onClick={() => go("order")}
              className="box-border flex w-full min-w-full shrink-0 snap-start snap-always cursor-pointer items-stretch pl-4 pr-4"
            >
              <div className="-ml-4 flex w-[64px] shrink-0 items-center justify-center rounded-r-2xl rounded-l-none bg-white py-3 pl-2.5 pr-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <img
                  src={homeQrImage}
                  alt=""
                  className="size-11 shrink-0 aspect-square rounded-lg object-contain"
                  width={44}
                  height={44}
                />
              </div>
              <div className="ml-2 flex min-w-0 flex-1 gap-2.5 rounded-2xl bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#eef1f4]">
                  {item.image ? (
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <ShoppingBag size={20} className="text-neutral-300" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex flex-col justify-center gap-0.5 py-0.5">
                  <p className="text-[15px] font-semibold leading-[1.25] tracking-tight text-[#1c1c1c]">{item.title}</p>
                  <p className="text-xs leading-4 text-neutral-500 line-clamp-2">{item.address}</p>
                  <p className="text-sm leading-5 text-[#1c1c1c]">{item.timing}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        <section className="min-w-0 pb-4">
          <div
            ref={promoSliderRef}
            className="flex min-w-0 snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {promoCards.map((promo) => (
              <button
                type="button"
                key={promo.id}
                onClick={() => go("catalog", { category: "all" })}
                className="relative isolate block min-h-0 min-w-0 shrink-0 grow-0 basis-full snap-center overflow-hidden rounded-2xl bg-[#dfe3e8] aspect-[1024/498] cursor-pointer"
              >
                <img
                  src={promo.image}
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full object-cover select-none"
                  draggable={false}
                />
                <span className="sr-only">{promo.title}</span>
              </button>
            ))}
          </div>
        </section>

        {isKatyaHome && (
          <section className="min-w-0">
            <div className="-mx-4">
              <div className="flex snap-x snap-proximity gap-3 overflow-x-auto px-4 pb-1 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {katyaHomeQuickTiles.map((tile) => {
                  const Icon = tile.icon;
                  return (
                    <button
                      type="button"
                      key={tile.id}
                      onClick={() => go("catalog", { category: tile.category })}
                      className="flex w-[76px] shrink-0 snap-start flex-col items-center gap-2 text-center active:scale-[0.98] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-2"
                    >
                      <span className="flex w-full flex-col items-center rounded-2xl border border-[#e7e9ee] bg-white p-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                        <span className="flex h-12 w-12 items-center justify-center">
                          <Icon className="h-6 w-6 text-[#ff6e00]" strokeWidth={2} aria-hidden />
                        </span>
                      </span>
                      <span className="w-full text-[13px] font-semibold leading-4 text-[#1c1c1c]">{tile.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {!isKatyaHome && (
          <>
        <section className="space-y-2">
          <h2 className={sectionTitleClass}>Симптомы</h2>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none]">
            {symptomTiles.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  setSearchValue(item.query);
                  go("catalog", { category: item.category });
                }}
                className="shrink-0 rounded-full border border-[#e0e2e7] bg-white px-3 py-2 text-[13px] font-medium text-[#1c1c1c] active:scale-[0.97] transition-transform duration-150"
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className={sectionTitleClass}>Услуги</h2>
          </div>
          <div className="-mx-4">
            <div className="flex snap-x snap-proximity gap-3 overflow-x-auto px-4 pb-2 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none]">
            <button
              type="button"
              onClick={() => go("salons")}
              className="w-[232px] shrink-0 snap-start rounded-2xl border border-[#d9ecee] bg-white p-4 text-left shadow-[0_3px_10px_rgba(0,154,166,0.06)] active:scale-[0.98] transition-transform duration-150 flex flex-col"
            >
              <div className={cx(homeEyebrow11, "text-[#009AA6]")}>Консультация</div>
              <div className="mt-1.5 text-sm font-semibold leading-5 text-[#1c1c1c]">Прием ортопеда</div>
              <div className="mt-1 text-xs text-neutral-500 leading-[1.4]">Осмотр и рекомендации по лечению</div>
            </button>
            <button
              type="button"
              onClick={() => go("catalog", { category: "insoles" })}
              className="w-[232px] shrink-0 snap-start rounded-2xl border border-[#d9ecee] bg-white p-4 text-left shadow-[0_3px_10px_rgba(0,154,166,0.06)] active:scale-[0.98] transition-transform duration-150 flex flex-col"
            >
              <div className={cx(homeEyebrow11, "text-[#009AA6]")}>Диагностика стоп</div>
              <div className="mt-1.5 text-sm font-semibold leading-5 text-[#1c1c1c]">Индивидуальные стельки</div>
              <div className="mt-1 text-xs text-neutral-500 leading-[1.4]">Подбор под ваши параметры и нагрузку</div>
            </button>
            <button
              type="button"
              onClick={() => go("catalog", { category: "compression" })}
              className="w-[232px] shrink-0 snap-start rounded-2xl border border-[#d9ecee] bg-white p-4 text-left shadow-[0_3px_10px_rgba(0,154,166,0.06)] active:scale-[0.98] transition-transform duration-150 flex flex-col"
            >
              <div className={cx(homeEyebrow11, "text-[#009AA6]")}>Точный подбор</div>
              <div className="mt-1.5 text-sm font-semibold leading-5 text-[#1c1c1c]">Компрессия по меркам</div>
              <div className="mt-1 text-xs text-neutral-500 leading-[1.4]">Заказ изделий по индивидуальным меркам</div>
            </button>
            <button
              type="button"
              onClick={() => go("salons")}
              className="flex w-[72px] shrink-0 snap-start flex-col items-center justify-center gap-1.5 self-stretch rounded-2xl bg-neutral-100 text-neutral-400"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
              <span className={cx(homeText11, "font-medium")}>Все</span>
            </button>
            </div>
          </div>
        </section>
          </>
        )}

        <section className="min-w-0">
          <div className="grid grid-cols-2 gap-3">
              {homeFeaturedProducts.map((product) => (
                <button
                  type="button"
                  key={product.id}
                  onClick={() => {
                    setSelectedProduct(product);
                    go("product");
                  }}
                  className="min-w-0 w-full rounded-2xl border border-[#e7e9ee] bg-white p-3 text-left shadow-[0_4px_14px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform duration-150"
                >
                  <div className="aspect-[4/5] w-full rounded-xl bg-[#fff3e9] flex items-center justify-center">
                    <Footprints size={28} className="text-[#ff6e00]" />
                  </div>
                  <div className="mt-2.5 text-[13px] font-semibold leading-[1.3] text-[#1c1c1c] line-clamp-2">{product.title}</div>
                  <div className="mt-1.5 text-sm font-semibold text-[#1c1c1c]">{product.price}</div>
                </button>
              ))}
              <button
                type="button"
                onClick={() => go("catalog", { category: "all" })}
                className="col-span-2 flex h-12 w-full items-center justify-center rounded-2xl border border-[#e7e9ee] bg-white text-sm font-semibold text-[#1c1c1c] shadow-[0_4px_14px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/10 focus-visible:ring-offset-2"
              >
                Все товары
              </button>
          </div>
          {!isKatyaHome && (
            <div className="-mx-4 mt-3">
              <div className="flex snap-x snap-proximity gap-3 overflow-x-auto px-4 pb-1 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none]">
                {homeCategories.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() => go("catalog", { category: category.category })}
                    className="w-[148px] shrink-0 snap-start rounded-2xl border border-[#e7e9ee] bg-white p-3 text-left shadow-[0_4px_12px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform duration-150"
                  >
                    <div className="text-[13px] font-semibold leading-4 text-[#1c1c1c]">{category.title}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

function CatalogScreen({ go, selectedCategory, setSelectedCategory, searchValue, setSearchValue, setSelectedProduct, initialOnlyNearby, onSaveFilter }) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [onlyNearby, setOnlyNearby] = useState(initialOnlyNearby);

  useEffect(() => {
    setOnlyNearby(initialOnlyNearby);
  }, [initialOnlyNearby]);

  const filteredProducts = useMemo(() => {
    let list = products;

    if (selectedCategory !== "all") {
      list = list.filter((product) => product.category === selectedCategory);
    }

    if (onlyNearby) {
      list = list.filter((product) => {
        const text = product.availability.toLowerCase();
        return text.includes("салон") || text.includes("рядом") || text.includes("примерить");
      });
    }

    if (searchValue.trim()) {
      const query = searchValue.trim().toLowerCase();
      list = list.filter((product) => {
        return (
          product.title.toLowerCase().includes(query) ||
          product.fit.toLowerCase().includes(query) ||
          product.badge.toLowerCase().includes(query)
        );
      });
    }

    return list;
  }, [onlyNearby, searchValue, selectedCategory]);

  return (
    <div className="h-full overflow-y-auto pb-24">
      <Header
        title="Каталог"
        subtitle="Поиск, категории и фильтры"
        right={
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center"
          >
            <SlidersHorizontal size={19} />
          </button>
        }
      />

      <div className="px-5 space-y-4">
        <SearchBar value={searchValue} onChange={setSearchValue} />

        <div className="-mx-5 flex gap-2 overflow-x-auto pb-1 px-5">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cx(
                "px-4 py-2 rounded-full text-sm shrink-0 border",
                selectedCategory === category.id ? "bg-neutral-950 text-white border-neutral-950" : "bg-white border-black/10"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        <Card className="p-4" onClick={() => go("size")}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#fff3e9] flex items-center justify-center text-[#ff6e00]">
              <Ruler size={21} />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Не знаете размер?</div>
              <div className="text-xs text-neutral-500">Пройдите быстрый подбор по замерам</div>
            </div>
            <ChevronRight size={20} />
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-500">Найдено: {filteredProducts.length}</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                onSaveFilter({
                  category: selectedCategory,
                  query: searchValue.trim(),
                  onlyNearby,
                })
              }
              className="px-3 py-2 rounded-full text-xs border border-[#e0e2e7] bg-white"
            >
              Сохранить фильтр
            </button>
            <button
              type="button"
              onClick={() => setOnlyNearby((value) => !value)}
              className={cx(
                "px-3 py-2 rounded-full text-xs border",
                onlyNearby ? "bg-[#009aa6] text-white border-[#009aa6]" : "bg-white border-[#e0e2e7]"
              )}
            >
              Только рядом
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={(nextProduct) => {
                  setSelectedProduct(nextProduct);
                  go("product");
                }}
              />
            ))
          ) : (
            <Card className="p-6 text-center">
              <Search size={28} className="mx-auto text-neutral-400" />
              <div className="font-semibold mt-3">Ничего не найдено</div>
              <div className="text-sm text-neutral-500 mt-1">Уберите фильтр или выберите другую категорию</div>
            </Card>
          )}
        </div>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            className="absolute inset-0 bg-black/35 z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 320 }}
              animate={{ y: 0 }}
              exit={{ y: 320 }}
              className="bg-white rounded-t-[32px] p-5 w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">Фильтры</div>
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setOnlyNearby((value) => !value)}
                  className="w-full p-4 rounded-2xl bg-neutral-50 flex items-center justify-between text-left"
                >
                  <span className="font-medium">Есть в ближайшем салоне</span>
                  {onlyNearby ? <Check size={18} className="text-[#009aa6]" /> : <Plus size={18} className="text-neutral-400" />}
                </button>

                {["Можно примерить", "Со скидкой", "Подходит к моему размеру"].map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    className="w-full p-4 rounded-2xl bg-neutral-50 flex items-center justify-between text-left"
                  >
                    <span className="font-medium">{filter}</span>
                    <Plus size={18} className="text-neutral-400" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="w-full h-12 rounded-2xl bg-[#ff6e00] text-white font-semibold mt-5"
              >
                Показать товары
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductScreen({ product, go, cartCount, setCartCount }) {
  const [favorite, setFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="h-full overflow-y-auto pb-28">
      <Header title="Товар" subtitle="Карточка с подбором и наличием" onBack={() => go("catalog")} />

      <div className="px-5 space-y-4">
        <div className="relative">
          <ProductVisual label={product.imageLabel} large />
          <button
            type="button"
            onClick={() => setFavorite((value) => !value)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm"
          >
            <Heart size={21} className={favorite ? "text-red-500" : "text-neutral-500"} fill={favorite ? "currentColor" : "none"} />
          </button>
        </div>

        <div>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-xs px-2 py-1 rounded-lg bg-[#fff3e9] text-[#ff6e00] font-medium">{product.badge}</span>
            <span className="text-xs px-2 py-1 rounded-lg bg-[#eefafa] text-[#009aa6] font-medium">{product.availability}</span>
          </div>
          <h1 className="text-2xl font-semibold leading-tight">{product.title}</h1>
          <div className="flex items-end gap-2 mt-3">
            <div className="text-3xl font-bold">{product.price}</div>
            {product.oldPrice && <div className="text-sm text-neutral-400 line-through mb-1">{product.oldPrice}</div>}
          </div>
        </div>

        <Card className="p-4 bg-[#fff8e8]">
          <div className="flex items-start gap-3">
            <Sparkles size={20} className="text-[#ff6e00] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">Почему показали этот товар</div>
              <div className="text-sm text-neutral-600 mt-1">
                {product.reason}. Размер можно сохранить, чтобы приложение не заставляло каждый раз искать заново.
              </div>
            </div>
          </div>
        </Card>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Размер</h2>
            <button type="button" onClick={() => go("size")} className="text-sm text-[#ff6e00] font-medium">
              Помочь подобрать
            </button>
          </div>
          <div className="-mx-5 flex gap-2 overflow-x-auto pb-1 px-5">
            {product.sizes.map((size) => (
              <button
                type="button"
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cx(
                  "min-w-[48px] h-11 px-3 rounded-2xl border font-semibold",
                  selectedSize === size ? "bg-neutral-950 text-white border-neutral-950" : "bg-white border-black/10"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </section>

        <Card className="p-4" onClick={() => go("salons")}>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Есть в салоне рядом</div>
              <div className="text-xs text-neutral-500">Можно примерить или забрать сегодня</div>
            </div>
            <ChevronRight size={20} />
          </div>
        </Card>

        <Card className="p-4">
          <div className="font-semibold mb-2">Описание</div>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {product.fit}. В карточке выше длинного описания стоят наличие, размер и причина рекомендации: это быстрее отвечает на реальные вопросы пользователя в мобильном сценарии.
          </p>
        </Card>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-black/10 p-4 z-40">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go("cart")}
            className="w-14 h-[52px] rounded-2xl bg-neutral-100 flex items-center justify-center relative"
          >
            <ShoppingBag size={21} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ff6e00] text-white text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setCartCount((value) => value + 1)}
            className="flex-1 h-12 rounded-2xl bg-[#ff6e00] text-white font-semibold"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

function SizeScreen({ go, setSelectedCategory }) {
  const [type, setType] = useState("compression");
  const [step, setStep] = useState(1);
  const [ankle, setAnkle] = useState(22);
  const [calf, setCalf] = useState(36);
  const [foot, setFoot] = useState(25);

  const recommendation = type === "compression" ? "Размер M, 2 класс компрессии" : foot >= 25 ? "Размер 39–40" : "Размер 37–38";
  const targetCategory = type === "compression" ? "compression" : "insoles";

  const finish = () => {
    setSelectedCategory(targetCategory);
    go("catalog", { category: targetCategory });
  };

  return (
    <div className="h-full overflow-y-auto pb-24">
      <Header title="Подбор размера" subtitle="Быстрый сценарий вместо таблицы" onBack={() => go("home")} />

      <div className="px-5 space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setType("compression");
              setStep(1);
            }}
            className={cx(
              "p-4 rounded-2xl border text-left",
              type === "compression" ? "bg-[#ff6e00] text-white border-[#ff6e00]" : "bg-white border-[#e0e2e7]"
            )}
          >
            Компрессия
          </button>
          <button
            type="button"
            onClick={() => {
              setType("insoles");
              setStep(1);
            }}
            className={cx(
              "p-4 rounded-2xl border text-left",
              type === "insoles" ? "bg-[#ff6e00] text-white border-[#ff6e00]" : "bg-white border-[#e0e2e7]"
            )}
          >
            Стельки / обувь
          </button>
        </div>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3].map((number) => (
              <div key={number} className={cx("h-2 flex-1 rounded-full", number <= step ? "bg-[#ff6e00]" : "bg-neutral-200")} />
            ))}
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-xl font-semibold">Что подбираем?</div>
              <div className="text-sm text-neutral-500 mt-1">
                Сценарий меняется под тип товара, чтобы не показывать всем одну сложную таблицу.
              </div>
              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={() => setType("compression")}
                  className={cx(
                    "w-full p-4 rounded-2xl border text-left flex items-center justify-between",
                    type === "compression" ? "border-[#ff6e00] bg-[#fff3e9]" : "border-[#e0e2e7] bg-white"
                  )}
                >
                  Компрессионный трикотаж
                  {type === "compression" && <Check size={18} />}
                </button>
                <button
                  type="button"
                  onClick={() => setType("insoles")}
                  className={cx(
                    "w-full p-4 rounded-2xl border text-left flex items-center justify-between",
                    type === "insoles" ? "border-[#ff6e00] bg-[#fff3e9]" : "border-[#e0e2e7] bg-white"
                  )}
                >
                  Стельки или обувь
                  {type === "insoles" && <Check size={18} />}
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-xl font-semibold">Введите замеры</div>
              <div className="text-sm text-neutral-500 mt-1">Крупные поля и понятные подсказки вместо мелкой таблицы размеров.</div>
              <div className="h-44 rounded-2xl bg-neutral-100 mt-5 flex items-center justify-center">
                {type === "compression" ? <Ruler size={64} className="text-[#ff6e00]" /> : <Footprints size={64} className="text-[#ff6e00]" />}
              </div>
              <div className="mt-5 space-y-4">
                {type === "compression" ? (
                  <>
                    <Measure label="Обхват щиколотки" value={ankle} setValue={setAnkle} unit="см" />
                    <Measure label="Обхват икры" value={calf} setValue={setCalf} unit="см" />
                  </>
                ) : (
                  <Measure label="Длина стопы" value={foot} setValue={setFoot} unit="см" />
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
                <Check size={28} />
              </div>
              <div className="text-xl font-semibold">Рекомендуем</div>
              <div className="text-3xl font-bold mt-2">{recommendation}</div>
              <div className="text-sm text-neutral-500 mt-2">Размер можно сохранить в профиле и применять в каталоге автоматически.</div>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <button type="button" onClick={finish} className="h-12 rounded-2xl bg-[#ff6e00] text-white font-semibold">
                  Показать товары
                </button>
                <button type="button" className="h-12 rounded-2xl bg-neutral-100 font-semibold">
                  Сохранить
                </button>
              </div>
            </motion.div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => setStep((value) => Math.max(1, value - 1))}
              className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center disabled:opacity-40"
              disabled={step === 1}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => (step === 3 ? finish() : setStep((value) => Math.min(3, value + 1)))}
              className="flex-1 h-12 rounded-2xl bg-neutral-950 text-white font-semibold"
            >
              {step === 3 ? "Готово" : "Дальше"}
            </button>
          </div>
        </Card>

        <Card className="p-4 bg-[#fff8e8]">
          <div className="font-semibold">UX-смысл</div>
          <div className="text-sm text-neutral-600 mt-1">
            Размер — отдельный сценарий, а не ссылка на PDF или таблицу. Это снижает тревогу и вероятность ошибки при покупке.
          </div>
        </Card>
      </div>
    </div>
  );
}

function Measure({ label, value, setValue, unit }) {
  return (
    <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-neutral-50">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-xs text-neutral-500">Измерьте мягкой лентой</div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue((current) => Math.max(1, current - 1))}
          className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center"
        >
          <Minus size={15} />
        </button>
        <div className="w-16 text-center font-bold">
          {value} {unit}
        </div>
        <button
          type="button"
          onClick={() => setValue((current) => current + 1)}
          className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center"
        >
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
}

function ServicesScreen({ go }) {
  const services = [
    {
      eyebrow: "Консультация",
      title: "Приём ортопеда",
      description: "Осмотр и рекомендации по лечению",
      action: () => go("salons"),
    },
    {
      eyebrow: "Диагностика стоп",
      title: "Индивидуальные стельки",
      description: "Подбор под ваши параметры и нагрузку",
      action: () => go("catalog", { category: "insoles" }),
    },
    {
      eyebrow: "Точный подбор",
      title: "Компрессия по меркам",
      description: "Заказ изделий по индивидуальным меркам",
      action: () => go("catalog", { category: "compression" }),
    },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24 bg-[#f7f8fa]">
      <Header title="Услуги" subtitle="Консультации и медицинский подбор" />

      <div className="px-4 space-y-3">
        {services.map((service) => (
          <button
            type="button"
            key={service.title}
            onClick={service.action}
            className="w-full rounded-2xl border border-[#d9ecee] bg-white p-4 text-left shadow-[0_3px_10px_rgba(0,154,166,0.06)] active:scale-[0.98] transition-transform duration-150"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#009AA6]">{service.eyebrow}</div>
            <div className="mt-1.5 text-sm font-semibold leading-5 text-[#1c1c1c]">{service.title}</div>
            <div className="mt-1 text-xs text-neutral-500 leading-[1.4]">{service.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function SalonsScreen() {
  return (
    <div className="h-full overflow-y-auto pb-24">
      <Header title="Салоны" subtitle="Наличие, примерка и маршрут" />

      <div className="px-5 space-y-4">
        <div className="h-44 rounded-[32px] bg-neutral-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#eee6d9] to-[#cfc7bb]" />
          <div className="absolute left-8 top-8 w-24 h-16 rounded-[24px] bg-white/70" />
          <div className="absolute right-10 bottom-8 w-28 h-20 rounded-[28px] bg-white/60" />
          <div className="absolute left-10 top-12 w-10 h-10 rounded-full bg-[#ff6e00] text-white flex items-center justify-center shadow-lg">
            <MapPin size={20} />
          </div>
          <div className="absolute right-16 bottom-10 w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-lg">
            <MapPin size={20} />
          </div>
        </div>

        <Card className="p-4 bg-green-50 border-green-200">
          <div className="font-semibold">Товар можно примерить рядом</div>
          <div className="text-sm text-neutral-600 mt-1">Показываем не просто адреса, а наличие и возможность забрать сегодня.</div>
        </Card>

        {salons.map((salon) => (
          <Card key={salon.id} className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#fff3e9] text-[#ff6e00] flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-semibold">{salon.title}</div>
                  <div className="text-xs text-neutral-500">{salon.distance}</div>
                </div>
                <div className="text-sm text-neutral-500 mt-1">{salon.address}</div>
                <div className="text-xs text-green-700 mt-1">{salon.status}</div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button type="button" className="h-10 rounded-2xl bg-[#ff6e00] text-white text-sm font-semibold flex items-center justify-center gap-2">
                    <Navigation size={15} />
                    Маршрут
                  </button>
                  <button type="button" className="h-10 rounded-2xl bg-neutral-100 text-sm font-semibold flex items-center justify-center gap-2">
                    <Phone size={15} />
                    Позвонить
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen({ go }) {
  return (
    <div className="h-full overflow-y-auto pb-24">
      <Header title="Профиль" subtitle="Бонусы, размеры и повторы" />

      <div className="px-5 space-y-4">
        <Card className="p-5 bg-neutral-950 text-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#ff6e00] flex items-center justify-center text-xl font-bold">А</div>
            <div>
              <div className="text-xl font-semibold">Алексей</div>
              <div className="text-sm text-white/60">1 240 бонусов</div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4" onClick={() => go("size")}>
            <Ruler size={24} className="text-[#ff6e00]" />
            <div className="font-semibold mt-3">Мои размеры</div>
            <div className="text-xs text-neutral-500 mt-1">Стопа 39, компрессия M</div>
          </Card>
          <Card className="p-4">
            <Repeat2 size={24} className="text-[#ff6e00]" />
            <div className="font-semibold mt-3">Повторить заказ</div>
            <div className="text-xs text-neutral-500 mt-1">Последние покупки</div>
          </Card>
        </div>

        <Card className="p-4">
          <div className="font-semibold mb-3">Сохранённые фильтры</div>
          <div className="space-y-2">
            {["Стельки · размер 39 · есть рядом", "Компрессия · 2 класс · размер M"].map((item) => (
              <button
                type="button"
                key={item}
                className="w-full p-3 rounded-2xl bg-neutral-50 flex items-center justify-between text-sm text-left"
              >
                {item}
                <ChevronRight size={17} />
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-4 bg-[#fff8e8]">
          <div className="font-semibold">Почему это важно</div>
          <div className="text-sm text-neutral-600 mt-1">
            Для ORTEKA профиль должен хранить не только имя и заказы, а параметры выбора: размеры, салон, фильтры и повторяемые покупки.
          </div>
        </Card>
      </div>
    </div>
  );
}

function FavoritesScreen({ go, setSelectedProduct }) {
  const favoriteProducts = products.filter((item) => item.rating >= "4.8");

  return (
    <div className="h-full overflow-y-auto pb-24">
      <Header title="Избранное" subtitle="Сохранённые товары и быстрый доступ" />

      <div className="px-5 space-y-4">
        <Card className="p-4 bg-[#fff3e9]">
          <div className="font-semibold">Ваши избранные товары</div>
          <div className="text-sm text-neutral-600 mt-1">Сохраняйте товары, чтобы вернуться к ним позже и не терять подборки.</div>
        </Card>

        <div className="space-y-3">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={(nextProduct) => {
                setSelectedProduct(nextProduct);
                go("product");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CartScreen({ go, cartCount, setCartCount, selectedProduct }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const hasItems = cartCount > 0;

  if (orderPlaced) {
    return (
      <div className="h-full overflow-y-auto pb-24">
        <Header title="Заказ оформлен" subtitle="Статус появится на главной" onBack={() => go("home")} />
        <div className="px-5 space-y-4">
          <Card className="p-8 text-center">
            <Check size={38} className="mx-auto text-green-600" />
            <div className="text-xl font-semibold mt-3">Заказ оформлен</div>
            <div className="text-sm text-neutral-500 mt-1">Статус появится на главном экране и в профиле.</div>
            <button type="button" onClick={() => go("home")} className="mt-5 w-full h-12 rounded-2xl bg-neutral-950 text-white font-semibold">
              На главную
            </button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto pb-24">
      <Header title="Корзина" subtitle="Оформление без лишнего шума" onBack={() => go("product")} />

      <div className="px-5 space-y-4">
        {hasItems ? (
          <>
            <ProductCard product={selectedProduct} onOpen={() => go("product")} compact />

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Списать бонусы</div>
                  <div className="text-sm text-neutral-500">Доступно 1 240 бонусов</div>
                </div>
                <button type="button" className="px-4 py-2 rounded-full bg-neutral-950 text-white text-sm">
                  Списать
                </button>
              </div>
            </Card>

            <Card className="p-4">
              <div className="font-semibold mb-3">Получение</div>
              <button type="button" className="w-full p-4 rounded-2xl bg-[#fff3e9] border border-[#ffd7b8] text-left">
                <div className="font-semibold">Забрать в салоне сегодня</div>
                <div className="text-sm text-neutral-500 mt-1">ORTEKA Тверская · после 16:00</div>
              </button>
              <button type="button" className="w-full p-4 rounded-2xl bg-neutral-50 mt-2 text-left">
                <div className="font-semibold">Доставка</div>
                <div className="text-sm text-neutral-500 mt-1">Завтра или позже</div>
              </button>
            </Card>

            <button
              type="button"
              onClick={() => {
                setCartCount(0);
                setOrderPlaced(true);
              }}
              className="w-full h-[52px] rounded-2xl bg-[#ff6e00] text-white font-semibold"
            >
              Оформить заказ
            </button>
          </>
        ) : (
          <Card className="p-8 text-center">
            <ShoppingBag size={38} className="mx-auto text-neutral-400" />
            <div className="text-xl font-semibold mt-3">Корзина пуста</div>
            <div className="text-sm text-neutral-500 mt-1">Добавьте товар из каталога или карточки товара.</div>
            <button type="button" onClick={() => go("catalog", { category: "all" })} className="mt-5 w-full h-12 rounded-2xl bg-neutral-950 text-white font-semibold">
              Перейти в каталог
            </button>
          </Card>
        )}
      </div>
    </div>
  );
}

function OrderScreen({ go }) {
  const filledCells = [0, 1, 3, 4, 6, 8, 12, 16, 18, 20, 21, 23, 24];

  return (
    <div className="h-full overflow-y-auto pb-24">
      <Header title="Заказ" subtitle="Получение в салоне" onBack={() => go("home")} />

      <div className="px-5 space-y-4">
        <Card className="p-5 text-center">
          <div className="w-40 h-40 mx-auto rounded-2xl bg-white border-8 border-neutral-100 flex items-center justify-center">
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, index) => (
                <div key={index} className={cx("w-4 h-4", filledCells.includes(index) ? "bg-neutral-950" : "bg-neutral-200")} />
              ))}
            </div>
          </div>
          <div className="text-xl font-semibold mt-5">Покажите QR в салоне</div>
          <div className="text-sm text-neutral-500 mt-1">Заказ готов к получению сегодня после 16:00</div>
        </Card>

        <Card className="p-4">
          <div className="font-semibold">ORTEKA Тверская</div>
          <div className="text-sm text-neutral-500 mt-1">ул. Тверская, 12 · открыто до 22:00</div>
          <button type="button" className="w-full h-11 rounded-2xl bg-[#ff6e00] text-white font-semibold mt-4">
            Построить маршрут
          </button>
        </Card>
      </div>
    </div>
  );
}

export default function OrtekaMobilePrototype() {
  const [screen, setScreen] = useState("home");
  const [homeProfileCustomer, setHomeProfileCustomer] = useState("Катя");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [catalogOnlyNearby, setCatalogOnlyNearby] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [savedFilters, setSavedFilters] = useState(() => {
    if (typeof window === "undefined") {
      return defaultSavedFilters;
    }

    try {
      const saved = window.localStorage.getItem(SAVED_FILTERS_STORAGE_KEY);
      if (!saved) {
        return defaultSavedFilters;
      }

      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return defaultSavedFilters;
      }

      const normalized = parsed
        .map((item) => {
          if (!item || typeof item !== "object") {
            return null;
          }

          return {
            id: item.id || `${item.category || "all"}-${item.query || "all"}-${item.onlyNearby ? "nearby" : "any"}`,
            label: item.label || "Сохранённый фильтр",
            category: item.category || "all",
            query: item.query || "",
            onlyNearby: Boolean(item.onlyNearby),
          };
        })
        .filter(Boolean);

      return normalized.length > 0 ? normalized : defaultSavedFilters;
    } catch {
      return defaultSavedFilters;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(SAVED_FILTERS_STORAGE_KEY, JSON.stringify(savedFilters));
    } catch {
      // noop: localStorage may be unavailable in some environments
    }
  }, [savedFilters]);

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToastMessage("");
    }, 2200);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toastMessage]);

  const go = (nextScreen, options = {}) => {
    if (options.category) {
      setSelectedCategory(options.category);
    }
    if (typeof options.onlyNearby === "boolean") {
      setCatalogOnlyNearby(options.onlyNearby);
    }
    setScreen(nextScreen);
  };

  const saveFilter = ({ category, query, onlyNearby }) => {
    const selected = categories.find((item) => item.id === category);
    const normalizedCategory = category || "all";
    const normalizedQuery = query || "";

    if (normalizedCategory === "all" && !normalizedQuery && !onlyNearby) {
      setToastMessage("Добавьте параметры для сохранения фильтра");
      return;
    }

    const parts = [selected?.title || "Все"];

    if (normalizedQuery) {
      parts.push(normalizedQuery);
    }
    if (onlyNearby) {
      parts.push("есть рядом");
    }

    const label = parts.join(" · ");
    const id = `${normalizedCategory}-${normalizedQuery || "all"}-${onlyNearby ? "nearby" : "any"}`;
    const nextFilter = { id, label, category: normalizedCategory, query: normalizedQuery, onlyNearby: Boolean(onlyNearby) };

    setSavedFilters((prev) => {
      const withoutDuplicate = prev.filter((item) => item.id !== id);
      return [nextFilter, ...withoutDuplicate].slice(0, 6);
    });
    setToastMessage("Фильтр сохранён");
  };

  const showBottomNav = !["product", "cart", "order", "size"].includes(screen);
  const isKatyaHomeScreen = screen === "home" && homeProfileCustomer === "Катя";

  return (
    <PhoneShell>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.18 }}
          className="box-border h-full min-h-0 w-full overflow-x-hidden"
          style={
            isKatyaHomeScreen
              ? undefined
              : { paddingTop: "max(2rem, env(safe-area-inset-top, 0px))" }
          }
        >
          {screen === "home" && (
            <HomeScreen
              go={go}
              setSelectedProduct={setSelectedProduct}
              setSearchValue={setSearchValue}
              homeProfileCustomer={homeProfileCustomer}
              setHomeProfileCustomer={setHomeProfileCustomer}
            />
          )}

          {screen === "catalog" && (
            <CatalogScreen
              go={go}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setSelectedProduct={setSelectedProduct}
              initialOnlyNearby={catalogOnlyNearby}
              onSaveFilter={saveFilter}
            />
          )}

          {screen === "product" && <ProductScreen product={selectedProduct} go={go} cartCount={cartCount} setCartCount={setCartCount} />}
          {screen === "size" && <SizeScreen go={go} setSelectedCategory={setSelectedCategory} />}
          {screen === "services" && <ServicesScreen go={go} />}
          {screen === "salons" && <SalonsScreen />}
          {screen === "profile" && <ProfileScreen go={go} />}
          {screen === "favorites" && <FavoritesScreen go={go} setSelectedProduct={setSelectedProduct} />}
          {screen === "cart" && <CartScreen go={go} cartCount={cartCount} setCartCount={setCartCount} selectedProduct={selectedProduct} />}
          {screen === "order" && <OrderScreen go={go} />}
        </motion.div>
      </AnimatePresence>

      {showBottomNav && (
        <BottomNav screen={screen} go={go} homeProfileCustomer={homeProfileCustomer} setHomeProfileCustomer={setHomeProfileCustomer} />
      )}
      {toastMessage && (
        <div className="absolute bottom-16 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#1c1c1c] px-3 py-2 text-xs font-medium text-white shadow-lg">
          {toastMessage}
        </div>
      )}
    </PhoneShell>
  );
}
