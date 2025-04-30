"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrgChart from "@/components/charts/OrgChart";
import FilterSection from "@/components/elements/Organisation/FilterSection";
import { Input } from "@/components/ui/input";
import { DetailsInfo } from "@/types/Organisation/dto";
import dynamic from "next/dynamic";

const IndividualsDetail = dynamic(
  () => import("@/components/elements/Organisation/IndividualsDetail"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Organization = () => {
  const departmentData = ["Accounts", "Teachers", "Assistance", "HOD's"];
  const studentsData = ["Class 1", "class 2", "+1", "+2"];
  const studentsDetailsData: DetailsInfo[] = [
    {
      name: "raju",
      department: "class 1",
      imageLink: "assets/Logo.png",
      id: 1,
    },
    {
      name: "raju2",
      department: "class 2",
      imageLink: "assets/Logo.png",
      id: 2,
    },
    {
      name: "raju3",
      department: "class 3",
      imageLink: "assets/Logo.png",
      id: 3,
    },
    {
      name: "raju4",
      department: "class 4",
      imageLink: "assets/Logo.png",
      id: 4,
    },
    {
      name: "raju5",
      department: "class 5",
      imageLink: "assets/Logo.png",
      id: 5,
    },
    {
      name: "raju6",
      department: "class 6",
      imageLink: "assets/Logo.png",
      id: 6,
    },
    {
      name: "raju7",
      department: "class 7",
      imageLink: "assets/Logo.png",
      id: 7,
    },
    {
      name: "raju8",
      department: "class 8",
      imageLink: "assets/Logo.png",
      id: 8,
    },
    {
      name: "raju9",
      department: "class 9",
      imageLink: "assets/Logo.png",
      id: 9,
    },
  ];
  return (
    <Tabs defaultValue="employess">
      <TabsList className="w-[100%] h-fit p-5 flex justify-evenly flex-wrap">
        <TabsTrigger
          className="pl-20 pr-20 pt-4 pb-4 text-3xl rounded-lg"
          value="employess"
        >
          Employess
        </TabsTrigger>
        <TabsTrigger
          className="pl-20 pr-20 pt-4 pb-4 text-3xl rounded-lg"
          value="students"
        >
          Students
        </TabsTrigger>
      </TabsList>
      <TabsContent value="employess">
        <FilterSection
          filterHeading="Depatment"
          departmentData={departmentData}
          section="Employee"
          totalSection={200}
        />
        <Input
          type="text"
          placeholder="Enter the name to search..."
          className="mt-4 w-full lg:w-1/2"
        />
        <OrgChart />
        <IndividualsDetail detailsData={studentsDetailsData} type="employess" />
      </TabsContent>
      <TabsContent value="students">
        <FilterSection
          filterHeading="Classes"
          departmentData={studentsData}
          section="Students"
          totalSection={1000}
        />
        <Input
          type="text"
          placeholder="Enter the name to search..."
          className="mt-4 w-full lg:w-1/2"
        />
        <IndividualsDetail detailsData={studentsDetailsData} type="students" />
      </TabsContent>
    </Tabs>
  );
};

export default Organization;
