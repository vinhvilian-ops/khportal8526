import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Calendar, MapPin, Camera, Waves, Mountain, Utensils, Music,
  Sparkles, Sun, Plane, Globe, ChevronRight, Play, Heart, Star,
  TrendingUp, Languages, Compass, Ship, Palmtree, Award, Image as ImageIcon,
  Megaphone, BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/du-khach")({
  head: () => ({
    meta: [
      { title: "Du khách — Khánh Hòa | Visit Khanh Hoa" },
      { name: "description", content: "Khám phá Khánh Hòa: biển xanh, di tích, lễ hội, ẩm thực — Visit Khanh Hoa: beaches, heritage, festivals, food." },
      { property: "og:title", content: "Visit Khanh Hoa — Du lịch Khánh Hòa" },
    ],
  }),
  component: DuKhachPage,
});

const INTRO_FEATURED = {
  tag: "FEATURED / NỔI BẬT",
  date: "01/05/2026",
  title: "Sẵn sàng đón khách trẩy hội Tháp Bà Pô Nagar",
  subtitle: "Ready to welcome pilgrims to Po Nagar Cham Towers Festival",
  image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=800&fit=crop",
};

const INTRO_NEWS = [
  { date: "01/05/2026", title: "Khánh Hòa rộn ràng đón khách dịp lễ", en: "Khanh Hoa welcomes a wave of holiday visitors", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=260&fit=crop" },
  { date: "30/04/2026", title: "Đặc sắc chương trình nghệ thuật kỷ niệm 51 năm Ngày giải phóng miền Nam", en: "Special art performances marking the 51st anniversary of Reunification Day", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=260&fit=crop" },
  { date: "28/04/2026", title: "Kế hoạch triển khai Chiến lược phát triển du lịch tỉnh giai đoạn 2026–2030", en: "Tourism development strategy 2026–2030 launched", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=260&fit=crop" },
];

const QUICK_TILES = [
  { icon: Calendar, label: "Lịch sự kiện", en: "Events", color: "from-gov-blue to-gov-cyan" },
  { icon: MapPin, label: "Bản đồ du lịch", en: "Travel map", color: "from-gov-cyan to-gov-blue-dark" },
  { icon: Plane, label: "Hướng dẫn đến KH", en: "Getting here", color: "from-gov-orange to-gov-red" },
  { icon: Languages, label: "Cẩm nang tiếng Việt", en: "Phrasebook", color: "from-gov-yellow to-gov-orange" },
  { icon: Compass, label: "Tour gợi ý", en: "Suggested tours", color: "from-gov-green to-gov-cyan" },
];

const DESTINATIONS = [
  { title: "Biển Dốc Lết", en: "Doc Let Beach", date: "30/04/2026", desc: "Biển Dốc Lết thu hút đông du khách dịp lễ 30-4 và 1-5", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=600&fit=crop", main: true },
  { title: "Tháp Pô Klong Garai", en: "Po Klong Garai Towers", date: "30/04/2026", desc: "Nhộn nhịp khách tham quan dịp lễ", image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=400&h=260&fit=crop" },
  { title: "Vĩnh Hy", en: "Vinh Hy Bay", date: "29/04/2026", desc: "Vào mùa cao điểm du lịch", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=260&fit=crop" },
  { title: "Hành trình Ninh Phước", en: "Ninh Phuoc trail", date: "30/04/2026", desc: "Làm mới kỳ nghỉ với hành trình Ninh Phước", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=260&fit=crop" },
];

const HERITAGE = [
  { title: "Lễ kỷ niệm 738 năm Ngày chiến thắng Bạch Đằng Giang", en: "738th anniversary of Bach Dang Giang victory", image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=900&h=600&fit=crop", main: true },
  { date: "03/04/2026", title: "Quan tâm bảo tồn di tích", en: "Heritage preservation focus", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop" },
  { date: "02/02/2026", title: "Tăng cường bảo vệ, phát huy giá trị di sản dịp Tết Bính Ngọ", en: "Strengthening heritage protection during Tet", image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=300&h=200&fit=crop" },
  { date: "21/01/2026", title: "39 cặp đôi tham gia trồng \"Cây hạnh phúc\" tại Tháp Bà Pô Nagar", en: "39 couples plant 'Happiness trees' at Po Nagar", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=200&fit=crop" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&sat=-30",
];

const SIDE_MAP_IMG = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=900&fit=crop";

const TABS = ["DI TÍCH LỊCH SỬ", "LỄ HỘI TRUYỀN THỐNG", "LÀNG QUÊ, LÀNG NGHỀ"];

const STATS = [
  { icon: Sun, value: "300+", label: "ngày nắng / sunny days" },
  { icon: Waves, value: "385km", label: "bờ biển / coastline" },
  { icon: Star, value: "65", label: "điểm đến / destinations" },
  { icon: Heart, value: "5.2M", label: "lượt khách / visitors" },
];

function SectionTitle({ vi, en, accent }: { vi: string; en?: string; accent?: boolean }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b mb-4 pb-2.5">
      <div className="flex items-center gap-2">
        <Megaphone className={`h-4 w-4 ${accent ? "text-gov-red" : "text-gov-blue"}`} />
        <div>
          <h2 className={`font-bold text-base md:text-lg tracking-wide ${accent ? "text-gov-red" : "text-gov-blue-dark"}`}>{vi}</h2>
          {en && <p className="text-[11px] text-muted-foreground italic">{en}</p>}
        </div>
      </div>
      <a href="#" className="group inline-flex items-center gap-1 text-sm font-semibold text-gov-red hover:underline pb-0.5 shrink-0">
        Xem tất cả <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

function DuKhachPage() {
  return (
    <SiteLayout>
      {/* HERO — Modern, vibrant for foreign tourists */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gov-cyan via-gov-blue to-gov-blue-dark" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&h=800&fit=crop)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 py-14 md:py-20 text-white">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gov-yellow font-semibold">
            <Sparkles className="h-4 w-4" /> Visit Khanh Hoa
          </div>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            Khám phá <span className="text-gov-yellow">Khánh Hòa</span>
          </h1>
          <p className="mt-2 text-lg md:text-2xl font-light text-white/90 italic">
            Where blue oceans meet timeless culture
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#destinations" className="bg-gov-yellow text-gov-blue-dark font-bold px-6 py-3 rounded-full hover:scale-105 transition shadow-lg flex items-center gap-2">
              <Compass className="h-4 w-4" /> Bắt đầu khám phá / Start exploring
            </a>
            <a href="#gallery" className="bg-white/10 backdrop-blur border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition flex items-center gap-2">
              <Play className="h-4 w-4" /> Xem video / Watch
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition">
                <s.icon className="h-6 w-6 text-gov-yellow mb-2" />
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-xs text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK TILES */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {QUICK_TILES.map((t, i) => (
            <a key={i} href="#" className={`group bg-gradient-to-br ${t.color} text-white rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition`}>
              <t.icon className="h-7 w-7 mb-2" />
              <div className="font-bold text-sm">{t.label}</div>
              <div className="text-[11px] text-white/80 italic">{t.en}</div>
            </a>
          ))}
        </div>
      </section>

      {/* PAGE TITLE */}
      <div className="container mx-auto px-4 pt-10 pb-6 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark">
            Khám phá <span className="text-gov-red">Khánh Hòa</span>
          </h2>
          <p className="text-sm text-muted-foreground italic mt-1">Discover Khanh Hoa — Tin tức, điểm đến, di sản & văn hoá</p>
          <div className="mt-3 h-1 w-20 rounded bg-gov-yellow" />
        </div>
        <a href="#" className="group inline-flex items-center gap-1 text-sm font-semibold text-gov-blue-dark hover:text-gov-blue transition">
          Xem tất cả bài viết <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* MAIN GRID — đồng bộ trang chủ: 3 cột nội dung + 1 cột sidebar */}
      <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-4 pb-10">
        {/* LEFT — main content stack */}
        <div className="lg:col-span-3 space-y-6">
          {/* GIỚI THIỆU */}
          <div className="rounded-xl bg-card p-5 shadow-sm">
            <SectionTitle vi="GIỚI THIỆU ĐẾN DU KHÁCH" en="Welcome to visitors" />
            <div className="grid md:grid-cols-2 gap-5 md:items-stretch">
              <a href="#" className="group flex flex-col">
                <div className="rounded-lg overflow-hidden relative aspect-[4/3]">
                  <img src={INTRO_FEATURED.image} alt={INTRO_FEATURED.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-3 left-3 bg-gov-red text-white text-[10px] font-bold px-2 py-1 rounded">{INTRO_FEATURED.tag}</div>
                </div>
                <p className="mt-3 text-lg font-bold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{INTRO_FEATURED.title}</p>
                <p className="text-[11px] italic text-muted-foreground mt-1">{INTRO_FEATURED.subtitle}</p>
                <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {INTRO_FEATURED.date}</p>
              </a>
              <div className="flex flex-col divide-y h-full">
                {INTRO_NEWS.map((n, i) => (
                  <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
                    <img src={n.image} alt={n.title} className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover" />
                    <div className="flex flex-col justify-center min-w-0">
                      <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{n.title}</p>
                      <p className="text-[11px] italic text-muted-foreground mt-0.5">{n.en}</p>
                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA banners */}
          <div className="grid gap-4 md:grid-cols-2">
            <a href="#" className="rounded-xl bg-gradient-to-r from-gov-red to-gov-orange text-white p-5 flex items-center gap-4 hover:shadow-lg transition shadow-md">
              <Globe className="h-12 w-12 shrink-0" />
              <div>
                <p className="font-bold text-sm uppercase">Hỏi đáp du lịch</p>
                <p className="font-extrabold">CÔNG DÂN, DU KHÁCH HỎI</p>
                <p className="text-xs text-white/85 italic">Q&A with local authorities</p>
              </div>
            </a>
            <a href="#" className="rounded-xl bg-gradient-to-r from-gov-blue to-gov-cyan text-white p-5 flex items-center gap-4 hover:shadow-lg transition shadow-md">
              <Compass className="h-12 w-12 shrink-0" />
              <div>
                <p className="font-bold text-sm uppercase">Cơ sở dữ liệu</p>
                <p className="font-extrabold">TRA CỨU CSDL DU LỊCH KHÁNH HÒA</p>
                <p className="text-xs text-white/85 italic">Provincial tourism database</p>
              </div>
            </a>
          </div>

          {/* ĐIỂM DU LỊCH */}
          <div id="destinations" className="rounded-xl bg-card p-5 shadow-sm">
            <SectionTitle vi="ĐIỂM DU LỊCH · DANH LAM THẮNG CẢNH" en="Top destinations & landscapes" accent />
            <div className="grid md:grid-cols-2 gap-5 md:items-stretch">
              <a href="#" className="group flex flex-col">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={DESTINATIONS[0].image} alt={DESTINATIONS[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-gov-yellow text-gov-blue-dark text-[10px] font-bold px-2 py-1 rounded">HOT</div>
                </div>
                <p className="mt-3 text-lg font-bold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{DESTINATIONS[0].desc}</p>
                <p className="text-[11px] italic text-muted-foreground mt-1">{DESTINATIONS[0].en}</p>
                <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {DESTINATIONS[0].date}</p>
              </a>
              <div className="flex flex-col divide-y h-full">
                {DESTINATIONS.slice(1).map((d, i) => (
                  <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
                    <img src={d.image} alt={d.title} className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover" />
                    <div className="flex flex-col justify-center min-w-0">
                      <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{d.desc}</p>
                      <p className="text-[11px] italic text-muted-foreground">{d.en}</p>
                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {d.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* HERITAGE — tabs giả lập */}
          <div className="rounded-xl bg-card p-5 shadow-sm">
            <div className="flex items-end justify-between gap-4 border-b mb-4 pb-2.5 flex-wrap">
              <div className="flex items-center gap-1 flex-wrap">
                {TABS.map((t, i) => (
                  <button key={t} className={`relative px-4 py-2 text-sm font-bold tracking-wide ${i === 0 ? "text-gov-blue-dark" : "text-muted-foreground hover:text-gov-blue-dark"}`}>
                    <span className="flex items-center gap-2">
                      <Megaphone className={`h-4 w-4 ${i === 0 ? "text-gov-red" : "text-muted-foreground"}`} />
                      {t}
                    </span>
                    {i === 0 && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gov-red" />}
                  </button>
                ))}
              </div>
              <a href="#" className="group inline-flex items-center gap-1 text-sm font-semibold text-gov-red hover:underline shrink-0">
                Xem tất cả <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:items-stretch">
              <a href="#" className="group flex flex-col">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={HERITAGE[0].image} alt={HERITAGE[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-3 text-lg font-bold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{HERITAGE[0].title}</p>
                <p className="text-[11px] italic text-muted-foreground mt-1">{HERITAGE[0].en}</p>
              </a>
              <div className="flex flex-col divide-y h-full">
                {HERITAGE.slice(1).map((h, i) => (
                  <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
                    <img src={h.image} alt={h.title} className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover" />
                    <div className="flex flex-col justify-center min-w-0">
                      <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{h.title}</p>
                      <p className="text-[11px] italic text-muted-foreground">{h.en}</p>
                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {h.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT — sidebar (đồng bộ trang chủ) */}
        <aside className="space-y-6">
          {/* Map */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-gov-red to-gov-red-dark text-white px-4 py-2 font-bold text-xs flex items-center gap-2">
              <MapPin className="h-4 w-4" /> BẢN ĐỒ DU LỊCH KHÁNH HÒA
            </div>
            <div className="relative">
              <img src={SIDE_MAP_IMG} alt="Map" className="w-full h-[220px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <button className="w-full bg-gov-yellow text-gov-blue-dark text-xs font-bold py-1.5 rounded hover:bg-white transition">Mở bản đồ tương tác →</button>
              </div>
            </div>
          </div>

          {/* Chỉ đạo TW — phong cách giống trang chủ */}
          <div className="rounded-xl bg-gov-blue-dark text-white p-5 shadow-sm">
            <h4 className="font-bold text-sm mb-3 border-b border-white/20 pb-2 flex items-center gap-2">
              <Megaphone className="h-4 w-4 text-gov-yellow" />
              CHỈ ĐẠO, ĐIỀU HÀNH CỦA CHÍNH PHỦ, THỦ TƯỚNG
            </h4>
            <div className="space-y-4">
              <div className="aspect-video rounded overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=360&fit=crop" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="h-10 w-10 text-gov-yellow" />
                </div>
              </div>
              <ul className="space-y-2 text-xs">
                {[
                  "Đề xuất sửa đổi Pháp lệnh Ưu đãi người có công với cách mạng",
                  "10 nhóm công nghệ chiến lược từ 1/7/2026",
                  "Kế hoạch triển khai thi hành Luật Thuế thu nhập cá nhân",
                  "Phó Thủ tướng Thường trực làm Tổ trưởng Tổ công tác thích ứng…",
                  "Tặng bằng khen của Thủ tướng Chính phủ cho HLV và 3 trợ lý",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><Star className="h-3 w-3 shrink-0 text-gov-yellow mt-0.5" /><span className="text-white/90">{t}</span></li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-[10px] italic text-white/60">Nguồn: Cổng Thông tin điện tử Chính phủ</p>
          </div>

          {/* Banners chuyên đề */}
          <div className="space-y-3">
            <a href="#" className="block rounded-xl overflow-hidden shadow-sm relative aspect-[16/6] bg-gradient-to-r from-gov-red to-gov-orange">
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <p className="text-white font-extrabold text-sm uppercase leading-tight drop-shadow">Học tập và làm theo<br/>tư tưởng, đạo đức, phong cách<br/><span className="text-gov-yellow text-base">Hồ Chí Minh</span></p>
              </div>
            </a>
            <a href="#" className="block rounded-xl overflow-hidden shadow-sm relative aspect-[16/6] bg-gradient-to-r from-gov-red-dark to-gov-red">
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <p className="text-white font-extrabold text-sm uppercase leading-tight drop-shadow">Đưa nghị quyết của Đảng<br/>vào cuộc sống</p>
              </div>
            </a>
            <a href="#" className="block rounded-xl overflow-hidden shadow-sm relative aspect-[16/6] bg-gradient-to-r from-gov-blue to-gov-cyan">
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <p className="text-white font-extrabold text-base uppercase tracking-wider drop-shadow">Trường Sa<br/><span className="text-gov-yellow">thân yêu</span></p>
              </div>
            </a>
          </div>

          {/* Khảo sát ý kiến */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-gov-blue to-gov-blue-dark text-white px-4 py-2 font-bold text-xs flex items-center gap-2">
              <Star className="h-4 w-4" /> KHẢO SÁT Ý KIẾN
            </div>
            <div className="p-4 space-y-3 text-sm">
              <p className="font-semibold text-foreground">Bạn có hài lòng về giao diện Cổng thông tin không?</p>
              <p className="text-[11px] text-muted-foreground">Đã có 7341 lượt biểu quyết</p>
              <div className="space-y-2">
                {["Hài lòng (Giao diện thân thiện, rõ ràng, dễ chịu, dễ đọc)", "Không hài lòng", "Cần cập nhật thêm"].map((opt, i) => (
                  <label key={i} className="flex items-start gap-2 cursor-pointer">
                    <input type="radio" name="poll" defaultChecked={i === 0} className="mt-1 accent-gov-blue" />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <button className="bg-gov-blue text-white text-xs font-bold px-4 py-1.5 rounded hover:bg-gov-blue-dark">Biểu quyết</button>
                <button className="bg-gov-red text-white text-xs font-bold px-4 py-1.5 rounded hover:bg-gov-red-dark">Xem kết quả</button>
              </div>
            </div>
          </div>
        </aside>

        {/* GALLERY — full width */}
        <div id="gallery" className="lg:col-span-4 rounded-xl bg-card p-5 shadow-sm">
          <SectionTitle vi="THƯ VIỆN ẢNH · ẢNH NGHỆ THUẬT" en="Photo gallery — Art shots of Khanh Hoa" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-fr">
            <a href="#" className="md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2 group relative rounded-lg overflow-hidden">
              <img src={GALLERY[0]} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div className="text-white">
                  <ImageIcon className="h-5 w-5 mb-1 text-gov-yellow" />
                  <p className="font-bold text-lg">Nha Trang về đêm</p>
                  <p className="text-xs italic text-gov-yellow">Nha Trang by night</p>
                </div>
              </div>
            </a>
            {GALLERY.slice(1).map((g, i) => (
              <a key={i} href="#" className="group relative rounded-lg overflow-hidden aspect-[4/3]">
                <img src={g} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-gov-blue-dark via-gov-blue to-gov-cyan text-white">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <Award className="h-8 w-8 text-gov-yellow mb-2" />
            <h3 className="font-bold text-lg">Travel essentials</h3>
            <p className="text-sm text-white/85 mt-1">Visa, currency (VND), SIM cards, taxi & ride-hailing — everything you need to land smoothly.</p>
          </div>
          <div>
            <Utensils className="h-8 w-8 text-gov-yellow mb-2" />
            <h3 className="font-bold text-lg">Eat like a local</h3>
            <p className="text-sm text-white/85 mt-1">Bún cá Nha Trang, nem nướng Ninh Hòa, hải sản tươi sống — must-try local flavors.</p>
          </div>
          <div>
            <Ship className="h-8 w-8 text-gov-yellow mb-2" />
            <h3 className="font-bold text-lg">Island hopping</h3>
            <p className="text-sm text-white/85 mt-1">Hon Mun, Hon Tam, Binh Ba, Binh Hung — turquoise waters and coral reefs await.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
