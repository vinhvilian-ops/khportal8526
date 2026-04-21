import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gov-page">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  level,
  topic,
  title,
  highlight,
}: {
  level: string;
  topic: string;
  title: string;
  highlight?: string;
}) {
  return (
    <div className="container mx-auto px-4 pt-10 pb-6">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        {level} <span className="mx-2">—</span> {topic}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gov-blue-dark">
        {title} {highlight && <span className="text-gov-red">{highlight}</span>}
      </h2>
      <div className="mt-3 h-1 w-20 rounded bg-gov-yellow" />
    </div>
  );
}
