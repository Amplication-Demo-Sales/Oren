import { Opportunity as TOpportunity } from "../api/opportunity/Opportunity";

export const OPPORTUNITY_TITLE_FIELD = "stage";

export const OpportunityTitle = (record: TOpportunity): string => {
  return record.stage?.toString() || String(record.id);
};
