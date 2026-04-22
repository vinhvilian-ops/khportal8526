import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Calendar, FileText, FileCheck, MessageSquare, FilePlus, Search,
  HelpCircle, Database, Briefcase, Scale, Star, BookOpen, Sparkles,
  AlertCircle, Newspaper, Megaphone, Bell, BarChart3, Play, MapPin, QrCode,
  ChevronRight,
} from "lucide-react";
import leaderFeatured from "@/assets/leader-featured.jpg";
import leaderThumb1 from "@/assets/leader-thumb-1.jpg";
import leaderThumb2 from "@/assets/leader-thumb-2.jpg";
import leaderThumb3 from "@/assets/leader-thumb-3.jpg";
import gioToHungVuong from "@/assets/gio-to-hung-vuong.jpg";
import dir1 from "@/assets/dir-1.jpg";
import dir2 from "@/assets/dir-2.jpg";
import dir3 from "@/assets/dir-3.jpg";
import dir4 from "@/assets/dir-4.jpg";
import dir5 from "@/assets/dir-5.jpg";
import dir6 from "@/assets/dir-6.jpg";
import newsCd1 from "@/assets/news-cd-1.jpg";
import newsCd2 from "@/assets/news-cd-2.jpg";
import newsCd3 from "@/assets/news-cd-3.jpg";
import newsDn1 from "@/assets/news-dn-1.jpg";
import newsDn2 from "@/assets/news-dn-2.jpg";
import newsDn3 from "@/assets/news-dn-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cổng Thông Tin Điện Tử Tỉnh Khánh Hòa" },
      { name: "description", content: "Trang chủ Cổng Thông Tin Điện Tử Tỉnh Khánh Hòa — tin tức chỉ đạo điều hành, dịch vụ công, du lịch, doanh nghiệp." },
      { property: "og:title", content: "Cổng Thông Tin Điện Tử Tỉnh Khánh Hòa" },
      { property: "og:description", content: "Trang chính thức của tỉnh Khánh Hòa." },
    ],
  }),
  component: HomePage,
});

const LEADER_NEWS = [
  { tag: "TIN NỔI BẬT", date: "20/04/2026", title: "Phó Chủ tịch Thường trực UBND tỉnh Nguyễn Long Biên thăm, tặng quà người có công với cách mạng tại phường Phan Rang", image: leaderFeatured, main: true },
  { date: "20/04/2026", title: "Rà soát, đánh giá thực trạng đội ngũ chuyên trách công nghệ thông tin cấp xã, phường", image: leaderThumb1 },
  { date: "20/04/2026", title: "Phó Chủ tịch UBND tỉnh Lê Huyền thăm, tặng quà gia đình người có công tại xã Đồng Khánh Sơn", image: leaderThumb2 },
  { date: "20/04/2026", title: "Rà soát toàn bộ hồ sơ Dự án đầu tư hỗ trợ phát triển vùng dược liệu quý", image: leaderThumb3 },
  { date: "19/04/2026", title: "Đẩy mạnh xúc tiến đầu tư, hướng tới tăng trưởng hai con số trong năm 2026", image: dir6 },
];

const QUICK_LINKS = [
  { icon: Calendar, label: "Lịch làm việc của lãnh đạo UBND tỉnh", color: "bg-gov-blue/10 text-gov-blue" },
  { icon: FileText, label: "Văn bản chỉ đạo điều hành", color: "bg-gov-cyan/15 text-gov-cyan" },
  { icon: FileCheck, label: "Văn bản sao y", color: "bg-gov-blue/10 text-gov-blue" },
  { icon: MessageSquare, label: "Lấy ý kiến dự thảo văn bản QPPL", color: "bg-gov-blue/10 text-gov-blue" },
  { icon: FilePlus, label: "Văn bản mới", color: "bg-[oklch(0.55_0.2_290)]/15 text-[oklch(0.45_0.2_290)]" },
  { icon: Search, label: "Tra cứu CSDL Thủ tục hành chính", color: "bg-gov-blue/10 text-gov-blue" },
];

const DIRECTIVES_TABS = {
  "THÔNG TIN CHỈ ĐẠO ĐIỀU HÀNH": [
    { title: "Phân cấp quản lý nhà nước về đất đai trên địa bàn tỉnh Khánh Hòa", date: "21/04/2026", image: dir1 },
    { title: "Triển khai cơ chế, chính sách đặc biệt tạo đột phá cho công tác bảo vệ, chăm sóc sức khỏe nhân dân", date: "21/04/2026", image: dir2 },
    { title: "Phát triển ngành thép Khánh Hòa theo hướng hiện đại, bền vững", date: "20/04/2026", image: dir3 },
    { title: "Đẩy mạnh kiểm tra trực tuyến đăng ký kinh doanh, nâng cao hiệu quả quản lý nhà nước", date: "20/04/2026", image: dir4 },
    { title: "Cải thiện chất lượng phục vụ, nâng cao mức độ hài lòng của người dân, tổ chức, doanh nghiệp", date: "20/04/2026", image: dir5 },
    { title: "Đẩy mạnh xúc tiến đầu tư, hướng tới tăng trưởng hai con số", date: "19/04/2026", image: dir6 },
  ],
  "HOẠT ĐỘNG SỞ, NGÀNH, ĐỊA PHƯƠNG": [
    { title: "Sở Nông nghiệp & Môi trường tổ chức hội nghị tổng kết quý I/2026", date: "20/04/2026", image: dir1 },
    { title: "Triển khai chương trình đào tạo nghề cho lao động nông thôn đến năm 2030", date: "20/04/2026", image: dir2 },
    { title: "Phát triển nguồn nhân lực Khánh Hòa theo hướng hiện đại, bền vững", date: "19/04/2026", image: dir3 },
    { title: "Khánh Hòa phấn đấu đưa chất lượng giáo dục phổ thông vào tốp đầu cả nước", date: "19/04/2026", image: dir4 },
    { title: "UBND tỉnh tiếp công dân định kỳ tháng 4/2026", date: "18/04/2026", image: dir5 },
    { title: "Hội nghị xúc tiến đầu tư các xã ven biển", date: "18/04/2026", image: dir6 },
  ],
} as const;
type DirectiveTab = keyof typeof DIRECTIVES_TABS;

const CITIZEN_BUSINESS_TABS = {
  "TIN NỔI BẬT DÀNH CHO CÔNG DÂN": [
    { title: "Hướng dẫn tuyển sinh lớp 1 năm học 2026 - 2027", date: "21/04/2026", image: newsCd1 },
    { title: "Phát triển đồng bộ thị trường lao động", date: "15/04/2026", image: newsDn1 },
    { title: "Khôi phục những công trình dân sinh", date: "21/04/2026", image: newsCd2 },
    { title: "Hành vi sử dụng người chưa đủ 18 tuổi mua thuốc lá sẽ bị phạt bao nhiêu tiền?", date: "13/04/2026", image: newsDn2 },
    { title: "Xác thực thông tin thuê bao: Để xây dựng môi trường viễn thông an toàn", date: "17/04/2026", image: newsCd3 },
    { title: "Bán, cung cấp rượu, bia cho người chưa đủ 18 tuổi sẽ bị phạt bao nhiêu tiền?", date: "09/04/2026", image: newsDn3 },
  ],
  "TIN NỔI BẬT DÀNH CHO DOANH NGHIỆP": [
    { title: "Phát triển đồng bộ thị trường lao động", date: "15/04/2026", image: newsDn1 },
    { title: "Hỗ trợ doanh nghiệp nhỏ và vừa tiếp cận nguồn vốn ưu đãi", date: "14/04/2026", image: newsCd3 },
    { title: "Hành vi sử dụng người chưa đủ 18 tuổi mua thuốc lá sẽ bị phạt bao nhiêu tiền?", date: "13/04/2026", image: newsDn2 },
    { title: "Khôi phục những công trình dân sinh phục vụ sản xuất kinh doanh", date: "12/04/2026", image: newsCd2 },
    { title: "Bán, cung cấp rượu, bia cho người chưa đủ 18 tuổi sẽ bị phạt bao nhiêu tiền?", date: "09/04/2026", image: newsDn3 },
    { title: "Hướng dẫn doanh nghiệp đăng ký kinh doanh trực tuyến", date: "08/04/2026", image: newsCd1 },
  ],
} as const;
type NewsTab = keyof typeof CITIZEN_BUSINESS_TABS;

const POLICY_NEWS = [
  { date: "17/04/2026", title: "SẮP XẾP TRƯỜNG HỌC: Chỉ sáp nhập trường, điểm trường trong phạm vi 1 đơn vị hành chính cấp xã" },
  { date: "14/04/2026", title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ nổi bật tuần từ 4–10/4/2026" },
  { date: "13/04/2026", title: "Quy định mới về dạy thêm, học thêm" },
];

const SIDE_BANNERS = [
  { label: "HỌC TẬP VÀ LÀM THEO TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH", color: "bg-gov-yellow text-gov-blue-dark" },
  { label: "ĐƯA NGHỊ QUYẾT CỦA ĐẢNG VÀO CUỘC SỐNG", color: "bg-gov-blue text-white" },
  { label: "TRƯỜNG SA THÂN YÊU", color: "bg-gov-cyan text-white" },
  { label: "PHẢN ÁNH, KIẾN NGHỊ VĂN BẢN QPPL", color: "bg-gov-red text-white" },
  { label: "BỘ PHÁP ĐIỂN", color: "bg-gov-orange text-white" },
  { label: "CÔNG BÁO NƯỚC CHXHCN VIỆT NAM", color: "bg-gov-yellow text-gov-blue-dark" },
  { label: "CÔNG BÁO TỈNH KHÁNH HÒA", color: "bg-gov-blue text-white" },
  { label: "THÔNG TIN TUYÊN TRUYỀN PHỔ BIẾN GIÁO DỤC PHÁP LUẬT", color: "bg-gov-yellow text-gov-blue-dark" },
];

const CHARTS = [
  { title: "Các thiết chế giao quan trọng và xếp hạng tỉnh", color: "from-gov-blue to-gov-blue-dark" },
  { title: "Bộ trưởng giáo nghiệp THCS, hiệu trường và sĩ số", color: "from-gov-green to-[oklch(0.4_0.16_155)]" },
  { title: "Chiến lược phát triển nghiệp công thức Khánh Hòa giai đoạn…", color: "from-gov-orange to-gov-red" },
  { title: "Năng suất tổng quát của thủy sản theo mô hình bền vững nuôi trồng", color: "from-gov-yellow to-gov-orange" },
];

const CHUYEN_TRANG = [
  "Tin tuyển dương", "An toàn giao thông", "Nông nghiệp · Tài nguyên · Môi trường",
  "Khoa học và Công nghệ", "Phòng chống thiên tai", "Chuyển đổi số",
  "Phổ biến giáo dục pháp luật", "Ứng phó sự cố, thiên tai và tìm kiếm cứu nạn", "Chương trình mục tiêu quốc gia",
];

const DEPARTMENTS = [
  ["Sở Nội vụ", "Sở Nông nghiệp & MT", "Thanh tra tỉnh", "Sở Xây dựng", "Sở Giao thông vận tải", "Ban QL Vịnh Quốc gia Núi Chúa – Phước Bình"],
  ["Sở Tài chính", "Sở Văn hóa & Thể thao", "Sở Khoa học & Công nghệ", "Văn phòng UBND tỉnh", "Ban Quản lý các KCN", "Ban QL Sự án đầu tư xây dựng"],
  ["Sở Công Thương", "Sở Tư pháp", "Sở Y tế", "Sở Giáo dục", "Ban Quản lý đầu tư xây dựng", "Ban QL Sự án sử dụng vốn nước ngoài"],
];

function HomePage() {
  const tabKeys = Object.keys(DIRECTIVES_TABS) as DirectiveTab[];
  const [activeTab, setActiveTab] = useState<DirectiveTab>(tabKeys[0]);
  const newsTabKeys = Object.keys(CITIZEN_BUSINESS_TABS) as NewsTab[];
  const [activeNewsTab, setActiveNewsTab] = useState<NewsTab>(newsTabKeys[0]);
  return (
    <SiteLayout>
      {/* ============ CẤP 1 — CHÍNH QUYỀN ============ */}
      <div className="container mx-auto px-4 pt-10 pb-6 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark">
            Hoạt động lãnh đạo tỉnh
          </h2>
          <div className="mt-3 h-1 w-20 rounded bg-gov-yellow" />
        </div>
        <a
          href="#"
          className="group inline-flex items-center gap-1 text-sm font-semibold text-gov-blue-dark hover:text-gov-blue transition"
        >
          Xem tất cả bài viết
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Featured leader news - full width */}
          <article className="relative rounded-xl overflow-hidden shadow-lg min-h-[420px] md:min-h-[520px] flex flex-col justify-end">
            <img
              src={LEADER_NEWS[0].image}
              alt={LEADER_NEWS[0].title}
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative p-6 md:p-8 text-white max-w-4xl">
              <span className="inline-block w-fit rounded bg-gov-red px-2 py-1 text-xs font-bold mb-3">TIN NỔI BẬT</span>
              <p className="text-xs flex items-center gap-1 mb-2"><Calendar className="h-3 w-3" /> {LEADER_NEWS[0].date}</p>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">{LEADER_NEWS[0].title}</h3>
            </div>
          </article>

          {/* 4 vertical cards below */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LEADER_NEWS.slice(1).map((n, i) => (
              <a
                key={i}
                href="#"
                className="group flex flex-col rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="text-sm md:text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">
                    {n.title}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {n.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="container mx-auto px-4 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {QUICK_LINKS.map((q, i) => (
          <a key={i} href="#" className="rounded-xl bg-card p-4 text-center hover:shadow-md transition group">
            <div className={`mx-auto h-10 w-10 rounded-lg ${q.color} flex items-center justify-center mb-2 group-hover:scale-110 transition`}>
              <q.icon className="h-5 w-5" />
            </div>
            <p className="text-xs font-medium text-foreground leading-tight">{q.label}</p>
          </a>
        ))}
      </div>

      {/* Hùng Vương banner */}
      <div className="container mx-auto px-4 mt-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gov-red via-[oklch(0.5_0.22_15)] to-gov-red-dark p-8 text-center text-white shadow-lg">
          <img
            src={gioToHungVuong}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gov-red/55 via-gov-red/25 to-gov-red-dark/55" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow">GIỖ TỔ HÙNG VƯƠNG — LỄ HỘI ĐỀN HÙNG</h3>
            <p className="mt-2 text-gov-yellow font-semibold drop-shadow">VÀ TUẦN VĂN HÓA — DU LỊCH ĐẤT TỔ • NĂM BÍNH NGỌ 2026</p>
          </div>
        </div>
      </div>

      {/* Directives + (Govt directives + Map) */}
      <div className="container mx-auto px-4 mt-8 grid gap-6 lg:grid-cols-1">
        <div className="space-y-6">
          <div className="rounded-xl bg-card p-5 shadow-sm">
            <div className="flex items-end justify-between gap-4 border-b mb-4">
              <div className="flex items-center gap-1 flex-wrap">
                {tabKeys.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-4 py-2.5 text-sm font-bold tracking-wide transition-colors ${
                      activeTab === tab
                        ? "text-gov-blue-dark"
                        : "text-muted-foreground hover:text-gov-blue-dark"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Megaphone className={`h-4 w-4 ${activeTab === tab ? "text-gov-red" : "text-muted-foreground"}`} />
                      {tab}
                    </span>
                    {activeTab === tab && (
                      <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gov-red" />
                    )}
                  </button>
                ))}
              </div>
              <a href="#" className="group hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-gov-red hover:underline pb-2.5 shrink-0">
                Xem tất cả <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            {(() => {
              const items = DIRECTIVES_TABS[activeTab];
              const featured = items[0];
              const rest = items.slice(1, 4);
              return (
                <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
                  {featured && (
                    <a href="#" className="group flex flex-col">
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-3 text-lg font-bold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{featured.title}</p>
                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</p>
                    </a>
                  )}
                  <div className="flex flex-col divide-y h-full">
                    {rest.map((d, i) => (
                      <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
                        <img
                          src={d.image}
                          alt={d.title}
                          width={512}
                          height={512}
                          loading="lazy"
                          className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover"
                        />
                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{d.title}</p>
                          <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {d.date}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })()}
            <div className="mt-4 flex sm:hidden justify-end">
              <a href="#" className="group inline-flex items-center gap-1 text-sm font-semibold text-gov-red hover:underline">
                Xem tất cả bài viết <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* ============ CẤP 2 — TƯƠNG TÁC (gộp vào cột trái) ============ */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gov-blue-dark">
              Chính sách & <span className="text-gov-red">Tin tức chuyên đề</span>
            </h2>
            <div className="mt-3 h-1 w-20 rounded bg-gov-yellow" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <a href="#" className="rounded-xl bg-gradient-to-r from-gov-red to-[oklch(0.6_0.22_30)] text-white p-5 flex items-center gap-4 hover:shadow-lg transition">
              <HelpCircle className="h-10 w-10 shrink-0" />
              <div>
                <p className="font-bold text-sm uppercase">Hỗ trợ trực tuyến</p>
                <p className="font-extrabold">CÔNG DÂN, DOANH NGHIỆP HỎI</p>
                <p className="text-xs text-white/80 mt-1">Cơ quan chức năng trả lời</p>
              </div>
            </a>
            <a href="#" className="rounded-xl bg-gradient-to-r from-gov-blue to-gov-blue-dark text-white p-5 flex items-center gap-4 hover:shadow-lg transition">
              <Database className="h-10 w-10 shrink-0" />
              <div>
                <p className="font-bold text-sm uppercase">Cơ sở dữ liệu</p>
                <p className="font-extrabold">TRA CỨU CSDL CỔNG TTĐT</p>
                <p className="text-xs text-white/80 mt-1">Tỉnh Ninh Thuận và Khánh Hòa</p>
              </div>
            </a>
          </div>

          {/* Policy news with tabs */}
          <div className="rounded-xl bg-card shadow-sm overflow-hidden">
            <div className="flex border-b">
              <button className="px-5 py-3 text-sm font-bold text-gov-red border-b-2 border-gov-red">CHÍNH SÁCH MỚI</button>
              <button className="px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">THAM VẤN VÀ LẤY Ý KIẾN</button>
            </div>
            <div className="grid gap-5 md:grid-cols-2 p-5">
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-gov-blue-dark to-[oklch(0.15_0.08_265)] overflow-hidden flex items-center justify-center">
                <div className="flex gap-3">
                  <div className="h-20 w-14 rounded border-2 border-gov-yellow" />
                  <div className="h-20 w-14 rounded border-2 border-gov-cyan" />
                  <div className="h-20 w-14 rounded border-2 border-gov-yellow" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gov-blue-dark/90 text-white text-xs p-2 font-medium">
                  Sách giáo khoa điện tử không được chèn quảng cáo, nội dung kinh doanh
                </div>
              </div>
              <ul className="space-y-3">
                {POLICY_NEWS.map((p, i) => (
                  <li key={i} className="flex gap-3 group">
                    <div className={`h-14 w-20 shrink-0 rounded bg-gradient-to-br ${["from-gov-orange to-gov-red","from-gov-blue to-gov-cyan","from-gov-yellow to-gov-orange"][i]}`} />
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-gov-red leading-snug">{p.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Investment + Legal */}
          <div className="grid gap-4 md:grid-cols-2">
            <a href="#" className="rounded-xl bg-gradient-to-r from-gov-yellow to-gov-orange text-gov-blue-dark p-5 flex items-center gap-4 hover:shadow-lg transition">
              <Briefcase className="h-10 w-10" />
              <div>
                <p className="font-extrabold uppercase">Dự án kêu gọi đầu tư</p>
                <p className="text-sm">Cơ hội hợp tác phát triển kinh tế Khánh Hòa</p>
              </div>
            </a>
            <a href="#" className="rounded-xl bg-gov-blue-dark text-white p-5 flex items-center gap-4 hover:shadow-lg transition">
              <Scale className="h-10 w-10" />
              <div>
                <p className="font-extrabold uppercase">Hỗ trợ pháp lý</p>
                <p className="text-sm text-white/80">Cho doanh nghiệp</p>
              </div>
            </a>
          </div>

          {/* News tabs CD/DN */}
          <div className="rounded-xl bg-card shadow-sm overflow-hidden">
            <div className="flex border-b">
              {(Object.keys(CITIZEN_BUSINESS_TABS) as Array<keyof typeof CITIZEN_BUSINESS_TABS>).map((k) => {
                const active = activeNewsTab === k;
                return (
                  <button
                    key={k}
                    onClick={() => setActiveNewsTab(k)}
                    className={`px-5 py-3 text-sm font-bold transition border-b-2 ${active ? "text-gov-blue border-gov-blue" : "text-muted-foreground border-transparent hover:text-foreground"}`}
                  >
                    {k}
                  </button>
                );
              })}
            </div>
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 p-5">
              {CITIZEN_BUSINESS_TABS[activeNewsTab].map((n, i) => (
                <a key={i} href="#" className="flex gap-3 group">
                  <img
                    src={n.image}
                    alt={n.title}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="h-20 w-28 shrink-0 rounded object-cover"
                  />
                  <div className="flex flex-col justify-center min-w-0">
                    <p className="text-sm font-medium text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{n.title}</p>
                    <p className="mt-1.5 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="px-5 pb-4 flex justify-end">
              <a href="#" className="group inline-flex items-center gap-1 text-sm font-semibold text-gov-blue hover:underline">
                Xem tất cả bài viết <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Cột phải: chỉ đạo TW + bản đồ */}
        <div className="space-y-6">
          <aside className="rounded-xl bg-gov-blue-dark text-white p-5">
            <h4 className="font-bold text-sm mb-3 border-b border-white/20 pb-2 flex items-center gap-2">
              <Megaphone className="h-4 w-4 text-gov-yellow" />
              CHỈ ĐẠO, ĐIỀU HÀNH CỦA CHÍNH PHỦ, THỦ TƯỚNG
            </h4>
            <div className="space-y-4">
              <div className="aspect-video rounded bg-gradient-to-br from-gov-blue to-gov-blue-dark flex items-center justify-center relative overflow-hidden">
                <Play className="h-10 w-10 text-gov-yellow" />
              </div>
              <ul className="space-y-2 text-xs">
                {[
                  "Thành lập Ban Chỉ đạo triển khai Đề án \"Chuyển đổi số trong hoạt động tổ chức…\"",
                  "Phân công soạn thảo 9 dự án luật",
                  "100% CBCC cấp xã chưa đáp ứng yêu cầu chuyển môn vị trí việc làm được cử đi bồi dưỡng",
                  "Kéo dài thời gian giữ chức vụ đối với 2 cán bộ thuộc Bộ Quốc phòng",
                  "Tiêu chí phân bổ vốn đầu tư công từ ngân sách trung ương cho địa phương giai đoạn 2026–2030",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><Star className="h-3 w-3 shrink-0 text-gov-yellow mt-0.5" /><span className="text-white/90">{t}</span></li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-[10px] italic text-white/60">Nguồn: Cổng Thông tin điện tử Chính phủ</p>
          </aside>

          <div className="rounded-xl bg-card p-5 shadow-sm">
            <h4 className="font-bold text-gov-blue-dark mb-3 flex items-center gap-2"><MapPin className="h-4 w-4 text-gov-red" /> BẢN ĐỒ HÀNH CHÍNH</h4>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-gov-yellow via-gov-orange to-gov-red flex items-center justify-center text-white shadow-inner">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="font-bold">TỈNH KHÁNH HÒA</p>
                <p className="text-xs">65 xã, phường, đặc khu</p>
              </div>
            </div>
          </div>

          {/* Side banners moved directly below map */}
          <div className="space-y-2">
            {SIDE_BANNERS.map((b, i) => (
              <a key={i} href="#" className={`block rounded-lg ${b.color} px-4 py-3 text-xs font-bold leading-tight hover:opacity-90 transition`}>
                {b.label}
              </a>
            ))}
            <div className="rounded-lg bg-card p-3 shadow-sm border-l-4 border-gov-blue">
              <p className="text-xs font-bold text-gov-blue-dark mb-2 flex items-center gap-1"><Bell className="h-3 w-3" /> THÔNG BÁO MỚI NHẤT</p>
              <ul className="text-xs space-y-1.5 text-muted-foreground">
                <li className="flex gap-1"><Star className="h-2.5 w-2.5 text-gov-orange shrink-0 mt-1" /> Thông báo về VTKT PHC nhiệt giáp, điều chỉnh giá lưu cư...</li>
                <li className="flex gap-1"><Star className="h-2.5 w-2.5 text-gov-orange shrink-0 mt-1" /> Thông báo lịch quá chuyển đi cho du lịch Khánh Hòa giai đoạn 2026</li>
                <li className="flex gap-1"><Star className="h-2.5 w-2.5 text-gov-orange shrink-0 mt-1" /> Quyết định về việc thanh tra trách nhiệm trong hoạt động đầu tư</li>
                <li className="flex gap-1"><Star className="h-2.5 w-2.5 text-gov-orange shrink-0 mt-1" /> Bí thư Tỉnh ủy Khánh Hòa Nguyễn Tuấn Thanh tiếp xúc cử tri</li>
              </ul>
            </div>
            <div className="rounded-lg bg-card p-3 shadow-sm border-l-4 border-gov-red">
              <p className="text-xs font-bold text-gov-red mb-2 flex items-center gap-1"><Newspaper className="h-3 w-3" /> THÔNG TIN BÁO CHÍ</p>
              <ul className="text-xs space-y-1.5 text-muted-foreground">
                <li className="flex gap-1"><AlertCircle className="h-2.5 w-2.5 text-gov-red shrink-0 mt-1" /> Quyết định về việc thanh tra trách nhiệm trong hoạt động đầu tư XD</li>
                <li className="flex gap-1"><AlertCircle className="h-2.5 w-2.5 text-gov-red shrink-0 mt-1" /> Bí thư Tỉnh ủy Khánh Hòa Nguyễn Tuấn Thanh tiếp xúc cử tri</li>
                <li className="flex gap-1"><AlertCircle className="h-2.5 w-2.5 text-gov-red shrink-0 mt-1" /> Tin Bộ trưởng Nông nghiệp Phạm Quang Trung</li>
                <li className="flex gap-1"><AlertCircle className="h-2.5 w-2.5 text-gov-red shrink-0 mt-1" /> Hướng về tổ hai đại nhân kim quân ở khu BS NThuan – PB,...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* ============ CẤP 3 — ĐA DẠNG NỘI DUNG ============ */}
      <PageHero level="CẤP 3" topic="ĐA DẠNG NỘI DUNG" title="Du khách, Chuyên trang & " highlight="Truyền thông" />

      <div className="container mx-auto px-4">
        {/* Tourism block */}
        <div className="rounded-xl bg-card shadow-sm overflow-hidden">
          <div className="flex border-b">
            <button className="px-5 py-3 text-sm font-bold text-gov-red border-b-2 border-gov-red">GIỚI THIỆU ĐẾN DU KHÁCH</button>
            <button className="px-5 py-3 text-sm font-medium text-muted-foreground">📷 TIN ẢNH</button>
          </div>
          <div className="grid md:grid-cols-2 gap-5 p-5">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gov-cyan to-gov-blue-dark flex items-end p-4">
              <span className="absolute top-3 left-3 bg-gov-yellow text-gov-blue-dark text-xs font-bold px-2 py-1 rounded">Lễ hội</span>
              <p className="text-white font-bold text-lg leading-snug relative">Khai mạc lễ hội Am Chúa năm 2026</p>
            </div>
            <ul className="space-y-3">
              {[
                { title: "Tiềm năng để lịch đại đường và sức khỏe", date: "20/04/2026" },
                { title: "Tour Vietcom vẽ đạp 160.000 khách quốc tế đến Khánh Hòa trong mùa du lịch hè 2026", date: "19/04/2026" },
                { title: "Du thuyền sao Voyager về điểm Nha Trang trong chuyên hai trình mưa hè", date: "18/04/2026" },
              ].map((n, i) => (
                <li key={i} className="flex gap-3 group">
                  <div className={`h-14 w-20 shrink-0 rounded bg-gradient-to-br ${["from-gov-cyan to-gov-blue","from-gov-yellow to-gov-orange","from-gov-blue to-gov-blue-dark"][i]}`} />
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-gov-red leading-snug">{n.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Charts */}
          <div className="border-t p-5">
            <h4 className="font-bold text-gov-blue-dark mb-4 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-gov-red" /> ĐỒ HỌA TRỰC QUAN</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {CHARTS.map((c, i) => (
                <a key={i} href="#" className={`rounded-lg p-3 bg-gradient-to-br ${c.color} text-white aspect-square flex flex-col justify-between hover:scale-105 transition`}>
                  <BarChart3 className="h-5 w-5 text-gov-yellow" />
                  <p className="text-[11px] font-semibold leading-tight">{c.title}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Chuyên trang */}
          <div className="border-t p-5">
            <h4 className="font-bold text-gov-blue-dark mb-3 text-sm">CHUYÊN TRANG, CHUYÊN MỤC</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {CHUYEN_TRANG.map((c, i) => (
                <a key={i} href="#" className="text-sm text-gov-orange hover:text-gov-red flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gov-orange" /> {c}
                </a>
              ))}
            </div>
          </div>

          {/* Video clip */}
          <div className="border-t p-5">
            <h4 className="font-bold text-gov-red mb-4 flex items-center gap-2"><Play className="h-4 w-4" /> VIDEO CLIP</h4>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-gov-blue-dark to-[oklch(0.15_0.1_260)] flex items-center justify-center overflow-hidden">
                <Play className="h-14 w-14 text-gov-yellow" />
                <div className="absolute bottom-0 left-0 right-0 bg-gov-blue-dark/90 text-white text-xs p-2">
                  <p className="font-semibold">Ngân hàng</p>
                  <p>Giải pháp giúp hộ kinh doanh kê khai thuế đúng, an toàn tuân thủ, triển khai bền vững</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Nhiều điểm mới trong công tác tuyển sinh lớp 1...",
                  "Đồng bào Chăm vui ngày hội toàn dân",
                  "Bí thư Tỉnh ủy Khánh Hòa Nguyễn Tuấn Thanh chỉ đạo...",
                  "Tin liên trang nhánh nghệ Quang Trung",
                  "Hướng về tổ Đại đại nhân kim Quân ở khu BS NThuan-PB,...",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 group">
                    <div className="h-12 w-16 shrink-0 rounded bg-muted flex items-center justify-center"><Play className="h-4 w-4 text-muted-foreground" /></div>
                    <p className="text-sm text-foreground group-hover:text-gov-red leading-snug">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* National service banners + side widgets */}
      <div className="container mx-auto px-4 mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-9 grid md:grid-cols-2 gap-4">
          <a href="#" className="rounded-xl bg-gradient-to-r from-gov-red to-gov-red-dark text-white p-5 flex items-center gap-4 hover:shadow-lg transition">
            <Star className="h-10 w-10 text-gov-yellow" />
            <div>
              <p className="font-extrabold uppercase">Cổng dịch vụ công Quốc gia</p>
              <p className="text-xs text-white/80">Kết nối cộng đồng người dân và doanh nghiệp</p>
            </div>
          </a>
          <a href="#" className="rounded-xl bg-gradient-to-r from-gov-blue to-gov-cyan text-white p-5 flex items-center gap-4 hover:shadow-lg transition">
            <Sparkles className="h-10 w-10" />
            <div>
              <p className="font-extrabold uppercase">Cải cách hành chính tỉnh Khánh Hòa</p>
              <p className="text-xs text-white/80">Hệ thống đánh giá đăng nhập, kết nối tổ chức người dân</p>
            </div>
          </a>
        </div>
        <aside className="lg:col-span-3 space-y-2 text-xs">
          <div className="rounded-lg bg-gov-green/15 px-3 py-2 text-gov-green font-semibold flex items-center gap-2"><Scale className="h-4 w-4" /> AI Pháp luật <span className="text-[10px] text-muted-foreground font-normal block">Cổng pháp luật quốc gia</span></div>
          <div className="rounded-lg bg-gov-red/15 px-3 py-2 text-gov-red font-semibold flex items-center gap-2"><FileText className="h-4 w-4" /> Thông tin BHXH Khánh Hòa</div>
          <div className="rounded-lg bg-gov-blue/15 px-3 py-2 text-gov-blue font-semibold flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Bản đồ số 65 xã, phường, đặc khu</div>
          <div className="rounded-lg bg-gov-cyan/15 px-3 py-2 text-gov-cyan font-semibold flex items-center gap-2"><Search className="h-4 w-4" /> Tra cứu giá đất</div>
          <div className="rounded-lg bg-gov-orange/15 px-3 py-2 text-gov-orange font-semibold flex items-center gap-2"><BookOpen className="h-4 w-4" /> Công khai ngân sách</div>
          <div className="rounded-lg bg-card border p-3 text-center">
            <QrCode className="h-16 w-16 mx-auto text-gov-blue-dark" />
            <p className="text-xs font-bold text-gov-blue-dark mt-1">Zalo OA</p>
            <p className="text-[10px] text-muted-foreground">Cổng TTĐT Khánh Hòa</p>
          </div>
        </aside>
      </div>

      {/* Departments */}
      <div className="container mx-auto px-4 mt-8 rounded-xl bg-card p-5 shadow-sm">
        <h4 className="font-bold text-gov-blue-dark mb-4 text-sm border-b pb-2">CÁC SỞ, BAN, UBND CÁC XÃ, PHƯỜNG, ĐẶC KHU</h4>
        <div className="grid md:grid-cols-3 gap-x-6 gap-y-2">
          {DEPARTMENTS.flat().map((d, i) => (
            <a key={i} href="#" className="text-sm text-foreground hover:text-gov-red flex items-center gap-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gov-orange" /> {d}
            </a>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
