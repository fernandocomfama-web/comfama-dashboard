export interface StatItem {
  label: string;
  value: string | number;
  note?: string;
  percentage?: number;
}

export interface SectorData {
  label: string;
  d1: string;
  p1: string;
  d2: string;
  p2: string;
  d3: string;
  p3: string;
  total: string;
  pTotal: string;
  color: string;
}

export interface CategoryData {
  id: string;
  title: string;
  icon: string;
  headerGradient: string;
  approvalRate: number;
  rejectionRate: number;
  isApprovalMain: boolean;
  requests: string;
  users: string;
  extraStatLabel: string;
  extraStatValue: string;
  seniorityMore12: StatItem;
  seniorityLess12: StatItem;
  companySizeMore50: StatItem;
  footerTag: string;
  footerClass: string;
}