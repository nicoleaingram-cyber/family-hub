import { FeatureLinkGrid } from "@/components/home/feature-link-grid";
import { HomeHero } from "@/components/home/home-hero";
import { getFamilyData } from "@/lib/data";

export default function HomePage() {
  const data = getFamilyData();
  const profile = data.getProfile();
  const links = data.listFeatureLinks();

  return (
    <div className="flex flex-col gap-8">
      <HomeHero profile={profile} />
      <FeatureLinkGrid links={links} />
    </div>
  );
}
