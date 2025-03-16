"use client";

import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-separator";
import { SelectComp } from "@/components/elements/SelectComp";

const Organization = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [data, setData] = useState<string[]>(["Class 1", "Class 3", "Class 6", "+2"])

  return (
    <Tabs defaultValue="employess">
      <TabsList className="w-[100%] h-fit p-5 flex justify-evenly flex-wrap">
        <TabsTrigger
          className="pl-20 pr-20 pt-4 pb-4 text-3xl"
          value="employess"
        >
          Employess
        </TabsTrigger>
        <TabsTrigger
          className="pl-20 pr-20 pt-4 pb-4 text-3xl"
          value="students"
        >
          Students
        </TabsTrigger>
      </TabsList>
      <TabsContent value="employess">
        <Card className="flex mt-4 justify-evenly text-3xl p-6 font-semibold text-center flex-wrap">
          <div className="mt-2">
            <p className="mb-4">Department</p>
            <div>
            <SelectComp
              selectTitle="classes"
              values={data}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="mt-2">
            <p>Total Employees</p>
            <p>200</p>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="students"></TabsContent>
    </Tabs>
  );
};

export default Organization;
