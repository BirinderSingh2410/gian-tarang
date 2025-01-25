"use client";
import { CustomPieChart } from "@/components/charts/CustomPieChart";
import { LeveledBarGraph } from "@/components/charts/LeveledBarGrpah";
import { MultiLineChart } from "@/components/charts/MultilineChart";
import { EventTabs } from "@/components/elements/Dashboard/EventTabs";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const page = () => {
  const bookedDays = [
    new Date(2025, 0, 8),
    new Date(2025, 0, 9),
    new Date(2025, 0, 11),
  ];
  const grantedDays = [new Date(2025, 0, 26)];
  const date = new Date();

  return (
    <div className="flex flex-wrap-reverse justify-evenly">
      <div className="flex-col w-[90%] lg:w-[45%]">
        {/* attendance of students branch wise*/}
        <MultiLineChart
          className="w-100 mb-4"
          title="Total Attendance"
          description="Number of Employees and children present today"
        />
        {/* Different types of Employees  */}
        <CustomPieChart
          className="w-100 mb-4"
          title="Total Employees"
          description=""
          chartLabel="Employees"
        />
        {/* admission status branch wise*/}
        <LeveledBarGraph
          className="w-100 mb-4"
          title="Total Number of Students"
          description="Number of students in respective branches"
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
                publicHolidays: bookedDays,
                grantedHolidays: grantedDays,
              }}
              modifiersClassNames={{
                publicHolidays: "public-calender",
                grantedHolidays: "granted-holdiays",
              }}
              disabled={true}
            />
            <div className="flex-col ml-4" style={{alignContent: "center"}}>
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
        <EventTabs className="w-100 mb-4 mt-4" />
      </div>
    </div>
  );
};

export default page;
