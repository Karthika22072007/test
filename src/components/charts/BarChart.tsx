import React from "react";
import ReactECharts from "echarts-for-react";
import { Card, CardContent } from "../ui/card";

const BarChart: React.FC<{xData: string[], yData: number[], yAxisName?: string, interval?: number}> = ({xData, yData, yAxisName = 'value', interval = 2}) => {
  const option = {
    dataZoom: [{ type: 'inside' }],
    xAxis: {
      type: "category",
      data: xData,
      axisLabel: {
        interval: interval
      }
    },
    yAxis: {
      type: "value",
      name: yAxisName,
    },
    series: [
      {
        data: yData,
        type: "bar",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl rounded-2xl">
      <CardContent>
        <ReactECharts
          option={option}
          style={{ height: "400px", width: "100%" }}
        />
      </CardContent>
    </Card>
  );
};

export default BarChart;
