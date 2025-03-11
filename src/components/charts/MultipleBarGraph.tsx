"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AttendanceChartData, LablesData } from "@/types/charts";

const chartData: AttendanceChartData[] = [
  { day: "Monday", present: 186, absent: 80 },
  { day: "Tuesday", present: 305, absent: 200 },
  { day: "Wednesday", present: 237, absent: 120 },
  { day: "Thursday", present: 73, absent: 190 },
  { day: "Friday", present: 209, absent: 130 },
  { day: "Saturday", present: 214, absent: 140 },
];

const chartConfig: { [key: string]: LablesData } = {
  absent: {
    label: "absent",
    color: "hsl(var(--chart-1))",
  },
  present: {
    label: "present",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MultipleChartData() {
  return (
    <Card className="h-[500px]">
      <CardHeader>
        <CardTitle>Attendance</CardTitle>
        <div className="flex justify-between">
          <CardDescription>Current week</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="present" fill="var(--color-present)" radius={4} />
            <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
