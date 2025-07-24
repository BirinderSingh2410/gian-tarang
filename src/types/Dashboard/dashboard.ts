import { LablesData, MultiLineChartData, PieChartData } from "../charts";

export type OverallAttendanceI = MultiLineChartData;
export interface PeopleCountI {
  chartData: PieChartData[];
  chartConfig: {
    [key: string]: LablesData;
  };
}
export interface HolidaysI {
  mainHoliday: Date[];
  grantedDays: Date[];
}

export interface EventsData {
  title: string;
  description: string;
  type: string;
}

export interface RecentNotificationI {
  [eventName: string]: EventsData[];
}
