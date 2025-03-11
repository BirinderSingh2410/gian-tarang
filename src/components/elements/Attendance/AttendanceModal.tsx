import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AttendaceModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function AttendanceModal({ open, setOpen }: AttendaceModal) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => isOpen && setOpen(true)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Attendance</DialogTitle>
          <DialogDescription>Attendance Under process.</DialogDescription>
        </DialogHeader>
        <div className="flex-col justify-center">
          <div className="flex justify-evenly">
            <Card className="p-2 text-sm bg-gray-400">Yesterday: Present</Card>
            <Card className="p-2 text-sm bg-gray-400">Status: Absent</Card>
          </div>
          <div className="text-center mb-20 mt-20 flex justify-evenly">
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
            <div className="flex flex-col">
              <Label className="text-4xl">
                Birinder Singh
              </Label>
              <Label>Roll No: 10</Label>
            </div>
            <Button variant="outline" size="icon">
              <ChevronRight />
            </Button>
          </div>
          <div className="flex justify-evenly">
            <Button variant="secondary" className="hover:bg-green-700 text-lg">
              Present
            </Button>
            <Button variant="destructive">Absent</Button>
            <Button variant="outline">On Leave</Button>
          </div>
        </div>
        <DialogFooter className="flex justify-evenly">
          <Button variant="outline" onClick={()=>setOpen(false)}>Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
