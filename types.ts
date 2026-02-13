
export enum NodeType {
  HEAD_OFFICE = 'HEAD_OFFICE',
  REGIONAL_OFFICE = 'REGIONAL_OFFICE',
  DISTRICT = 'DISTRICT',
  INDUSTRIAL_AREA = 'INDUSTRIAL_AREA'
}

export interface NodeData {
  id: string;
  name: string;
  type: NodeType;
  location?: string;
  children?: NodeData[];
  status: 'online' | 'warning' | 'offline';
  description?: string;
}

export interface DashboardStats {
  totalDivisions: number;
  totalDistricts: number;
  totalIndustrialAreas: number;
  activeFeeds: number;
}
