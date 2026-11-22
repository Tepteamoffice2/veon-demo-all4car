// Content for the All4Car homepage. Every value comes from veon/client.json (ids in comments).
// Nothing here is invented: no reviews, no ratings, no "years on the market".

export const NOTE_FUTURE = "Розділ у розробці";
export const NOTE_SEARCH = "Пошук запрацює у повній версії сайту";

// company.contacts.phones, company.contacts.emails, company.contacts.messengers
export const contacts = {
  phoneMain: { href: "tel:+380673115518", label: "+38 (067) 311-55-18", short: "067 311-55-18" },
  phoneCorp: { href: "tel:+380673115519", label: "+38 (067) 311-55-19", short: "067 311-55-19" },
  email: { href: "mailto:sales@all4car.com.ua", label: "sales@all4car.com.ua" },
  viber: { href: "viber://chat?number=%2B380673115519", label: "Viber" },
  telegram: { href: "https://t.me/+380673115519", label: "Telegram" },
} as const;

// company.contacts.addresses, B-F001, C-013
export const address = {
  city: "Харків",
  street: "вул. Гольдбергівська, 9",
  full: "Харків, вул. Гольдбергівська, 9",
};

export const schedule = [
  { days: "Пн–Пт", hours: "9:00–17:00" },
  { days: "Сб", hours: "10:00–14:00" },
  { days: "Нд", hours: "вихідний" },
];

// navigation: anchors of this page (ux/demo-home.md §6)
export const nav = [
  { href: "#pidbir", label: "Підбір" },
  { href: "#katalogy", label: "Каталоги" },
  { href: "#umovy", label: "Доставка й оплата" },
  { href: "#b2b", label: "Для СТО" },
  { href: "#kontakty", label: "Контакти" },
];

// company.products_services[0], B-F002: 24 brands, in the order of the client's catalogue
export const brands = [
  "Audi", "BMW", "Chrysler", "Citroen", "Ford", "Honda", "Hyundai", "Isuzu",
  "Kia", "Mazda", "Mercedes", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Renault",
  "Seat", "Skoda", "SsangYong", "Subaru", "Suzuki", "Toyota", "Volvo", "VW",
];

// company.business_lines, B-F002
export const catalogGroups = [
  { title: "Оригінал за маркою", text: "Оригінальні електронні каталоги запчастин для 24 марок авто." },
  { title: "Аналоги", text: "Неоригінальні запчастини: загальні каталоги та CatCar Aftermarket." },
  { title: "Мотозапчастини", text: "Каталоги мотозапчастин і мотокаталоги." },
  { title: "Авто зі США", text: "Розділи «Оригінал США» та «Неоригінал США»." },
];

// company.products_services[3]: showcase of the client's homepage, prices as of 22.11.2026.
// Full names and photos are the client's own product cards.
export const products = [
  { code: "48069‑33070", name: "Важіль передньої підвіски нижній лівий (оригінал)", brand: "Toyota / Lexus", price: "7 058", img: "48069-33070" },
  { code: "48068‑33070", name: "Важіль передньої підвіски нижній правий (оригінал)", brand: "Toyota / Lexus", price: "7 344", img: "48068-33070" },
  { code: "08880‑80845", name: "Моторна олива Toyota 5W30, 5 л; API CF/SL; ACEA A5/B5", brand: "Toyota", price: "2 652", img: "08880-80845" },
  { code: "KE900-90042", name: "Моторна олива Nissan 5W-40, 5 л; SN/CF; A3/B4", brand: "Nissan", price: "1 981", img: "KE900-90042" },
];
export const pricesDate = "22.11.2026";
