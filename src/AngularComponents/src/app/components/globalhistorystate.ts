import { CoverageInfoSettings } from "./coverageinfo/data/coverageinfo-settings.class";
import { RiskHotspotsSettings } from "./riskhotspots/data/riskhotspots-settings.class";

export class GlobalHistoryState {
  riskHotspotsSettings: RiskHotspotsSettings = null;
  coverageInfoSettings: CoverageInfoSettings = null;
}
