export interface TableHeaders {
  data: string;
  width: string;
}

export interface AttendanceTableInfoData {
  name: string;
  first: string;
  second: string;
  third: string;
  totalPresent: number;
  totalAbsent: number;
}

export interface LiveAttendanceData {
  yesterday: string;
  status: string;
  name: string;
  rollno: number;
}

export interface ClassAndSection {
  className: string;
  section: string;
}
export interface DailyAttendenceData extends ClassAndSection {
  studentInfo: LiveAttendanceData[];
}

export interface AttendenceStats{
  totalPresent: number,
  totalAbsent: number,
  overallRemarks: string
}
