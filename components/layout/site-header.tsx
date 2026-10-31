import { House } from "lucide-react";
import Link from "next/link";

import { SiteNav } from "@/components/layout/site-nav";
import type { FamilyProfile, FeatureLink } from "@/lib/types";

export function SiteHeader({
  profile,
  links,
}: {
  profile: FamilyProfile;
  links: FeatureLink[];
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-h-14 min-w-0 items-center gap-3 rounded-2xl pr-2 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <House className="size-6" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-lg leading-none font-semibold">
              Family Hub
            </span>
            <span className="mt-1 block truncate text-base text-muted-foreground">
              {profile.name}
            </span>
          </span>
        </Link>
        <SiteNav links={links} placement="header" />
      </div>
    </header>
  );
}
