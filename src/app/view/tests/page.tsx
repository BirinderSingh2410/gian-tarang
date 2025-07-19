"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectComp } from "@/components/elements/SelectComp";
import { Button } from "@/components/ui/button";
import CardStats from "@/components/elements/CardStats";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input"
import TestModal from "@/components/elements/Tests/TestModal";

const subjects = ["evs", "maths", "sst"];
const classWiseMarksData = [
  {
    rollno: 1,
    name: "Birinder Singh",
    term1: {
      fa1: {
        avgPer: 78,
        subjects: [
          {
            name: "evs",
            score: 89,
          },
          {
            name: "maths",
            score: 80,
          },
          {
            name: "english",
            score: 100,
          },
          {
            name: "sst",
            score: 89,
          },
        ],
      },
      fa2: {
        avgPer: 78,
        subjects: [
          {
            name: "evs",
            score: 89,
          },
          {
            name: "maths",
            score: 80,
          },
          {
            name: "english",
            score: 100,
          },
          {
            name: "sst",
            score: 89,
          },
        ],
      },
      sa: {
        avgPer: 78,
        subjects: [
          {
            name: "evs",
            score: 89,
          },
          {
            name: "maths",
            score: 80,
          },
          {
            name: "english",
            score: 100,
          },
          {
            name: "sst",
            score: 89,
          },
        ],
      },
    },
    term2: {
      fa1: {
        avgPer: 78,
        subjects: [
          {
            name: "evs",
            score: 89,
          },
          {
            name: "maths",
            score: 80,
          },
          {
            name: "english",
            score: 100,
          },
          {
            name: "sst",
            score: 89,
          },
        ],
      },
      fa2: {
        avgPer: 78,
        subjects: [
          {
            name: "evs",
            score: 89,
          },
          {
            name: "maths",
            score: 80,
          },
          {
            name: "english",
            score: 100,
          },
          {
            name: "sst",
            score: 89,
          },
        ],
      },
      sa: {
        avgPer: 78,
        subjects: [
          {
            name: "evs",
            score: 89,
          },
          {
            name: "maths",
            score: 80,
          },
          {
            name: "english",
            score: 100,
          },
          {
            name: "sst",
            score: 89,
          },
        ],
      },
    },
  },
];

const MarksTest = () => {
  // const [data, setData] = useState<string[]>([]);
  const [selectedClassOption, setSelectedClassOption] = useState('');
  const [selectedTermOption, setSelectedTermOption] = useState('');
  const [selectedTestOption, setSelectedTestOption] = useState('');
  const [marksModal, setMarksModal] = useState(false);
  return (
    <div>
      <Card className="w-100 mb-4">
        <CardHeader className="mb-4">
          <CardTitle className="mb-4">Overall Grade</CardTitle>
          <div className="flex justify-between">
            <SelectComp
              selectTitle="classes"
              values={['1st','2nd C','4th']}
              selectedOption={selectedClassOption}
              setSelectedOption={()=>setSelectedClassOption}
            />
            <SelectComp
              selectTitle="term"
              values={['Term 1', 'Term 2']}
              selectedOption={selectedTermOption}
              setSelectedOption={setSelectedTermOption}
            />
            <SelectComp
              selectTitle="type of tests"
              values={['FA-1', 'FA-2','SA-1','FA-3','FA-4', 'SA-2']}
              selectedOption={selectedTestOption}
              setSelectedOption={setSelectedTestOption}
            />
            <Button onClick={() => setMarksModal(true)}>Test Entry</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Card className="flex justify-evenly text-2xl text-center flex-wrap p-6">
            <CardStats title="Total Pass" value={20} color="text-green-700" />
            <CardStats title="Total Failed" value={10} color="text-red-500" />
            <CardStats title="Overall Remarks" value={"Good"} />
          </Card>
        </CardContent>
      </Card>
      <Input className="mt-4 w-[50%]" type="text" placeholder="Name" />
      <div className="mt-10">
        <Table className="sm:w-[90%] w-full sm:ml-2 text-xl text-left font-medium">
          <TableHeader>
            <TableRow>
              <TableCell>Roll No.</TableCell>
              <TableCell>Name</TableCell>
              {subjects.map((subject, index) => (
                <TableCell key={index}>{subject.toUpperCase()}</TableCell>
              ))}
              <TableCell>Total Percentage</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classWiseMarksData.map((info, index: number) => (
              <TableRow
                className={index % 2 == 0 ? "bg-gray-100" : ""}
                key={index}
              >
                <TableCell>{info.rollno}</TableCell>
                <TableCell>{info.name}</TableCell>
                {info.term1.fa1.subjects.map((subjects, subIndex) => (
                  <TableCell key={subIndex}>{subjects.score}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <TestModal open={marksModal} setOpen={setMarksModal}/>
    </div>
  );
};

export default MarksTest;
