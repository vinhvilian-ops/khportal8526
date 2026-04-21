import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Building2, Users, Award, History, Map } from "lucide-react";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — Cổng TTĐT Tỉnh Khánh Hòa" },
      { name: "description", content: "Giới thiệu tổng quan về tỉnh Khánh Hòa: lịch sử, địa lý, kinh tế, văn hóa và con người." },
      { property: "og:title", content: "Giới thiệu Tỉnh Khánh Hòa" },
    ],
  }),
  component: GioiThieuPage,
});

const SECTIONS = [
  { icon: History, title: "Lịch sử hình thành", desc: "Tỉnh Khánh Hòa có bề dày lịch sử hơn 360 năm, gắn liền với công cuộc mở mang bờ cõi của dân tộc Việt Nam." },
  { icon: Map, title: "Vị trí địa lý", desc: "Nằm ở Nam Trung Bộ, Khánh Hòa có bờ biển dài 385km, vịnh Nha Trang nổi tiếng thế giới." },
  { icon: Users, title: "Dân số & Hành chính", desc: "Hơn 1,3 triệu dân, 65 đơn vị hành chính cấp xã, phường, đặc khu sau sáp nhập." },
  { icon: Building2, title: "Cơ cấu tổ chức", desc: "HĐND, UBND tỉnh và các Sở, ban, ngành chuyên môn phục vụ nhân dân và doanh nghiệp." },
  { icon: Award, title: "Thành tựu nổi bật", desc: "Trung tâm du lịch biển hàng đầu Việt Nam, kinh tế tăng trưởng cao, GRDP đứng top khu vực." },
];

function GioiThieuPage() {
  return (
    <SiteLayout>
      <PageHero level="GIỚI THIỆU" topic="TỔNG QUAN" title="Giới thiệu " highlight="Tỉnh Khánh Hòa" />
      <div className="container mx-auto px-4 pb-12">
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gov-cyan to-gov-blue-dark text-white p-8 mb-8">
          <h2 className="text-2xl font-bold mb-3">Khánh Hòa — Vùng đất biển xanh, nắng vàng</h2>
          <p className="text-white/90 max-w-3xl leading-relaxed">
            Khánh Hòa là tỉnh ven biển Nam Trung Bộ Việt Nam, sở hữu bờ biển dài, nhiều vịnh đẹp như Nha Trang, Vân Phong, Cam Ranh.
            Đây là trung tâm du lịch, kinh tế biển và quốc phòng quan trọng của cả nước.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map((s, i) => (
            <article key={i} className="rounded-xl bg-card p-5 shadow-sm hover:shadow-md transition border-t-4 border-gov-red">
              <s.icon className="h-8 w-8 text-gov-red mb-3" />
              <h3 className="font-bold text-gov-blue-dark mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
