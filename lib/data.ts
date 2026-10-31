import { mockFamilyData } from "@/lib/mock-family-data";
import type { FamilyDataSource } from "@/lib/types";

export type {
  FamilyDataSource,
  FamilyProfile,
  FeatureId,
  FeatureLink,
  FeatureStatus,
} from "@/lib/types";

/**
 * Local data entry point. Swap the returned source when a later feature
 * needs a different store. UI code should call this, not the mock.
 */
export function getFamilyData(): FamilyDataSource {
  return mockFamilyData;
}
