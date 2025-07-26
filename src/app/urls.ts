//Dashboard page
export const DashboardURL = {
  attendanceBranch: '/api/dashboard/branchAttendance',
  holdiays:'/api/dashboard/holdiays',
  employees:'/api/dashboard/employees',
  events: '/api/dashboard/recentEvents',
  totalStudents: '/api/dashboard/totalStudents'
};

// Attendance page
export const AttendanceURL = {
  fetchBranchURL: '/api/attendence/getBranches',
  fetchClassesURL:'/api/attendence/getClasses',
  fetchSectionsURL:'/api/attendence/getSection',
  attendenceInfoURL: '/api/attendence/getAttendenceInfo',
  studentsDataURL: '/api/attendence/studentData',
  chartDataURL: '/api/attendence/dayWiseAttendence',
  dailyAttendenceURL: '/api/attendence/todayAttendence',
  fetchStatsURL: '/api/attendence/getStats'
};