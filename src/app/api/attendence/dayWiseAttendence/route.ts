import { ErrorResponse, SuccessResponse } from "@/lib/response";
import * as AttendanceController from "../controller";
import { NextRequest } from "next/server";
import { AttendanceInfoValidation } from "../validation";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = Object.fromEntries(searchParams.entries());
    const validationCheck = AttendanceInfoValidation.safeParse(query);
    if(!validationCheck.success){
      return ErrorResponse({error: validationCheck.error, status: 400})
    }
    const data = await AttendanceController.getAttendenceDaily(validationCheck.data.className, validationCheck.data.section);
    return SuccessResponse({ data });
  } catch (error) {
    return ErrorResponse({ error: error as Error, status: 500 });
  }
}
