export interface Project {
  id: string;
  name: string;
  summary: string;
  market: string;
  market_strategy: string;
  is_approved: boolean;
  company: {
    category: string;
  };
}
