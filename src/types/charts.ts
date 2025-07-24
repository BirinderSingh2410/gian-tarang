export interface LablesData {
  label: string;
  color?: string;
}
export interface MultiLineChartData {
  month: string;
  [branchname: string]: number | string;
}
export interface PieChartData {
  label: string;
  fill: string;
  count: number;
}

export interface AttendanceChartData {
  day: string;
  present: number;
  absent: number;
}
export interface SingleLineChart {
  month: string;
  desktop: number;
}

export interface ChartPropsInterface {
  className: string;
  title: string;
  description: string;
  data: MultiLineChartData[] | PieChartData[];
  chartConfig?: {
    [key: string]: LablesData;
  };
}
