import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Calendar, FileText, FileCheck, MessageSquare, FilePlus, Search,
  HelpCircle, Database, Briefcase, Scale, Star, BookOpen, Sparkles,
  AlertCircle, Newspaper, Megaphone, Bell, BarChart3, Play, MapPin, QrCode,
  ChevronRight, Building2, Landmark, Globe,
  Award, TrafficCone, Leaf, FlaskConical, CloudRain, Cpu, Gavel, LifeBuoy, Target,
  Users, Coins, Hammer, Factory, GraduationCap, Sprout, Music, HeartPulse,
  Handshake, FolderKanban, TreePine, Wrench, Truck, ShieldCheck, Mountain, Waves, Home as HomeIcon, type LucideIcon,
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
import policyFeatured from "@/assets/policy-featured.jpg";
import policyThumb1 from "@/assets/policy-thumb-1.jpg";
import policyThumb2 from "@/assets/policy-thumb-2.jpg";
import policyThumb3 from "@/assets/policy-thumb-3.jpg";
import videoMain from "@/assets/video-main.jpg";
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";
import video4 from "@/assets/video-4.jpg";
import video5 from "@/assets/video-5.jpg";
import tourismFeatured from "@/assets/tourism-featured.jpg";
import tourismThumb1 from "@/assets/tourism-thumb-1.jpg";
import tourismThumb2 from "@/assets/tourism-thumb-2.jpg";
import tourismThumb3 from "@/assets/tourism-thumb-3.jpg";
import info1 from "@/assets/info-1.jpg";
import info2 from "@/assets/info-2.jpg";
import info3 from "@/assets/info-3.jpg";
import info4 from "@/assets/info-4.jpg";

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
  "TIN NỔI BẬT DÀNH CHO CÔNG DÂN": {
    featured: { title: "Hướng dẫn tuyển sinh lớp 1 năm học 2026 - 2027", date: "21/04/2026", image: newsCd1 },
    rest: [
      { title: "Khôi phục những công trình dân sinh", date: "21/04/2026", image: newsCd2 },
      { title: "Xác thực thông tin thuê bao: Để xây dựng môi trường viễn thông an toàn", date: "17/04/2026", image: newsCd3 },
      { title: "Bán, cung cấp rượu, bia cho người chưa đủ 18 tuổi sẽ bị phạt bao nhiêu tiền?", date: "09/04/2026", image: newsDn3 },
    ],
  },
  "TIN NỔI BẬT DÀNH CHO DOANH NGHIỆP": {
    featured: { title: "Phát triển đồng bộ thị trường lao động", date: "15/04/2026", image: newsDn1 },
    rest: [
      { title: "Hỗ trợ doanh nghiệp nhỏ và vừa tiếp cận nguồn vốn ưu đãi", date: "14/04/2026", image: newsCd3 },
      { title: "Hành vi sử dụng người chưa đủ 18 tuổi mua thuốc lá sẽ bị phạt bao nhiêu tiền?", date: "13/04/2026", image: newsDn2 },
      { title: "Hướng dẫn doanh nghiệp đăng ký kinh doanh trực tuyến", date: "08/04/2026", image: newsCd1 },
    ],
  },
} as const;
type NewsTab = keyof typeof CITIZEN_BUSINESS_TABS;

const POLICY_NEWS = [
  { date: "17/04/2026", title: "SẮP XẾP TRƯỜNG HỌC: Chỉ sáp nhập trường, điểm trường trong phạm vi 1 đơn vị hành chính cấp xã" },
  { date: "14/04/2026", title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ nổi bật tuần từ 4–10/4/2026" },
  { date: "13/04/2026", title: "Quy định mới về dạy thêm, học thêm" },
];

const SIDE_BANNERS = [
  { label: "HỌC TẬP VÀ LÀM THEO TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH", emoji: "☀️", motif: "star" },
  { label: "ĐƯA NGHỊ QUYẾT CỦA ĐẢNG VÀO CUỘC SỐNG", emoji: "🚩", motif: "flag" },
  { label: "TRƯỜNG SA THÂN YÊU", emoji: "⚓", motif: "wave" },
  { label: "PHẢN ÁNH, KIẾN NGHỊ VĂN BẢN QPPL", emoji: "📋", motif: "emblem" },
  { label: "BỘ PHÁP ĐIỂN", emoji: "⚖️", motif: "scale" },
  { label: "CÔNG BÁO NƯỚC CHXHCN VIỆT NAM", emoji: "🏛️", motif: "emblem" },
  { label: "CÔNG BÁO TỈNH KHÁNH HÒA", emoji: "🌊", motif: "wave" },
  { label: "THÔNG TIN TUYÊN TRUYỀN PHỔ BIẾN GIÁO DỤC PHÁP LUẬT", emoji: "📚", motif: "book" },
];

const CHARTS = [
  { title: "Tăng cường truyền thông về năng lượng nguyên tử và…", image: info1 },
  { title: "Chiến lược dữ liệu tỉnh Khánh Hòa đến năm 2030", image: info2 },
  { title: "Các mốc thời gian quan trọng trong kỳ thi tốt nghiệp THP…", image: info3 },
  { title: "Bỏ bằng tốt nghiệp THCS, hiệu trưởng xác nhận việc…", image: info4 },
];

const CHUYEN_TRANG = [
  { label: "Tin tuyên dương", icon: Award },
  { label: "An toàn giao thông", icon: TrafficCone },
  { label: "Nông nghiệp · Tài nguyên · Môi trường", icon: Leaf },
  { label: "Khoa học và Công nghệ", icon: FlaskConical },
  { label: "Phòng chống thiên tai", icon: CloudRain },
  { label: "Chuyển đổi số", icon: Cpu },
  { label: "Phổ biến giáo dục pháp luật", icon: Gavel },
  { label: "Ứng phó sự cố, thiên tai và tìm kiếm cứu nạn", icon: LifeBuoy },
  { label: "Chương trình mục tiêu quốc gia", icon: Target },
];

const SO_BAN = [
  "Sở Nội vụ", "Sở Tư pháp", "Văn phòng UBND tỉnh",
  "Sở Tài chính", "Thanh tra tỉnh", "Sở Xây dựng",
  "Sở Công Thương", "Sở Khoa học và Công nghệ", "Sở Giáo dục và Đào tạo",
  "Sở Nông nghiệp và Môi trường", "Sở Văn hóa, Thể thao và Du lịch", "Sở Y tế",
  "Sở Dân tộc và Tôn giáo", "Ban quản lý dự án phát triển tỉnh", "Ban Quản lý Khu kinh tế và Khu công nghiệp",
  "Ban Quản lý Vườn Quốc gia Núi Chúa – Phước Bình", "Ban Quản lý dự án đầu tư xây dựng", "Ban QLDA đầu tư xây dựng các công trình Nông nghiệp và Giao thông",
];

const UBND_XA = [
  "UBND xã Nam Cam Ranh", "UBND xã Bắc Ninh Hòa", "UBND xã Tân Định",
  "UBND xã Nam Ninh Hòa", "UBND xã Tây Ninh Hòa", "UBND xã Hòa Trí",
  "UBND xã Đại Lãnh", "UBND xã Tu Bông", "UBND xã Vạn Thắng",
  "UBND xã Vạn Ninh", "UBND xã Vạn Hưng", "UBND xã Diên Khánh",
  "UBND xã Diên Lạc", "UBND xã Diên Điền", "UBND xã Diên Lâm",
  "UBND xã Diên Thọ", "UBND xã Suối Hiệp", "UBND xã Cam Lâm",
  "UBND xã Suối Dầu", "UBND xã Cam Hiệp", "UBND xã Cam An",
  "UBND xã Bắc Khánh Vĩnh", "UBND xã Trung Khánh Vĩnh", "UBND xã Tây Khánh Vĩnh",
  "UBND xã Nam Khánh Vĩnh", "UBND xã Khánh Vĩnh", "UBND xã Khánh Sơn",
  "UBND xã Tây Khánh Sơn", "UBND xã Đông Khánh Sơn", "UBND xã Ninh Phước",
  "UBND xã Bác Ái Tây", "UBND xã Bác Ái", "UBND xã Bác Ái Đông",
  "UBND xã Mỹ Sơn", "UBND xã Anh Dũng", "UBND xã Lâm Sơn",
  "UBND xã Ninh Sơn", "UBND xã Công Hải", "UBND xã Thuận Bắc",
  "UBND xã Vĩnh Hải", "UBND xã Xuân Hải", "UBND xã Ninh Hải",
  "UBND xã Phước Dinh", "UBND xã Phước Hà", "UBND xã Cà Ná",
  "UBND xã Thuận Nam", "UBND xã Phước Hậu", "UBND xã Phước Hữu",
  "UBND phường Đô Vinh", "UBND phường Bảo An", "UBND phường Ninh Chử",
  "UBND phường Đông Hải", "UBND phường Phan Rang", "UBND phường Hòa Thắng",
  "UBND phường Đông Ninh Hòa", "UBND phường Ninh Hòa", "UBND phường Ba Ngòi",
  "UBND phường Cam Linh", "UBND phường Cam Ranh", "UBND phường Bắc Cam Ranh",
  "UBND phường Nam Nha Trang", "UBND phường Tây Nha Trang", "UBND phường Bắc Nha Trang",
  "UBND phường Nha Trang", "UBND Đặc khu Trường Sa",
];

const WEBSITE_LINKS: Record<string, string[]> = {
  "-- Chính phủ, bộ ngành --": ["Cổng TTĐT Chính phủ", "Bộ Nội vụ", "Bộ Tài chính", "Bộ Công Thương", "Bộ Y tế", "Bộ Giáo dục và Đào tạo"],
  "-- Các tỉnh, thành phố --": ["TP. Hà Nội", "TP. Hồ Chí Minh", "TP. Đà Nẵng", "Tỉnh Ninh Thuận", "Tỉnh Phú Yên", "Tỉnh Bình Thuận"],
  "-- Tổ chức chính trị --": ["Đảng Cộng sản Việt Nam", "Mặt trận Tổ quốc", "Đoàn TNCS Hồ Chí Minh", "Hội Liên hiệp Phụ nữ", "Tổng Liên đoàn Lao động"],
  "-- Đơn vị sự nghiệp --": ["Đại học Nha Trang", "Bệnh viện Đa khoa tỉnh", "Đài PT-TH Khánh Hòa", "Báo Khánh Hòa"],
  "-- Website khác --": ["Cổng Dịch vụ công Quốc gia", "Hệ thống văn bản QPPL", "Bảo hiểm xã hội Việt Nam", "Tổng cục Thuế"],
};

type PolicyItem = { title: string; date: string; image: string };
type PolicyTabData = { featured: PolicyItem; rest: readonly PolicyItem[] };

function PolicyBlock<K extends string>({ tabs, keys }: { tabs: Record<K, PolicyTabData>; keys: readonly K[] }) {
  const [active, setActive] = useState<K>(keys[0]);
  const data = tabs[active];
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      <div className="flex items-end justify-between gap-4 border-b mb-4">
        <div className="flex items-center gap-1 flex-wrap">
          {keys.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-4 py-2.5 text-sm font-bold tracking-wide transition-colors ${
                active === tab ? "text-gov-blue-dark" : "text-muted-foreground hover:text-gov-blue-dark"
              }`}
            >
              <span className="flex items-center gap-2">
                <Megaphone className={`h-4 w-4 ${active === tab ? "text-gov-red" : "text-muted-foreground"}`} />
                {tab}
              </span>
              {active === tab && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gov-red" />}
            </button>
          ))}
        </div>
        <a href="#" className="group hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-gov-red hover:underline pb-2.5 shrink-0">
          Xem tất cả <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
        <a href="#" className="group flex flex-col">
          <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
            <img
              src={data.featured.image}
              alt={data.featured.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="mt-3 text-lg font-bold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{data.featured.title}</p>
          <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {data.featured.date}</p>
        </a>
        <div className="flex flex-col divide-y h-full">
          {data.rest.map((p, i) => (
            <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
              <img
                src={p.image}
                alt={p.title}
                width={512}
                height={512}
                loading="lazy"
                className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover"
              />
              <div className="flex flex-col justify-center min-w-0">
                <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{p.title}</p>
                <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 flex sm:hidden justify-end">
        <a href="#" className="group inline-flex items-center gap-1 text-sm font-semibold text-gov-red hover:underline">
          Xem tất cả bài viết <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function getDeptIcon(name: string): LucideIcon {
  const n = name.toLowerCase();
  if (n.includes("nội vụ")) return Users;
  if (n.includes("tư pháp")) return Scale;
  if (n.includes("văn phòng ubnd")) return Building2;
  if (n.includes("tài chính")) return Coins;
  if (n.includes("thanh tra")) return ShieldCheck;
  if (n.includes("xây dựng") && !n.includes("đầu tư")) return Hammer;
  if (n.includes("công thương")) return Factory;
  if (n.includes("khoa học")) return FlaskConical;
  if (n.includes("giáo dục")) return GraduationCap;
  if (n.includes("nông nghiệp") && n.includes("môi trường")) return Sprout;
  if (n.includes("nông nghiệp")) return Sprout;
  if (n.includes("văn hóa")) return Music;
  if (n.includes("y tế")) return HeartPulse;
  if (n.includes("dân tộc") || n.includes("tôn giáo")) return Handshake;
  if (n.includes("vườn quốc gia") || n.includes("núi chúa")) return TreePine;
  if (n.includes("khu kinh tế") || n.includes("khu công nghiệp")) return Factory;
  if (n.includes("giao thông")) return Truck;
  if (n.includes("đầu tư xây dựng") || n.includes("dự án")) return FolderKanban;
  if (n.includes("ban quản lý") || n.includes("ban ")) return Briefcase;
  if (n.includes("đặc khu") || n.includes("trường sa")) return Waves;
  if (n.includes("phường")) return Building2;
  if (n.includes("xã")) return HomeIcon;
  return Landmark;
}

function DepartmentsBlock() {
  const tabs = [
    { key: "so-ban" as const, label: "CÁC SỞ, BAN", icon: Building2, data: SO_BAN },
    { key: "ubnd" as const, label: "UBND CÁC XÃ, PHƯỜNG, ĐẶC KHU", icon: Landmark, data: UBND_XA },
  ];
  const [active, setActive] = useState<"so-ban" | "ubnd">("so-ban");
  const [query, setQuery] = useState("");
  const current = tabs.find((t) => t.key === active)!;
  const filtered = current.data.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase().trim()),
  );
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-1 border-b mb-4 flex-wrap">
        {tabs.map((t) => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              onClick={() => { setActive(t.key); setQuery(""); }}
              className={`relative px-4 py-2.5 text-sm font-bold tracking-wide transition-colors flex items-center gap-2 ${
                isActive ? "text-gov-blue-dark" : "text-muted-foreground hover:text-gov-blue-dark"
              }`}
            >
              <t.icon className={`h-4 w-4 ${isActive ? "text-gov-red" : ""}`} />
              {t.label}
              {isActive && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gov-red" />}
            </button>
          );
        })}
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Tìm kiếm trong ${current.label.toLowerCase()}...`}
          className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gov-blue/40 transition"
        />
      </div>
      <div
        key={active}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1 flex-1 min-h-0 overflow-y-auto pr-1 animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        {filtered.length === 0 ? (
          <p className="col-span-full text-sm text-muted-foreground py-6 text-center">
            Không tìm thấy kết quả phù hợp.
          </p>
        ) : (
          filtered.map((d, i) => {
            const Icon = getDeptIcon(d);
            return (
              <a
                key={i}
                href="#"
                className="group text-sm text-foreground hover:text-gov-red flex items-center gap-2.5 py-1.5 transition-colors"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gov-blue/10 text-gov-blue transition-colors group-hover:bg-gov-blue group-hover:text-white">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="truncate">{d}</span>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}

function WebsiteLinksBlock() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm h-full flex flex-col">
      <h4 className="flex items-center gap-2 font-bold text-gov-blue-dark mb-4 text-sm uppercase border-b-2 border-gov-red/40 pb-2">
        <Sparkles className="h-4 w-4 text-gov-red" />
        Liên kết Website
      </h4>
      <div className="flex flex-col gap-2 flex-1 justify-between">
        {Object.entries(WEBSITE_LINKS).map(([category, links]) => {
          const isOpen = open === category;
          return (
            <div key={category} className="rounded-lg border border-border overflow-hidden flex-1 flex flex-col min-h-[44px]">
              <button
                onClick={() => setOpen(isOpen ? null : category)}
                className="w-full flex flex-1 items-center justify-between px-3 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gov-blue" />
                  {category}
                </span>
                <ChevronRight
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="bg-muted/30 px-3 py-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  {links.map((l, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-xs text-foreground hover:text-gov-red flex items-center gap-2 py-1"
                    >
                      <span className="h-1 w-1 rounded-full bg-gov-orange shrink-0" />
                      {l}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
      <div className="container mx-auto px-4 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {QUICK_LINKS.map((q, i) => (
          <a
            key={i}
            href="#"
            className="group flex flex-col items-center justify-start gap-3 rounded-xl border border-border bg-card p-4 text-center shadow-sm hover:border-gov-blue hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className={`h-12 w-12 rounded-xl ${q.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
              <q.icon className="h-6 w-6" />
            </div>
            <p className="text-xs font-semibold text-gov-blue-dark group-hover:text-gov-blue leading-snug">{q.label}</p>
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
      <div className="container mx-auto px-4 mt-8 grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3 space-y-6">
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

          {/* Policy news with tabs - synced with directives layout */}
          {(() => {
            const POLICY_TABS = {
              "CHÍNH SÁCH MỚI": {
                featured: { title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ nổi bật tuần từ 11-17/4/2026", date: "17/04/2026", image: policyFeatured },
                rest: [
                  { title: "Sách giáo khoa điện tử không được chèn quảng cáo, nội dung kinh doanh", date: "17/04/2026", image: policyThumb1 },
                  { title: "SẮP XẾP TRƯỜNG HỌC: Chỉ sáp nhập trường, điểm trường trong phạm vi 1 đơn vị hành chính cấp xã", date: "17/04/2026", image: policyThumb2 },
                  { title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ nổi bật tuần từ 4-10/4/2026", date: "14/04/2026", image: policyThumb3 },
                ],
              },
              "THAM VẤN VÀ LẤY Ý KIẾN": {
                featured: { title: "Lấy ý kiến dự thảo Nghị quyết về phát triển kinh tế - xã hội tỉnh Khánh Hòa", date: "16/04/2026", image: policyThumb2 },
                rest: [
                  { title: "Tham vấn dự thảo Quy chế quản lý kiến trúc đô thị thành phố Nha Trang", date: "15/04/2026", image: policyFeatured },
                  { title: "Lấy ý kiến nhân dân về Đề án phát triển du lịch bền vững giai đoạn 2026-2030", date: "12/04/2026", image: policyThumb1 },
                  { title: "Dự thảo Quy định về quản lý hoạt động khoáng sản trên địa bàn tỉnh", date: "10/04/2026", image: policyThumb3 },
                ],
              },
            } as const;
            type PolicyTab = keyof typeof POLICY_TABS;
            const policyKeys = Object.keys(POLICY_TABS) as PolicyTab[];
            return <PolicyBlock tabs={POLICY_TABS} keys={policyKeys} />;
          })()}

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
          <PolicyBlock tabs={CITIZEN_BUSINESS_TABS} keys={newsTabKeys} />
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
          <div className="space-y-3">
            {SIDE_BANNERS.map((b, i) => (
              <a
                key={i}
                href="#"
                className="group relative block overflow-hidden rounded-xl bg-gradient-to-br from-gov-blue to-gov-blue-dark px-5 py-5 min-h-[68px] text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                {/* Hình mờ làm nền */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -bottom-3 text-[88px] leading-none opacity-15 group-hover:opacity-25 group-hover:scale-110 transition-all duration-500 select-none"
                >
                  {b.emoji}
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%)]"
                />
                {/* Nội dung text */}
                <span className="relative z-10 block text-[13px] font-bold leading-tight tracking-wide drop-shadow-sm">
                  {b.label}
                </span>
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

            {/* Quick info tabs (moved from below) */}
            <a href="#" className="rounded-lg bg-gov-green/15 px-3 py-2 text-gov-green font-semibold flex items-center gap-2 text-xs hover:bg-gov-green/25 transition">
              <Scale className="h-4 w-4 shrink-0" />
              <span>AI Pháp luật <span className="text-[10px] text-muted-foreground font-normal">Cổng pháp luật quốc gia</span></span>
            </a>
            <a href="#" className="rounded-lg bg-gov-red/15 px-3 py-2 text-gov-red font-semibold flex items-center gap-2 text-xs hover:bg-gov-red/25 transition">
              <FileText className="h-4 w-4 shrink-0" /> Thông tin BHXH Khánh Hòa
            </a>
            <a href="#" className="rounded-lg bg-gov-blue/15 px-3 py-2 text-gov-blue font-semibold flex items-center gap-2 text-xs hover:bg-gov-blue/25 transition">
              <BarChart3 className="h-4 w-4 shrink-0" /> Bản đồ số 65 xã, phường, đặc khu
            </a>
            <a href="#" className="rounded-lg bg-gov-cyan/15 px-3 py-2 text-gov-cyan font-semibold flex items-center gap-2 text-xs hover:bg-gov-cyan/25 transition">
              <Search className="h-4 w-4 shrink-0" /> Tra cứu giá đất
            </a>
            <a href="#" className="rounded-lg bg-gov-orange/15 px-3 py-2 text-gov-orange font-semibold flex items-center gap-2 text-xs hover:bg-gov-orange/25 transition">
              <BookOpen className="h-4 w-4 shrink-0" /> Công khai ngân sách
            </a>
            <div className="rounded-lg bg-card border p-3 text-center">
              <QrCode className="h-16 w-16 mx-auto text-gov-blue-dark" />
              <p className="text-xs font-bold text-gov-blue-dark mt-1">Zalo OA</p>
              <p className="text-[10px] text-muted-foreground">Cổng TTĐT Khánh Hòa</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ CẤP 3 — ĐA DẠNG NỘI DUNG ============ */}
      <PageHero level="CẤP 3" topic="ĐA DẠNG NỘI DUNG" title="Du khách, Chuyên trang & " highlight="Truyền thông" />

      <div className="container mx-auto px-4">
        {/* Tourism block */}
        <div className="rounded-xl bg-card shadow-sm overflow-hidden">
          <TourismTabs />

          {/* Charts */}
          <div className="border-t p-5">
            <div className="flex items-center gap-2 border-b-2 border-gov-blue/20 pb-2 mb-4">
              <BarChart3 className="h-5 w-5 text-gov-blue-dark" />
              <h4 className="font-bold text-gov-blue-dark tracking-wide">ĐỒ HỌA TRỰC QUAN</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CHARTS.map((c, i) => (
                <a key={i} href="#" className="group rounded-md overflow-hidden bg-card border border-border hover:shadow-md transition flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      width={512}
                      height={384}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-2.5 bg-gov-blue/10 flex-1 flex items-start">
                    <p className="text-sm font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-2">{c.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Chuyên trang */}
          <div className="border-t p-5">
            <h4 className="font-bold text-gov-blue-dark mb-4 text-sm uppercase tracking-wide border-b-2 border-gov-blue/30 pb-2 inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gov-blue" /> Chuyên trang, chuyên mục
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {CHUYEN_TRANG.map((c, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-gov-blue hover:border-gov-blue hover:bg-gov-blue/5 hover:text-gov-blue-dark hover:shadow-sm transition-all"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gov-blue/10 text-gov-blue group-hover:bg-gov-blue group-hover:text-white transition-colors">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="leading-snug">{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Video clip */}
          <div className="border-t p-5">
            <h4 className="font-bold text-gov-blue border-b-2 border-gov-blue/30 pb-2 mb-5 inline-flex items-center gap-2 uppercase text-sm tracking-wide">
              <Play className="h-4 w-4 fill-gov-blue" /> Video clip
            </h4>
            <div className="grid md:grid-cols-12 gap-5">
              {/* Featured video */}
              <a href="#" className="group block md:col-span-7">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img src={videoMain} alt="Giải pháp giúp hộ kinh doanh kê khai thuế đúng" loading="lazy" width={1024} height={576} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="h-7 w-7 text-gov-red fill-gov-red ml-1" />
                    </div>
                  </div>
                </div>
                <h5 className="mt-3 font-serif text-lg leading-snug text-foreground group-hover:text-gov-red">
                  Giải pháp giúp hộ kinh doanh kê khai thuế đúng, an tâm tuân thủ, phát triển bền vững
                </h5>
              </a>

              {/* Video list */}
              <ul className="md:col-span-5 flex flex-col justify-between gap-3">
                {[
                  { img: video1, title: "Nhiều điểm mới trong công tác tuyển sinh lớp 1...", date: "16/03/2026 - 08:34 AM" },
                  { img: video2, title: "Đồng bào Chăm với ngày hội non sông", date: "13/03/2026 - 03:34 PM" },
                  { img: video3, title: "Bí thư Tỉnh ủy Khánh Hòa Nghiêm Xuân Thành chú...", date: "17/02/2026 - 12:04 PM" },
                  { img: video4, title: "Tết ấm trong những ngôi nhà Quang Trung", date: "16/02/2026 - 03:13 PM" },
                  { img: video5, title: "Hướng về Đại hội đại biểu toàn quốc lần thứ XIV của...", date: "19/01/2026 - 07:52 AM" },
                ].map((v, i) => (
                  <li key={i} className="flex-1">
                    <a href="#" className="flex gap-3 group items-center h-full">
                      <div className="relative h-16 w-24 shrink-0 rounded overflow-hidden">
                        <img src={v.img} alt={v.title} loading="lazy" width={96} height={64} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white fill-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-serif text-foreground group-hover:text-gov-red leading-snug line-clamp-2">{v.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{v.date}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* National service banners */}
      <div className="container mx-auto px-4 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Star,
            title: "Cổng dịch vụ công Quốc gia",
            desc: "Kết nối, cung cấp thông tin và dịch vụ công mọi lúc, mọi nơi",
            gradient: "from-gov-red to-gov-red-dark",
          },
          {
            icon: Sparkles,
            title: "Cải cách hành chính tỉnh Khánh Hòa",
            desc: "Hệ thống đánh giá, kết nối tổ chức và người dân",
            gradient: "from-gov-blue to-gov-cyan",
          },
          {
            icon: Megaphone,
            title: "Hệ thống phản ánh, kiến nghị về kinh tế - xã hội",
            desc: "Tiếp nhận phản ánh của người dân, doanh nghiệp tỉnh Khánh Hòa",
            gradient: "from-gov-orange to-gov-red",
          },
          {
            icon: FileText,
            title: "Phản ánh kiến nghị về thủ tục hành chính",
            desc: "Kênh tiếp nhận và xử lý phản ánh thủ tục hành chính",
            gradient: "from-gov-blue-dark to-gov-blue",
          },
        ].map((b, i) => {
          const Icon = b.icon;
          return (
            <a
              key={i}
              href="#"
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${b.gradient} text-white p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all`}
            >
              <Icon
                className="absolute -right-4 -bottom-4 h-32 w-32 text-white/10 pointer-events-none"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="relative shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                <Icon className="h-6 w-6 text-gov-yellow" />
              </div>
              <div className="relative min-w-0">
                <p className="font-extrabold uppercase text-sm leading-tight">{b.title}</p>
                <p className="text-xs text-white/80 mt-1 line-clamp-2">{b.desc}</p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Departments + Website Links */}
      <div className="container mx-auto px-4 mt-8 grid lg:grid-cols-[1fr_320px] gap-6 items-stretch">
        <DepartmentsBlock />
        <WebsiteLinksBlock />
      </div>
    </SiteLayout>
  );
}

const TOURISM_INTRO = [
  { title: "Khai mạc Lễ hội Am Chúa năm 2026", date: "12/04/2026", image: tourismFeatured },
  { title: "Tiềm năng du lịch nghỉ dưỡng và chăm sóc sức khỏe", date: "10/04/2026", image: tourismThumb1 },
  { title: "Anex Tour Vietnam sẽ đưa 180.000 khách quốc tế đến Khánh Hòa trong mùa du lịch hè 2026", date: "07/04/2026", image: tourismThumb2 },
  { title: "Du thuyền Star Voyager sẽ đến Nha Trang trong chuyến hải trình mùa hè", date: "05/04/2026", image: tourismThumb3 },
];

const TIN_ANH = {
  featured: { title: "3.000 phụ nữ Khánh Hòa rực rỡ trong màn diễu hành tôn vinh áo dài", date: "08/03/2026", image: tourismFeatured },
  rest: [
    { title: "Nô nức bầu cử sớm tại Lữ đoàn Đặc công nước 5", date: "05/03/2026", image: tourismThumb1 },
    { title: "Ngày hội tòng quân tại điểm giao, nhận quân ở xã Diên Khánh", date: "04/03/2026", image: tourismThumb2 },
    { title: "Du xuân trên cung đường biển đẹp nhất Khánh Hòa", date: "17/02/2026", image: tourismThumb3 },
  ],
};

function TourismTabs() {
  const [tab, setTab] = useState<"intro" | "photo">("intro");
  return (
    <>
      <div className="flex items-end justify-between gap-4 border-b px-1">
        <div className="flex">
          {[
            { key: "intro" as const, label: "GIỚI THIỆU ĐẾN DU KHÁCH" },
            { key: "photo" as const, label: "TIN ẢNH" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-3 text-sm font-bold transition-colors ${
                tab === t.key
                  ? "text-gov-blue border-b-2 border-gov-blue"
                  : "text-muted-foreground hover:text-gov-blue-dark"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <a href="#" className="group hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-gov-red hover:underline pb-3 pr-4 shrink-0">
          Xem tất cả <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
      {tab === "intro" ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 animate-in fade-in duration-300">
          {TOURISM_INTRO.map((n, i) => (
            <a key={i} href="#" className="group block rounded-lg overflow-hidden bg-card border hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={n.image} alt={n.title} width={600} height={450} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3 min-h-[3.75rem]">{n.title}</p>
                <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 p-5 animate-in fade-in duration-300">
          <a href="#" className="group flex flex-col">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img src={TIN_ANH.featured.image} alt={TIN_ANH.featured.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gov-blue-dark/90 to-transparent p-4">
                <p className="text-white font-semibold leading-snug line-clamp-2">{TIN_ANH.featured.title}</p>
              </div>
            </div>
          </a>
          <div className="flex flex-col divide-y h-full">
            {TIN_ANH.rest.map((p, i) => (
              <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
                <img src={p.image} alt={p.title} width={512} height={512} loading="lazy" className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover" />
                <div className="flex flex-col justify-center min-w-0">
                  <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{p.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
