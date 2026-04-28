import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Building2,
  FileText,
  Users2,
  Gavel,
  Calendar,
  Landmark,
  ScrollText,
  Briefcase,
  MapPin,
  ChevronRight,
  User,
} from "lucide-react";

export const Route = createFileRoute("/chinh-quyen")({
  head: () => ({
    meta: [
      { title: "Chính quyền — Cổng TTĐT Tỉnh Khánh Hòa" },
      {
        name: "description",
        content:
          "Cơ cấu tổ chức chính quyền tỉnh Khánh Hòa: Tỉnh ủy, HĐND, UBND, các sở ban ngành, UBND xã/phường và lãnh đạo tỉnh.",
      },
      { property: "og:title", content: "Chính quyền Tỉnh Khánh Hòa" },
      {
        property: "og:description",
        content:
          "Thông tin chính quyền tỉnh Khánh Hòa, lãnh đạo UBND tỉnh và các trang tin của Chủ tịch, Phó Chủ tịch UBND tỉnh.",
      },
    ],
  }),
  component: ChinhQuyenPage,
});

/* ============================================================
   DỮ LIỆU
   ============================================================ */

const ORGS = [
  {
    icon: Landmark,
    title: "Tỉnh ủy Khánh Hòa",
    desc: "Cơ quan lãnh đạo của Đảng bộ tỉnh, định hướng các chủ trương, đường lối phát triển toàn diện của tỉnh.",
  },
  {
    icon: Users2,
    title: "Đoàn ĐBQH & HĐND tỉnh",
    desc: "Đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân; quyết định những vấn đề quan trọng của địa phương.",
  },
  {
    icon: Building2,
    title: "Ủy ban Nhân dân tỉnh",
    desc: "Cơ quan chấp hành của HĐND, cơ quan hành chính nhà nước cao nhất tại địa phương, tổ chức thực hiện Hiến pháp và pháp luật.",
  },
  {
    icon: Gavel,
    title: "Ủy ban MTTQ Việt Nam tỉnh",
    desc: "Tổ chức liên minh chính trị, liên hiệp tự nguyện, tập hợp khối đại đoàn kết toàn dân tộc trên địa bàn tỉnh.",
  },
  {
    icon: Briefcase,
    title: "Các Sở, Ban, Ngành",
    desc: "19 cơ quan chuyên môn tham mưu, giúp UBND tỉnh quản lý nhà nước về ngành, lĩnh vực tại địa phương.",
  },
  {
    icon: MapPin,
    title: "UBND xã, phường, đặc khu",
    desc: "Chính quyền địa phương cấp xã sau sắp xếp, trực tiếp phục vụ Nhân dân, tổ chức thực hiện nhiệm vụ tại cơ sở.",
  },
  {
    icon: ScrollText,
    title: "Văn bản chỉ đạo điều hành",
    desc: "Hệ thống văn bản quy phạm pháp luật, nghị quyết, quyết định, chỉ thị của lãnh đạo tỉnh.",
  },
  {
    icon: FileText,
    title: "Lịch công tác lãnh đạo tỉnh",
    desc: "Lịch làm việc hằng tuần của Thường trực Tỉnh ủy, HĐND, lãnh đạo UBND tỉnh.",
  },
];

const NEWS = [
  "Chủ tịch UBND tỉnh chủ trì phiên họp thường kỳ tháng 4/2026",
  "Phó Chủ tịch UBND tỉnh thăm và tặng quà gia đình chính sách",
  "Thông qua đề án sắp xếp đơn vị hành chính cấp xã giai đoạn 2026–2030",
  "Lãnh đạo tỉnh tiếp đoàn doanh nghiệp Nhật Bản tìm hiểu cơ hội đầu tư",
  "Hội nghị triển khai nhiệm vụ phát triển kinh tế - xã hội năm 2026",
];

const SO_BAN_NGANH = [
  "Sở Nội vụ",
  "Sở Tư pháp",
  "Sở Tài chính",
  "Sở Công Thương",
  "Sở Nông nghiệp và Môi trường",
  "Sở Xây dựng",
  "Sở Khoa học và Công nghệ",
  "Sở Văn hóa, Thể thao và Du lịch",
  "Sở Giáo dục và Đào tạo",
  "Sở Y tế",
  "Sở Lao động - Thương binh và Xã hội",
  "Sở Dân tộc và Tôn giáo",
  "Sở Ngoại vụ",
  "Thanh tra tỉnh",
  "Văn phòng UBND tỉnh",
  "Ban Quản lý Khu kinh tế Vân Phong",
  "Ban Quản lý các dự án Phát triển tỉnh",
  "Đài Phát thanh - Truyền hình Khánh Hòa",
  "Báo Khánh Hòa",
];

/* Lãnh đạo */
const CHU_TICH = {
  title: "CHỦ TỊCH UBND TỈNH",
  name: "NGUYỄN VIỆT HÙNG",
  role: "Chủ tịch UBND tỉnh Khánh Hòa",
};

const PHO_CHU_TICH = [
  { role: "Phó Chủ tịch Thường trực", name: "NGUYỄN LONG BIÊN" },
  { role: "Phó Chủ tịch", name: "LÊ HUYỀN" },
  { role: "Phó Chủ tịch", name: "TRỊNH MINH HOÀNG" },
  { role: "Phó Chủ tịch", name: "TRẦN HÒA NAM" },
  { role: "Phó Chủ tịch", name: "NGUYỄN THANH HÀ" },
];

/* ============================================================
   COMPONENT PHỤ
   ============================================================ */

function LeaderAvatar({ name }: { name: string }) {
  // Avatar placeholder dùng initials - đồng bộ với hệ thống design
  const initials = name
    .split(" ")
    .slice(-2)
    .map((s) => s[0])
    .join("");
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-gov-blue to-gov-blue-dark text-white font-bold">
      {initials}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-7 w-1.5 rounded bg-gov-red" />
      <h2 className="text-lg md:text-xl font-bold text-gov-blue-dark uppercase tracking-wide">
        {children}
      </h2>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

function ChinhQuyenPage() {
  return (
    <SiteLayout>
      <PageHero
        level="CHÍNH QUYỀN"
        topic="CƠ CẤU TỔ CHỨC"
        title="Chính quyền "
        highlight="Tỉnh Khánh Hòa"
      />

      <div className="container mx-auto px-4 pb-12 grid gap-6 lg:grid-cols-3">
        {/* ============== CỘT TRÁI ============== */}
        <div className="lg:col-span-2 space-y-8">
          {/* Cơ cấu tổ chức */}
          <section>
            <SectionTitle>Cơ cấu tổ chức bộ máy chính quyền</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {ORGS.map((o, i) => (
                <article
                  key={i}
                  className="rounded-xl bg-card p-5 shadow-sm border-l-4 border-gov-blue hover:shadow-md transition"
                >
                  <o.icon className="h-8 w-8 text-gov-blue mb-3" />
                  <h3 className="font-bold text-gov-blue-dark mb-2">{o.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {o.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Sở ban ngành */}
          <section>
            <SectionTitle>Danh sách Sở, Ban, Ngành & đơn vị trực thuộc</SectionTitle>
            <div className="rounded-xl bg-card p-5 shadow-sm border-t-4 border-gov-yellow">
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {SO_BAN_NGANH.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 py-1.5 border-b border-dashed border-border last:border-0"
                  >
                    <ChevronRight className="h-4 w-4 text-gov-red shrink-0" />
                    <span className="text-foreground hover:text-gov-blue cursor-pointer">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Giới thiệu chung */}
          <section>
            <SectionTitle>Giới thiệu khái quát</SectionTitle>
            <div className="rounded-xl bg-card p-6 shadow-sm space-y-3 text-sm leading-relaxed text-foreground/90">
              <p>
                Tỉnh Khánh Hòa nằm ở khu vực Duyên hải Nam Trung Bộ, có vị trí
                chiến lược về quốc phòng, an ninh và phát triển kinh tế biển.
                Thực hiện chủ trương sắp xếp đơn vị hành chính, bộ máy chính
                quyền tỉnh được tổ chức theo mô hình{" "}
                <strong>chính quyền địa phương 02 cấp</strong> (cấp tỉnh và cấp
                xã), bảo đảm tinh gọn, hiệu năng, hiệu lực, hiệu quả.
              </p>
              <p>
                Hệ thống chính trị tỉnh gồm Tỉnh ủy, Đoàn ĐBQH, HĐND tỉnh, UBND
                tỉnh, Ủy ban MTTQ Việt Nam tỉnh và các tổ chức chính trị - xã
                hội. UBND tỉnh có 19 cơ quan chuyên môn (sở, ban, ngành) cùng
                các đơn vị sự nghiệp trực thuộc, thực hiện chức năng quản lý
                nhà nước trên địa bàn.
              </p>
            </div>
          </section>
        </div>

        {/* ============== CỘT PHẢI ============== */}
        <aside className="space-y-6">
          {/* Trang tin Chủ tịch UBND tỉnh */}
          <Link
            to="/chinh-quyen"
            className="block rounded-xl overflow-hidden bg-gradient-to-br from-gov-red to-gov-red-dark text-white shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 p-4">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  Trang tin
                </p>
                <p className="text-sm font-semibold mt-1">{CHU_TICH.title}</p>
                <p className="text-lg font-extrabold text-gov-yellow mt-1 leading-tight">
                  {CHU_TICH.name}
                </p>
              </div>
              <div className="h-20 w-20 rounded-full bg-white/15 ring-2 ring-white/40 overflow-hidden shrink-0">
                <LeaderAvatar name={CHU_TICH.name} />
              </div>
            </div>
          </Link>

          {/* Trang tin Phó Chủ tịch UBND tỉnh */}
          <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-border">
              <p className="text-sm font-semibold text-gov-blue">Trang tin</p>
              <p className="text-base font-bold text-gov-blue-dark uppercase">
                Các Phó Chủ tịch UBND tỉnh
              </p>
            </div>
            <ul className="divide-y divide-border">
              {PHO_CHU_TICH.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-muted/40 transition cursor-pointer"
                >
                  <div className="h-12 w-12 rounded-full overflow-hidden ring-1 ring-border shrink-0">
                    <LeaderAvatar name={p.name} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gov-blue font-medium">{p.role}</p>
                    <p className="text-sm font-bold text-gov-blue-dark truncate">
                      {p.name}
                    </p>
                  </div>
                  <User className="h-4 w-4 text-muted-foreground ml-auto shrink-0" />
                </li>
              ))}
            </ul>
          </div>

          {/* Hoạt động mới nhất */}
          <div className="rounded-xl bg-gov-blue-dark text-white p-5 shadow-sm">
            <h4 className="font-bold mb-3 border-b border-white/20 pb-2 uppercase text-sm tracking-wide">
              Hoạt động mới nhất
            </h4>
            <ul className="space-y-3 text-sm">
              {NEWS.map((n, i) => (
                <li key={i} className="border-b border-white/10 pb-2 last:border-0">
                  <p className="text-white/90 hover:text-gov-yellow leading-snug cursor-pointer">
                    {n}
                  </p>
                  <p className="text-xs text-white/60 mt-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> 20/04/2026
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
