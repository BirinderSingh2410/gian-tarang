import { ErrorResponse, SuccessResponse } from "@/lib/response";
import * as AttendanceController from "../controller";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const branch = req.nextUrl.searchParams.get('branchName')
    if(!branch){
      return ErrorResponse({error: 'Branch name is required', status: 400});
    }
    const data = await AttendanceController.getClassData(branch);
    return SuccessResponse({ data });
  } catch (error) {
    return ErrorResponse({ error: error as Error, status: 500 });
  }
}
