import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ReportsTabs from "./ReportsTabs";

interface ModalInterface {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportCard = ({ open, setOpen }: ModalInterface) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => isOpen && setOpen(true)}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Report Card</DialogTitle>
          <DialogDescription>
            {`This report card presents a comprehensive overview of the ${"student's"}
            academic performance and conduct for the given term, including
            subject-wise grades, attendance, and teacher comments.`}
          </DialogDescription>
        </DialogHeader>
        <ReportsTabs/>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportCard;
