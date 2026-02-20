import React from "react";
import ReactECharts from "echarts-for-react";
import { Card, CardContent } from "../ui/card";

const LineChart: React.FC = () => {
  const option = {
    tooltip: {
      trigger: "axis",
    },
    dataZoom: [{ type: 'inside' }],
    xAxis: {
      type: "category",
      data: [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
        "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
      ],
      axisLabel: {
        interval: 2
      }
    },
    yAxis: {
      type: "value",
      name: "Total Duplicate",
    },
    series: [
      {
        data: [5, 8, 12, 15, 10, 7, 9, 14, 18, 22, 20, 16, 13, 11, 8, 6, 4, 3, 2, 1, 0, 1, 3, 5],
        type: "line",
        smooth: true,
        lineStyle: {
          width: 3,
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
    ],
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

export default LineChart;
