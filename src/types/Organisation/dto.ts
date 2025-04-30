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