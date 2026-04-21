import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Building2, FileText, Users2, Gavel, Calendar } from "lucide-react";

export const Route = createFileRoute("/chinh-quyen")({
  head: () => ({
    meta: [
      { title: "Chính quyền — Cổng TTĐT Tỉnh Khánh Hòa" },
      { name: "description", content: "Cơ cấu tổ chức chính quyền tỉnh Khánh Hòa: HĐND, UBND, các sở ban ngành và lãnh đạo tỉnh." },
      { property: "og:title", content: "Chính quyền Tỉnh Khánh Hòa" },
    ],
  }),
  component: ChinhQuyenPage,
});

const ORGS = [
  { icon: Users2, title: "Hội đồng Nhân dân tỉnh", desc: "Cơ quan quyền lực Nhà nước ở địa phương, đại diện cho ý chí nguyện vọng của Nhân dân." },
  { icon: Building2, title: "Ủy ban Nhân dân tỉnh", desc: "Cơ quan chấp hành của HĐND, cơ quan hành chính Nhà nước cao nhất tại địa phương." },
  { icon: Gavel, title: "Các Sở, Ban, Ngành", desc: "Cơ quan chuyên môn tham mưu, giúp UBND tỉnh quản lý ngành, lĩnh vực." },
  { icon: FileText, title: "Văn bản chỉ đạo điều hành", desc: "Các văn bản quy phạm pháp luật, quyết định, công văn của lãnh đạo tỉnh." },
];

const NEWS = [
  "Phó Chủ tịch UBND tỉnh Lê Hữu Hoàng thăm gia đình người có công",
  "Phiên họp thường kỳ tháng 4 của UBND tỉnh Khánh Hòa",
  "Thông qua đề án sắp xếp đơn vị hành chính cấp xã giai đoạn 2026–2030",
  "Lãnh đạo tỉnh tiếp đoàn doanh nghiệp Nhật Bản",
];

function ChinhQuyenPage() {
  return (
    <SiteLayout>
      <PageHero level="CHÍNH QUYỀN" topic="CƠ CẤU TỔ CHỨC" title="Chính quyền " highlight="Tỉnh Khánh Hòa" />
      <div className="container mx-auto px-4 pb-12 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {ORGS.map((o, i) => (
            <article key={i} className="rounded-xl bg-card p-5 shadow-sm border-l-4 border-gov-blue hover:shadow-md transition">
              <o.icon className="h-8 w-8 text-gov-blue mb-3" />
              <h3 className="font-bold text-gov-blue-dark mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground">{o.desc}</p>
            </article>
          ))}
        </div>
        <aside className="rounded-xl bg-gov-blue-dark text-white p-5">
          <h4 className="font-bold mb-3 border-b border-white/20 pb-2">HOẠT ĐỘNG MỚI NHẤT</h4>
          <ul className="space-y-3 text-sm">
            {NEWS.map((n, i) => (
              <li key={i} className="border-b border-white/10 pb-2">
                <p className="text-white/90 hover:text-gov-yellow leading-snug">{n}</p>
                <p className="text-xs text-white/60 mt-1 flex items-center gap-1"><Calendar className="h-3 w-3" /> 20/04/2026</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </SiteLayout>
  );
}
