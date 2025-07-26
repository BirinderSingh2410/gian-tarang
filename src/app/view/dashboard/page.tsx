"use client";
import { DashboardURL } from "@/app/urls";
import { CustomPieChart } from "@/components/charts/CustomPieChart";
import { LeveledBarGraph } from "@/components/charts/LeveledBarGrpah";
import { MultiLineChart } from "@/components/charts/MultilineChart";
import { EventTabs } from "@/components/elements/Dashboard/EventTabs";
import showAlert from "@/components/elements/showAlert";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ApiCall from "@/hooks/ApiCall";
import { isLoader } from "@/redux/globalSlice";

import {
  HolidaysI,
  OverallAttendanceI,
  PeopleCountI,
  RecentNotificationI,
} from "@/types/dashboard";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface ApiDataI {
  attendanceBranch: OverallAttendanceI[];
  holdiays: HolidaysI;
  employees: PeopleCountI;
  events: RecentNotificationI;
  totalStudents: PeopleCountI;
}
const defaultAPIData = {
  attendanceBranch: [],
  employees: { chartData: [], chartConfig: {} },
  events: {},
  totalStudents: {
    chartData: [],
    chartConfig: {},
  },
  holdiays: { mainHoliday: [], grantedDays: [] },
};

const Page = () => {
  const [apiData, setApiData] = useState<ApiDataI>(defaultAPIData);
  const dispatch = useDispatch();
  const fetchAllApis = async () => {
    dispatch(isLoader(true));
    try {
      const apiUrlArray = Object.entries(DashboardURL);
      apiUrlArray.map(async (data) => {
        try {
          const respData = await ApiCall({
            url: data[1],
            method: "get",
          });
          if (respData.success) {
            dispatch(isLoader(false));
            setApiData((prev) => ({
              ...prev,
              [data[0]]: respData.data,
            }));
          } else {
            throw new Error("Api failure");
          }
        } catch (error) {
          throw error;
        }
      });
    } catch (error) {
      dispatch(isLoader(true));
      showAlert({ type: "error", message: "Something went wrong", error });
    }
  };
  useEffect(() => {
    fetchAllApis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-wrap-reverse justify-evenly">
      <div className="flex-col w-[90%] lg:w-[45%]">
        {/* attendance of students branch wise*/}
        <MultiLineChart
          className="w-100 mb-4"
          title="Total Attendance"
          description="Number of children present today w.r.t branches"
          data={apiData.attendanceBranch}
        />
        {/* Different types of Employees  */}
        <CustomPieChart
          className="w-100 mb-4"
          title="Total Employees"
          description=""
          chartLabel="Employees"
          footerData="Total employees with respective to profession"
          chartConfig={apiData.employees.chartConfig}
          chartData={apiData.employees.chartData}
        />
        {/* admission status branch wise*/}
        <LeveledBarGraph
          className="w-100 mb-4"
          title="Total Number of Students"
          description="Number of students in respective branches"
          data={apiData.totalStudents.chartData}
          chartConfig={apiData.totalStudents.chartConfig}
        />
      </div>
      <div className="flex-col w-[90%] lg:w-[45%]">
        <Card>
          <CardHeader>
            <CardTitle>Holidays</CardTitle>
          </CardHeader>
          <CardContent className="justify-center flex flex-wrap">
            <Calendar
              mode="single"
              modifiers={{
                publicHolidays: apiData.holdiays.mainHoliday,
                grantedHolidays: apiData.holdiays.grantedDays,
              }}
              modifiersClassNames={{
                publicHolidays: "public-calender",
                grantedHolidays: "granted-holdiays",
              }}
              showOutsideDays={false}
              disabled={true}
            />
            <div className="flex-col ml-4" style={{ alignContent: "center" }}>
              <div className="flex mb-2">
                <div className="public-calender calender-dates-dsc"></div>
                <p className="text-sm ml-2">Public Holidays</p>
              </div>
              <div className="flex">
                <div className="granted-holdiays calender-dates-dsc"></div>
                <p className="text-sm ml-2">Granted Holidays</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <EventTabs className="w-100 mb-4 mt-4" data={apiData.events} />
      </div>
    </div>
  );
};

export default Page;
