"use client";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "موبایل",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "ژانویه", desktop: 186, mobile: 80 },
  { month: "فوریه", desktop: 305, mobile: 200 },
  { month: "مارس", desktop: 237, mobile: 120 },
  { month: "آوریل", desktop: 73, mobile: 190 },
  { month: "مه", desktop: 209, mobile: 130 },
  { month: "ژوئن", desktop: 214, mobile: 140 },
];

const AppBarChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">درآمد کل</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
