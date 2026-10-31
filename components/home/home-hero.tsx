import { SunMedium } from "lucide-react";

import type { FamilyProfile } from "@/lib/types";

export function HomeHero({ profile }: { profile: FamilyProfile }) {
  return (
    <section className="rounded-[1.75rem] bg-card px-5 py-6 shadow-[0_12px_32px_-20px_oklch(0.4_0.05_40/0.45)] ring-1 ring-foreground/10 sm:px-8 sm:py-8">
      <p className="inline-flex min-h-11 items-center gap-2 rounded-full bg-secondary px-4 py-2 text-base font-semibold text-secondary-foreground">
        <SunMedium className="size-5" aria-hidden="true" />
        Welcome home
      </p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
        {profile.welcome}
      </p>
    </section>
  );
}
