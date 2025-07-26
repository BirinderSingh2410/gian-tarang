import { ErrorResponse, SuccessResponse } from "@/lib/response";
import * as DashboardController from "../controller";

export async function GET() {
  try {
    const data = await DashboardController.getAttendance();
    return SuccessResponse({ data });
  } catch (error) {
    return ErrorResponse({ error: error as Error, status: 500 });
  }
}
