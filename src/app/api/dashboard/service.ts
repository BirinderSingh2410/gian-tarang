// import { dbConnect } from "@/lib/db";
import * as SampleData from "./SampleData";

export const getAttendance = async () => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    const data = SampleData.attendanceData;
    return data
  } catch (error) {
    throw error;
  }
};

export const getemployeesCount = async () => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    const data = SampleData.employeesData;
    return data
  } catch (error) {
    throw error;
  }
};

export const getTotalStudents = async () => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    const data = SampleData.totalNumberOfStudents;
    return data
  } catch (error) {
    throw error;
  }
};

export const getHoldiays = async () => {
  try {
    // await dbConnect()
    // const data = await fetchDataFromDB()
    const data = SampleData.holidays;
    return data
  } catch (error) {
    throw error;
  }
};

export const getEvents = async () => {
    try {
        const data = SampleData.RecentEvents;
    return data
    } catch (error) {
        throw error;
    }
}