import { z } from "zod";

export const AttendanceInfoValidation = z.object({
  className: z.string({ message: "Select a valid class name" }),
  section: z.string({ message: "Select a valid section" }),
});

export const DailyAttendenceValidation = z.object({
  className: z.string({ message: "Select a valid class name" }),
  section: z.string({ message: "Select a valid section" }),
  studentInfo: z.array(
    z.object({
      rollno: z.number({message: 'Valid roll number is required.'}),
      status: z.enum(["p", "a", "l"], { message: "Set the correct status" }),
      yesterday: z.string(),
      name: z.string()
    })
  ),
});