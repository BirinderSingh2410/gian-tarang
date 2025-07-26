// import { dbConnect } from "@/lib/db";
import { DailyAttendenceData } from "@/types/attendence";
import * as SampleData from "./SampleData";

export const getAttendanceInfo = async (className: string, section: string) => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    console.log(className, section);
    const data = SampleData.sampleAtendanceInfo;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getClassData = async (branchName: string) => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    console.log(branchName);
    const data = SampleData.classData;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSectionData = async (className: string) => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    console.log(className);
    const data = SampleData.sectionData;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBranches = async () => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    const data = SampleData.branchData;
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
    // await dbConnect()
    // const data = await fetchDataFromDB()
    console.log(className, section);
    const data = SampleData.chartData;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStats = async (
  className: string,
  section: string
) => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    console.log(className, section);
    const data = SampleData.statusData;
    return data;
  } catch (error) {
    throw error;
  }
}

export const saveDailyAttendence = async (data: DailyAttendenceData) => {
  try {
    // SampleData.attendanceData = data.studentInfo
    console.log(data)
    return 'Data has been saved!';
  } catch (error) {
    throw error;
  }
};

export const getStudentsInfo = async (className: string, section: string) => {
  try {
    console.log(className, section);
    const data = await SampleData.attendanceData;
    return data;
  } catch (error) {
    throw error;
  }
};
