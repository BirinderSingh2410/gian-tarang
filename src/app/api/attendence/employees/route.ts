import { ErrorResponse, SuccessResponse } from "@/lib/response";
import * as AttendanceController from "../controller";

export async function GET() {
  try {
    const data = await AttendanceController.getemployeesCount();
    return SuccessResponse({ data });
  } catch (error) {
    return ErrorResponse({ error: error as Error, status: 500 });
  }
}
