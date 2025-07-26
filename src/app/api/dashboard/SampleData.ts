import {
  HolidaysI,
  OverallAttendanceI,
  RecentNotificationI,
  PeopleCountI,
} from "@/types/Dashboard/dashboard";

export const attendanceData: Array<OverallAttendanceI> = [
  { month: "January", branch1: 186, branch2: 80, branch3: 100 },
  { month: "February", branch1: 305, branch2: 200, branch3: 120 },
  { month: "March", branch1: 237, branch2: 120, branch3: 80 },
  { month: "April", branch1: 73, branch2: 190, branch3: 70 },
  { month: "May", branch1: 209, branch2: 130, branch3: 190 },
  { month: "June", branch1: 214, branch2: 140, branch3: 100 },
];

export const employeesData: PeopleCountI = {
  chartData: [
    { label: "teachers", count: 275, fill: "var(--color-teachers)" },
    { label: "assistants", count: 200, fill: "var(--color-assistants)" },
    { label: "others", count: 287, fill: "var(--color-others)" },
  ],
  chartConfig: {
    assistants: {
      label: "Assistants",
      color: "hsl(var(--chart-4))",
    },
    others: {
      label: "Others",
      color: "hsl(var(--chart-2))",
    },
    teachers: {
      label: "Teachers",
      color: "hsl(var(--chart-3))",
    },
  },
};

export const totalNumberOfStudents: PeopleCountI = {
  chartConfig: {
    branch1: {
      label: "Branch 1",
      color: "hsl(var(--chart-1))",
    },
    branch2: {
      label: "Branch 2",
      color: "hsl(var(--chart-2))",
    },
    branch3: {
      label: "Branch 3",
      color: "hsl(var(--chart-3))",
    },
  },
  chartData: [
    { label: "branch1", count: 275, fill: "var(--color-branch1)" },
    { label: "branch2", count: 200, fill: "var(--color-branch2)" },
    { label: "branch3", count: 187, fill: "var(--color-branch3)" },
  ],
};

export const holidays: HolidaysI = {
  grantedDays: [new Date(2025, 0, 26)],
  mainHoliday: [
    new Date(2025, 6, 8),
    new Date(2025, 0, 9),
    new Date(2025, 0, 11),
  ],
};

export const RecentEvents: RecentNotificationI = {
  eventsData: [
    {
      title: "This is the holiday title",
      description: "This the description of it",
      type: 'holiday'
    },
    {
      title: "This is the sport title",
      description: "This is the for sport description",
      type: 'award'
    },
  ],
  birthdayData: [
    {
      title: "Employee Name 1",
      description: "Designation",
      type: 'user'
    },
    {
      title: "Employee Name 2",
      description: "Designation",
      type: 'user'
    },
  ],
  workAnniversaryData: [
    {
      title: "Employee Name 1",
      description: "Designation",
      type: 'user'
    },
    {
      title: "Employee Name 2",
      description: "Designation",
      type: 'user'
    },
  ],
  leaveData: [
    {
      title: "Employee Name 1",
      description: "Designation",
      type: 'user'
    },
    {
      title: "Employee Name 2",
      description: "Designation",
      type: 'user'
    },
    {
      title: "Employee Name 3",
      description: "Designation",
      type: 'user'
    },
    {
      title: "Employee Name 4",
      description: "Designation",
      type: 'user'
    },
    {
      title: "Employee Name 5",
      description: "Designation",
      type: 'user'
    },
  ],
};
