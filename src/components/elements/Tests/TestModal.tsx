"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MarksManualFormSchema } from "./formSchema";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { SelectDataInfo } from "@/types/dataTypes";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface AttendaceModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StudentInfo {
  name: string;
  rollNo: number;
  marks: number;
}

const termData: SelectDataInfo[] = [
  {
    name: "Term-1",
    value: "term1",
  },
  {
    name: "Term-2",
    value: "term2",
  },
];

const classData: SelectDataInfo[] = [
  {
    name: "1A",
    value: "1a",
  },
  {
    name: "2B",
    value: "2b",
  },
  {
    name: "3C",
    value: "3c",
  },
];

const subjectData: SelectDataInfo[] = [
  {
    name: "evs",
    value: "evs",
  },
  {
    name: "math",
    value: "math",
  },
  {
    name: "sst",
    value: "sst",
  },
];

const testTypeData: SelectDataInfo[] = [
  {
    name: "FA-1",
    value: "fa1",
  },
  {
    name: "FA-2",
    value: "fa2",
  },
  {
    name: "FA-3",
    value: "fa3",
  },
  {
    name: "FA-4",
    value: "fa4",
  },
  {
    name: "SA-1",
    value: "sa1",
  },
  {
    name: "SA-2",
    value: "sa2",
  },
  {
    name: "Class Test",
    value: "classTest",
  },
];

const studentsData: StudentInfo[] = [
  {
    name: "Birinder",
    rollNo: 1,
    marks: 0,
  },
  {
    name: "Anmol",
    rollNo: 2,
    marks: 0,
  },
  {
    name: "Asis",
    rollNo: 3,
    marks: 0,
  },
  {
    name: "Imran",
    rollNo: 4,
    marks: 0,
  },
  {
    name: "Sunny",
    rollNo: 5,
    marks: 0,
  },
  {
    name: "bunny",
    rollNo: 6,
    marks: 0,
  },
  {
    name: "Kirat",
    rollNo: 7,
    marks: 0,
  },
];

const markingTypeData: SelectDataInfo[] = [
  { name: "Manual", value: "Manual" },
  { name: "Upload", value: "Upload" },
];

const TestModal = ({ open, setOpen }: AttendaceModal) => {
  const [marksUploadSection, setMarksUploadSection] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentInfo>();
  const [studentIndex, setStudentIndex] = useState(0);

  useEffect(() => {
    if (studentsData && studentsData.length > 0) {
      setSelectedStudent(studentsData[0]);
    }
  }, []);

  const marksForm = useForm<z.infer<typeof MarksManualFormSchema>>({
    resolver: zodResolver(MarksManualFormSchema),
    defaultValues: {
      term: "",
      subject: "",
      class: "",
      testType: "",
      markingType: "",
    },
  });

  function onSubmit(values: z.infer<typeof MarksManualFormSchema>) {
    console.log(values);
    setMarksUploadSection(true);
  }

  const carousalMovement = (type: string) => {
    if (type == "previous") {
      setSelectedStudent(studentsData[studentIndex - 1]);
      setStudentIndex(studentIndex - 1);
    } else {
      setSelectedStudent(studentsData[studentIndex + 1]);
      setStudentIndex(studentIndex + 1);
    }
  };

  const carousalSubmit = () => {
    console.log(studentsData);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="w-[80%]">
        <DialogHeader>
          <DialogTitle>Enter the Marks for the subjects</DialogTitle>
          <DialogDescription>
            Enter student marks either by uploading a spreadsheet or by manually
            inputting data through the form
          </DialogDescription>
        </DialogHeader>
        {!marksUploadSection ? (
          <Form {...marksForm}>
            <form onSubmit={marksForm.handleSubmit(onSubmit)}>
              <div className="grid gap-5 py-4">
                <div className="grid items-center gap-5">
                  <FormField
                    control={marksForm.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Class</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {classData.map((classes, index) => (
                              <SelectItem key={index} value={classes.value}>
                                {classes.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>{" "}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {marksForm.getValues("class").length > 0 && (
                    <FormField
                      control={marksForm.control}
                      name="term"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Term</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a term" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {termData.map((term, index) => (
                                <SelectItem key={index} value={term.value}>
                                  {term.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {/* <FormDescription>
                        Select the class for which you want to upload
                      </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {marksForm.getValues("term").length > 0 && (
                    <FormField
                      control={marksForm.control}
                      name="testType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Test Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a test type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {testTypeData.map((type, index) => (
                                <SelectItem key={index} value={type.value}>
                                  {type.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {marksForm.getValues("testType").length > 0 && (
                    <FormField
                      control={marksForm.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subjectData.map((subject, index) => (
                                <SelectItem key={index} value={subject.value}>
                                  {subject.name.toUpperCase()}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {marksForm.getValues("subject").length > 0 && (
                    <FormField
                      control={marksForm.control}
                      name="markingType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marks Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {markingTypeData.map((type, index) => (
                                <SelectItem key={index} value={type.value}>
                                  {type.name.toUpperCase()}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Next</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : (
          <div>
            {selectedStudent && (
              <Card className="mb-4">
                <CardContent className="flex flex-col justify-center">
                  <div className="flex mt-6 justify-evenly">
                    <Badge>Name: {selectedStudent.name}</Badge>
                    <Badge>RollNo. : {selectedStudent.rollNo}</Badge>
                  </div>
                  <Input
                    className="mt-6 w-[50%] flex self-center"
                    type="text"
                    name="Marks"
                    placeholder={String(studentsData[studentIndex].marks)}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (!isNaN(Number(value)) && Number(value) > 0) {
                        studentsData[studentIndex].marks = Number(value);
                      }
                    }}
                  ></Input>
                  <div className="mt-4 flex justify-evenly">
                    <Button
                      type="button"
                      disabled={studentIndex == 0}
                      onClick={() => carousalMovement("previous")}
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      disabled={studentIndex == studentsData.length - 1}
                      onClick={() => carousalMovement("next")}
                    >
                      Next
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            <DialogFooter>
              <Button type="submit" onClick={() => carousalSubmit()}>
                Save changes
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TestModal;
