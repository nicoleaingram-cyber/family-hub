/** Spots on the home screen. Later features can add their own records. */
export type FeatureId = "photos" | "calendar" | "members";

/** `coming-soon` keeps the link on the home screen. `ready` opens `href`. */
export type FeatureStatus = "coming-soon" | "ready";

export type FamilyProfile = {
  id: string;
  name: string;
  welcome: string;
};

export type FeatureLink = {
  id: FeatureId;
  title: string;
  shortLabel: string;
  description: string;
  href: string;
  status: FeatureStatus;
};

/**
 * Read API for family data. Callers should use `getFamilyData()` and not
 * the mock module. Later features can add methods here (albums, events,
 * members) and keep this same entry point.
 */
export interface FamilyDataSource {
  getProfile(): FamilyProfile;
  listFeatureLinks(): FeatureLink[];
}
