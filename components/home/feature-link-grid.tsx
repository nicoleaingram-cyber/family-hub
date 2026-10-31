import { CalendarDays, Images, Users, type LucideIcon } from "lucide-react";

import { FeatureLinkAnchor } from "@/components/feature-link-anchor";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { FeatureLink } from "@/lib/types";

const visuals: Record<
  FeatureLink["id"],
  { icon: LucideIcon; wellClassName: string; iconClassName: string }
> = {
  photos: {
    icon: Images,
    wellClassName: "bg-photo-well",
    iconClassName: "text-photo-ink",
  },
  calendar: {
    icon: CalendarDays,
    wellClassName: "bg-calendar-well",
    iconClassName: "text-calendar-ink",
  },
  members: {
    icon: Users,
    wellClassName: "bg-member-well",
    iconClassName: "text-member-ink",
  },
};

export function FeatureLinkGrid({ links }: { links: FeatureLink[] }) {
  return (
    <section aria-labelledby="around-the-house">
      <div className="max-w-2xl">
        <h2
          id="around-the-house"
          className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Around the house
        </h2>
        <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
          Tap a card to find its spot. These rooms are not open yet.
        </p>
      </div>
      <ul className="mt-5 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => {
          const visual = visuals[link.id];
          const Icon = visual.icon;

          return (
            <li
              key={link.id}
              id={link.id}
              className="scroll-mt-28 scroll-mb-40 target:[&_[data-slot=card]]:ring-4 target:[&_[data-slot=card]]:ring-primary"
            >
              <FeatureLinkAnchor
                feature={link}
                className="block h-full rounded-[1.75rem] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Card className="h-full rounded-[1.75rem] shadow-[0_12px_32px_-20px_oklch(0.4_0.05_40/0.5)] [--card-spacing:--spacing(5)] motion-safe:transition-transform motion-safe:hover:-translate-y-0.5">
                  <CardHeader className="gap-3">
                    <span
                      className={cn(
                        "flex size-14 items-center justify-center rounded-2xl",
                        visual.wellClassName,
                      )}
                    >
                      <Icon
                        className={cn("size-7", visual.iconClassName)}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {link.title}
                    </h3>
                    <CardDescription className="text-base leading-relaxed">
                      {link.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    {link.status === "coming-soon" ? (
                      <Badge
                        variant="secondary"
                        className="h-8 px-3 text-sm font-semibold"
                      >
                        Coming soon
                      </Badge>
                    ) : null}
                  </CardFooter>
                </Card>
              </FeatureLinkAnchor>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
