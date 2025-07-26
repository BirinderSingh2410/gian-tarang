import ApiCall from "@/hooks/ApiCall";
import { DailyAttendenceData } from "@/types/attendence";
import { AttendanceURL } from '@/app/urls'

export const fetchBranchName = async () => {
  return await ApiCall({ url: AttendanceURL.fetchBranchURL, method: "get" });
};
export const fetchClasses = async (branchName: string) => {
  return await ApiCall({
    url: `${AttendanceURL.fetchClassesURL}?branchName=${branchName}`,
    method: "get",
  });
};

export const fetchSections = async (className: string) => {
  return await ApiCall({
    url: `${AttendanceURL.fetchSectionsURL}?className=${className}`,
    method: "get",
  });
};

export const fetchAttendenceInfo = async (className: string, section: string) => {
  return await ApiCall({
    url: `${AttendanceURL.attendenceInfoURL}?className=${className}&section=${section}`,
    method: "get",
  });
};

export const fetchStudentData = async (className: string, section: string) => {
  return await ApiCall({
    url: `${AttendanceURL.studentsDataURL}?className=${className}&section=${section}`,
    method: "get",
  });
};

export const fetchChartData = async (className: string, section: string) => {
  return await ApiCall({
    url: `${AttendanceURL.chartDataURL}?className=${className}&section=${section}`,
    method: "get",
  });
};

export const saveDailyAttendence = async (data: DailyAttendenceData) => {
  return await ApiCall({
    url: AttendanceURL.dailyAttendenceURL,
    method: "post",
    body: data
  });
};

export const fetchStatsData = async (className: string, section: string) => {
  return await ApiCall({
    url: `${AttendanceURL.fetchStatsURL}?className=${className}&section=${section}`,
    method: 'get'
  });
};


