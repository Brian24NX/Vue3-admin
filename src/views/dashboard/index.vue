<template>
  <t-row :gutter="[16, 16]">
    <t-col v-for="(infoCard, index) in infoCards" :key="index" :span="3">
      <info-card :info="infoCard"></info-card>
    </t-col>
    <t-col :span="7">
      <t-card :bordered="false">
        <div style="height: 500px">
          <e-charts :option="options"></e-charts>
        </div>
      </t-card>
    </t-col>

    <t-col :span="5">
      <t-card :bordered="false">
        <div style="height: 500px">
          <e-charts :option="options2"></e-charts>
        </div>
      </t-card>
    </t-col>
  </t-row>
</template>
  
<script lang="ts" setup>
import InfoCard from "@/components/InfoCard.vue";

const infoCards = [
  {
    icon: "user",
    title: "New users",
    color: "#40c9c6",
    number: 195,
    unit: "",
  },
  {
    icon: "chat",
    title: "Today news",
    color: "#36a3f7",
    number: 99,
    unit: "",
  },
  {
    icon: "money-circle",
    title: "Turnover",
    color: "#f4516c",
    number: 365454,
    unit: "",
  },
  {
    icon: "cart",
    title: "Orders",
    color: "#34bfa3",
    number: 195,
    unit: "",
  },
];
const options = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["w", "d", "b"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "w",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "d",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "b",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410],
    },
  ],
};

const options2 = {
  legend: {
    data: ["Ideal Distribution", "Practical Distribution"],
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "Technology Capacity ", max: 10 },
      { name: "Communication Capacity", max: 10 },
      { name: "Management Capacity", max: 10 },
      { name: "Product Mindset", max: 10 },
      { name: "Practical Experience", max: 10 },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [10, 10, 10, 10, 10, 10],
          name: "Ideal Distribution",
        },
        {
          value: [5, 5, 3, 1, 5, 1],
          name: "Practical Distribution",
        },
      ],
    },
  ],
};
</script>
  
<style scoped>

</style>