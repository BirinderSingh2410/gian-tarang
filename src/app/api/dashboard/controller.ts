import * as DashboardService from './service'

export const getAttendance = async()=>{
    try {
        const data = await DashboardService.getAttendance();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getemployeesCount = async()=>{
    try {
        const data = await DashboardService.getemployeesCount();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getTotalStudents = async()=>{
    try {
        const data = await DashboardService.getTotalStudents();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getHoldiays = async()=>{
    try {
        const data = await DashboardService.getHoldiays();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getEvents = async()=>{
    try {
        const data = await DashboardService.getEvents();
        return data;
    } catch (error) {
        throw error;
    }
}
