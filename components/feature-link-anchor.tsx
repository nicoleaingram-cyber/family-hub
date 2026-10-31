import Link from "next/link";
import type { ComponentProps } from "react";

import type { FeatureLink } from "@/lib/types";

type FeatureLinkAnchorProps = Omit<
  ComponentProps<"a">,
  "href" | "children"
> & {
  feature: Pick<FeatureLink, "href" | "status">;
  children: React.ReactNode;
};

/**
 * Home-screen link for a feature. Coming-soon links stay on this page.
 * Ready links use client navigation to `feature.href`.
 */
export function FeatureLinkAnchor({
  feature,
  children,
  ...props
}: FeatureLinkAnchorProps) {
  if (feature.status === "ready") {
    return (
      <Link href={feature.href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={feature.href} {...props}>
      {children}
    </a>
  );
}
