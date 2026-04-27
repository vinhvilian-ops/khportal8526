import { Mail, MapPin, Phone, QrCode, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-gov-blue-dark to-[oklch(0.2_0.1_260)] text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <h3 className="text-center text-xl font-bold tracking-wide mb-8">
          CỔNG THÔNG TIN ĐIỆN TỬ TỈNH KHÁNH HÒA
        </h3>
        <div className="grid gap-10 md:grid-cols-3 text-sm">
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
          <div>
            <h4 className="font-bold text-gov-yellow mb-3">THỐNG KÊ TRUY CẬP</h4>
            <ul className="space-y-1.5 max-w-[280px]">
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
