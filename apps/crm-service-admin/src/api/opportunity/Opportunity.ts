export type Opportunity = {
  createdAt: Date;
  expectedCloseDate: Date | null;
  id: string;
  stage: string | null;
  updatedAt: Date;
  value: number | null;
};
