import { ReactNode } from "react";
import { SiteHeader, SiteNav } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ChatBot } from "./ChatBot";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gov-page">
      <SiteHeader />
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <ChatBot />
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
      <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark">
        {title} {highlight && <span className="text-gov-red">{highlight}</span>}
      </h2>
      <div className="mt-3 h-1 w-20 rounded bg-gov-yellow" />
    </div>
  );
}
