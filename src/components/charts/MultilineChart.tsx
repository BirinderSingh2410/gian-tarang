"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartData, ChartPropsInterface, LablesData } from "@/types/charts";
const chartData: Array<ChartData> = [
  { month: "January", branch1: 186, branch2: 80, branch3: 100 },
  { month: "February", branch1: 305, branch2: 200, branch3: 120 },
  { month: "March", branch1: 237, branch2: 120, branch3: 80 },
  { month: "April", branch1: 73, branch2: 190, branch3: 70 },
  { month: "May", branch1: 209, branch2: 130, branch3: 190 },
  { month: "June", branch1: 214, branch2: 140, branch3: 100 },
];

const chartConfig: { [key: string]: LablesData } = {
  branch1: {
    label: "Branch-1",
    color: "hsl(var(--chart-1))",
  },
  branch2: {
    label: "Branch-2",
    color: "hsl(var(--chart-2))",
  },
  branch3: {
    label: "Branch-3",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function MultiLineChart({
  className = "",
  title = "",
  description = "",
}: ChartPropsInterface) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-branch1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-branch1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-branch2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-branch2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillOther" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-branch3)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-branch3)"
                  stopOpacity={0.7}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="branch1"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-branch2)"
              stackId="a"
            />
            <Area
              dataKey="branch2"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-branch1)"
              stackId="a"
            />
            <Area
              dataKey="branch3"
              type="natural"
              fill="url(#fillOther)"
              fillOpacity={0.4}
              stroke="var(--color-branch3)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
