"use client";

import { z } from "zod";

const validTerms = ["term1", "term2"];
const validTestType = [
  "fa1",
  "fa2",
  "fa3",
  "fa4",
  "sa1",
  "sa2",
  "classTest",
];
const validClassType = ["1a", "2b","3c"];

export const MarksManualFormSchema = z.object({
  term: z.string().refine((val) => validTerms.includes(val), {
    message: "Please select a valid term value",
  }),
  testType: z.string().refine((val) => validTestType.includes(val), {
    message: "Please select a valid test type",
  }),
  class: z.string().refine((val) => validClassType.includes(val), {
    message: "Please select a valid class",
  }),
  subject: z
    .string()
    .min(1, {
      message: "Please enter a valid subject",
    })
    .max(10, {
      message: "Subject value exceeds the limit",
    }),
  markingType: z.string().refine(val => ['Manual','Upload'].includes(val),{
    message: 'Select a valid value'
  })
});

