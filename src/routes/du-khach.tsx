import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Waves, Mountain, Utensils, Camera, Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/du-khach")({
  head: () => ({
    meta: [
      { title: "Du khách — Cổng TTĐT Tỉnh Khánh Hòa" },
      { name: "description", content: "Khám phá du lịch Khánh Hòa: Nha Trang, Vân Phong, Cam Ranh — biển xanh, nắng vàng, văn hóa đặc sắc." },
      { property: "og:title", content: "Du lịch Khánh Hòa" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=630&fit=crop" },
    ],
  }),
  component: DuKhachPage,
});

const DESTINATIONS = [
  { icon: Waves, title: "Vịnh Nha Trang", desc: "Một trong những vịnh đẹp nhất thế giới", color: "from-gov-cyan to-gov-blue-dark" },
  { icon: Mountain, title: "Đảo Bình Ba, Bình Hưng", desc: "Thiên đường biển hoang sơ", color: "from-gov-blue to-gov-cyan" },
  { icon: Camera, title: "Tháp Bà Ponagar", desc: "Di tích lịch sử Chăm Pa cổ", color: "from-gov-orange to-gov-red" },
  { icon: Utensils, title: "Ẩm thực Khánh Hòa", desc: "Bún cá, nem nướng, hải sản tươi sống", color: "from-gov-yellow to-gov-orange" },
];

const EVENTS = [
  { date: "20/04/2026", title: "Lễ hội Am Chúa năm 2026" },
  { date: "01/05/2026", title: "Festival Biển Nha Trang 2026" },
  { date: "15/06/2026", title: "Mùa hè Vân Phong — Du thuyền quốc tế" },
];

function DuKhachPage() {
  return (
    <SiteLayout>
      <PageHero level="DU KHÁCH" topic="DU LỊCH KHÁNH HÒA" title="Khám phá " highlight="Khánh Hòa" />
      <div className="container mx-auto px-4 pb-12">
        <div className="rounded-xl overflow-hidden relative h-72 mb-8 bg-gradient-to-br from-gov-cyan via-gov-blue to-gov-blue-dark flex items-end p-8">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_30%,oklch(0.85_0.17_90),transparent_60%)]" />
          <div className="relative text-white">
            <span className="inline-block bg-gov-yellow text-gov-blue-dark text-xs font-bold px-3 py-1 rounded mb-3">LỄ HỘI</span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Khai mạc lễ hội Am Chúa năm 2026</h2>
            <p className="mt-2 text-white/90">Hành trình về với đất thiêng — Trải nghiệm văn hóa Chăm độc đáo</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {DESTINATIONS.map((d, i) => (
            <a key={i} href="#" className={`rounded-xl bg-gradient-to-br ${d.color} text-white p-5 aspect-square flex flex-col justify-between hover:scale-105 transition shadow-md`}>
              <d.icon className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg">{d.title}</h3>
                <p className="text-sm text-white/85 mt-1">{d.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="font-bold text-gov-blue-dark mb-4 flex items-center gap-2"><Calendar className="h-5 w-5 text-gov-red" /> Sự kiện sắp diễn ra</h3>
            <ul className="space-y-3">
              {EVENTS.map((e, i) => (
                <li key={i} className="flex gap-3 border-l-2 border-gov-yellow pl-3 py-1">
                  <div>
                    <p className="font-semibold text-foreground">{e.title}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Calendar className="h-3 w-3" /> {e.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-gov-yellow to-gov-orange text-gov-blue-dark p-6 shadow-sm">
            <MapPin className="h-10 w-10 mb-3" />
            <h3 className="font-bold text-xl mb-2">Bản đồ du lịch tương tác</h3>
            <p className="text-sm">Khám phá 65 điểm đến hấp dẫn khắp tỉnh Khánh Hòa qua bản đồ số.</p>
            <button className="mt-4 bg-gov-blue-dark text-white px-4 py-2 rounded text-sm font-semibold hover:bg-gov-red transition">Mở bản đồ →</button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
