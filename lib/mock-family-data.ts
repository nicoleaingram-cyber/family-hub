import type {
  FamilyDataSource,
  FamilyProfile,
  FeatureLink,
} from "@/lib/types";

const profile: FamilyProfile = {
  id: "maple-family",
  name: "The Maple Family",
  welcome:
    "A bright little home for photos, plans, and the people you love.",
};

const featureLinks: FeatureLink[] = [
  {
    id: "photos",
    title: "Photo gallery",
    shortLabel: "Photos",
    description: "Shared family photos will live here.",
    href: "/#photos",
    status: "coming-soon",
  },
  {
    id: "calendar",
    title: "Family calendar",
    shortLabel: "Calendar",
    description: "Birthdays, visits, and plans will show up here.",
    href: "/#calendar",
    status: "coming-soon",
  },
  {
    id: "members",
    title: "Family members",
    shortLabel: "Family",
    description: "The family list and invite links will live here.",
    href: "/#members",
    status: "coming-soon",
  },
];

export const mockFamilyData: FamilyDataSource = {
  getProfile() {
    return { ...profile };
  },
  listFeatureLinks() {
    return featureLinks.map((link) => ({ ...link }));
  },
};
