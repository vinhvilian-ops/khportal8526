import { Mail, MapPin, Phone, QrCode, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-gov-blue-dark to-[oklch(0.2_0.1_260)] text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <h3 className="text-left text-xl font-bold tracking-wide mb-6">
          CỔNG THÔNG TIN ĐIỆN TỬ TỈNH KHÁNH HÒA
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[2.2fr_0.7fr_1fr_1.2fr] lg:gap-0 lg:divide-x lg:divide-white/15 text-sm [&>*]:lg:px-6 [&>*:first-child]:lg:pl-0 [&>*:last-child]:lg:pr-0">
          {/* Cột 1: Thông tin liên hệ */}
          <div>
            <h4 className="font-bold text-gov-yellow mb-3">THÔNG TIN LIÊN HỆ</h4>
            <p className="text-white/80 mb-2">
              Giấy phép số: 05/GP-TTĐT do Sở Văn hóa, Thể thao và Du lịch tỉnh Khánh Hòa cấp ngày 12/5/2025.
            </p>
            <p className="text-white/80 mb-2">
              Trưởng Ban biên tập: Nguyễn Phương Huy — Phó Chánh Văn phòng UBND tỉnh Khánh Hòa.
            </p>
            <p className="flex items-center gap-2 mb-1"><MapPin className="h-4 w-4" /> Địa chỉ: 84 đường Hoàng Hoa Thám, phường Nha Trang.</p>
            <p className="flex items-center gap-2 mb-1"><Phone className="h-4 w-4" /> Điện thoại: 0258.3812434.</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> Email: banbientap@khanhhoa.gov.vn.</p>
          </div>

          {/* Cột 2: Tiện ích */}
          <div>
            <h4 className="font-bold text-gov-yellow mb-3">TIỆN ÍCH</h4>
            <ul className="space-y-1.5 text-white/80">
              <li><a className="hover:text-gov-yellow" href="#">English</a></li>
              <li><a className="hover:text-gov-yellow" href="#">Русский</a></li>
              <li><a className="hover:text-gov-yellow" href="#">Sitemap</a></li>
              <li><a className="hover:text-gov-yellow" href="#">RSS</a></li>
              <li><a className="hover:text-gov-yellow" href="#">Sơ đồ website</a></li>
            </ul>
          </div>

          {/* Cột 3: QR Code */}
          <div>
            <h4 className="font-bold text-gov-yellow mb-3 text-center">QR CODE</h4>
            <div className="flex items-start justify-center gap-4">
              <div className="flex flex-col items-center">
                <div className="relative rounded-md bg-white p-1.5 ring-1 ring-white/20 shadow-md">
                  <QrCode className="h-16 w-16 text-gov-blue-dark" strokeWidth={1.4} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#1877F2] rounded-full p-1 shadow-md ring-2 ring-white">
                      <Facebook className="h-3 w-3 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <p className="mt-1.5 text-xs font-medium text-white/90">Fanpage</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative rounded-md bg-white p-1.5 ring-1 ring-white/20 shadow-md">
                  <QrCode className="h-16 w-16 text-gov-blue-dark" strokeWidth={1.4} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gov-blue rounded px-1 py-0.5 shadow-md ring-2 ring-white">
                      <span className="text-[7px] font-extrabold text-white tracking-tight">Zalo</span>
                    </div>
                  </div>
                </div>
                <p className="mt-1.5 text-xs font-medium text-white/90">Zalo</p>
              </div>
            </div>
          </div>

          {/* Cột 4: Thống kê truy cập */}
          <div>
            <h4 className="font-bold text-gov-yellow mb-3">THỐNG KÊ TRUY CẬP</h4>
            <ul className="space-y-1.5">
              <li className="grid grid-cols-[1fr_auto] gap-4"><span className="text-white/80">Tổng truy cập:</span><span className="text-gov-yellow font-semibold tabular-nums">99,453,414</span></li>
              <li className="grid grid-cols-[1fr_auto] gap-4"><span className="text-white/80">Truy cập trong tuần:</span><span className="text-gov-yellow font-semibold tabular-nums">242,815</span></li>
              <li className="grid grid-cols-[1fr_auto] gap-4"><span className="text-white/80">Truy cập hôm nay:</span><span className="text-gov-yellow font-semibold tabular-nums">128,876</span></li>
              <li className="grid grid-cols-[1fr_auto] gap-4"><span className="text-white/80">Đang online:</span><span className="text-gov-yellow font-semibold tabular-nums">297</span></li>
            </ul>
            <div className="mt-3 flex gap-2">
              <span className="rounded bg-white/10 px-2 py-1 text-xs">IPv6 Ready</span>
              <span className="rounded bg-white/10 px-2 py-1 text-xs">DMCA</span>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/60">
          © 2026 Cổng Thông tin điện tử tỉnh Khánh Hòa. Mọi hành vi sử dụng lại thông tin trên Cổng phải ghi rõ nguồn "khanhhoa.gov.vn"
        </p>
      </div>
    </footer>
  );
}
