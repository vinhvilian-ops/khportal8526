import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { FileText, HelpCircle, Heart, GraduationCap, Hospital, Home } from "lucide-react";

export const Route = createFileRoute("/cong-dan")({
  head: () => ({
    meta: [
      { title: "Công dân — Cổng TTĐT Tỉnh Khánh Hòa" },
      { name: "description", content: "Dịch vụ công, thủ tục hành chính, hỗ trợ cho công dân tỉnh Khánh Hòa." },
      { property: "og:title", content: "Dịch vụ công dân — Khánh Hòa" },
    ],
  }),
  component: CongDanPage,
});

const SERVICES = [
  { icon: FileText, title: "Thủ tục hành chính", desc: "Tra cứu, nộp hồ sơ trực tuyến", color: "from-gov-blue to-gov-blue-dark" },
  { icon: HelpCircle, title: "Hỏi đáp công dân", desc: "Gửi câu hỏi đến cơ quan chức năng", color: "from-gov-red to-gov-red-dark" },
  { icon: Heart, title: "An sinh xã hội", desc: "Chính sách hỗ trợ, bảo trợ xã hội", color: "from-gov-orange to-gov-red" },
  { icon: GraduationCap, title: "Giáo dục", desc: "Tuyển sinh, học bổng, chương trình", color: "from-gov-green to-gov-cyan" },
  { icon: Hospital, title: "Y tế", desc: "BHYT, khám chữa bệnh, sức khỏe cộng đồng", color: "from-gov-cyan to-gov-blue" },
  { icon: Home, title: "Đất đai, Nhà ở", desc: "Cấp sổ đỏ, giấy phép xây dựng", color: "from-gov-yellow to-gov-orange" },
];

function CongDanPage() {
  return (
    <SiteLayout>
      <PageHero level="CÔNG DÂN" topic="DỊCH VỤ CÔNG" title="Dành cho " highlight="Công dân" />
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <a key={i} href="#" className={`rounded-xl bg-gradient-to-br ${s.color} text-white p-6 hover:scale-[1.02] transition shadow-md`}>
              <s.icon className="h-10 w-10 mb-3" />
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-white/85">{s.desc}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 rounded-xl bg-card p-6 shadow-sm">
          <h3 className="font-bold text-gov-blue-dark mb-3">Tin tức nổi bật cho công dân</h3>
          <ul className="space-y-3">
            {[
              "Hướng dẫn xác thực thông tin thuê bao điện thoại",
              "Phát triển đồng bộ thị trường lao động địa phương",
              "Quy định về độ tuổi mua thuốc lá và xử phạt vi phạm",
              "Lịch tiêm chủng mở rộng năm 2026",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 border-b pb-2 last:border-0">
                <span className="h-2 w-2 mt-2 rounded-full bg-gov-red shrink-0" />
                <a href="#" className="text-sm text-foreground hover:text-gov-red">{t}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SiteLayout>
  );
}
