"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  School,
  Library,
  PersonStanding,
  Contact,
  Phone,
  Cake,
  MapPin,
  Building,
  BookCopy,
  Dice2,
  PhoneCallIcon,
  UsersRound,
} from "lucide-react";
import { IndividualDetailsInfo } from "@/types/Organisation/dto";
import { Button } from "@/components/ui/button";
import ReportCard from "./ReportCard";

const typeList = ["students", "employees"];

const UserInfo = ({ report }: { report: string[] }) => {
  const studentTableInfo: IndividualDetailsInfo[] = [
    {
      logo: School,
      category: "Class",
      data: "1st",
    },
    {
      logo: Library,
      category: "Section",
      data: "C",
    },
    {
      logo: PersonStanding,
      category: "Class Teacher",
      data: "Teacher Name",
    },
    {
      logo: Contact,
      category: "Father/Gaurdian Name",
      data: "Raju",
    },
    {
      logo: Phone,
      category: "Guardian's Number",
      data: "123455677",
    },
    {
      logo: Cake,
      category: "Birthday",
      data: "10th Nov",
    },
    {
      logo: MapPin,
      category: "Address",
      data: "Kharar",
    },
  ];

  const employeeTableInfo: IndividualDetailsInfo[] = [
    {
      logo: Building,
      category: "Department",
      data: "teacher",
    },
    {
      logo: Dice2,
      category: "Incharge",
      data: "Class 2nd C",
    },
    {
      logo: BookCopy,
      category: "Speciality",
      data: "All Subjects",
    },
    {
      logo: PhoneCallIcon,
      category: "Contact Number",
      data: "123455677",
    },
    {
      logo: UsersRound,
      category: "Status",
      data: "Married",
    },
    {
      logo: Contact,
      category: "Emergency Contact",
      data: "Raju",
    },
    {
      logo: Phone,
      category: "Emergency's Contact Number",
      data: "123455677",
    },
    {
      logo: Cake,
      category: "Birthday",
      data: "10th Nov",
    },
    {
      logo: MapPin,
      category: "Address",
      data: "Kharar",
    },
  ];

  const [userDetailsInfo, setUserDetailsInfo] = useState<
    IndividualDetailsInfo[]
  >([]);
  const [type, setType] = useState("");
  const [reportCard, setReportCard] = useState(false);
  useEffect(() => {
    if (report && report.length == 2) {
      const reportType = report[0];
      const reportId = report[1];
      // reportId to fetch data
      if (!typeList.includes(reportType) || isNaN(Number(reportId))) {
        notFound();
      }
      if (reportType == "students") {
        setUserDetailsInfo(studentTableInfo);
      } else {
        setUserDetailsInfo(employeeTableInfo);
      }
      setType(reportType);
    } else {
      notFound();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [report]);
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly">
        <Avatar className="w-60 h-60">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-4xl text-center">
          <p className="mb-4 font-bold">Name</p>
          <Separator className="mb-4" />
          <div className="flex flex-row h-5 items-center space-x-4">
            <p>Age</p>
            <Separator orientation="vertical" />
            <p>M</p>
          </div>
          {type == "students" ? (
            <Button className="mt-10" onClick={()=>setReportCard(true)}>View Report Card</Button>
          ) : null}
        </div>
      </div>
      <div className="mt-10">
        <Table className="sm:w-[90%] w-full sm:ml-2 text-xl text-left font-medium">
          <TableBody>
            {userDetailsInfo.map(
              (info: IndividualDetailsInfo, index: number) => (
                <TableRow
                  className={index % 2 == 0 ? "bg-gray-100" : ""}
                  key={index}
                >
                  <TableCell>
                    <info.logo className="w-[30px] h-[30px] ml-4" />
                  </TableCell>
                  <TableCell>{info.category}</TableCell>
                  <TableCell>{info.data}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      <ReportCard open={reportCard} setOpen={setReportCard}/>
    </div>
  );
};

export default UserInfo;
