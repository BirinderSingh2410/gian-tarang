import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { LiveAttendanceData, TableHeaders } from "@/types/Attendance/dto";
import { ChevronLeft, ChevronRight, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { TableComp } from "../TableComp";
import { getKeys } from "@/types/helper";
import { Badge } from "@/components/ui/badge";

interface AttendaceModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const attendanceData: LiveAttendanceData[] = [
  {
    name: "Birinder singh",
    rollno: 1,
    yesterdaty: "absent",
    status: "",
  },
  {
    name: "Abc",
    rollno: 2,
    yesterdaty: "present",
    status: "",
  },
  {
    name: "test1",
    rollno: 3,
    yesterdaty: "present",
    status: "",
  },
  {
    name: "test2",
    rollno: 4,
    yesterdaty: "leave",
    status: "",
  },
  {
    name: "test3",
    rollno: 5,
    yesterdaty: "absent",
    status: "",
  },
  {
    name: "test4",
    rollno: 6,
    yesterdaty: "present",
    status: "",
  },
  {
    name: "test5",
    rollno: 7,
    yesterdaty: "absent",
    status: "",
  },
  {
    name: "test6",
    rollno: 8,
    yesterdaty: "absent",
    status: "",
  },
  {
    name: "test7",
    rollno: 9,
    yesterdaty: "present",
    status: "",
  },
  {
    name: "test8",
    rollno: 10,
    yesterdaty: "absent",
    status: "",
  },
  {
    name: "test9",
    rollno: 11,
    yesterdaty: "leave",
    status: "",
  },
  {
    name: "test10",
    rollno: 12,
    yesterdaty: "absent",
    status: "",
  },
  {
    name: "test11",
    rollno: 13,
    yesterdaty: "present",
    status: "",
  },
];

const tableHeader: TableHeaders[] = [
  {
    data: "Name",
    width: "",
  },
  {
    data: "RollNo.",
    width: "",
  },
  {
    data: "Yesterday",
    width: "",
  },
  {
    data: "Status",
    width: "",
  },
  {
    data: "Edit",
    width: "",
  },
];
export function AttendanceModal({ open, setOpen }: AttendaceModal) {
  const [data, setData] = useState<LiveAttendanceData[]>([]);
  const [currentData, setCurrentData] = useState<LiveAttendanceData>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [submitModal, setSubmitModal] = useState<boolean>(false);

  useEffect(() => {
    setCurrentData(attendanceData[0]);
    setData(attendanceData);
  }, []);

  const updateAttendanceInfo = (status: string) => {
    data[currentIndex].status = status;
    if (currentIndex >= data.length - 1) {
      setSubmitModal(true);
    } else {
      setCurrentData(data[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousStudent = () => {
    setCurrentData(data[currentIndex - 1]);
    setCurrentIndex(currentIndex - 1);
  };

  const editAttendance = (index: number) => {
    console.log(index, data[index]);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => isOpen && setOpen(true)}>
      <DialogContent className="sm:max-w-50 h-fit">
        <DialogHeader>
          <DialogTitle>Attendance</DialogTitle>
          <DialogDescription>Attendance Under process.</DialogDescription>
        </DialogHeader>
        {!submitModal ? (
          <div className="flex-col justify-center">
                          <div className="flex justify-evenly">
              <Badge>Yesterday: {currentData?.yesterdaty}</Badge>
              <Badge>Status: {currentData?.status}</Badge>
                          </div>
                          <div className="text-center mb-20 mt-20 flex justify-evenly">
              <Button
                variant="outline"
                disabled={currentIndex > 0 ? false : true}
                size="icon"
                onClick={() => previousStudent()}
              >
                <ChevronLeft />
              </Button>
                            <div className="flex flex-col">
                <Label className="text-4xl">{currentData?.name}</Label>
                <Label>Roll No: {currentData?.rollno}</Label>
                            </div>
              <Button
                variant="outline"
                size="icon"
                disabled={currentIndex < data.length - 1 ? false : true}
                onClick={() => updateAttendanceInfo("absent")}
              >
                <ChevronRight />
              </Button>
                          </div>
                          <div className="flex justify-evenly">
                            <Button
                              variant="secondary"
                              className="hover:bg-green-700 text-lg"
                              onClick={() => updateAttendanceInfo("present")}
                            >
                              Present
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={() => updateAttendanceInfo("absent")}
                            >
                              Absent
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => updateAttendanceInfo("leave")}
                            >
                              On Leave
                            </Button>
                          </div>
          </div>
        ) : (
          <div className="h-[350px] overflow-y-scroll">
            <Badge>Total students: {attendanceData.length}</Badge>
            <TableComp
              caption="Click on Save to save the details"
              rows={data}
              headers={tableHeader}
              keys={getKeys(data[0])}
              buttonFn={editAttendance}
              ButtonIcon={Pencil}
            />
          </div>
        )}
        <DialogFooter className="flex justify-evenly">
          <Button
            variant="outline"
            onClick={() => {
              setData(attendanceData);
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => {
              setData(data);
              setOpen(false);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
