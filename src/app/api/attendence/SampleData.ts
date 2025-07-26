import {
  AttendanceTableInfoData,
  AttendenceStats,
  LiveAttendanceData,
} from "@/types/attendence";
import { AttendanceChartData } from "@/types/charts";

export const sampleAtendanceInfo: AttendanceTableInfoData[] = [
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
  {
    first: "P",
    second: "P",
    third: "A",
    totalAbsent: 2,
    totalPresent: 4,
    name: "test1",
  },
];

export const classData: string[] = ["Class 1", "Class 3", "Class 6", "+2"];

export const branchData: string[] = ["Branch 1", "Branch 2", "Branch 3"];

export const sectionData: string[] = ["A", "B", "C"];

export const chartData: AttendanceChartData[] = [
  { day: "Monday", present: 186, absent: 80 },
  { day: "Tuesday", present: 305, absent: 200 },
  { day: "Wednesday", present: 237, absent: 120 },
  { day: "Thursday", present: 73, absent: 190 },
  { day: "Friday", present: 209, absent: 130 },
  { day: "Saturday", present: 214, absent: 140 },
];

export const statusData: AttendenceStats = {
  totalPresent: 20,
  totalAbsent: 10,
  overallRemarks: "Good",
};

export const attendanceData: LiveAttendanceData[] = [
  {
    name: "Birinder singh",
    rollno: 1,
    yesterday: "absent",
    status: "",
  },
  {
    name: "Abc",
    rollno: 2,
    yesterday: "present",
    status: "",
  },
  {
    name: "test1",
    rollno: 3,
    yesterday: "present",
    status: "",
  },
  {
    name: "test2",
    rollno: 4,
    yesterday: "leave",
    status: "",
  },
  {
    name: "test3",
    rollno: 5,
    yesterday: "absent",
    status: "",
  },
  {
    name: "test4",
    rollno: 6,
    yesterday: "present",
    status: "",
  },
  {
    name: "test5",
    rollno: 7,
    yesterday: "absent",
    status: "",
  },
  {
    name: "test6",
    rollno: 8,
    yesterday: "absent",
    status: "",
  },
  {
    name: "test7",
    rollno: 9,
    yesterday: "present",
    status: "",
  },
  {
    name: "test8",
    rollno: 10,
    yesterday: "absent",
    status: "",
  },
  {
    name: "test9",
    rollno: 11,
    yesterday: "leave",
    status: "",
  },
  {
    name: "test10",
    rollno: 12,
    yesterday: "absent",
    status: "",
  },
  {
    name: "test11",
    rollno: 13,
    yesterday: "present",
    status: "",
  },
];
