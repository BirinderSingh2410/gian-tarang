import { ElementType } from "react"

export interface FilterData {
    departmentData: string[],
    filterHeading: string,
    section: string,
    totalSection: number
}

export interface DetailsInfo {
    imageLink: string,
    name: string,
    department: string,
    id: number
}

export interface CardDetailsInfo {
    detailsData : DetailsInfo[],
    type: string
}

export interface IndividualDetailsInfo {
    logo: ElementType,
    category: string,
    data: string
}

export interface AttendanceTableData {
    date: string,
    reasonType: string,
    reason: string
}

export interface MarksTableData {
    subject: string,
    term?:number,
    exams: {[key:string]:number}
}