import { DailyAttendenceData } from "@/types/attendence";
import * as Attendanceservice from "./service";

export const getAttendanceInfo = async (className: string, section: string) => {
  try {
    const data = await Attendanceservice.getAttendanceInfo(className, section);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getClassData = async (branchName: string) => {
  try {
    const data = await Attendanceservice.getClassData(branchName);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBranches = async () => {
  try {
    const data = await Attendanceservice.getBranches();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAttendenceDaily = async (
  className: string,
  section: string
) => {
  try {
    const data = await Attendanceservice.getAttendenceDaily(className, section);
    return data;
  } catch (error) {
    throw error;
  }
};

export const saveDailyAttendence = async (dailyData: DailyAttendenceData) => {
  try {
    const data = await Attendanceservice.saveDailyAttendence(dailyData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStudentsInfo = async (className: string, section: string) => {
  try {
    const data = await Attendanceservice.getStudentsInfo(className, section);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStatus = async (className: string, section: string) => {
  try {
    const data = await Attendanceservice.getStats(className, section);
    return data;
  } catch (error) {
    throw error;
  }
};


export const getSectionData = async (className: string) => {
  try {
    const data = await Attendanceservice.getSectionData(className);
    return data;
  } catch (error) {
    throw error;
  }
};

