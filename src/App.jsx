import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgePercent,
  Bandage,
  Bed,
  Bell,
  Bone,
  Calendar,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Footprints,
  Grid2X2,
  Heart,
  Home,
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
  Wifi,
  X,
} from "lucide-react";
import ortekaLogo from "./assets/orteka-logo.png";
import ortekaSalonMark from "./assets/orteka-salon-mark.png";
import cdekPvzMark from "./assets/cdek-pvz-mark.png";
import pointsLogo from "./assets/points-logo.png";
import pointsLogo2x from "./assets/points-logo@2x.png";
import homeQrImage from "./assets/home-qr.png";
import promoCompressionImage from "./assets/promo-compression.png";
import promoInsolesImage from "./assets/promo-insoles.png";
import promoShoesImage from "./assets/promo-shoes.png";
import product01Image from "./assets/products/product-01.jpeg";
import product02Image from "./assets/products/product-02.webp";
import product03Image from "./assets/products/product-03.webp";
import product04Image from "./assets/products/product-04.webp";
import product05Image from "./assets/products/product-05.webp";
import product06Image from "./assets/products/product-06.webp";
import product07Image from "./assets/products/product-07.webp";
import product08Image from "./assets/products/product-08.webp";
import product09Image from "./assets/products/product-09.webp";
import product10Image from "./assets/products/product-10.webp";
import product11Image from "./assets/products/product-11.jpg";
import product12Image from "./assets/products/product-12.png";
import product13Image from "./assets/products/product-13.png";
import product14Image from "./assets/products/product-14.jpg";
import product15Image from "./assets/products/product-15.jpg";
import product16Image from "./assets/products/product-16.jpg";
import product17Image from "./assets/products/product-17.jpg";
import tabCartFigmaIcon from "./assets/tab-cart-figma.svg";
import tabCatalogFigmaIcon from "./assets/tab-catalog-figma.svg";
import tabFavFigmaIcon from "./assets/tab-fav-figma.svg";
import tabHomeFigmaIcon from "./assets/tab-home-figma.svg";
import tabProfileFigmaIcon from "./assets/tab-profile-figma.svg";
import zhilvinasBookingCalendarImage from "./assets/zhilvinas-booking-calendar.png";
import zhilvinasTileBracesImage from "./assets/zhilvinas-tile-braces.png";
import zhilvinasTileCompressionImage from "./assets/zhilvinas-tile-compression.png";
import zhilvinasTileInsolesImage from "./assets/zhilvinas-tile-insoles.png";
import zhilvinasTileNewImage from "./assets/zhilvinas-tile-new.png";
import zhilvinasTileSleepImage from "./assets/zhilvinas-tile-sleep.png";
import zhilvinasTilePromoImage from "./assets/zhilvinas-tile-promo.png";
import zhilvinasTileShoesImage from "./assets/zhilvinas-tile-shoes.png";
import { QuickTileFilledIcon } from "./components/QuickTileFilledIcons";

const categories = [
  { id: "all", title: "Все", subtitle: "все товары", icon: Grid2X2 },
  { id: "insoles", title: "Стельки", subtitle: "для обуви и стопы", icon: Footprints },
  { id: "compression", title: "Трикотаж", subtitle: "чулки и гольфы", icon: ShieldCheck },
  { id: "braces", title: "Бандажи", subtitle: "ортезы и фиксаторы", icon: Ruler },
  { id: "shoes", title: "Обувь", subtitle: "на каждый день", icon: ShoppingBag },
  { id: "accessories", title: "Аксессуары", subtitle: "уход и дополнения", icon: Sparkles },
];

const products = [
  {
    id: 1,
    category: "insoles",
    title: "Стельки ортопедические ORTMANN Фавора (Favora)",
    price: "4 490 ₽",
    oldPrice: null,
    badge: "Есть рядом",
    rating: "4.8",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    fit: "Профилактика плоскостопия и усталости стоп",
    reason: "Сертификат СФР · код 09-01-08",
    availability: "В салоне на Тверской — сегодня",
    imageLabel: "Стельки",
    image: product01Image,
  },
  {
    id: 2,
    category: "compression",
    title: "Чулки BAUERFEIND VenoTrain pure, 2 класс, бежевые",
    price: "7 890 ₽",
    oldPrice: null,
    badge: "Нужен замер",
    rating: "4.9",
    sizes: ["S", "M", "L", "XL"],
    fit: "2 класс компрессии, открытый мыс",
    reason: "Сертификат СФР · код 08-09-20",
    availability: "В 4 салонах рядом",
    imageLabel: "Чулки",
    image: product02Image,
  },
  {
    id: 3,
    category: "braces",
    title: "Ортез на коленный сустав BAUERFEIND GenuTrain 8",
    price: "15 490 ₽",
    oldPrice: null,
    badge: "Популярно",
    rating: "4.8",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Поддержка колена при нагрузке и восстановлении",
    reason: "Часто покупают после консультации",
    availability: "Доставка завтра",
    imageLabel: "Ортез",
    image: product03Image,
  },
  {
    id: 4,
    category: "shoes",
    title: "Кроссовки BERKEMANN Allegra-extra mold",
    price: "19 990 ₽",
    oldPrice: null,
    badge: "Примерка",
    rating: "4.9",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    fit: "Ортопедические кроссовки для ежедневной ходьбы",
    reason: "Есть ваш сохранённый размер 39",
    availability: "Можно примерить в ближайшем салоне",
    imageLabel: "Обувь",
    image: product04Image,
  },
  {
    id: 5,
    category: "braces",
    title: "Ортез голеностопный ORLETT BAN-101(M)",
    price: "3 190 ₽",
    oldPrice: null,
    badge: "Есть рядом",
    rating: "4.7",
    sizes: ["S", "M", "L", "XL"],
    fit: "Фиксация голеностопа со стейсами",
    reason: "Подходит для активной ходьбы",
    availability: "В салоне на Тверской — сегодня",
    imageLabel: "Ортез",
    image: product05Image,
  },
  {
    id: 6,
    category: "compression",
    title: "Гольфы VENOTEKS Classic, 2 класс, чёрные",
    price: "957 ₽",
    oldPrice: null,
    badge: "Нужен замер",
    rating: "4.6",
    sizes: ["S", "M", "L", "XL"],
    fit: "2 класс компрессии, открытый мыс",
    reason: "Часто берут в пару к чулкам",
    availability: "В 3 салонах рядом",
    imageLabel: "Гольфы",
    image: product06Image,
  },
  {
    id: 7,
    category: "insoles",
    title: "Ортопедические стельки ORTMANN Leader",
    price: "6 890 ₽",
    oldPrice: null,
    badge: "Популярно",
    rating: "4.8",
    sizes: ["38", "39", "40", "41", "42", "43"],
    fit: "При плоскостопии I–II степени и весе более 80 кг",
    reason: "Рекомендуют после диагностики",
    availability: "Доставка завтра",
    imageLabel: "Стельки",
    image: product07Image,
  },
  {
    id: 8,
    category: "shoes",
    title: "Кроссовки BERKEMANN Neolie",
    price: "20 890 ₽",
    oldPrice: null,
    badge: "Примерка",
    rating: "4.8",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    fit: "Ортопедические кроссовки, бежевые",
    reason: "Есть модель в вашем размере",
    availability: "Можно примерить в ближайшем салоне",
    imageLabel: "Обувь",
    image: product08Image,
  },
  {
    id: 9,
    category: "braces",
    title: "Ортез коленный ORLETT SO-303 Unload",
    price: "18 190 ₽",
    oldPrice: null,
    badge: "Есть рядом",
    rating: "4.7",
    sizes: ["S", "M", "L", "XL"],
    fit: "Рамный шарнирный ортез, разгрузка колена",
    reason: "Вы смотрели товары для колена",
    availability: "В салоне на Арбате — сегодня",
    imageLabel: "Ортез",
    image: product09Image,
  },
  {
    id: 10,
    category: "compression",
    title: "Чулки BAUERFEIND VenoTrain micro, 2 класс, карамель",
    price: "12 990 ₽",
    oldPrice: null,
    badge: "Нужен замер",
    rating: "4.9",
    sizes: ["S", "M", "L", "XL"],
    fit: "2 класс компрессии",
    reason: "Подбор по индивидуальным меркам",
    availability: "В 4 салонах рядом",
    imageLabel: "Чулки",
    image: product10Image,
  },
  {
    id: 11,
    category: "shoes",
    title: "Мужские ортопедические ботинки BERKEMANN Lars",
    price: "13 645 ₽",
    oldPrice: "27 290 ₽",
    badge: "−50%",
    rating: "5.0",
    sizes: ["40", "41", "42", "43", "44", "45"],
    fit: "Утеплённые ботинки с 5-фазной стелькой",
    reason: "Сертификат СФР · код 09-02-05",
    availability: "Можно примерить в ближайшем салоне",
    imageLabel: "Ботинки",
    image: product11Image,
  },
  {
    id: 12,
    category: "braces",
    title: "Ортез поясничный BAUERFEIND Spinova Stabi Classic",
    price: "73 890 ₽",
    oldPrice: null,
    badge: "Сертификат СФР",
    rating: "5.0",
    sizes: ["1", "2", "3", "4", "5", "6"],
    fit: "Стабилизация пояснично-крестцового отдела",
    reason: "После консультации ортопеда",
    availability: "Доставка завтра",
    imageLabel: "Корсет",
    image: product12Image,
  },
  {
    id: 13,
    category: "accessories",
    title: "Подпяточники ORTMANN SolaMed Replet",
    price: "1 420 ₽",
    oldPrice: null,
    badge: "Есть рядом",
    rating: "5.0",
    sizes: ["S", "M", "L", "XL"],
    fit: "Коррекция разной длины ног 3–12 мм",
    reason: "Сертификат СФР · код 09-01-08",
    availability: "В салоне на Тверской — сегодня",
    imageLabel: "Подпяточники",
    image: product13Image,
  },
  {
    id: 14,
    category: "braces",
    title: "Ортез лучезапястный BAUERFEIND ManuTrain",
    price: "15 790 ₽",
    oldPrice: null,
    badge: "Популярно",
    rating: "5.0",
    sizes: ["2", "3", "4", "5", "6"],
    fit: "Поддержка запястья без жёсткой фиксации",
    reason: "Часто берут после травмы кисти",
    availability: "В 3 салонах рядом",
    imageLabel: "Ортез",
    image: product14Image,
  },
  {
    id: 15,
    category: "braces",
    title: "Корсет поясничный ORLETT OBS-200 регулируемый",
    price: "3 195 ₽",
    oldPrice: null,
    badge: "Сертификат СФР",
    rating: "5.0",
    sizes: ["XS", "S", "M", "L", "XL"],
    fit: "Регулируемая фиксация поясницы",
    reason: "Доступная цена при болях в спине",
    availability: "Доставка завтра",
    imageLabel: "Корсет",
    image: product15Image,
  },
  {
    id: 16,
    category: "shoes",
    title: "Женские ортопедические ботинки BERKEMANN Colombe",
    price: "11 994 ₽",
    oldPrice: null,
    badge: "Примерка",
    rating: "4.8",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    fit: "Ботинки на липучках с 5-фазной стелькой",
    reason: "Есть ваш сохранённый размер 39",
    availability: "Можно примерить в ближайшем салоне",
    imageLabel: "Ботинки",
    image: product16Image,
  },
  {
    id: 17,
    category: "braces",
    title: "Ортез на локтевой сустав BAUERFEIND Sports Elbow Support",
    price: "12 390 ₽",
    oldPrice: null,
    badge: "Для спорта",
    rating: "5.0",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Защита локтя при нагрузках",
    reason: "Подходит для тренировок и реабилитации",
    availability: "В 4 салонах рядом",
    imageLabel: "Бандаж",
    image: product17Image,
  },
];

const homeFeaturedProductIds = [1, 11, 3, 12, 2, 5, 13, 15, 14, 6, 4, 16, 17, 9];
const homeFeaturedProducts = homeFeaturedProductIds
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);

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
  { id: "booking", title: "Записаться", screen: "services", icon: Calendar },
  { id: "sfr", title: "Сертификат СФР", screen: "services", icon: FileText },
  { id: "new", title: "Новинки", category: "all", icon: Sparkles },
  { id: "hits", title: "Хиты", category: "all", icon: Star },
  { id: "promo", title: "Акции", category: "all", icon: BadgePercent },
];

const zhilvinasHeaderQuickTiles = katyaHomeQuickTiles
  .filter((tile) => tile.id !== "hits")
  .map((tile) => (tile.id === "sfr" ? { ...tile, title: "СФР" } : tile));

/** Плитки каталога orteka.ru — только лента Жильвинаса (порядок как на /catalog/). */
const zhilvinasCatalogQuickTiles = [
  { id: "booking", title: "Записаться", screen: "services", image: zhilvinasBookingCalendarImage, accent: "brand" },
  { id: "new", title: "Новинки", category: "all", image: zhilvinasTileNewImage },
  { id: "ortho-goods", title: "Ортезы", category: "braces", image: zhilvinasTileBracesImage },
  { id: "shoes", title: "Обувь", category: "shoes", image: zhilvinasTileShoesImage },
  { id: "compression", title: "Трикотаж", category: "compression", image: zhilvinasTileCompressionImage },
  { id: "insoles-series", title: "Стельки", category: "insoles", image: zhilvinasTileInsolesImage },
  { id: "sleep", title: "Сон", category: "all", image: zhilvinasTileSleepImage },
  { id: "promo", title: "Акции", category: "all", image: zhilvinasTilePromoImage },
];

const homeCategories = [
  { id: "promo", title: "Акции", category: "all" },
  { id: "insoles", title: "Стельки", category: "insoles" },
  { id: "braces", title: "Бандажи", category: "braces" },
  { id: "shoes", title: "Обувь", category: "shoes" },
  { id: "compression", title: "Трикотаж", category: "compression" },
];

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
    id: "salon",
    tone: "ready",
    kind: "salon",
    title: "ОРТЕКА",
    address: "г. Москва, Тверская, 12",
    timing: "Заберите сегодня до 21:00",
    image: product01Image,
  },
  {
    id: "pvz",
    tone: "transit",
    kind: "pvz",
    title: "ПВЗ",
    address: "г. Москва, ул. Свободы, 40",
    timing: "Приедет 16 мая · ориентир 14:00",
    image: product02Image,
  },
  {
    id: "courier",
    tone: "preparing",
    kind: "courier",
    title: "Курьерская доставка",
    address: "г. Москва, ул. Свободы, 40к1, кв. 84",
    timing: "Соберём сегодня · доставка завтра, 12:00–18:00",
    image: product04Image,
  },
];

const homeOrderTonePriority = { ready: 0, attention: 1, transit: 2, preparing: 3 };

const homeOrderStatusMeta = {
  ready: {
    label: "Готов к выдаче",
    pillClass: "bg-[#e8f7ef] text-[#0d7a45]",
    dotClass: "bg-[#22c55e]",
    qrPanelClass: "bg-[#f0fdf4]",
    timingClass: "font-medium text-[#0d7a45]",
  },
  transit: {
    label: "В пути",
    pillClass: "bg-[#e8f6f7] text-[#007a84]",
    dotClass: "bg-[#009aa6]",
    qrPanelClass: "bg-white",
    timingClass: "text-[#1c1c1c]",
  },
  preparing: {
    label: "Собираем заказ",
    pillClass: "bg-[#f3f4f6] text-[#4b5563]",
    dotClass: "bg-[#9ca3af]",
    qrPanelClass: "bg-white",
    timingClass: "text-neutral-600",
  },
  attention: {
    label: "Нужно ваше внимание",
    pillClass: "bg-[#fff3e9] text-[#c2410c]",
    dotClass: "bg-[#ff6e00]",
    qrPanelClass: "bg-[#fffaf5]",
    timingClass: "font-medium text-[#c2410c]",
  },
};

function getHomeOrderStatusMeta(tone) {
  return homeOrderStatusMeta[tone] ?? homeOrderStatusMeta.preparing;
}

function HomeOrderStatusPill({ tone, label }) {
  const meta = getHomeOrderStatusMeta(tone);
  const text = label ?? meta.label;

  return (
    <span
      className={cx(
        "inline-flex max-w-full items-center gap-1.5 rounded-md px-2 py-0.5",
        "text-[11px] font-semibold leading-none tracking-tight",
        meta.pillClass
      )}
    >
      <span className={cx("size-1.5 shrink-0 rounded-full", meta.dotClass)} aria-hidden />
      <span className="truncate">{text}</span>
    </span>
  );
}

function HomeOrderDeliveryKindIcon({ kind, className = "h-4 w-4 shrink-0 text-[#009AA6]" }) {
  if (kind === "salon") {
    return (
      <img
        src={ortekaSalonMark}
        alt=""
        className={cx(className, "object-contain")}
        aria-hidden
      />
    );
  }

  if (kind === "pvz") {
    return (
      <img
        src={cdekPvzMark}
        alt=""
        className={cx(className, "object-contain")}
        aria-hidden
      />
    );
  }

  return <Home className={className} strokeWidth={2} aria-hidden />;
}

const SAVED_FILTERS_STORAGE_KEY = "orteka.savedFilters.v1";
const defaultSavedFilters = [
  { id: "insoles-39-near", label: "Стельки · размер 39 · есть рядом", category: "insoles", query: "стельки", onlyNearby: true },
  { id: "compression-m", label: "Трикотаж · M · 2 класс", category: "compression", query: "компрессия", onlyNearby: false },
];

const homeProfileCustomers = [
  { name: "Катя", disabled: false },
  { name: "Жильвинас", disabled: false },
  { name: "В разработке", disabled: false },
  { name: "Лёша", disabled: false },
];

const katyaStyleHomeProfiles = new Set(["Катя", "В разработке"]);
const leshaStyleHomeProfiles = new Set(["Лёша"]);
const zhilvinasStyleHomeProfiles = new Set(["Жильвинас"]);

function isKatyaStyleHomeProfile(customerName) {
  return katyaStyleHomeProfiles.has(customerName);
}

function isLeshaStyleHomeProfile(customerName) {
  return leshaStyleHomeProfiles.has(customerName);
}

function isZhilvinasStyleHomeProfile(customerName) {
  return zhilvinasStyleHomeProfiles.has(customerName);
}

function isLeshaLayoutBodyProfile(customerName) {
  return isLeshaStyleHomeProfile(customerName) || isZhilvinasStyleHomeProfile(customerName);
}

const katyaHomeSegments = [
  { id: "home", label: "Главная" },
  { id: "med-center", label: "Медцентр" },
  { id: "orteka-health", label: "Статьи" },
];

const zhilvinasHomeSegments = [
  { id: "home", label: "Магазин" },
  { id: "med-center", label: "Пациентам" },
  { id: "orteka-health", label: "Врачам" },
];

const zhilvinasSearchMarqueePlaceholder = "Спросите меня, что подойдёт при боли или травме";

/**
 * Лента категорий Жильвинаса — сбалансированный ритм:
 * 60px иконки, 64px колонка, 10px между колонками (~14px между квадратами).
 */
const zhilvinasCatalogTilesRowClass =
  "flex snap-x snap-proximity gap-2.5 overflow-x-auto scroll-px-4 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";
const zhilvinasCatalogTileButtonClass =
  "w-[64px] shrink-0 snap-start flex-col items-center justify-center gap-1.5";
const zhilvinasCatalogTileIconBoxClass =
  "mx-auto flex aspect-square w-[60px] shrink-0 items-center justify-center rounded-2xl p-1.5";
const zhilvinasCatalogTileLabelClass =
  "block w-full text-center text-[12px] font-medium leading-tight text-[#1c1c1c]";
/** CTA «Записаться» — фирменный бирюзовый, контраст с белыми плитками. */
const zhilvinasCatalogCtaTileIconClass = `${zhilvinasCatalogTileIconBoxClass} border-0 shadow-[0_6px_16px_rgba(0,154,166,0.28)] bg-[radial-gradient(ellipse_80%_70%_at_100%_0%,rgba(255,255,255,0.22)_0%,transparent_55%),linear-gradient(155deg,#007a84_0%,#009AA6_42%,#00b0be_100%)]`;
const zhilvinasCatalogCtaTileImageClass =
  "mx-auto block aspect-square w-[60px] shrink-0 overflow-hidden rounded-2xl border-0 shadow-[0_6px_16px_rgba(0,154,166,0.28)]";
const zhilvinasCatalogCtaTileLabelClass =
  "block w-full text-center text-[12px] font-semibold leading-tight text-[#007a84]";
const zhilvinasCatalogDefaultTileIconClass = `${zhilvinasCatalogTileIconBoxClass} border border-[#e7e9ee] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)]`;
const zhilvinasCatalogTileImageClass =
  "mx-auto block aspect-square w-[60px] shrink-0 overflow-hidden rounded-2xl border border-[#e7e9ee] shadow-[0_4px_12px_rgba(0,0,0,0.04)]";

const katyaHeaderGradientClass =
  "bg-[radial-gradient(ellipse_82%_64%_at_94%_108%,#ffb35a_0%,rgba(255,104,24,0.38)_50%,transparent_72%),linear-gradient(168deg,#d95800_0%,#ff6e00_30%,#ff7a28_58%,#b84700_100%)]";

const katyaHeaderShellEdgeClass = "border-white/20";
const katyaHeaderShellShadowClass = "shadow-[0_8px_22px_rgba(184,71,0,0.26)]";
const katyaHeaderStickySurfaceClass =
  "bg-[linear-gradient(168deg,#ff6e00_0%,#f06810_38%,#c44f00_100%)]";
const katyaHeaderFocusRingOffsetClass = "focus-visible:ring-offset-[#e35f00]";

const zhilvinasUnifiedHeaderShellClass = cx(
  katyaHeaderGradientClass,
  "-mx-4 flex flex-col overflow-hidden rounded-b-3xl border-b",
  katyaHeaderShellEdgeClass,
  katyaHeaderShellShadowClass
);

/**
 * Типографика оранжевой шапки Жильвинаса — один letter-spacing (normal),
 * без tracking-tight: на кириллице короткая и длинная подпись иначе выглядят по-разному.
 */
const zhilvinasHeaderTrackingClass = "tracking-normal";
const zhilvinasSalonRowTextClass = cx(
  "font-sans text-sm font-normal leading-snug text-white [text-shadow:none] shadow-none",
  zhilvinasHeaderTrackingClass
);

function HomeSalonNearbyButton({
  go,
  homeEyebrow11,
  showEyebrow = true,
  compactInline = false,
  salonRowStyle = "default",
}) {
  const isZhilvinasSalonRow = salonRowStyle === "zhilvinas" && !showEyebrow;
  return (
    <div className={cx("flex items-center", compactInline ? "shrink-0 gap-1.5" : "w-full gap-1")}>
      <button
        type="button"
        onClick={() => go("salons")}
        aria-label={
          showEyebrow
            ? "Салон рядом, г. Москва, Тверская, 12. Подробнее в списке салонов"
            : "Ближайший салон: г. Москва, Тверская, 12. Подробнее в списке салонов"
        }
        className={cx(
          "min-w-0 rounded-xl px-0.5 py-1 text-left transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2",
          katyaHeaderFocusRingOffsetClass,
          compactInline
            ? "flex shrink items-center gap-1.5"
            : isZhilvinasSalonRow
              ? "flex flex-1 flex-row items-center gap-2"
              : cx("flex flex-1 flex-col justify-center", showEyebrow ? "gap-1.5" : "gap-0")
        )}
      >
        {showEyebrow ? (
          <div className={cx(homeEyebrow11, "text-white/90 [text-shadow:none] shadow-none")}>Салон рядом</div>
        ) : null}
        {compactInline ? (
          <div className={cx(zhilvinasSalonRowTextClass, "flex items-center gap-1.5")}>
            <span className="w-fit shrink-0">Ближайший салон:</span>
            <span className="max-w-[5.25rem] truncate">г. Москва, Тверская, 12</span>
            <ChevronDown className="shrink-0 text-white opacity-95" size={16} strokeWidth={2} aria-hidden />
          </div>
        ) : isZhilvinasSalonRow ? (
          <div className={cx(zhilvinasSalonRowTextClass, "flex min-w-0 flex-1 items-center gap-1")}>
            <span className="w-fit shrink-0">Ближайший салон:</span>
            <span className="min-w-0 flex-1 truncate">г. Москва, Тверская, 12</span>
            <ChevronDown
              className="shrink-0 text-white opacity-95 [text-shadow:none] drop-shadow-none"
              size={18}
              strokeWidth={2}
              aria-hidden
            />
          </div>
        ) : (
          <div className="flex min-w-0 w-full items-center justify-start gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-0.5">
              <span className="min-w-0 truncate text-[15px] font-semibold leading-snug tracking-tight text-white [text-shadow:none] shadow-none">
                г. Москва, Тверская, 12
              </span>
              <ChevronRight
                className="shrink-0 -ml-px text-white opacity-95 [text-shadow:none] drop-shadow-none"
                size={20}
                strokeWidth={2}
                aria-hidden
              />
            </div>
          </div>
        )}
      </button>
      {!showEyebrow ? (
        <div
          className={cx(
            "flex shrink-0 items-center gap-1 rounded-xl bg-white px-2 py-1 text-sm font-semibold text-[#ff6e00]",
            isZhilvinasSalonRow && zhilvinasHeaderTrackingClass
          )}
          aria-label="Баллы: 1 240"
        >
          <span aria-hidden>1 240</span>
          <img src={pointsLogo} srcSet={`${pointsLogo} 1x, ${pointsLogo2x} 2x`} alt="" className="h-3 w-3" aria-hidden />
        </div>
      ) : null}
    </div>
  );
}
function HomeQuickTilesRow({ go, variant = "feed" }) {
  const isHeader = variant === "header";
  const isZhilvinasCatalog = variant === "zhilvinas";
  const tiles = isHeader
    ? zhilvinasHeaderQuickTiles
    : isZhilvinasCatalog
      ? zhilvinasCatalogQuickTiles
      : katyaHomeQuickTiles;

  return (
    <div
      className={cx(
        "-mx-4 px-4",
        isHeader
          ? "mt-3 grid grid-cols-5 gap-1"
          : isZhilvinasCatalog
            ? zhilvinasCatalogTilesRowClass
            : "flex snap-x snap-proximity gap-2.5 overflow-x-auto scroll-px-4 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      )}
    >
      {tiles.map((tile) => {
        const Icon = tile.icon;
        const tileImage = tile.image;
        const isBrandCta = isZhilvinasCatalog && tile.accent === "brand";

        return (
          <button
            type="button"
            key={tile.id}
            onClick={() => {
              if (tile.screen) {
                go(tile.screen);
                return;
              }
              go("catalog", { category: tile.category ?? "all" });
            }}
            className={cx(
              "flex flex-col items-center text-center active:scale-[0.98] transition-transform duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              isHeader
                ? "focus-visible:ring-white/70 " + katyaHeaderFocusRingOffsetClass
                : isBrandCta
                  ? "focus-visible:ring-[#009AA6]/45 focus-visible:ring-offset-[#f7f8fa]"
                  : isZhilvinasCatalog
                    ? "focus-visible:ring-[#009AA6]/30 focus-visible:ring-offset-[#f7f8fa]"
                    : "focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-white",
              isHeader
                ? "min-w-0 gap-1.5"
                : isZhilvinasCatalog
                  ? zhilvinasCatalogTileButtonClass
                  : "w-[76px] shrink-0 snap-start gap-2"
            )}
          >
            {isHeader ? (
              <span className="flex h-8 w-8 items-center justify-center text-white">
                <QuickTileFilledIcon tileId={tile.id} />
              </span>
            ) : (
              <span
                className={
                  isZhilvinasCatalog
                    ? isBrandCta && tileImage
                      ? zhilvinasCatalogCtaTileImageClass
                      : isBrandCta
                        ? zhilvinasCatalogCtaTileIconClass
                        : tileImage
                          ? zhilvinasCatalogTileImageClass
                          : zhilvinasCatalogDefaultTileIconClass
                    : "flex h-12 w-12 w-full shrink-0 items-center justify-center rounded-2xl border border-[#e7e9ee] bg-white p-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                }
              >
                {tileImage ? (
                  <img
                    src={tileImage}
                    alt=""
                    className="size-full object-cover object-center"
                    draggable={false}
                  />
                ) : (
                  <Icon
                    className={cx(
                      isBrandCta ? "h-5 w-5 text-white" : "text-[#ff6e00]",
                      !isBrandCta && (isZhilvinasCatalog ? "h-5 w-5" : "h-6 w-6")
                    )}
                    strokeWidth={isBrandCta ? 2.25 : 2}
                    aria-hidden
                  />
                )}
              </span>
            )}
            <span
              className={cx(
                isHeader
                  ? "w-full line-clamp-2 text-[11px] font-medium leading-[1.2] tracking-tight text-white"
                  : isBrandCta
                    ? zhilvinasCatalogCtaTileLabelClass
                    : isZhilvinasCatalog
                      ? zhilvinasCatalogTileLabelClass
                      : "w-full line-clamp-2 text-[13px] font-normal leading-4 text-[#1c1c1c]"
              )}
            >
              {tile.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function KatyaHomeSegmentTabs({
  value,
  onChange,
  layoutId = "katya-home-segment-pill",
  segments = katyaHomeSegments,
  className,
  tabTrackingClass = "tracking-tight",
}) {
  return (
    <motion.div
      role="tablist"
      aria-label="Разделы главной"
      className={cx(
        "mt-3 flex gap-0.5 rounded-2xl bg-[#b84700]/28 p-1 ring-1 ring-inset ring-white/30 backdrop-blur-[3px]",
        className
      )}
    >
      {segments.map((segment) => {
        const active = value === segment.id;

        return (
          <motion.button
            key={segment.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(segment.id)}
            className={cx(
              "relative z-0 flex min-h-9 min-w-0 flex-1 items-center justify-center rounded-[10px] px-2 py-2",
              "text-[11px] font-semibold leading-none transition-colors duration-200",
              tabTrackingClass,
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2",
              katyaHeaderFocusRingOffsetClass,
              active ? "text-[#1c1c1c]" : "text-white/90 hover:text-white"
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.14)]"
                transition={{ type: "spring", stiffness: 520, damping: 36 }}
              />
            )}
            <span className="relative z-10 truncate">{segment.label}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PhoneStatusCellularIcon({ className }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" className={className} aria-hidden>
      <rect x="0" y="7" width="3" height="5" rx="0.6" />
      <rect x="5" y="5" width="3" height="7" rx="0.6" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="0.6" />
      <rect x="15" y="0" width="3" height="12" rx="0.6" />
    </svg>
  );
}

function PhoneStatusBatteryIcon({ className }) {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" className={className} aria-hidden>
      <rect x="0.5" y="0.5" width="21" height="11" rx="2.8" stroke="currentColor" strokeOpacity="0.38" />
      <rect x="2" y="2" width="17" height="8" rx="1.6" fill="currentColor" />
      <path
        d="M22.5 4.2c.8 0 1.5.6 1.5 1.3v1c0 .7-.7 1.3-1.5 1.3h-.5V4.2h.5z"
        fill="currentColor"
        fillOpacity="0.38"
      />
    </svg>
  );
}

/** Статус-бар iOS внутри оранжевой шапки (прототип). */
function PhoneStatusBar({ className }) {
  return (
    <div
      className={cx(
        "flex h-11 items-end justify-between pb-1.5 pl-[18px] pr-[16px] pt-[max(2px,env(safe-area-inset-top,0px))] sm:pt-2",
        className
      )}
      aria-hidden
    >
      <time className={cx("text-[15px] font-semibold leading-none text-white tabular-nums", zhilvinasHeaderTrackingClass)}>
        9:41
      </time>
      <div className="flex items-center gap-[5px] text-white">
        <PhoneStatusCellularIcon />
        <Wifi size={15} strokeWidth={2.35} className="-mt-px shrink-0" aria-hidden />
        <PhoneStatusBatteryIcon />
      </div>
    </div>
  );
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
  const homeTabProfileSwitch = screen === "home";

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
          {homeProfileCustomers
            .filter((customer) => !customer.disabled)
            .map((customer) => (
            <button
              type="button"
              key={customer.name}
              role="menuitem"
              onClick={() => {
                setHomeProfileCustomer(customer.name);
                setHomeProfilePickerOpen(false);
              }}
              className={cx(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm",
                customer.name === homeProfileCustomer ? "bg-[#f4f5f7] font-semibold text-[#1c1c1c]" : "text-neutral-700"
              )}
            >
              <span>{customer.name}</span>
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

function SearchBar({ value, onChange, onFocus, smartRibbon, marqueePlaceholder, inputClassName }) {
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(media.matches);
    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);
    return () => media.removeEventListener("change", syncMotionPreference);
  }, []);

  const defaultPlaceholder = smartRibbon
    ? "Умный поиск — размер, подсказки и наличие рядом"
    : "Найти стельки, бандаж, ортез или обувь";
  const placeholderText = marqueePlaceholder ?? defaultPlaceholder;
  const showMarquee = Boolean(marqueePlaceholder) && !value && !isFocused && !prefersReducedMotion;

  return (
    <div className="relative">
      <Search
        className={cx("absolute left-4 top-1/2 -translate-y-1/2", smartRibbon ? "text-neutral-500" : "text-[#1c1c1c]")}
        size={22}
      />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => {
          setIsFocused(true);
          onFocus?.();
        }}
        onBlur={() => setIsFocused(false)}
        placeholder={showMarquee ? "" : placeholderText}
        title={placeholderText}
        className={cx(
          "orteka-search-input min-w-0 w-full h-11 overflow-hidden text-ellipsis whitespace-nowrap rounded-xl border border-[#e0e2e7] bg-white pl-12 text-base text-[#1c1c1c] outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-[#ff6e00]/30",
          smartRibbon ? "pr-[4.75rem]" : "pr-12",
          inputClassName
        )}
        aria-label={smartRibbon || marqueePlaceholder ? placeholderText : undefined}
      />
      {showMarquee ? (
        <div
          className="pointer-events-none absolute inset-y-0 left-12 right-12 flex items-center overflow-hidden"
          aria-hidden
        >
          <div className="orteka-search-marquee-track flex w-max items-center">
            <span className="orteka-search-marquee-copy whitespace-nowrap pr-10 text-base text-neutral-500">
              {marqueePlaceholder}
            </span>
            <span className="orteka-search-marquee-copy whitespace-nowrap pr-10 text-base text-neutral-500" aria-hidden>
              {marqueePlaceholder}
            </span>
          </div>
        </div>
      ) : null}
      {smartRibbon && (
        <button
          type="button"
          aria-label="Умные подсказки ИИ"
          className="absolute right-11 top-1/2 -translate-y-1/2 text-[#ff6e00]/85 transition-colors hover:text-[#ff6e00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6e00]/35 focus-visible:ring-offset-2 rounded-md"
        >
          <Sparkles size={18} strokeWidth={2} aria-hidden />
        </button>
      )}
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

function ProductVisual({ label, image, large = false }) {
  if (image) {
    return (
      <div
        className={cx(
          "rounded-2xl bg-[#f7f8fa] overflow-hidden shrink-0 flex items-center justify-center",
          large ? "h-64 w-full" : "w-24 h-24"
        )}
      >
        <img
          src={image}
          alt=""
          className={cx("h-full w-full object-contain", large ? "p-4" : "p-2")}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

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
        <ProductVisual label={product.imageLabel} image={product.image} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-1 rounded-lg bg-[#fff3e9] text-[#ff6e00] font-medium">{product.badge}</span>
            <span className="text-[12px] text-neutral-600 flex items-center gap-1">
              <Star size={12} fill="currentColor" />
              {product.rating}
            </span>
          </div>
          <div className="font-normal text-[14px] leading-tight line-clamp-2">{product.title}</div>
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
  const [katyaLoyaltyTierOpen, setKatyaLoyaltyTierOpen] = useState(false);
  const [katyaHomeSegment, setKatyaHomeSegment] = useState("home");
  const [katyaStickyPinned, setKatyaStickyPinned] = useState(false);
  const katyaStickySearchRef = useRef(null);
  const sectionTitleClass = "text-[15px] font-semibold text-[#1c1c1c]";
  /** Единый ритм для строк 11px на главной (без leading-tight — он визуально «сжимает» межстрочный блок). */
  const homeText11 = "text-[11px] leading-[1.45]";
  const homeEyebrow11 = `${homeText11} font-semibold uppercase tracking-[0.08em]`;
  const katyaSalonNavTextClass = "text-[15px] font-normal leading-snug tracking-tight text-white";
  const promoSliderRef = useRef(null);
  const prioritizedOrderItems = [...homeOrderItems].sort(
    (a, b) => (homeOrderTonePriority[a.tone] ?? 9) - (homeOrderTonePriority[b.tone] ?? 9)
  );

  const isKatyaHome = isKatyaStyleHomeProfile(homeProfileCustomer);
  const isLeshaProfile = isLeshaStyleHomeProfile(homeProfileCustomer);
  const isZhilvinasProfile = isZhilvinasStyleHomeProfile(homeProfileCustomer);
  const isLeshaLayoutBody = isLeshaLayoutBodyProfile(homeProfileCustomer);
  const isKatyaFlatHeader = isKatyaHome || isZhilvinasProfile;
  const isKatyaProfile = homeProfileCustomer === "Катя";
  const usesHomeSegments = isKatyaProfile || isZhilvinasProfile;
  const isKatyaHomeSegment = !usesHomeSegments || katyaHomeSegment === "home";

  useEffect(() => {
    if (!usesHomeSegments && katyaHomeSegment !== "home") {
      setKatyaHomeSegment("home");
    }
  }, [usesHomeSegments, katyaHomeSegment]);

  useEffect(() => {
    if (!usesHomeSegments) {
      setKatyaStickyPinned(false);
      return undefined;
    }

    const node = katyaStickySearchRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setKatyaStickyPinned(entry.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [usesHomeSegments]);

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
          isKatyaFlatHeader ? "pt-0" : "pt-4"
        )}
      >
        {isLeshaProfile && (
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
                  {homeProfileCustomers
                    .filter((customer) => !customer.disabled)
                    .map((customer) => (
                    <button
                      type="button"
                      key={customer.name}
                      role="menuitem"
                      onClick={() => {
                        setHomeProfileCustomer(customer.name);
                        setCustomerMenuOpen(false);
                      }}
                      className={cx(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm",
                        customer.name === homeProfileCustomer ? "bg-[#f4f5f7] font-semibold text-[#1c1c1c]" : "text-neutral-700"
                      )}
                    >
                      <span>{customer.name}</span>
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

        <div
          className={cx(
            isZhilvinasProfile && usesHomeSegments && zhilvinasUnifiedHeaderShellClass,
            !(isZhilvinasProfile && usesHomeSegments) && "contents"
          )}
        >
        {isKatyaFlatHeader && isZhilvinasProfile && usesHomeSegments ? <PhoneStatusBar /> : null}
        <section
          className={cx(
            isKatyaProfile
              ? cx(
                  "-mx-4 border-0 px-4 pb-0 pt-1 text-white",
                  katyaHeaderGradientClass
                )
              : isZhilvinasProfile && usesHomeSegments
                ? "border-0 bg-transparent px-4 pb-1 pt-0 text-white"
                : cx(
                    "-mx-4 border-x-0 border-b px-4 text-white",
                    katyaHeaderGradientClass,
                    katyaHeaderShellEdgeClass,
                    isKatyaFlatHeader
                      ? cx(
                          "border-t-0 pt-1 sm:pt-2",
                          isZhilvinasProfile ? "pb-4" : "pb-0"
                        )
                      : cx("rounded-3xl border-t pt-4 pb-4", katyaHeaderShellShadowClass)
                  )
          )}
        >
          {isKatyaFlatHeader && !(isZhilvinasProfile && usesHomeSegments) ? (
            <PhoneStatusBar className="-mx-4 mb-0.5 px-4 sm:mx-0" />
          ) : null}
          {isKatyaHome ? (
            isKatyaProfile ? (
              <div className="flex min-h-6 items-center justify-between gap-3 font-sans">
                <button
                  type="button"
                  onClick={() => go("salons")}
                  aria-label="Найти салон"
                  className={cx(
                    katyaSalonNavTextClass,
                    "flex shrink-0 items-center gap-0.5 rounded-lg border-0 bg-transparent p-0 font-inherit text-left transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2",
                    katyaHeaderFocusRingOffsetClass
                  )}
                >
                  <span className="font-inherit">Найти салон</span>
                  <ChevronRight className="shrink-0 text-white opacity-95" size={17} strokeWidth={2} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go("salons")}
                  aria-label="Город: Москва. Подробнее в списке салонов"
                  className={cx(
                    katyaSalonNavTextClass,
                    "flex min-w-0 items-center gap-0.5 rounded-lg border-0 bg-transparent p-0 font-inherit text-left transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2",
                    katyaHeaderFocusRingOffsetClass
                  )}
                >
                  <span className="truncate font-inherit">г. Москва</span>
                  <ChevronRight className="shrink-0 text-white opacity-95" size={17} strokeWidth={2} aria-hidden />
                </button>
              </div>
            ) : (
              <HomeSalonNearbyButton go={go} homeEyebrow11={homeEyebrow11} />
            )
          ) : isZhilvinasProfile && usesHomeSegments ? (
            <KatyaHomeSegmentTabs
              value={katyaHomeSegment}
              onChange={setKatyaHomeSegment}
              segments={zhilvinasHomeSegments}
              layoutId="zhilvinas-home-segment-pill"
              className="mt-0"
              tabTrackingClass={zhilvinasHeaderTrackingClass}
            />
          ) : isZhilvinasProfile ? (
            <HomeSalonNearbyButton
              go={go}
              homeEyebrow11={homeEyebrow11}
              showEyebrow={false}
              salonRowStyle="zhilvinas"
            />
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

          {isKatyaHome && !isKatyaProfile && (
            <div className="mt-3">
              <SearchBar
                value=""
                onChange={(value) => {
                  setSearchValue(value);
                  go("catalog", { category: "all" });
                }}
                onFocus={() => go("catalog", { category: "all" })}
                smartRibbon
              />
            </div>
          )}

          {isKatyaHome && (
              <div className={cx("mt-3 space-y-1.5", !isKatyaProfile && "pb-4")}>
                <div className="flex flex-col gap-1.5 overflow-hidden rounded-xl border border-[#ffd3b0] bg-white px-1.5 py-2 shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
                  <div className="flex min-h-[50px] items-stretch">
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
                          srcSet={`${pointsLogo} 1x, ${pointsLogo2x} 2x`}
                          alt=""
                          className="h-[0.69em] w-[0.69em] shrink-0 object-contain -translate-y-[0.05em]"
                          width={15}
                          height={15}
                          decoding="async"
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
                      aria-label={
                        katyaLoyaltyTierOpen
                          ? "Скрыть подробности о сгорании баллов"
                          : "Подробнее о сгорании баллов"
                      }
                      onClick={() => setKatyaLoyaltyTierOpen((open) => !open)}
                    >
                      <div className={cx(homeEyebrow11, "whitespace-nowrap text-[#ff6e00]")}>К сгоранию</div>
                      <p className="mt-0.5 whitespace-nowrap text-xs text-neutral-700 leading-snug">
                        <span className="font-semibold text-[#1c1c1c]">240</span> баллов до 30 июня
                      </p>
                      <span
                        className={cx(
                          homeText11,
                          "mt-0.5 font-medium text-[#009aa6]"
                        )}
                      >
                        {katyaLoyaltyTierOpen ? "Свернуть" : "Подробнее"}
                      </span>
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
                  ) : null}
                </div>
              </div>
          )}


          {isLeshaProfile && (
            <>
              <div className="mt-3">
                <SearchBar
                  value=""
                  onChange={(value) => {
                    setSearchValue(value);
                    go("catalog", { category: "all" });
                  }}
                  onFocus={() => go("catalog", { category: "all" })}
                />
              </div>
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
            </>
          )}

        </section>

        {usesHomeSegments && (
          <motion.div
            ref={katyaStickySearchRef}
            className={cx(
              isZhilvinasProfile
                ? cx(
                    "sticky top-0 z-40 px-4 pb-4 pt-3",
                    katyaStickyPinned
                      ? cx(
                          katyaHeaderStickySurfaceClass,
                          "border-b rounded-b-3xl",
                          katyaHeaderShellEdgeClass,
                          katyaHeaderShellShadowClass
                        )
                      : "bg-transparent"
                  )
                : cx(
                    katyaHeaderGradientClass,
                    "sticky top-0 z-40 -mx-4 -mt-4 px-4 pb-4",
                    katyaStickyPinned
                      ? "pt-[max(1rem,calc(env(safe-area-inset-top,0px)+0.75rem))] sm:pt-16"
                      : "pt-4",
                    cx("border-b rounded-b-3xl", katyaHeaderShellEdgeClass, katyaHeaderShellShadowClass)
                  )
            )}
          >
            {isZhilvinasProfile ? (
              <div className="flex min-w-0 flex-col gap-3">
                <HomeSalonNearbyButton
                  go={go}
                  homeEyebrow11={homeEyebrow11}
                  showEyebrow={false}
                  salonRowStyle="zhilvinas"
                />
                <SearchBar
                  value=""
                  onChange={(value) => {
                    setSearchValue(value);
                    go("catalog", { category: "all" });
                  }}
                  onFocus={() => go("catalog", { category: "all" })}
                  marqueePlaceholder={zhilvinasSearchMarqueePlaceholder}
                  inputClassName={zhilvinasHeaderTrackingClass}
                />
              </div>
            ) : (
              <>
                <SearchBar
                  value=""
                  onChange={(value) => {
                    setSearchValue(value);
                    go("catalog", { category: "all" });
                  }}
                  onFocus={() => go("catalog", { category: "all" })}
                  smartRibbon={isKatyaProfile}
                />
                <div className="mt-3">
                  <KatyaHomeSegmentTabs
                    value={katyaHomeSegment}
                    onChange={setKatyaHomeSegment}
                    segments={katyaHomeSegments}
                    layoutId="katya-home-segment-pill"
                  />
                </div>
              </>
            )}
          </motion.div>
        )}
        </div>

        {usesHomeSegments && katyaHomeSegment === "med-center" && (
          <section className="min-w-0 space-y-3">
            <p className={cx(homeText11, "px-0.5 text-neutral-600")}>
              Запись, консультации и диагностика в медицинском центре Ортека.
            </p>
            <div className="-mx-4">
              <div className="flex snap-x snap-proximity gap-3 overflow-x-auto px-4 pb-1 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
              </div>
            </div>
            <button
              type="button"
              onClick={() => go("services")}
              className="flex h-12 w-full items-center justify-center rounded-2xl border border-[#e7e9ee] bg-white text-sm font-semibold text-[#1c1c1c] shadow-[0_4px_14px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform duration-150"
            >
              Все услуги
            </button>
          </section>
        )}

        {usesHomeSegments && katyaHomeSegment === "orteka-health" && (
          <section className="min-w-0 rounded-2xl border border-[#e7e9ee] bg-white p-6 text-center shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
            <p className="text-[15px] font-semibold text-[#1c1c1c]">Ортека.Здоровье</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Статьи, рекомендации и программы заботы о здоровье — раздел в разработке.
            </p>
          </section>
        )}

        {isKatyaHomeSegment && (
        <>
        {!isZhilvinasProfile && (
        <div className="-mx-4">
          <div className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [-ms-overflow-style:none]">
          {prioritizedOrderItems.map((item) => {
            const statusMeta = getHomeOrderStatusMeta(item.tone);
            const isReady = item.tone === "ready";

            return (
            <motion.div
              key={item.id}
              role="button"
              tabIndex={0}
              whileTap={{ scale: 0.98 }}
              onClick={() => go("order")}
              className="box-border flex w-full min-w-full shrink-0 snap-start snap-always cursor-pointer items-stretch pl-4 pr-4"
              aria-label={`${statusMeta.label}. ${item.title}. ${item.address}. ${item.timing}`}
            >
              <div
                className={cx(
                  "-ml-4 flex w-[64px] shrink-0 items-center justify-center rounded-r-2xl rounded-l-none py-3 pl-2.5 pr-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
                  statusMeta.qrPanelClass,
                  isReady && "ring-1 ring-inset ring-[#bbf7d0]"
                )}
              >
                <img
                  src={homeQrImage}
                  alt=""
                  className="size-11 shrink-0 aspect-square rounded-lg object-contain"
                  width={44}
                  height={44}
                />
              </div>
              <div className="ml-2 flex min-w-0 flex-1 gap-2.5 rounded-2xl bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="flex h-full w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="max-h-full max-w-full object-contain object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <ShoppingBag size={20} className="text-neutral-300" aria-hidden />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex flex-1 flex-col justify-center gap-1 py-0.5">
                  <HomeOrderStatusPill tone={item.tone} label={item.statusLabel} />
                  <p className="flex min-w-0 items-center gap-1.5 text-[15px] font-semibold tracking-tight text-[#1c1c1c]">
                    {item.kind ? (
                      <span className="flex h-[1.25em] shrink-0 items-center">
                        <HomeOrderDeliveryKindIcon
                          kind={item.kind}
                          className="block h-[1em] w-[1em] text-[#1c1c1c]"
                        />
                      </span>
                    ) : null}
                    <span className="min-w-0 truncate leading-[1.25]">{item.title}</span>
                  </p>
                  <p className="min-w-0 truncate text-xs leading-4 text-neutral-500">{item.address}</p>
                  <p className={cx("text-sm leading-5", statusMeta.timingClass)}>{item.timing}</p>
                </div>
              </div>
            </motion.div>
            );
          })}
          </div>
        </div>
        )}

        <section className={cx("min-w-0", usesHomeSegments ? "pb-0 -mx-4" : "pb-1.5")}>
          <motion.div
            ref={promoSliderRef}
            className={cx(
              "flex min-w-0 snap-x snap-proximity overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
              usesHomeSegments ? "gap-2 px-[17px]" : "gap-3"
            )}
          >
            {promoCards.map((promo) => (
              <button
                type="button"
                key={promo.id}
                onClick={() => go("catalog", { category: "all" })}
                className="relative isolate block h-[130px] min-h-0 min-w-0 shrink-0 grow-0 basis-full snap-center overflow-hidden rounded-2xl bg-[#dfe3e8] cursor-pointer"
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
          </motion.div>
        </section>

        {isZhilvinasProfile && (
          <section className="min-w-0">
            <HomeQuickTilesRow go={go} variant="zhilvinas" />
          </section>
        )}

        {isKatyaHome && (
          <section className={cx("min-w-0", isKatyaProfile && "-mt-1")}>
            <HomeQuickTilesRow go={go} variant="feed" />
          </section>
        )}

        {isLeshaLayoutBody && (
          <>
        {!isZhilvinasProfile && (
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
        )}

        {!isZhilvinasProfile && (
        <section>
          <div className="mb-2 flex items-center justify-between px-0.5">
            <h2 className={sectionTitleClass}>Услуги</h2>
          </div>
          <div className="-mx-4">
            <div className="flex snap-x snap-proximity gap-3 overflow-x-auto px-4 scroll-px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => go("salons")}
              className="w-[232px] shrink-0 snap-start rounded-2xl border border-[#d9ecee] bg-white p-4 text-left shadow-[0_3px_10px_rgba(0,154,166,0.06)] active:scale-[0.98] transition-transform duration-150 flex flex-col"
            >
              <div className={cx(homeEyebrow11, "text-[#009AA6]")}>Консультация</div>
              <div
                className={cx(
                  "text-sm font-semibold text-[#1c1c1c]",
                  "mt-1.5 leading-5"
                )}
              >
                Прием ортопеда
              </div>
              <div
                className={cx(
                  "text-xs text-neutral-500",
                  "mt-1 leading-[1.4]"
                )}
              >
                Осмотр и рекомендации по лечению
              </div>
            </button>
            <button
              type="button"
              onClick={() => go("catalog", { category: "insoles" })}
              className="w-[232px] shrink-0 snap-start rounded-2xl border border-[#d9ecee] bg-white p-4 text-left shadow-[0_3px_10px_rgba(0,154,166,0.06)] active:scale-[0.98] transition-transform duration-150 flex flex-col"
            >
              <div className={cx(homeEyebrow11, "text-[#009AA6]")}>Диагностика стоп</div>
              <div
                className={cx(
                  "text-sm font-semibold text-[#1c1c1c]",
                  "mt-1.5 leading-5"
                )}
              >
                Индивидуальные стельки
              </div>
              <div
                className={cx(
                  "text-xs text-neutral-500",
                  "mt-1 leading-[1.4]"
                )}
              >
                Подбор под ваши параметры и нагрузку
              </div>
            </button>
            <button
              type="button"
              onClick={() => go("catalog", { category: "compression" })}
              className="w-[232px] shrink-0 snap-start rounded-2xl border border-[#d9ecee] bg-white p-4 text-left shadow-[0_3px_10px_rgba(0,154,166,0.06)] active:scale-[0.98] transition-transform duration-150 flex flex-col"
            >
              <div className={cx(homeEyebrow11, "text-[#009AA6]")}>Точный подбор</div>
              <div
                className={cx(
                  "text-sm font-semibold text-[#1c1c1c]",
                  "mt-1.5 leading-5"
                )}
              >
                Компрессия по меркам
              </div>
              <div
                className={cx(
                  "text-xs text-neutral-500",
                  "mt-1 leading-[1.4]"
                )}
              >
                Заказ изделий по индивидуальным меркам
              </div>
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
        )}
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
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-white flex items-center justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <Footprints size={28} className="text-[#ff6e00]" />
                    )}
                  </div>
                  <div className="mt-2.5 text-[13px] font-normal leading-[1.3] text-[#1c1c1c] line-clamp-2">{product.title}</div>
                  <div className="mt-1.5 text-base font-semibold text-[#1c1c1c]">{product.price}</div>
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
          {isLeshaProfile && (
            <div className="-mx-4 mt-3">
              <div className="flex snap-x snap-proximity gap-3 overflow-x-auto px-4 pb-1 scroll-px-4 [scrollbar-width:none] [-ms-overflow-style:none]">
                {homeCategories.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() => go("catalog", { category: category.category })}
                    className="w-[148px] shrink-0 snap-start rounded-2xl border border-[#e7e9ee] bg-white p-3 text-left shadow-[0_4px_12px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform duration-150"
                  >
                    <div className="text-[13px] font-normal leading-4 text-[#1c1c1c]">{category.title}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
        </>
        )}

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
          <ProductVisual label={product.imageLabel} image={product.image} large />
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

  useEffect(() => {
    const currentProfile = homeProfileCustomers.find((customer) => customer.name === homeProfileCustomer);
    if (currentProfile?.disabled) {
      setHomeProfileCustomer("Катя");
    }
  }, [homeProfileCustomer]);

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
  const isKatyaHomeScreen = screen === "home" && (isKatyaStyleHomeProfile(homeProfileCustomer) || isZhilvinasStyleHomeProfile(homeProfileCustomer));

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
