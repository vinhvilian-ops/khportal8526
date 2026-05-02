import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Megaphone,
  CalendarDays,
  FileSignature,
  FileCheck2,
  MessageSquare,
  FilePlus2,
  Search,
  Play,
  Globe,
  ArrowRight,
  Building,
  BarChart3,
  BookOpen,
  Mic,
  Newspaper,
  ShieldCheck,
  CheckCircle2,
  Vote,
} from "lucide-react";

import leaderFeatured from "@/assets/leader-featured.jpg";
import leaderThumb1 from "@/assets/leader-thumb-1.jpg";
import leaderThumb2 from "@/assets/leader-thumb-2.jpg";
import leaderThumb3 from "@/assets/leader-thumb-3.jpg";
import infoFeatured from "@/assets/dir-1.jpg";
import info2 from "@/assets/dir-2.jpg";
import info3 from "@/assets/dir-3.jpg";
import info4 from "@/assets/dir-4.jpg";

import videoMain from "@/assets/video-main.jpg";
import policyFeatured from "@/assets/policy-featured.jpg";
import policyThumb1 from "@/assets/policy-thumb-1.jpg";
import policyThumb2 from "@/assets/policy-thumb-2.jpg";
import policyThumb3 from "@/assets/policy-thumb-3.jpg";

import leaderChairman from "@/assets/leader-chairman.jpg";
import leaderVc1 from "@/assets/leader-vc1.jpg";
import leaderVc2 from "@/assets/leader-vc2.jpg";
import leaderVc3 from "@/assets/leader-vc3.jpg";
import leaderVc4 from "@/assets/leader-vc4.jpg";

import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";
import video4 from "@/assets/video-4.jpg";
import video5 from "@/assets/video-5.jpg";
import dir5 from "@/assets/dir-5.jpg";
import dir6 from "@/assets/dir-6.jpg";
import info1 from "@/assets/info-1.jpg";
import info2img from "@/assets/info-2.jpg";
import info3img from "@/assets/info-3.jpg";
import info4img from "@/assets/info-4.jpg";


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
  { icon: Landmark, title: "Tỉnh ủy Khánh Hòa", desc: "Cơ quan lãnh đạo của Đảng bộ tỉnh, định hướng các chủ trương, đường lối phát triển toàn diện của tỉnh." },
  { icon: Users2, title: "Đoàn ĐBQH & HĐND tỉnh", desc: "Đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân; quyết định những vấn đề quan trọng của địa phương." },
  { icon: Building2, title: "Ủy ban Nhân dân tỉnh", desc: "Cơ quan chấp hành của HĐND, cơ quan hành chính nhà nước cao nhất tại địa phương, tổ chức thực hiện Hiến pháp và pháp luật." },
  { icon: Gavel, title: "Ủy ban MTTQ Việt Nam tỉnh", desc: "Tổ chức liên minh chính trị, liên hiệp tự nguyện, tập hợp khối đại đoàn kết toàn dân tộc trên địa bàn tỉnh." },
  { icon: Briefcase, title: "Các Sở, Ban, Ngành", desc: "19 cơ quan chuyên môn tham mưu, giúp UBND tỉnh quản lý nhà nước về ngành, lĩnh vực tại địa phương." },
  { icon: MapPin, title: "UBND xã, phường, đặc khu", desc: "Chính quyền địa phương cấp xã sau sắp xếp, trực tiếp phục vụ Nhân dân, tổ chức thực hiện nhiệm vụ tại cơ sở." },
  { icon: ScrollText, title: "Văn bản chỉ đạo điều hành", desc: "Hệ thống văn bản quy phạm pháp luật, nghị quyết, quyết định, chỉ thị của lãnh đạo tỉnh." },
  { icon: FileText, title: "Lịch công tác lãnh đạo tỉnh", desc: "Lịch làm việc hằng tuần của Thường trực Tỉnh ủy, HĐND, lãnh đạo UBND tỉnh." },
];

const SO_BAN_NGANH = [
  "Sở Nội vụ", "Sở Tư pháp", "Văn phòng UBND tỉnh",
  "Sở Tài chính", "Thanh tra tỉnh", "Sở Xây dựng",
  "Sở Công Thương", "Sở Khoa học và Công nghệ", "Sở Giáo dục và Đào tạo",
  "Sở Nông nghiệp và Môi trường", "Sở Văn hóa, Thể thao và Du lịch", "Sở Y tế",
  "Sở Dân tộc và Tôn giáo", "Sở Ngoại vụ", "Sở Lao động - TB&XH",
  "Ban Quản lý Khu kinh tế Vân Phong", "Ban Quản lý các dự án phát triển tỉnh", "Ban QLDA đầu tư xây dựng",
  "Báo Khánh Hòa", "Đài PT-TH Khánh Hòa", "Ban QL Vườn Quốc gia Núi Chúa - Phước Bình",
];

const UBND_XA = [
  "Phường Nha Trang", "Phường Cam Ranh", "Phường Phan Rang",
  "Phường Vĩnh Hải", "Phường Diên Khánh", "Phường Ninh Hòa",
  "Xã Vạn Ninh", "Xã Khánh Sơn", "Xã Khánh Vĩnh",
  "Xã Cam Lâm", "Xã Ninh Sơn", "Xã Bác Ái",
  "Đặc khu Trường Sa", "Đặc khu Vân Phong",
];

const LIEN_KET_WEB = [
  "Chính phủ, bộ ngành",
  "Các tỉnh, thành phố",
  "Tổ chức chính trị",
  "Đơn vị sự nghiệp",
  "Website khác",
];

const CHU_TICH = { title: "CHỦ TỊCH UBND TỈNH", name: "NGUYỄN VIỆT HÙNG", role: "Chủ tịch UBND tỉnh Khánh Hòa", photo: leaderChairman };
const PHO_CHU_TICH = [
  { role: "Phó Chủ tịch Thường trực", name: "NGUYỄN LONG BIÊN", photo: leaderVc1 },
  { role: "Phó Chủ tịch", name: "TRẦN HÒA NAM", photo: leaderVc2 },
  { role: "Phó Chủ tịch", name: "LÊ HUYỀN", photo: leaderVc3 },
  { role: "Phó Chủ tịch", name: "NGUYỄN THANH HÀ", photo: leaderVc4 },
];

/* Hoạt động lãnh đạo tỉnh */
const LEADER_FEATURED = {
  img: leaderFeatured,
  tag: "TIN NỔI BẬT",
  date: "20/04/2026",
  title:
    "Phó Chủ tịch Thường trực UBND tỉnh Nguyễn Long Biên thăm, tặng quà người có công với cách mạng tại phường Phan Rang",
};
const LEADER_GRID = [
  { img: leaderThumb1, date: "20/04/2026", title: "Rà soát, đánh giá thực trạng đội ngũ chuyên trách công nghệ thông tin cấp xã, phường" },
  { img: leaderThumb2, date: "20/04/2026", title: "Phó Chủ tịch UBND tỉnh Lê Huyền thăm, tặng quà gia đình người có công tại xã Đông Khánh Sơn" },
  { img: leaderThumb3, date: "20/04/2026", title: "Rà soát toàn bộ hồ sơ Dự án đầu tư hỗ trợ phát triển vùng dược liệu quý" },
  { img: infoFeatured, date: "19/04/2026", title: "Đẩy mạnh xúc tiến đầu tư, hướng tới tăng trưởng con số trong năm 2026" },
];

/* Shortcut quick */
const SHORTCUTS = [
  { icon: CalendarDays, label: "Lịch làm việc của lãnh đạo UBND tỉnh" },
  { icon: FileSignature, label: "Văn bản chỉ đạo điều hành" },
  { icon: FileCheck2, label: "Văn bản sao y" },
  { icon: MessageSquare, label: "Lấy ý kiến dự thảo văn bản QPPL" },
  { icon: FilePlus2, label: "Văn bản mới" },
  { icon: Search, label: "Tra cứu CSDL Thủ tục hành chính" },
];

/* Tabs Thông tin chỉ đạo điều hành */
const TAB_INDIEU_HANH = {
  "Thông tin chỉ đạo điều hành": {
    main: { img: infoFeatured, title: "Phân cấp quản lý nhà nước về đất đai trên địa bàn tỉnh Khánh Hòa", date: "21/04/2026" },
    list: [
      { img: info2, title: "Triển khai cơ chế, chính sách đặc biệt tạo đột phá cho công tác bảo vệ, chăm sóc sức khỏe nhân dân", date: "21/04/2026" },
      { img: info3, title: "Phát triển ngành thép Khánh Hòa theo hướng hiện đại, bền vững", date: "20/04/2026" },
      { img: info4, title: "Đẩy mạnh kiểm tra trực tuyến đăng ký kinh doanh, nâng cao hiệu quả quản lý nhà nước", date: "20/04/2026" },
    ],
  },
  "Hoạt động Sở, ngành, địa phương": {
    main: { img: leaderThumb1, title: "Hội nghị triển khai nhiệm vụ phát triển KT-XH năm 2026 tại các sở ngành", date: "19/04/2026" },
    list: [
      { img: leaderThumb2, title: "Sở Nông nghiệp & Môi trường tổ chức tập huấn cho cán bộ cấp xã", date: "18/04/2026" },
      { img: leaderThumb3, title: "Sở Y tế triển khai chiến dịch tiêm chủng mở rộng đợt II/2026", date: "18/04/2026" },
      { img: info4, title: "UBND phường Nha Trang ra quân lập lại trật tự đô thị tuyến biển", date: "17/04/2026" },
    ],
  },
};

const CHI_DAO_CP = [
  "Thành lập Ban Chỉ đạo triển khai Đề án \"Chuyển đổi số trong hoạt động tổ chức...\"",
  "Phân công soạn thảo 9 dự án luật",
  "100% CBCC cấp xã chưa đáp ứng yêu cầu chuyên môn vị trí việc làm được cử đi bồi dưỡng",
  "Kéo dài thời gian giữ chức vụ đối với 2 cán bộ thuộc Bộ Quốc phòng",
  "Tiêu chí phân bổ vốn đầu tư công từ ngân sách trung ương cho địa phương giai đoạn 2026–2030",
];

/* Tabs CCHC / Thi đua / Phòng chống tham nhũng */
const TAB_CCHC = {
  "Cải cách hành chính": {
    main: { img: policyFeatured, title: "Cải thiện chất lượng phục vụ, nâng cao mức độ hài lòng của người dân, tổ chức, doanh nghiệp" },
    list: [
      { img: policyThumb1, title: "BIDV Chi nhánh Khánh Hòa và Trung tâm Phục vụ hành chính công hợp tác triển khai \"Điểm hỗ trợ thực hiện dịch vụ công\"", date: "16/04/2026" },
      { img: policyThumb2, title: "Ban hành Bộ khung nhiệm vụ cải thiện, nâng cao Chỉ số PAPI", date: "13/04/2026" },
      { img: policyThumb3, title: "Từ ngày 1-4-2026, triển khai ký số kết quả giải quyết hồ sơ thủ tục hành chính lĩnh vực đăng ký doanh nghiệp", date: "03/04/2026" },
    ],
  },
  "Thi đua - Khen thưởng": {
    main: { img: leaderThumb1, title: "Phát động phong trào thi đua yêu nước năm 2026 trong toàn tỉnh" },
    list: [
      { img: leaderThumb2, title: "Tuyên dương 50 điển hình tiên tiến trong học tập và làm theo Bác", date: "15/04/2026" },
      { img: leaderThumb3, title: "Khen thưởng các tập thể, cá nhân xuất sắc trong CCHC năm 2025", date: "10/04/2026" },
      { img: info2, title: "Hội nghị tổng kết phong trào thi đua \"Vì người nghèo\"", date: "05/04/2026" },
    ],
  },
  "Phòng, chống tham nhũng": {
    main: { img: info3, title: "Tăng cường công tác phòng, chống tham nhũng, tiêu cực trong các cơ quan hành chính" },
    list: [
      { img: info4, title: "Triển khai kê khai tài sản, thu nhập năm 2026 đối với người có nghĩa vụ", date: "12/04/2026" },
      { img: policyThumb1, title: "Tổ chức tập huấn nghiệp vụ phòng chống tham nhũng cho cán bộ cấp xã", date: "08/04/2026" },
      { img: policyThumb2, title: "Công bố kết quả thanh tra, kiểm tra đột xuất quý I/2026", date: "02/04/2026" },
    ],
  },
};

/* Tabs Kinh tế - Xã hội / Quy hoạch - Kế hoạch */
const TAB_KTXH = {
  "Thông tin Kinh tế - Xã hội": {
    main: { img: info1, title: "Tăng cường quản lý, điều hành và bình ổn giá trên địa bàn tỉnh", date: "29/04/2026" },
    list: [
      { img: info2img, title: "Phát triển ngành sữa, Khánh Hòa đẩy mạnh hạ tầng logistics lạnh, nâng cao giá trị chuỗi sản xuất", date: "29/04/2026" },
      { img: info3img, title: "Khánh Hòa mở rộng thu phí không dùng, thúc đẩy chuyển đổi số trong lĩnh vực đường bộ", date: "29/04/2026" },
      { img: info4img, title: "Họp báo tình hình kinh tế - xã hội quý I-2026", date: "23/04/2026" },
    ],
  },
  "Thông tin Quy hoạch - Kế hoạch": {
    main: { img: dir5, title: "Công bố Quy hoạch tỉnh Khánh Hòa thời kỳ 2021-2030, tầm nhìn đến năm 2050", date: "28/04/2026" },
    list: [
      { img: dir6, title: "Kế hoạch sử dụng đất năm 2026 trên địa bàn tỉnh Khánh Hòa", date: "27/04/2026" },
      { img: info2img, title: "Phê duyệt nhiệm vụ Quy hoạch chung đô thị Cam Ranh đến năm 2045", date: "26/04/2026" },
      { img: info3img, title: "Triển khai kế hoạch đầu tư công trung hạn giai đoạn 2026-2030", date: "25/04/2026" },
    ],
  },
};

/* Người phát ngôn */
const NGUOI_PHAT_NGON = [
  { title: "Người phát ngôn và cung cấp thông tin cho báo chí của UBND tỉnh", date: "20/04/2026" },
  { title: "Danh sách người phát ngôn và cung cấp thông tin cho báo chí của các cơ quan, đơn vị", date: "15/04/2026" },
];

/* Quick links lãnh đạo (sidebar) */
const QUICK_LINKS_LD = [
  { label: "Thường trực HĐND tỉnh", color: "bg-gov-red" },
  { label: "Lãnh đạo UBND tỉnh", color: "bg-gov-red" },
  { label: "Lãnh đạo xã, phường, đặc khu", color: "bg-gov-red" },
];

/* Đồ họa trực quan */
const DO_HOA = [
  { img: dir5, title: "Hướng dẫn cập nhật thông tin CC/CCCD cho thuê bao di động" },
  { img: dir6, title: "Hướng dẫn xác thực thông tin bảo vệ sim chính chủ" },
  { img: info1, title: "Hỗ trợ phụ nữ khởi nghiệp giai đoạn 2026 - 2035" },
  { img: info2img, title: "Tháng hành động vì an toàn thực phẩm năm 2026" },
];

/* Chuyên trang */
const CHUYEN_TRANG = [
  "Dự án, Đầu tư, mua sắm công",
  "Nghiệp vụ Kho bạc Nhà nước",
];

/* Video clips trang chính quyền */
const VIDEO_LIST = [
  { img: video1, title: "Nhiều điểm mới trong công tác tuyển sinh lớp 1...", date: "16/03/2026 - 08:34" },
  { img: video2, title: "Đồng bào Chăm với ngày hội non sông", date: "13/03/2026 - 03:34" },
  { img: video3, title: "Bí thư Tỉnh ủy Khánh Hòa Nghiêm Xuân Thành chú...", date: "17/02/2026 - 12:04" },
  { img: video4, title: "Tết ấm trong những ngôi nhà Quang Trung", date: "16/02/2026 - 03:13" },
  { img: video5, title: "Hướng về Đại hội đại biểu toàn quốc lần thứ XIV", date: "19/01/2026 - 07:52" },
];

/* ============================================================
   COMPONENT PHỤ
   ============================================================ */

function SectionTitle({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-3 mb-4 border-b-2 border-gov-blue/20 pb-2">
      <div className="flex items-center gap-3">
        <div className="h-7 w-1.5 rounded bg-gov-red" />
        <h2 className="text-lg md:text-xl font-bold text-gov-blue-dark uppercase tracking-wide">
          {children}
        </h2>
      </div>
      {action}
    </div>
  );
}

function Tabs<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: T[];
  active: T;
  onChange: (t: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1 border-b border-border mb-4">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-4 py-2.5 text-sm font-semibold uppercase tracking-wide transition border-b-2 -mb-px ${
            active === t
              ? "text-gov-blue-dark border-gov-blue"
              : "text-muted-foreground border-transparent hover:text-gov-blue"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

function ChinhQuyenPage() {
  const [tabIndieu, setTabIndieu] =
    useState<keyof typeof TAB_INDIEU_HANH>("Thông tin chỉ đạo điều hành");
  const [tabCchc, setTabCchc] =
    useState<keyof typeof TAB_CCHC>("Cải cách hành chính");
  const [tabKtxh, setTabKtxh] =
    useState<keyof typeof TAB_KTXH>("Thông tin Kinh tế - Xã hội");
  const [tabSoBan, setTabSoBan] = useState<"Các Sở, Ban" | "UBND các xã, phường, đặc khu">("Các Sở, Ban");
  const [searchSo, setSearchSo] = useState("");
  const [survey, setSurvey] = useState<"yes" | "no" | "more" | null>("yes");

  const list = tabSoBan === "Các Sở, Ban" ? SO_BAN_NGANH : UBND_XA;
  const filtered = list.filter((s) => s.toLowerCase().includes(searchSo.toLowerCase()));

  const indieu = TAB_INDIEU_HANH[tabIndieu];
  const cchc = TAB_CCHC[tabCchc];
  const ktxh = TAB_KTXH[tabKtxh];

  return (
    <SiteLayout>
      <PageHero
        level="CHÍNH QUYỀN"
        topic="CƠ CẤU TỔ CHỨC"
        title="Chính quyền "
        highlight="Tỉnh Khánh Hòa"
      />

      <div className="container mx-auto px-4 pb-12 space-y-10">
        {/* ============== HOẠT ĐỘNG LÃNH ĐẠO TỈNH ============== */}
        <section>
          <SectionTitle action={
            <a href="#" className="text-sm text-gov-blue hover:text-gov-red font-medium flex items-center gap-1">
              Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
            </a>
          }>
            Hoạt động lãnh đạo tỉnh
          </SectionTitle>

          <div className="flex flex-col gap-6">
            {/* Featured leader news - full width */}
            <article className="relative rounded-xl overflow-hidden shadow-lg min-h-[420px] md:min-h-[520px] flex flex-col justify-end">
              <img
                src={LEADER_FEATURED.img}
                alt={LEADER_FEATURED.title}
                width={1600}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative p-6 md:p-8 text-white max-w-4xl">
                <span className="inline-block w-fit rounded bg-gov-red px-2 py-1 text-xs font-bold mb-3">{LEADER_FEATURED.tag}</span>
                <p className="text-xs flex items-center gap-1 mb-2"><Calendar className="h-3 w-3" /> {LEADER_FEATURED.date}</p>
                <h3 className="text-2xl md:text-3xl font-bold leading-snug">{LEADER_FEATURED.title}</h3>
              </div>
            </article>

            {/* 4 vertical cards below */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {LEADER_GRID.map((n, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex flex-col rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={n.img}
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
        </section>

        {/* ============== SHORTCUTS NHANH ============== */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SHORTCUTS.map((s, i) => (
              <a key={i} href="#" className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:border-gov-blue hover:shadow-md transition group">
                <div className="h-10 w-10 rounded-lg bg-gov-blue/10 flex items-center justify-center group-hover:bg-gov-blue group-hover:text-white text-gov-blue transition">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-foreground leading-tight">{s.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ============== CƠ CẤU TỔ CHỨC BỘ MÁY CHÍNH QUYỀN ============== */}
        <section>
          <SectionTitle>Cơ cấu tổ chức bộ máy chính quyền</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ORGS.map((o, i) => (
              <article key={i} className="rounded-xl bg-card p-5 shadow-sm border-l-4 border-gov-blue hover:shadow-md transition">
                <o.icon className="h-8 w-8 text-gov-blue mb-3" />
                <h3 className="font-bold text-gov-blue-dark mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============== LÃNH ĐẠO UBND TỈNH (BĂNG NGANG) ============== */}
        <section>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gov-blue/20 bg-gradient-to-br from-gov-blue-dark via-gov-blue to-gov-blue-dark">
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/15">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gov-yellow font-semibold">Trang tin</p>
                <h2 className="text-lg md:text-xl font-extrabold text-white tracking-wide">
                  LÃNH ĐẠO UBND TỈNH KHÁNH HÒA
                </h2>
              </div>
              <Landmark className="h-8 w-8 text-gov-yellow/80 hidden md:block" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
              {[CHU_TICH, ...PHO_CHU_TICH].map((p, i) => {
                const isChair = i === 0;
                return (
                  <a
                    key={i}
                    href="#"
                    className={`group relative flex flex-col items-center text-center p-6 md:p-8 transition ${
                      isChair
                        ? "bg-gradient-to-b from-gov-red to-gov-red-dark hover:from-gov-red-dark hover:to-gov-red"
                        : "bg-gov-blue-dark/95 hover:bg-gov-blue"
                    }`}
                  >
                    {isChair && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gov-yellow text-gov-blue-dark">
                        Chủ tịch
                      </span>
                    )}
                    <div className="relative">
                      <div className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 rounded-full overflow-hidden ring-4 ring-gov-yellow/70 group-hover:ring-gov-yellow shadow-xl bg-white">
                        <img
                          src={p.photo}
                          alt={p.name}
                          loading="lazy"
                          width={512}
                          height={640}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <p className={`mt-4 text-xs font-semibold uppercase tracking-wider ${isChair ? "text-gov-yellow" : "text-gov-yellow/90"}`}>
                      {isChair ? "Chủ tịch UBND tỉnh" : (p as typeof PHO_CHU_TICH[number]).role}
                    </p>
                    <p className="mt-1.5 text-base md:text-lg font-extrabold text-white leading-tight">
                      {p.name}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-white/80 group-hover:text-gov-yellow transition">
                      Trang tin <ArrowRight className="h-3 w-3" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>


        {/* ============== TABS THÔNG TIN CHỈ ĐẠO ĐIỀU HÀNH ============== */}
        <section className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-card p-5 shadow-sm">
              <div className="flex items-end justify-between gap-4 border-b mb-4">
                <div className="flex items-center gap-1 flex-wrap">
                  {(Object.keys(TAB_INDIEU_HANH) as (keyof typeof TAB_INDIEU_HANH)[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTabIndieu(tab)}
                      className={`relative px-4 py-2.5 text-sm font-bold tracking-wide transition-colors ${
                        tabIndieu === tab
                          ? "text-gov-blue-dark"
                          : "text-muted-foreground hover:text-gov-blue-dark"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Megaphone className={`h-4 w-4 ${tabIndieu === tab ? "text-gov-red" : "text-muted-foreground"}`} />
                        {tab.toUpperCase()}
                      </span>
                      {tabIndieu === tab && (
                        <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gov-red" />
                      )}
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
                      src={indieu.main.img}
                      alt={indieu.main.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-lg font-bold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{indieu.main.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {indieu.main.date}</p>
                </a>
                <div className="flex flex-col divide-y h-full">
                  {indieu.list.slice(0, 3).map((n, i) => (
                    <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
                      <img
                        src={n.img}
                        alt={n.title}
                        loading="lazy"
                        className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover"
                      />
                      <div className="flex flex-col justify-center min-w-0">
                        <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{n.title}</p>
                        <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Chỉ đạo Chính phủ */}
          <aside>
            <div className="rounded-xl bg-gradient-to-br from-gov-blue-dark to-gov-blue text-white p-5 shadow-md">
              <h4 className="font-bold mb-3 uppercase text-sm tracking-wide border-b border-white/20 pb-2">
                Chỉ đạo, điều hành của Chính phủ, Thủ tướng
              </h4>
              <div className="relative rounded-lg overflow-hidden mb-4 cursor-pointer group">
                <img src={videoMain} alt="video" className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-white/30 backdrop-blur flex items-center justify-center group-hover:bg-white/50 transition">
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm">
                {CHI_DAO_CP.map((n, i) => (
                  <li key={i} className="flex gap-2 items-start text-white/90 hover:text-gov-yellow cursor-pointer leading-snug">
                    <ChevronRight className="h-4 w-4 text-gov-yellow shrink-0 mt-0.5" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] italic text-white/60 mt-3 pt-3 border-t border-white/15">
                Nguồn: Cổng Thông tin điện tử Chính phủ
              </p>
            </div>
          </aside>
        </section>

        {/* ============== 2 BANNER TRỤ SỞ ============== */}
        <section className="grid md:grid-cols-2 gap-4">
          <a href="#" className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gov-red to-gov-red-dark text-white px-6 py-5 flex items-center gap-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="shrink-0 h-12 w-12 rounded-lg bg-white/15 backdrop-blur flex items-center justify-center">
              <Building className="h-6 w-6 text-gov-yellow" />
            </div>
            <p className="font-extrabold uppercase text-sm md:text-base tracking-wide leading-tight">
              Trụ sở làm việc của các đơn vị hành chính xã, phường, đặc khu
            </p>
            <ArrowRight className="ml-auto h-5 w-5 text-gov-yellow group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
          <a href="#" className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gov-blue to-gov-cyan text-white px-6 py-5 flex items-center gap-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="shrink-0 h-12 w-12 rounded-lg bg-white/15 backdrop-blur flex items-center justify-center">
              <Building2 className="h-6 w-6 text-gov-yellow" />
            </div>
            <p className="font-extrabold uppercase text-sm md:text-base tracking-wide leading-tight">
              Trụ sở Trung tâm phục vụ hành chính công xã, phường, đặc khu
            </p>
            <ArrowRight className="ml-auto h-5 w-5 text-gov-yellow group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        </section>

        {/* ============== MAIN CONTENT + CONTINUOUS RIGHT SIDEBAR ============== */}
        <section className="grid lg:grid-cols-4 gap-6">
          {/* LEFT: KTXH -> CCHC -> Đồ họa -> Chuyên trang -> Video (continuous) */}
          <div className="lg:col-span-3 space-y-8">
            {/* KTXH / Quy hoạch */}
            <div className="rounded-xl bg-card p-5 shadow-sm">
              <div className="flex items-end justify-between gap-4 border-b mb-4">
                <div className="flex items-center gap-1 flex-wrap">
                  {(Object.keys(TAB_KTXH) as (keyof typeof TAB_KTXH)[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTabKtxh(tab)}
                      className={`relative px-4 py-2.5 text-sm font-bold tracking-wide transition-colors ${
                        tabKtxh === tab
                          ? "text-gov-blue-dark"
                          : "text-muted-foreground hover:text-gov-blue-dark"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <BarChart3 className={`h-4 w-4 ${tabKtxh === tab ? "text-gov-red" : "text-muted-foreground"}`} />
                        {tab.toUpperCase()}
                      </span>
                      {tabKtxh === tab && (
                        <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gov-red" />
                      )}
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
                    <img src={ktxh.main.img} alt={ktxh.main.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 bg-gov-blue/95 text-white px-4 py-3">
                      <p className="font-semibold leading-snug line-clamp-2">{ktxh.main.title}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {ktxh.main.date}</p>
                </a>
                <div className="flex flex-col divide-y h-full">
                  {ktxh.list.map((n, i) => (
                    <a key={i} href="#" className="flex gap-4 group flex-1 items-center py-3 first:pt-0 last:pb-0">
                      <img src={n.img} alt={n.title} loading="lazy" className="h-24 w-32 md:h-28 md:w-36 shrink-0 rounded object-cover" />
                      <div className="flex flex-col justify-center min-w-0">
                        <p className="text-base font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-3">{n.title}</p>
                        <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CCHC / Thi đua / PCTN */}
            <div>
              <Tabs
                tabs={Object.keys(TAB_CCHC) as (keyof typeof TAB_CCHC)[]}
                active={tabCchc}
                onChange={setTabCchc}
              />
              <div className="grid md:grid-cols-2 gap-5">
                <article className="relative rounded-xl overflow-hidden group cursor-pointer">
                  <img src={cchc.main.img} alt={cchc.main.title} className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gov-blue/95 text-white p-4">
                    <h4 className="font-bold leading-snug">{cchc.main.title}</h4>
                  </div>
                </article>
                <ul className="space-y-4">
                  {cchc.list.map((n, i) => (
                    <li key={i} className="flex gap-3 group cursor-pointer">
                      <img src={n.img} alt={n.title} className="w-28 h-24 rounded-lg object-cover shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug">
                          {n.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{n.date}</p>
                      </div>
                    </li>
                  ))}
                  <li className="text-right">
                    <a href="#" className="text-sm font-semibold text-gov-blue hover:text-gov-red inline-flex items-center gap-1">
                      Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Đồ họa trực quan */}
            <div className="rounded-xl bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 border-b-2 border-gov-blue/20 pb-2 mb-4">
                <BarChart3 className="h-5 w-5 text-gov-blue-dark" />
                <h4 className="font-bold text-gov-blue-dark tracking-wide uppercase">Đồ họa trực quan</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DO_HOA.map((c, i) => (
                  <a key={i} href="#" className="group rounded-md overflow-hidden bg-card border border-border hover:shadow-md transition flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="px-3 py-2.5 bg-gov-blue/10 flex-1 flex items-start">
                      <p className="text-sm font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-2">{c.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Chuyên trang, chuyên mục */}
            <div className="rounded-xl bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 border-b-2 border-gov-blue/20 pb-2 mb-4">
                <BookOpen className="h-5 w-5 text-gov-blue-dark" />
                <h4 className="font-bold text-gov-blue-dark tracking-wide uppercase">Chuyên trang, chuyên mục</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {CHUYEN_TRANG.map((t, i) => (
                  <a key={i} href="#" className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3 hover:border-gov-blue hover:bg-gov-blue/5 transition group">
                    <ChevronRight className="h-4 w-4 text-gov-blue group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-gov-blue-dark">{t}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Video clip */}
            <div className="rounded-xl bg-card p-5 shadow-sm">
              <h4 className="font-bold text-gov-blue border-b-2 border-gov-blue/30 pb-2 mb-5 inline-flex items-center gap-2 uppercase text-sm tracking-wide">
                <Play className="h-4 w-4 fill-gov-blue" /> Video clip
              </h4>
              <div className="grid md:grid-cols-12 gap-5">
                <a href="#" className="group block md:col-span-7">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img src={videoMain} alt="Video chính" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <Play className="h-7 w-7 text-gov-red fill-gov-red ml-1" />
                      </div>
                    </div>
                  </div>
                  <h5 className="mt-3 text-lg leading-snug font-semibold text-foreground group-hover:text-gov-red">
                    Giải pháp giúp hộ kinh doanh kê khai thuế đúng, an tâm tuân thủ, phát triển bền vững
                  </h5>
                </a>
                <ul className="md:col-span-5 flex flex-col justify-between gap-3">
                  {VIDEO_LIST.map((v, i) => (
                    <li key={i} className="flex-1">
                      <a href="#" className="flex gap-3 group items-center h-full">
                        <div className="relative h-16 w-24 shrink-0 rounded overflow-hidden">
                          <img src={v.img} alt={v.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="h-4 w-4 text-white fill-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover:text-gov-red leading-snug line-clamp-2">{v.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{v.date}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: continuous sidebar */}
          <aside className="space-y-5">
            {/* Quick links lãnh đạo */}
            <div className="rounded-xl border-2 border-gov-red p-3 space-y-2.5 bg-card shadow-sm">
              {QUICK_LINKS_LD.map((q, i) => (
                <a key={i} href="#" className={`block w-full ${q.color} hover:bg-gov-red-dark text-white font-bold uppercase text-xs md:text-sm tracking-wide text-center py-2.5 px-3 rounded-md transition`}>
                  {q.label}
                </a>
              ))}
            </div>

            {/* Người phát ngôn */}
            <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-border flex items-center gap-2 bg-muted/30">
                <Mic className="h-4 w-4 text-gov-red" />
                <h4 className="font-bold text-gov-blue-dark uppercase text-sm tracking-wide">
                  Thông tin người phát ngôn
                </h4>
              </div>
              <ul className="divide-y divide-border">
                {NGUOI_PHAT_NGON.map((n, i) => (
                  <li key={i}>
                    <a href="#" className="flex gap-3 px-4 py-3 hover:bg-muted/40 transition group items-start">
                      <div className="shrink-0 h-12 w-12 rounded bg-gov-red/10 flex items-center justify-center">
                        <Newspaper className="h-5 w-5 text-gov-red" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gov-blue-dark group-hover:text-gov-red leading-snug line-clamp-2">{n.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chỉ đạo, điều hành của Chính phủ */}
            <div className="rounded-xl bg-gradient-to-br from-gov-blue-dark to-gov-blue text-white p-5 shadow-md">
              <h4 className="font-bold mb-3 uppercase text-sm tracking-wide border-b border-white/20 pb-2">
                Chỉ đạo, điều hành của Chính phủ, Thủ tướng
              </h4>
              <div className="relative rounded-lg overflow-hidden mb-4 cursor-pointer group">
                <img src={videoMain} alt="video" className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-white/30 backdrop-blur flex items-center justify-center group-hover:bg-white/50 transition">
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm">
                {CHI_DAO_CP.map((n, i) => (
                  <li key={i} className="flex gap-2 items-start text-white/90 hover:text-gov-yellow cursor-pointer leading-snug">
                    <ChevronRight className="h-4 w-4 text-gov-yellow shrink-0 mt-0.5" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] italic text-white/60 mt-3 pt-3 border-t border-white/15">
                Nguồn: Cổng Thông tin điện tử Chính phủ
              </p>
            </div>

            {/* Khảo sát ý kiến */}
            <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-border flex items-center gap-2 bg-muted/30">
                <Vote className="h-4 w-4 text-gov-red" />
                <h4 className="font-bold text-gov-blue-dark uppercase text-sm tracking-wide">Khảo sát ý kiến</h4>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground leading-snug">Bạn có hài lòng về giao diện Cổng thông tin không?</p>
                <p className="text-xs text-muted-foreground italic mt-1">Đã có 7341 lượt biểu quyết</p>

                <div className="mt-3 space-y-2">
                  {[
                    { key: "yes", label: "Hài lòng (Giao diện thân thiện, rõ ràng, dễ chịu, dễ đọc)" },
                    { key: "no", label: "Không hài lòng" },
                    { key: "more", label: "Cần cập nhật thêm" },
                  ].map((o) => (
                    <label key={o.key} className="flex items-start gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="cq-survey"
                        checked={survey === o.key}
                        onChange={() => setSurvey(o.key as "yes" | "no" | "more")}
                        className="mt-1 accent-gov-blue"
                      />
                      <span className="text-foreground/90 leading-snug">{o.label}</span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-gov-blue hover:bg-gov-blue-dark text-white text-sm font-semibold py-2 rounded-md transition inline-flex items-center justify-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> Biểu quyết
                  </button>
                  <button className="flex-1 bg-muted hover:bg-muted/70 text-foreground text-sm font-semibold py-2 rounded-md transition border border-border">
                    Xem kết quả
                  </button>
                </div>
              </div>
            </div>

            {/* NCSC - Tín nhiệm mạng */}
            <a href="#" className="flex items-center gap-3 rounded-xl bg-card border border-border shadow-sm p-4 hover:shadow-md transition">
              <div className="shrink-0 h-12 w-12 rounded-md bg-gov-blue-dark text-white flex items-center justify-center">
                <ShieldCheck className="h-7 w-7 text-gov-yellow" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-gov-red uppercase tracking-wider">NCSC.VN — Cơ bản</p>
                <p className="text-sm font-extrabold text-gov-blue-dark uppercase leading-tight">Website đạt chứng nhận Tín Nhiệm Mạng</p>
              </div>
            </a>
          </aside>
        </section>

        {/* ============== TABS SỞ BAN + LIÊN KẾT WEBSITE ============== */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-card border border-border shadow-sm p-5">
              <div className="flex flex-wrap gap-1 border-b border-border mb-4">
                {(["Các Sở, Ban", "UBND các xã, phường, đặc khu"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setTabSoBan(t); setSearchSo(""); }}
                    className={`px-4 py-2.5 text-sm font-semibold uppercase tracking-wide transition border-b-2 -mb-px ${
                      tabSoBan === t
                        ? "text-gov-blue-dark border-gov-blue"
                        : "text-muted-foreground border-transparent hover:text-gov-blue"
                    }`}
                  >
                    {t === "Các Sở, Ban" ? <><Briefcase className="inline h-4 w-4 mr-1" /> {t}</> : <><MapPin className="inline h-4 w-4 mr-1" /> {t}</>}
                  </button>
                ))}
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={searchSo}
                  onChange={(e) => setSearchSo(e.target.value)}
                  placeholder={tabSoBan === "Các Sở, Ban" ? "Tìm kiếm trong các sở, ban..." : "Tìm kiếm xã, phường, đặc khu..."}
                  className="w-full bg-muted/50 border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gov-blue"
                />
              </div>

              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">
                {filtered.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 py-1.5 text-sm text-foreground hover:text-gov-blue cursor-pointer">
                    <Globe className="h-4 w-4 text-gov-blue shrink-0" />
                    <span className="truncate">{s}</span>
                  </li>
                ))}
                {filtered.length === 0 && (
                  <li className="text-sm text-muted-foreground italic col-span-full py-3">Không có kết quả phù hợp.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Liên kết Website */}
          <aside>
            <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                <Globe className="h-4 w-4 text-gov-blue" />
                <h4 className="font-bold text-gov-blue-dark uppercase text-sm tracking-wide">
                  Liên kết Website
                </h4>
              </div>
              <ul className="divide-y divide-border">
                {LIEN_KET_WEB.map((l, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-muted/40 transition group">
                      <span className="text-sm font-medium text-foreground group-hover:text-gov-blue">{l}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-gov-blue" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* ============== CƠ CẤU TỔ CHỨC ============== */}
        <div className="space-y-8">
          <section>
            <SectionTitle>Cơ cấu tổ chức bộ máy chính quyền</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ORGS.map((o, i) => (
                <article key={i} className="rounded-xl bg-card p-5 shadow-sm border-l-4 border-gov-blue hover:shadow-md transition">
                  <o.icon className="h-8 w-8 text-gov-blue mb-3" />
                  <h3 className="font-bold text-gov-blue-dark mb-2">{o.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Giới thiệu khái quát</SectionTitle>
            <div className="rounded-xl bg-card p-6 shadow-sm space-y-3 text-sm leading-relaxed text-foreground/90">
              <p>
                Tỉnh Khánh Hòa nằm ở khu vực Duyên hải Nam Trung Bộ, có vị trí chiến lược về quốc phòng, an ninh và phát triển kinh tế biển.
                Bộ máy chính quyền tỉnh được tổ chức theo mô hình{" "}
                <strong>chính quyền địa phương 02 cấp</strong> (cấp tỉnh và cấp xã), bảo đảm tinh gọn, hiệu năng, hiệu lực, hiệu quả.
              </p>
              <p>
                Hệ thống chính trị tỉnh gồm Tỉnh ủy, Đoàn ĐBQH, HĐND tỉnh, UBND tỉnh, Ủy ban MTTQ Việt Nam tỉnh và các tổ chức chính trị - xã hội.
                UBND tỉnh có 19 cơ quan chuyên môn cùng các đơn vị sự nghiệp trực thuộc.
              </p>
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
