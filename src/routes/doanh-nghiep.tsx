import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Briefcase, Scale, TrendingUp, Building, Handshake, FileSearch } from "lucide-react";

export const Route = createFileRoute("/doanh-nghiep")({
  head: () => ({
    meta: [
      { title: "Doanh nghiệp — Cổng TTĐT Tỉnh Khánh Hòa" },
      { name: "description", content: "Hỗ trợ doanh nghiệp đầu tư, kinh doanh, pháp lý tại tỉnh Khánh Hòa." },
      { property: "og:title", content: "Cổng Doanh nghiệp Khánh Hòa" },
    ],
  }),
  component: DoanhNghiepPage,
});

const SERVICES = [
  { icon: Briefcase, title: "Dự án kêu gọi đầu tư", desc: "Cơ hội hợp tác phát triển kinh tế Khánh Hòa", color: "from-gov-yellow to-gov-orange", text: "text-gov-blue-dark" },
  { icon: Scale, title: "Hỗ trợ pháp lý", desc: "Tư vấn pháp luật cho doanh nghiệp", color: "from-gov-blue-dark to-[oklch(0.18_0.1_265)]", text: "text-white" },
  { icon: Building, title: "Đăng ký kinh doanh", desc: "Thành lập, thay đổi đăng ký doanh nghiệp", color: "from-gov-blue to-gov-cyan", text: "text-white" },
  { icon: FileSearch, title: "Tra cứu thuế, hải quan", desc: "Thông tin nghĩa vụ thuế, xuất nhập khẩu", color: "from-gov-cyan to-gov-blue", text: "text-white" },
  { icon: Handshake, title: "Xúc tiến thương mại", desc: "Kết nối B2B, hội chợ, triển lãm", color: "from-gov-red to-gov-orange", text: "text-white" },
  { icon: TrendingUp, title: "Khu công nghiệp", desc: "Vân Phong, Suối Dầu, Ninh Thủy", color: "from-gov-green to-gov-cyan", text: "text-white" },
];

function DoanhNghiepPage() {
  return (
    <SiteLayout>
      <PageHero level="DOANH NGHIỆP" topic="HỖ TRỢ ĐẦU TƯ" title="Cổng " highlight="Doanh nghiệp" />
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <a key={i} href="#" className={`rounded-xl bg-gradient-to-br ${s.color} ${s.text} p-6 hover:scale-[1.02] transition shadow-md`}>
              <s.icon className="h-10 w-10 mb-3" />
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm opacity-85">{s.desc}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 rounded-xl bg-gradient-to-r from-gov-blue-dark to-gov-blue text-white p-8">
          <h3 className="text-2xl font-bold mb-2">Khánh Hòa — Điểm đến đầu tư hấp dẫn</h3>
          <p className="text-white/85 max-w-2xl">
            Vị trí chiến lược, hạ tầng đồng bộ, chính sách ưu đãi, nguồn nhân lực dồi dào.
            Tỉnh cam kết đồng hành cùng doanh nghiệp trong suốt quá trình đầu tư và kinh doanh.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
