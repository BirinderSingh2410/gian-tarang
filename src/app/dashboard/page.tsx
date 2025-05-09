"use client";
import { CustomPieChart } from "@/components/charts/CustomPieChart";
import { LeveledBarGraph } from "@/components/charts/LeveledBarGrpah";
import { MultiLineChart } from "@/components/charts/MultilineChart";
import { EventTabs } from "@/components/elements/Dashboard/EventTabs";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import { LablesData, PieChartData } from "@/types/charts";
import React from "react";

const pieChartConfig: { [key: string]: LablesData } = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const pieChartData: PieChartData[] = [
  { label: "chrome", count: 275, fill: "var(--color-chrome)" },
  { label: "safari", count: 200, fill: "var(--color-safari)" },
  { label: "firefox", count: 287, fill: "var(--color-firefox)" },
  { label: "edge", count: 173, fill: "var(--color-edge)" },
  { label: "other", count: 190, fill: "var(--color-other)" },
];

const page = () => {
  const bookedDays = [
    new Date(2025, 0, 8),
    new Date(2025, 0, 9),
    new Date(2025, 0, 11),
  ];
  const grantedDays = [new Date(2025, 0, 26)];

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
          footerData="Total employees with respective to profession"
          chartConfig={pieChartConfig}
          chartData={pieChartData}
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
        <EventTabs className="w-100 mb-4 mt-4" />
      </div>
    </div>
  );
};

export default page;
