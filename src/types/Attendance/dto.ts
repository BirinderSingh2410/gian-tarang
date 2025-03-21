export interface TableHeaders {
    data: string,
    width: string
}

export interface TableInfoData {
    name: string,
    first: string,
    second: string,
    third: string,
    totalPresent: number,
    totalAbsent: number
}


export interface LiveAttendanceData {
    yesterdaty: string,
    status: string,
    name: string,
    rollno: number
}