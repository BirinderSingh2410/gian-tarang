import * as Attendanceservice from './service'

export const getAttendance = async()=>{
    try {
        const data = await Attendanceservice.getAttendance();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getemployeesCount = async()=>{
    try {
        const data = await Attendanceservice.getemployeesCount();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getTotalStudents = async()=>{
    try {
        const data = await Attendanceservice.getTotalStudents();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getHoldiays = async()=>{
    try {
        const data = await Attendanceservice.getHoldiays();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getEvents = async()=>{
    try {
        const data = await Attendanceservice.getEvents();
        return data;
    } catch (error) {
        throw error;
    }
}
