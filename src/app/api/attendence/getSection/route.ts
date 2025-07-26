import { ErrorResponse, SuccessResponse } from "@/lib/response";
import * as AttendanceController from "../controller";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const className = req.nextUrl.searchParams.get('className')
    if(!className){
      return ErrorResponse({error: 'Class name is required', status: 400});
    }
    const data = await AttendanceController.getSectionData(className);
    return SuccessResponse({ data });
  } catch (error) {
    return ErrorResponse({ error: error as Error, status: 500 });
  }
}
