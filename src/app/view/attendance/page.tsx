/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { MultipleChartData } from "@/components/charts/MultipleBarGraph";
import React, { useEffect, useState } from "react";
import "./attendance.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectComp } from "@/components/elements/SelectComp";
import { Button } from "@/components/ui/button";
import { TableComp } from "@/components/elements/TableComp";
import {
  TableHeaders,
  AttendanceTableInfoData,
  AttendenceStats,
} from "@/types/attendence";
import { AttendanceModal } from "@/components/elements/Attendance/AttendanceModal";
import { getKeys } from "@/types/helper";
import CardStats from "@/components/elements/CardStats";
import * as AttendenceService from "@/app/view/Services/attendence";
import { AttendanceChartData } from "@/types/charts";
import showAlert from "@/components/elements/showAlert";
import { useDispatch } from "react-redux";
import { isLoader } from "@/redux/globalSlice";

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

interface SelectOptionsData {
  classNames: string[];
  sections: string[];
  branches: string[];
}

const Attendance = () => {
  const [branch, setBranch] = useState<string>("");
  const [className, setClassName] = useState<string>("");
  const [section, setSection] = useState<string>("");
  const [stats, setStats] = useState<AttendenceStats>({
    totalAbsent: 0,
    totalPresent: 0,
    overallRemarks: "N/A",
  });

  const [attendanceInfo, setAttendenceInfo] = useState<
    AttendanceTableInfoData[]
  >([]);
  const [attendanceModal, setAttendanceModal] = useState(false);
  const [selectionData, setSelectionData] = useState<SelectOptionsData>({
    classNames: [],
    sections: [],
    branches: [],
  });
  const [dayWiseAttendence, setdayWiseAttendence] = useState<
    AttendanceChartData[]
  >([]);
  const [studentsLiveData, setStudentsLiveData] = useState([]);
  const disptach = useDispatch();

  const fetchApi = async () => {
    try {
      disptach(isLoader(true));
      const branchNames = await AttendenceService.fetchBranchName();
      if (branchNames.success) {
        setSelectionData((pre) => ({ ...pre, branches: branchNames.data }));
      } else {
        showAlert({ message: branchNames.message, type: "error" });
      }
      disptach(isLoader(false));
    } catch (error) {
      disptach(isLoader(false));
      showAlert({ message: "Something went wrong!", type: "error", error });
    }
  };

  useEffect(() => {
    if (branch) {
      (async () => {
        try {
          disptach(isLoader(true));
          const classNames = await AttendenceService.fetchClasses(branch);
          if (classNames.success) {
            setSelectionData((pre) => ({
              ...pre,
              classNames: classNames.data,
            }));
          } else {
            showAlert({ message: classNames.message, type: "error" });
          }
          disptach(isLoader(false));
        } catch (error) {
          disptach(isLoader(false));
          showAlert({ message: "Somethign went wrong", type: "error", error });
        }
      })();
    }
    return;
  }, [branch]);

  useEffect(() => {
    if (className) {
      (async () => {
        try {
          disptach(isLoader(true));
          const sections = await AttendenceService.fetchSections(className);
          if (sections.success) {
            setSelectionData((pre) => ({ ...pre, sections: sections.data }));
          } else {
            showAlert({ message: sections.message, type: "error" });
          }
          disptach(isLoader(false));
        } catch (error) {
          disptach(isLoader(false));
          showAlert({ message: "Somethign went wrong", type: "error", error });
        }
      })();
    }
    return;
  }, [className]);

  useEffect(() => {
    if (className && section) {
      (async () => {
        try {
          disptach(isLoader(true));
          const studentsData = await AttendenceService.fetchAttendenceInfo(
            className,
            section
          );
          if (studentsData.success) {
            setAttendenceInfo(studentsData.data);
          } else {
            showAlert({ message: studentsData.messsage, type: "error" });
          }
          const statusData = await AttendenceService.fetchStatsData(
            className,
            section
          );
          if (statusData.success) {
            setStats(statusData.data);
          } else {
            showAlert({ message: statusData.messsage, type: "error" });
          }
          const chartData = await AttendenceService.fetchChartData(
            className,
            section
          );
          if (chartData.success) {
            setdayWiseAttendence(chartData.data);
          } else {
            showAlert({ message: chartData.messsage, type: "error" });
          }
          const studentsLiveData = await AttendenceService.fetchStudentData(
            className,
            section
          );
          if (studentsLiveData.success) {
            setStudentsLiveData(studentsLiveData.data);
          } else {
            showAlert({ message: studentsLiveData.messsage, type: "error" });
          }
          disptach(isLoader(false));
        } catch (error) {
          disptach(isLoader(false));
          showAlert({ message: "Something went wring", type: "error", error });
        }
      })();
    }
    return;
  }, [section]);

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="">
      <Card className="w-100 mb-4">
        <CardHeader className="mb-4">
          <CardTitle className="mb-4">Todays Stats</CardTitle>
          <div className="flex justify-between">
            <SelectComp
              selectTitle="branches"
              values={selectionData.branches}
              selectedOption={branch}
              setSelectedOption={setBranch}
            />
            <SelectComp
              selectTitle="classes"
              values={selectionData.classNames}
              selectedOption={className}
              setSelectedOption={setClassName}
            />
            <SelectComp
              selectTitle="section"
              values={selectionData.sections}
              selectedOption={section}
              setSelectedOption={setSection}
            />
            <Button onClick={() => setAttendanceModal(true)} disabled={!studentsLiveData.length}>
              Take Attendance
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Card className="flex justify-evenly text-2xl text-center flex-wrap p-6">
            <CardStats
              title="Total Present"
              value={stats.totalPresent}
              color="text-green-700"
            />
            <CardStats
              title="Total Absent"
              value={stats.totalAbsent}
              color="text-red-500"
            />
            <CardStats title="Overall Remarks" value={stats.overallRemarks} />
          </Card>
        </CardContent>
      </Card>
      <MultipleChartData chartData={dayWiseAttendence} />
      <TableComp
        caption="Attendance Info for three days"
        rows={attendanceInfo}
        headers={tableHeader}
        keys={getKeys(attendanceInfo[0])}
      />
      {attendanceModal && studentsLiveData ? (
        <AttendanceModal
          open={attendanceModal}
          setOpen={setAttendanceModal}
          studentsData={studentsLiveData}
          className={className}
          section={section}
        />
      ) : null}
    </div>
  );
};

export default Attendance;
