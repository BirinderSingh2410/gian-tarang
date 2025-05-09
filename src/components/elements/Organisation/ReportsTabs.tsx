"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieCharts } from "@/components/charts/PieCharts";
import { BarGraph } from "@/components/charts/BarGraph";
import { ChartConfig } from "@/components/ui/chart";
import { LablesData, PieChartData } from "@/types/charts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AttendanceTableData, MarksTableData } from "@/types/Organisation/dto";
import { CustomPieChart } from "@/components/charts/CustomPieChart";

const attendanceGraphData = [
  { month: "January", present: 186 },
  { month: "February", present: 305 },
  { month: "March", present: 237 },
  { month: "April", present: 73 },
  { month: "May", present: 209 },
  { month: "June", present: 214 },
];

const pieChartConfig: { [key: string]: LablesData } = {
  evs: {
    label: "EVS",
    color: "hsl(var(--chart-1))",
  },
  sst: {
    label: "SST",
    color: "hsl(var(--chart-2))",
  },
  english: {
    label: "Enlish",
    color: "hsl(var(--chart-3))",
  },
  maths: {
    label: "Maths",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const marksChartData: PieChartData[] = [
  { label: "evs", count: 275, fill: "var(--color-evs)" },
  { label: "sst", count: 200, fill: "var(--color-sst)" },
  { label: "english", count: 287, fill: "var(--color-english)" },
  { label: "math", count: 173, fill: "var(--color-maths)" },
  { label: "other", count: 190, fill: "var(--color-other)" },
];

const attendanceChartConfig: { [key: string]: LablesData } = {
  present: {
    label: "Present",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const attendanceLeaveTableData: AttendanceTableData[] = [
  {
    date: "24th oct",
    reasonType: "Holiday",
    reason: "Diwali",
  },
  { date: "1st Nov", reasonType: "Leave", reason: "Jashan" },
];

const marksTableData: MarksTableData[] = [
  {
    subject: "EVS",
    exams: {
      fa1: 20,
      fa2: 40,
      sa1: 40,
    },
    term: 2,
  },
  {
    subject: "Maths",
    exams: {
      fa1: 100,
      fa2: 70,
      sa1: 40,
    },
    term: 2,
  },
  {
    subject: "SST",
    exams: {
      fa1: 100,
      fa2: 70,
      sa1: 100,
    },
    term: 2,
  },
];

const activitiesChartData: PieChartData[] = [
  { label: "sports", count: 275, fill: "var(--color-sports)" },
  { label: "music", count: 200, fill: "var(--color-music)" },
  { label: "dance", count: 187, fill: "var(--color-dance)" },
  { label: "activities", count: 173, fill: "var(--color-activities)" },
  { label: "art", count: 90, fill: "var(--color-art)" },
];

const activitiesChartConfig = {
  sports: {
    label: "Sports",
    color: "hsl(var(--chart-1))",
  },
  music: {
    label: "Music",
    color: "hsl(var(--chart-2))",
  },
  dance: {
    label: "Dance",
    color: "hsl(var(--chart-3))",
  },
  activities: {
    label: "Other Activities",
    color: "hsl(var(--chart-4))",
  },
  art: {
    label: "Art",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const ReportsTabs = () => {
  const [tab, setTab] = useState("attendance");

  return (
    <Tabs
      onValueChange={(e) => setTab(e)}
      defaultValue="attendance"
      className="w-full"
    >
      {tab === "attendance" ? (
        <BarGraph
          barData={attendanceGraphData}
          chartConfig={attendanceChartConfig}
          dataKey="present"
          className={""}
          title={""}
          description={""}
        />
      ) : tab === "marks" ? (
        <CustomPieChart
          chartConfig={pieChartConfig}
          chartLabel={""}
          title={""}
          className={""}
          description={""}
          footerData={""}
          chartData={marksChartData}
        />
      ) : (
        <PieCharts
          chartConfig={activitiesChartConfig}
          chartData={activitiesChartData}
          title={""}
          description={"January- july 2024"}
        />
      )}
      <TabsList className="w-full flex justify-evenly">
        <TabsTrigger value="attendance">Attendance</TabsTrigger>
        <TabsTrigger value="marks">Marks Sheet</TabsTrigger>
        <TabsTrigger value="activities">Activities</TabsTrigger>
      </TabsList>
      <TabsContent value="attendance">
        <Card className="p-4 mt-4 flex justify-evenly font-extrabold">
          <p>Total Present: 20</p>
          <p>Total Absent/Leaves: 10</p>
        </Card>
        <div className="mt-4 font-bold">
          <p>Leaves and Holdiays:</p>
          <Table className="mt-4">
            <TableHeader>
              <TableRow className="flex justify-evenly">
                <TableHead>Date</TableHead>
                <TableHead>Holiday/Leave</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceLeaveTableData.map(
                (data: AttendanceTableData, index) => (
                  <TableRow className="flex justify-evenly" key={index}>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>
                      <Badge>{data.reasonType}</Badge>
                    </TableCell>
                    <TableCell>{data.reason}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="marks">
        <Card className="p-4 mt-4 flex justify-evenly font-extrabold">
          <p>Total Subjects: 20</p>
          <p>Overall Grade: A+</p>
        </Card>
        <Table className="mt-4">
          <TableHeader>
            <TableRow className="flex justify-evenly">
              <TableHead>Subject</TableHead>
              <TableHead>F.A 1</TableHead>
              <TableHead>F.A 2</TableHead>
              <TableHead>S.A 1</TableHead>
              {marksTableData[0].term == 2 ? (
                <>
                  <TableHead>F.A 3</TableHead>
                  <TableHead>F.A 4</TableHead>
                  <TableHead>S.A 2</TableHead>
                </>
              ) : null}
            </TableRow>
          </TableHeader>
          <TableBody>
            {marksTableData.map((data: MarksTableData, index) => (
              <TableRow className="flex justify-evenly" key={index}>
                <TableCell>{data.subject}</TableCell>
                <TableCell>{data.exams.fa1 || "--"}</TableCell>
                <TableCell>{data.exams.fa2 || "--"}</TableCell>
                <TableCell>{data.exams.sa1 || "--"}</TableCell>
                {data.term == 2 ? (
                  <>
                    <TableCell>{data.exams.fa3 || "--"}</TableCell>
                    <TableCell>{data.exams.fa4 || "--"}</TableCell>
                    <TableCell>{data.exams.sa2 || "--"}</TableCell>
                  </>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex mt-4 font-semibold justify-evenly">
          <Badge>Overall Remarks</Badge>
          <p>{" The student is very nice"}</p>
        </div>
      </TabsContent>
      <TabsContent value="activities">
        <Card className="p-4 mt-4 flex justify-evenly font-extrabold">
          <p>Total Activities: 20</p>
          <p>Activities Participated: 10</p>
        </Card>
        <div className="flex mt-4 font-semibold justify-evenly">
          <Badge>Overall Activities</Badge>
          <p>{" Actively pariticpating in the activities"}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ReportsTabs;
