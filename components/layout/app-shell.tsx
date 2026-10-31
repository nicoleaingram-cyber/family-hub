import { SiteHeader } from "@/components/layout/site-header";
import { SiteNav } from "@/components/layout/site-nav";
import { getFamilyData } from "@/lib/data";

export function AppShell({ children }: { children: React.ReactNode }) {
  const data = getFamilyData();
  const profile = data.getProfile();
  const links = data.listFeatureLinks();

  return (
    <div className="hub-canvas flex min-h-full flex-col">
      <a
        href="#main"
        className="bg-primary text-primary-foreground absolute top-4 left-4 z-50 -translate-y-24 rounded-2xl px-4 py-3 text-base font-semibold focus:translate-y-0 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        Skip to content
      </a>
      <SiteHeader profile={profile} links={links} />
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto w-full max-w-5xl flex-1 px-4 pt-6 pb-40 outline-none sm:px-6 md:pt-8 md:pb-12"
      >
        {children}
      </main>
      <SiteNav links={links} placement="dock" />
    </div>
  );
}
