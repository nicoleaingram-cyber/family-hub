"use client";

import { CalendarDays, House, Images, Users, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { FeatureLinkAnchor } from "@/components/feature-link-anchor";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FeatureLink } from "@/lib/types";

const featureIcons: Record<FeatureLink["id"], LucideIcon> = {
  photos: Images,
  calendar: CalendarDays,
  members: Users,
};

export function SiteNav({
  links,
  placement,
}: {
  links: FeatureLink[];
  placement: "header" | "dock";
}) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const readHash = () => setHash(window.location.hash);
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, [pathname]);

  const items: Array<{
    key: string;
    href: string;
    label: string;
    icon: LucideIcon;
    active: boolean;
    comingSoon: boolean;
    feature: FeatureLink | null;
  }> = [
    {
      key: "home",
      href: "/",
      label: "Home",
      icon: House,
      active: pathname === "/" && hash === "",
      comingSoon: false,
      feature: null,
    },
    ...links.map((link) => ({
      key: link.id,
      href: link.href,
      label: link.shortLabel,
      icon: featureIcons[link.id],
      active: hash === `#${link.id}`,
      comingSoon: link.status === "coming-soon",
      feature: link,
    })),
  ];

  return (
    <nav
      aria-label="Primary"
      className={cn(
        placement === "dock"
          ? "fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-border bg-background/95 px-2 pt-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
          : "hidden items-center gap-1 md:flex",
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const className = cn(
          buttonVariants({
            variant: item.active ? "secondary" : "ghost",
            size: "xl",
          }),
          "font-semibold",
          placement === "dock"
            ? "h-auto min-h-16 w-full flex-col gap-1 rounded-2xl px-1 py-2 text-base"
            : "px-4",
        );
        const content = (
          <>
            <Icon aria-hidden="true" className="size-6" />
            <span className="text-center leading-tight">{item.label}</span>
            {item.comingSoon ? (
              <span className="sr-only">, coming soon</span>
            ) : null}
          </>
        );

        if (item.feature) {
          return (
            <FeatureLinkAnchor
              key={item.key}
              feature={item.feature}
              aria-current={item.active ? "page" : undefined}
              className={className}
            >
              {content}
            </FeatureLinkAnchor>
          );
        }

        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={className}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
