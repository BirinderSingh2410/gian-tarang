/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { MultipleChartData } from "@/components/charts/MultipleBarGraph";
import React, { useEffect, useState } from "react";
import "./attendance.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectComp } from "@/components/elements/SelectComp";
import { Button } from "@/components/ui/button";
import { TableComp } from "@/components/elements/TableComp";
import { TableHeaders, TableInfoData } from "@/types/Attendance/dto";
import { AttendanceModal } from "@/components/elements/Attendance/AttendanceModal";
import { getKeys } from "@/types/helper";
import CardStats from "@/components/elements/CardStats";

const Attendance = () => {
  const tableHeader: TableHeaders[] = [
    {
      data: "Name",
      width: "",
    },
    {
      data: "Day Before Yesterday",
      width: "",
    },
    {
      data: "Yesterday",
      width: "",
    },
    {
      data: "Today",
      width: "",
    },
    {
      data: "Total Present",
      width: "",
    },
    {
      data: "Total Absent",
      width: "",
    },
  ];

  const sampleAtendanceInfo: TableInfoData[] = [
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
    {
      first: "P",
      second: "P",
      third: "A",
      totalAbsent: 2,
      totalPresent: 4,
      name: "test1",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [attendanceInfo, setAttendenceInfo] = useState<TableInfoData[]>([]);
  const [attendanceModal, setAttendanceModal] = useState(false);

  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    const classVal = ["Class 1", "Class 3", "Class 6", "+2"];
    setData(classVal);
    setSelectedOption(classVal[0]);
    setAttendenceInfo(sampleAtendanceInfo);
  }, []);

  return (
    <div className="">
      <Card className="w-100 mb-4">
        <CardHeader className="mb-4">
          <CardTitle className="mb-4">Todays Stats</CardTitle>
          <div className="flex justify-between">
            <SelectComp
              selectTitle="classes"
              values={data}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <Button onClick={() => setAttendanceModal(true)}>
              Take Attendance
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Card className="flex justify-evenly text-2xl text-center flex-wrap p-6">
            <CardStats title="Total Present" value={20} color="text-green-700"/>
            <CardStats title="Total Absent" value={10} color="text-red-500"/>
            <CardStats title="Overall Remarks" value={"Good"}/>
          </Card>
        </CardContent>
      </Card>
      <MultipleChartData />
      <TableComp
        caption="Attendance Info for three days"
        rows={attendanceInfo}
        headers={tableHeader}
        keys={getKeys(attendanceInfo[0])}
      />
      {attendanceModal ? <AttendanceModal open = {attendanceModal} setOpen = {setAttendanceModal}/> : null}
    </div>
  );
};

export default Attendance;
