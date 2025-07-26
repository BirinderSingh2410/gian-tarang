import { ErrorResponse, SuccessResponse } from "@/lib/response";
import * as AttendanceController from "../controller";
import { DailyAttendenceValidation } from "../validation";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const validationResult = DailyAttendenceValidation.safeParse(reqBody)
    if(!validationResult.success){
      return ErrorResponse({error: validationResult.error, status: 400})
    }
    const data = await AttendanceController.saveDailyAttendence(validationResult.data);
    return SuccessResponse({ message: data });
  } catch (error) {
    return ErrorResponse({ error: error as Error, status: 500 });
  }
}
