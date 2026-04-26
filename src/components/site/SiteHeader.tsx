import { Link } from "@tanstack/react-router";
import { Search, Mail, Map } from "lucide-react";
import quocHuy from "@/assets/quoc-huy.png";
import ubndSketch from "@/assets/ubnd-sketch-2.png";

const NAV = [
  { to: "/", label: "TRANG CHỦ" },
  { to: "/gioi-thieu", label: "GIỚI THIỆU" },
  { to: "/chinh-quyen", label: "CHÍNH QUYỀN" },
  { to: "/cong-dan", label: "CÔNG DÂN" },
  { to: "/doanh-nghiep", label: "DOANH NGHIỆP" },
  { to: "/du-khach", label: "DU KHÁCH" },
] as const;

const TICKER = [
  "Khánh Hòa lập kỷ lục tiếp đón Quảng Trị",
  "Khai mạc Lễ hội Am Chúa năm 2026",
  "Bí thư Tỉnh ủy Trần Phong làm việc với Ban Thường vụ Đảng ủy các xã Trường Sa",
  "Phát triển kinh tế biển bền vững",
];

export function SiteHeader() {
  return (
    <header className="w-full bg-gov-surface border-b border-border">
      {/* Top utility bar */}
      <div className="bg-muted/40 text-xs text-muted-foreground">
        <div className="container mx-auto flex h-9 items-center justify-end gap-4 px-4">
          <a href="#" className="hover:text-gov-red flex items-center gap-1"><Map className="h-3 w-3" /> Sơ đồ website</a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-gov-red">Русский</a>
          <a href="#" className="hover:text-gov-red font-medium text-gov-red">English</a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-gov-red flex items-center gap-1"><Mail className="h-3 w-3" /> Hộp thư</a>
        </div>
      </div>

      {/* Brand */}
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <div className="flex items-center gap-4">
          <img
            src={quocHuy}
            alt="Quốc huy Việt Nam"
            width={512}
            height={512}
            className="h-20 w-20 shrink-0 object-contain"
          />
          <div>
            <p className="text-sm md:text-base text-gov-red font-bold tracking-wider">CỔNG THÔNG TIN ĐIỆN TỬ</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gov-red leading-tight">TỈNH KHÁNH HÒA</h1>
            <p className="text-xs text-muted-foreground mt-1">
              Thứ Ba, 21/04/2026 10:11 &nbsp;|&nbsp; <a className="hover:underline font-medium" href="#">English</a> &nbsp;|&nbsp; <a className="hover:underline font-medium" href="#">Français</a>
            </p>
          </div>
        </div>
        <div className="hidden md:block h-28 lg:h-32 w-80 lg:w-[28rem] overflow-hidden shrink-0">
          <img
            src={ubndSketch}
            alt="Trụ sở UBND tỉnh Khánh Hòa"
            loading="lazy"
            className="h-full w-full object-contain scale-150 origin-center opacity-95"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 45%, transparent 85%)",
              maskImage:
                "radial-gradient(ellipse at center, black 45%, transparent 85%)",
            }}
          />
        </div>
      </div>

      {/* Nav moved to SiteLayout as sibling so sticky works across whole page */}

      {/* Ticker */}
      <div className="bg-gov-red text-primary-foreground">
        <div className="container mx-auto flex items-center gap-4 px-4 py-2">
          <span className="shrink-0 relative z-10 bg-gov-red-dark px-3 py-1 text-xs font-bold rounded shadow-md">📢 THÔNG BÁO</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex gap-8 animate-[marquee_40s_linear_infinite] whitespace-nowrap text-sm">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={i}>★ {t}</span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gov-red to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gov-red to-transparent" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  );
}
