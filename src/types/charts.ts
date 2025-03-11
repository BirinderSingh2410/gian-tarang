import { ElementType } from "react"

export interface LablesData {
    label: string,
    color?: string
}
export interface ChartData {
    month: string,
    branch1: number,
    branch2: number,
    branch3: number
}
export interface PieChartData{
    label: string,
    fill: string,
    count: number
}
export interface EventsData {
    title: string,
    description: string,
    eventIcon: ElementType
}
export interface ChartPropsInterface {
    className: string,
    title: string,
    description : string
  }
export interface AttendanceChartData {
    day: string,
    present: number,
    absent: number
}