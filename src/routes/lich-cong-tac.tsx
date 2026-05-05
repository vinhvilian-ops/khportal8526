import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CalendarDays, Clock, MapPin, Users, Paperclip, ChevronRight, Home } from "lucide-react";

export const Route = createFileRoute("/lich-cong-tac")({
  head: () => ({
    meta: [
      { title: "Lịch công tác lãnh đạo UBND Thành phố — Tuần 04/5/2026 đến 10/5/2026" },
      { name: "description", content: "Lịch công tác tuần của lãnh đạo UBND Thành phố từ ngày 04/5/2026 đến 10/5/2026." },
      { property: "og:title", content: "Lịch công tác lãnh đạo UBND Thành phố" },
      { property: "og:description", content: "Lịch làm việc hằng tuần của lãnh đạo UBND Thành phố." },
    ],
  }),
  component: LichCongTacPage,
});

type Item = {
  time: string;
  morning?: boolean; // true = sáng (xanh), false = chiều (đỏ)
  content: string;
  place?: string;
  attendees?: string;
};

type Day = {
  label: string;
  date: string;
  items: Item[];
};

const WEEK: Day[] = [
  {
    label: "Thứ 2",
    date: "04/05",
    items: [
      { time: "08:00", morning: true, content: "Lãnh đạo UBND tỉnh làm việc tại cơ quan" },
      { time: "09:00", morning: true, content: "Chủ trì họp Thường trực Tỉnh ủy", place: "Tỉnh ủy" },
      { time: "09:00", morning: true, content: "Họp nghe báo cáo đề xuất xây dựng chính sách hỗ trợ công tác quản lý bảo vệ rừng trên địa bàn tỉnh", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: PCVP Trần Văn Hoài; CV: NNMT (Toàn)" },
      { time: "14:30", content: "Họp BCĐ phát triển Khoa học công nghệ, ĐMST, CĐS và BCĐ về dữ liệu tỉnh", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: PCVP Lê Hữu Phước; CV: KgVx (Phương, Long)" },
      { time: "16:30", content: "Nghe Báo cáo về đề án nâng cấp Trường chính trị Lê Duẩn", place: "Hội trường UBND tỉnh", attendees: "LĐVP: PCVP Phạm Thị Hồng Lệ; CV: KgVx (Duy), TH (Quang)" },
    ],
  },
  {
    label: "Thứ 3",
    date: "05/05",
    items: [
      { time: "08:00", morning: true, content: "Chủ trì họp Hội đồng thi đua khen thưởng tỉnh", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Hoài Nam; CV: NC (Đông)" },
      { time: "08:00", morning: true, content: "Kiểm tra các dự án phát triển quỹ đất", attendees: "LĐVP: PCVP Trần Văn Hoài; CV: TH (Hằng)" },
      { time: "08:00", morning: true, content: "Làm việc với UBND xã Lệ Thuỷ về tình hình sản xuất nông nghiệp và xây dựng NTM", place: "Xã Lệ Thuỷ", attendees: "LĐVP: Đại diện lãnh đạo VP; CV: NNMT (Toàn, Tuấn Anh)" },
      { time: "14:00", content: "Tiếp xã giao Tổng Giám đốc Công ty Eni Việt Nam – Tập đoàn năng lượng đa quốc gia Italia", place: "Phòng khánh tiết UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Thanh Xuân; CV: TH (Quang)" },
      { time: "14:00", content: "Tiếp xúc cử tri của Đoàn ĐBQH tỉnh sau kỳ họp thứ nhất, Quốc hội khoá XVI", place: "Hội trường Đoàn ĐBQH, 88 Phạm Văn Đồng", attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: KgVx (Ngọc Hà)" },
      { time: "17:30", content: "Gặp mặt giữa Đoàn ĐBQH tỉnh với Lãnh đạo tỉnh", place: "Sun Spa Resort", attendees: "LĐVP: CVP Nguyễn Hoài Nam" },
    ],
  },
  {
    label: "Thứ 4",
    date: "06/05",
    items: [
      { time: "08:00", morning: true, content: "Họp thường kỳ UBND tỉnh tháng 4/2026", place: "Hội trường UBND tỉnh", attendees: "LĐVP: CVP, các PCVP; CV: TH (P.Linh), phòng TH và các CV" },
      { time: "08:30", morning: true, content: "Làm việc với Đoàn công tác của WB về dự án Đường bộ cao tốc Cam Lộ – Lao Bảo", place: "Phòng họp TI, UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: TH (Quang), CTXD (Hưng)" },
      { time: "09:00", morning: true, content: "Dự Hội nghị công bố điều chỉnh quy hoạch tổng thể quốc gia và các quy hoạch vùng thời kỳ 2021-2030, tầm nhìn đến năm 2050", place: "Phòng họp TI, UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: TH (Quang), CTXD (Hưng)" },
      { time: "14:00", content: "Dự Hội nghị Ban Thường vụ Tỉnh uỷ lần thứ 11", place: "Tỉnh ủy" },
      { time: "14:00", content: "Họp Ban Chỉ đạo 389", place: "Hội trường UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: CTXD (Thái)" },
      { time: "14:00", content: "Họp Ban tổ chức Lễ hội vì Hoà Bình", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: PCVP Phạm Thị Hồng Lệ; CV: KgVx (Giang)" },
    ],
  },
  {
    label: "Thứ 5",
    date: "07/05",
    items: [
      { time: "08:00", morning: true, content: "(i) Hội ý lãnh đạo UBND tỉnh; (ii) họp Đảng uỷ UBND tỉnh", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: CVP Nguyễn Hoài Nam, các PCVP; CV: TH (P.Linh, Khánh, Kiên)" },
      { time: "14:00", content: "Kiểm tra tình hình thực hiện dự án trang trại chăn nuôi Gai Hân", attendees: "LĐVP: PCVP Trần Văn Hoài; CV: NNMT (Toàn, Tuấn Anh)" },
      { time: "14:00", content: "Làm việc với Đoàn công tác của WB về dự án Reptip", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: TH (Quang), CTXD (Hưng)" },
      { time: "14:00", content: "Họp về Quy hoạch du lịch Phong Nha", place: "Hội trường UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Thanh Xuân; CV: CTXD (Sáu), KgVx (Thu Hà)" },
    ],
  },
  {
    label: "Thứ 6",
    date: "08/05",
    items: [
      { time: "08:00", morning: true, content: "Làm việc với các sở, ngành, các chủ đầu tư đôn đốc giải ngân vốn đầu tư công", place: "Hội trường UBND tỉnh", attendees: "LĐVP: CVP Nguyễn Hoài Nam, PCVP: TH (Khánh) và các CV có liên quan" },
      { time: "08:00", morning: true, content: "Làm việc với các sở, ngành bàn các giải pháp cải thiện chỉ số năng lực cạnh tranh cấp tỉnh (PCI)", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Văn Thạnh; CV: TH (Mạnh Linh)" },
      { time: "08:00", morning: true, content: "Làm việc với UBND xã Quảng Trạch về tình hình sản xuất nông nghiệp và xây dựng NTM", place: "Xã Quảng Trạch", attendees: "LĐVP: PCVP Trần Văn Hoài; CV: NNMT (Toàn, Tuấn Anh)" },
      { time: "08:00", morning: true, content: "Hội nghị trực tuyến đánh giá kết quả thực hiện chính sách BHXH, BHYT năm 2025, triển khai nhiệm vụ năm 2026 của Ban Chỉ đạo tỉnh", place: "Hội trường UBND tỉnh", attendees: "LĐVP: PCVP Lê Hữu Phước; CV: KgVx (Thu Hà)" },
      { time: "08:00", morning: true, content: "Làm việc với Công ty MTIP và Liên doanh các NĐT dự án LNG Hải Lăng", place: "Phòng họp TI, UBND tỉnh", attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: CTXD (Tài, Phương)" },
      { time: "14:00", content: "Đi kiểm tra cơ sở" },
      { time: "14:00", content: "Kiểm tra các công trình xây dựng hạ tầng trên địa bàn tỉnh", place: "Phía Nam tỉnh Quảng Trị", attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: CTXD (Linh)" },
      { time: "14:00", content: "Họp nghe báo cáo Đề án nam du lịch quốc gia 2027", place: "Phòng họp T3, UBND tỉnh", attendees: "LĐVP: PCVP Phạm Thị Hồng Lệ; CV: KgVx (Thu Hà, Giang)" },
    ],
  },
  {
    label: "Thứ 7",
    date: "09/05",
    items: [
      { time: "—", content: "Trực lãnh đạo UBND tỉnh", attendees: "LĐVP: PCVP Trần Văn Thạnh; CV: TH (Quang), HCTC (Mơ)" },
    ],
  },
  {
    label: "Chủ Nhật",
    date: "10/05",
    items: [
      { time: "—", content: "Trực lãnh đạo UBND tỉnh", attendees: "LĐVP: PCVP Phạm Thị Hồng Lệ; CV: NC (Đông), HCTC (Mơ)" },
    ],
  },
];

function LichCongTacPage() {
  return (
    <SiteLayout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4 py-2.5 text-sm flex items-center gap-1.5 text-muted-foreground">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gov-blue">
            <Home className="h-3.5 w-3.5" /> Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/chinh-quyen" className="hover:text-gov-blue">Chính quyền</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">Lịch công tác</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-gov-blue to-gov-blue-dark text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur">
              <CalendarDays className="h-7 w-7" />
            </div>
            <div>
              <p className="uppercase text-xs tracking-[0.2em] text-white/70 font-semibold">Lịch công tác</p>
              <h1 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mt-1">
                Lịch công tác tuần của lãnh đạo UBND Thành phố
              </h1>
              <p className="mt-2 text-white/85 text-sm md:text-base">
                Từ ngày <span className="font-semibold text-gov-yellow">04/5/2026</span> đến ngày{" "}
                <span className="font-semibold text-gov-yellow">10/5/2026</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          {/* Sidebar tóm tắt */}
          <aside className="space-y-4 lg:sticky lg:top-4 self-start">
            <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-gov-blue text-white font-bold uppercase text-sm tracking-wide">
                Tuần làm việc
              </div>
              <ul className="divide-y divide-border">
                {WEEK.map((d) => (
                  <li key={d.date}>
                    <a
                      href={`#${d.date.replace("/", "-")}`}
                      className="flex items-center justify-between px-4 py-2.5 text-sm hover:bg-muted/50 transition"
                    >
                      <span className="font-semibold text-gov-blue-dark">
                        {d.label} <span className="text-muted-foreground font-normal">({d.date})</span>
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gov-blue/10 text-gov-blue font-semibold">
                        {d.items.length}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-card border border-border shadow-sm p-4 text-sm">
              <p className="font-bold text-gov-blue-dark uppercase tracking-wide text-xs mb-2">Chú thích</p>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-gov-blue inline-block" />
                <span className="text-muted-foreground">Buổi sáng</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gov-red inline-block" />
                <span className="text-muted-foreground">Buổi chiều</span>
              </div>
            </div>

            <a href="#" className="flex items-center gap-2 rounded-xl border-2 border-gov-blue/30 bg-gov-blue/5 hover:bg-gov-blue/10 hover:border-gov-blue transition px-4 py-3 text-sm font-semibold text-gov-blue-dark">
              <Paperclip className="h-4 w-4 text-gov-blue" />
              Lịch chi tiết đính kèm
            </a>
          </aside>

          {/* Bảng lịch */}
          <div className="space-y-6">
            {WEEK.map((day) => (
              <div
                key={day.date}
                id={day.date.replace("/", "-")}
                className="rounded-xl bg-card border border-border shadow-sm overflow-hidden scroll-mt-4"
              >
                {/* Day header */}
                <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-gov-blue/10 to-transparent border-b border-border">
                  <div className="h-11 w-11 rounded-lg bg-gov-blue text-white flex flex-col items-center justify-center leading-none shadow">
                    <span className="text-[10px] font-semibold uppercase tracking-wider">{day.label.replace("Thứ ", "T").replace("Chủ Nhật", "CN")}</span>
                    <span className="text-sm font-bold mt-0.5">{day.date}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gov-blue-dark uppercase">{day.label}</h2>
                    <p className="text-xs text-muted-foreground">Ngày {day.date}/2026 — {day.items.length} hoạt động</p>
                  </div>
                </div>

                {/* Items */}
                <ul className="divide-y divide-border">
                  {day.items.map((it, idx) => {
                    const isMorning = it.morning;
                    const accent = isMorning ? "gov-blue" : "gov-red";
                    return (
                      <li key={idx} className="grid grid-cols-[90px_1fr] md:grid-cols-[110px_1fr] gap-4 px-5 py-4 hover:bg-muted/30 transition group">
                        {/* Time */}
                        <div className="flex flex-col items-start">
                          <div
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${
                              isMorning
                                ? "bg-gov-blue/10 text-gov-blue"
                                : "bg-gov-red/10 text-gov-red"
                            }`}
                          >
                            <Clock className="h-3 w-3" />
                            {it.time}
                          </div>
                          <span className={`mt-1 text-[10px] uppercase tracking-wider font-semibold ${isMorning ? "text-gov-blue" : "text-gov-red"}`}>
                            {it.time === "—" ? "Cả ngày" : isMorning ? "Sáng" : "Chiều"}
                          </span>
                        </div>

                        {/* Content */}
                        <div className={`border-l-4 pl-4 ${isMorning ? "border-gov-blue/40" : "border-gov-red/40"} group-hover:border-l-[6px] transition-all`}>
                          <p className="text-sm md:text-[15px] font-semibold text-foreground leading-snug">
                            {it.content}
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                            {it.place && (
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-gov-red" />
                                {it.place}
                              </span>
                            )}
                            {it.attendees && (
                              <span className="inline-flex items-center gap-1">
                                <Users className="h-3 w-3 text-gov-blue" />
                                {it.attendees}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <p className="text-xs italic text-muted-foreground text-center pt-2">
              * Lịch công tác có thể được điều chỉnh tuỳ tình hình thực tế.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
